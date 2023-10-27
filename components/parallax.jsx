
export default class ParallaxEffect
{
    constructor()
    {
        this.root = null;

        this.prevTimestamp = 0.0;
        this.antiHisteresys = 4000.0;
        this.perfCounter = 0.0;
        this.frameMs = 0.0;
        this.lowPerfMode = false;
        this.transitionMs = 1000.0;
        this.transitionPeriod = 0.0;

        this.dependencies = {
            rootHeight: 1,
            vpHeight: 0,
            elemHeight: 0,
            coeff: 0
        }
        this.viewProgressTimeline = null;
        this.animation = null;
    }

    determinePerfMode(timestamp)
    {
        let prevPerfCounter = this.perfCounter;
        if(this.prevTimestamp == 0) {
            this.prevTimestamp = timestamp;
        }
        this.frameMs = timestamp - this.prevTimestamp;
        if (window.document.hasFocus()) {
            this.perfCounter += this.frameMs > 33.33 ? -this.frameMs : this.frameMs * 0.1;
        }
        if(Math.abs(this.perfCounter) >= this.antiHisteresys)
        {
            this.lowPerfMode = this.perfCounter < 0;
        }
        this.prevTimestamp = timestamp;
    }

    getParallaxCoeff(refElement)
    {
        let coeffStr = getComputedStyle(refElement).getPropertyValue('--parallax-coeff');
        coeffStr = refElement.getAttribute("parallaxcoeff") ?? coeffStr;
        return parseFloat(coeffStr);
    }

    registerWithAnimFrame(refElement)
    {
        this.root = document.getElementById("root");

        let animBody = (timestamp => {
            if(refElement) {
                this.determinePerfMode(timestamp);
                if(this.lowPerfMode) {
                    refElement.style.transition = `transform ${this.transitionMs}ms ease-in-out`;
                    refElement.style.transform = "translateY(0px)";
                    this.transitionPeriod = this.transitionMs;
                }
                else {
                    if(this.transitionPeriod < 0)
                    {
                        refElement.style.transition = "none";
                    }
                    this.transitionPeriod -= this.frameMs;
                    let coeff = this.getParallaxCoeff(refElement);
                    let top = this.absTop(refElement, 0);
                    let value = (this.root.scrollTop - top + (this.root.clientHeight - refElement.offsetHeight) * 0.5) * coeff;

                    refElement.style.transform = `translateY(${value}px)`;
                }
                window.requestAnimationFrame(animBody);
            }
        }).bind(this);
        window.requestAnimationFrame(animBody);
    }

    updateTimeline(refElement)
    {
        if (this.animation) {
            this.animation.cancel();
            this.animation = null;
            this.viewProgressTimeline = null;
        }

        let coeff = this.dependencies.coeff || 0;
        let elHeight = this.dependencies.elemHeight;
        let beginOffs = this.dependencies.vpHeight * 0.5 + elHeight * 0.5;
        let endOffs = - this.dependencies.vpHeight * 0.5 - elHeight * 0.5;
        this.viewProgressTimeline = new ViewTimeline({
            subject: refElement
        });
        this.animation = refElement.animate({
            transform: [`translateY(${-beginOffs * coeff}px)`, `translateY(${-endOffs * coeff}px)`]
        }, {
            timeline: this.viewProgressTimeline,
            rangeStart: 'cover 0%',
            rangeEnd: 'cover 100%',
        });
    }

    getNewDependencies(refElement)
    {
        return {
            rootHeight: this.root.scrollHeight,
            vpHeight: window.innerHeight,
            elemHeight: refElement.offsetHeight,
            coeff: this.getParallaxCoeff(refElement)
        }
    }

    checkDependencies(prev, current)
    {
        return prev.rootHeight != current.rootHeight
            || prev.vpHeight != current.vpHeight
            || prev.elemHeight != current.elemHeight
            || prev.coeff != current.coeff;
    }

    registerWithScrollAnimTimeline(refElement)
    {
        this.root = document.getElementById("root");

        this.dependencies = this.getNewDependencies(refElement);
        this.updateTimeline(refElement);
        
        let animBody = (timestamp => {
            let current = this.getNewDependencies(refElement);
            if (this.checkDependencies(this.dependencies, current)) {
                this.dependencies = current;
                this.updateTimeline(refElement);
            }
            window.requestAnimationFrame(animBody);
        }).bind(this);
        window.requestAnimationFrame(animBody);
    }

    register(refElement)
    {
        this.registerWithScrollAnimTimeline(refElement);
    }
}