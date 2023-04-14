
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

        this.uuid = crypto.randomUUID();
        this.animStyle = null;
        this.dependencies = {
            absTopOffset: 0,
            absHeight: 1,
            vpHeight: 0,
            elemHeight: 0
        }
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

    absTop(el, t)
    {
        return  el == this.root || !el
            ? t
            : this.absTop(el.offsetParent, t + el.offsetTop);
    }

    getParallaxCoeff(refElement)
    {
        let coeffStr = getComputedStyle(refElement).getPropertyValue('--parallax-coeff');
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

    updateKeyframes(refElement)
    {
        let coeff = this.getParallaxCoeff(refElement);
        let centerOffset = (this.dependencies.vpHeight - this.dependencies.elemHeight) * 0.5;
        let pivotPoint = this.dependencies.absTopOffset - centerOffset;
        let animMaxPx = this.dependencies.absHeight - this.dependencies.vpHeight;
        let zeroKey = (pivotPoint / animMaxPx) * 100;
        let animMaxValue = (animMaxPx - pivotPoint) * coeff;
        
        let keyframes = `0% { transform: translateY(-${pivotPoint * coeff}px); } ` +
            `${zeroKey}% { transform: translateY(0px); } ` +
            `100% { transform: translateY(${animMaxValue}px); }`;

        this.animStyle.innerText = "";
        this.animStyle.innerText= `@keyframes _${this.uuid} { ${keyframes} }`;
    }

    getNewDependencies(refElement)
    {
        return {
            absTopOffset: this.absTop(refElement, 0),
            absHeight: this.root.scrollHeight,
            vpHeight: window.innerHeight,
            elemHeight: refElement.offsetHeight
        }
    }

    registerWithScrollAnimTimeline(refElement)
    {
        this.root = document.getElementById("root");
        this.animStyle = document.createElement('style')
        this.animStyle.id = this.uuid;
        document.head.appendChild(this.animStyle);

        refElement.style.animationName = `_${this.uuid}`;
        refElement.style.animationDuration = "1s";
        refElement.style.animationDirection = "forwards";
        refElement.style.animationTimingFunction = "linear";
        refElement.style.animationTimeline = "scroll(nearest)";

        this.dependencies = this.getNewDependencies(refElement);
        this.updateKeyframes(refElement)
        
        let animBody = (timestamp => {
            let current = this.getNewDependencies(refElement);
            if (
                this.dependencies.absTopOffset != current.absTopOffset
                || this.dependencies.absHeight != current.absHeight
                || this.dependencies.vpHeight != current.vpHeight
                || this.dependencies.elemHeight != current.elemHeight
            ) {
                this.dependencies = current;
                this.updateKeyframes(refElement);
            }
            window.requestAnimationFrame(animBody);
        }).bind(this);
        window.requestAnimationFrame(animBody);
    }

    register(refElement)
    {
        this.registerWithAnimFrame(refElement);
    }

    unregister()
    {
        if (this.animStyle !== null)
        {
            document.head.removeChild(this.animStyle);
        }
    }
}