import React from 'react';
import irmaGraphData from "./Data"
import ForceGraph3D from '3d-force-graph';
import * as THREE from 'three'
import SpriteText from 'three-spritetext';

export default class IrmaGraph extends React.Component {
    constructor(props) {
        super(props)
        this.mainDiv = React.createRef();
        this.graph = null;
        this.imgSprites = {};
        this.renderedNodes = [];
        this.nodeMap = {};
        this.willDismount = false;
    }
    
    updateHighlight() {
        // trigger update of highlighted objects in scene
        this.graph
            .nodeColor(this.graph.nodeColor())
            .linkWidth(this.graph.linkWidth())
            .linkDirectionalParticles(this.graph.linkDirectionalParticles());
    }

    componentDidMount() {
        if (this.mainDiv.current === null) return;
        
        irmaGraphData.nodes.forEach(node => {
            this.nodeMap[node.id] = node;
        });
        // cross-link node objects
        irmaGraphData.links.forEach((link => {
            if (!(link.source in this.nodeMap) || !(link.target in this.nodeMap))
                return;
                
            const a = this.nodeMap[link.source];
            const b = this.nodeMap[link.target];
            !a.neighbors && (a.neighbors = []);
            !b.neighbors && (b.neighbors = []);
            a.neighbors.push(b);
            b.neighbors.push(a);
    
            !a.links && (a.links = []);
            !b.links && (b.links = []);
            a.links.push(link);
            b.links.push(link);
        }).bind(this));
        
        const highlightNodes = new Set();
        const highlightLinks = new Set();
        let hoverNode = null;

        this.graph = ForceGraph3D()(this.mainDiv.current)
            .graphData(irmaGraphData)
            .enableNodeDrag(false)
            .backgroundColor("rgba(0,0,0,0)")
            .linkWidth(link => {
                if (highlightLinks.has(link))
                    return link.group === "white" ? 3 : 2;
                else return link.group === "white" ? 2 : 1;
            })
            .linkOpacity(0.4)
            .linkColor(link => link.group)
            .linkCurvature(0.4)
            .linkDirectionalParticles(link => highlightLinks.has(link) ? 8 : 0)
            .linkDirectionalParticleWidth(2)
            .linkDirectionalParticleSpeed(0.2)
            .nodeThreeObject(node => {
                const group = new THREE.Group();
                let addSphere = true;
                let textHeight = 3;
                let padding = 3;
                const makeText = () => {
                    const textSprite = new SpriteText(node.text ?? node.id);
                    textSprite.material.depthWrite = true;
                    textSprite.color = "#fff";
                    textSprite.backgroundColor = "#000";
                    textSprite.textHeight = textHeight;
                    textSprite.padding = padding;
                    return textSprite;
                };

                if ("img" in node) {
                    addSphere = false;
                    const scale = 36;
                    const texture = new THREE.TextureLoader().load(node.img, tex => {
                        let targetSprite = this.imgSprites[node.id];
                        let w = tex.image.width;
                        let h = tex.image.height;
                        let aspX = w > h ? w / h : 1;
                        let aspY = h > w ? h / w : 1;
                        targetSprite.scale.set(scale * aspX, scale * aspY);
                    });
                    texture.minFilter = THREE.LinearFilter;
                    texture.maxFilter = THREE.LinearFilter;
                    texture.generateMipmaps = false;
                    texture.colorSpace = THREE.SRGBColorSpace;

                    const material = new THREE.SpriteMaterial({
                        map: texture
                    });
                    const sprite = new THREE.Sprite(material);
                    sprite.scale.set(scale, scale);
                    this.imgSprites[node.id] = sprite;
                    group.add(sprite);

                    if ("text" in node) {
                        const textSprite = makeText();
                        textSprite.translateY(0-scale/2-textHeight);
                        textSprite.translateZ(1);
                        group.add(textSprite);
                    }
                }
                else if (node.group === "text") {
                    const textSprite = makeText();
                    textSprite.translateY(textHeight + padding);
                    group.add(textSprite);
                }
                if (addSphere)
                {
                    let sphere = new THREE.Mesh(
                        new THREE.SphereGeometry(2),
                        new THREE.MeshLambertMaterial({
                            color: "#FFFFFF"
                        })
                    );
                    group.add(sphere);
                }
                this.renderedNodes.push(group);
                return group;
            })
            .onNodeHover(node => {
                // no state change
                if ((!node && !highlightNodes.size) || (node && hoverNode === node)) return;

                highlightNodes.clear();
                highlightLinks.clear();
                if (node) {
                    highlightNodes.add(node);
                    node.neighbors.forEach(neighbor => highlightNodes.add(neighbor));
                    node.links.forEach(link => highlightLinks.add(link));
                }

                hoverNode = node || null;

                this.updateHighlight();
            })
            .onLinkHover(link => {
                highlightNodes.clear();
                highlightLinks.clear();

                if (link) {
                    highlightLinks.add(link);
                    highlightNodes.add(link.source);
                    highlightNodes.add(link.target);
                }

                this.updateHighlight();
            });

        let animBody = (timestamp => {
            if (this.willDismount) return;
            this.renderedNodes.forEach((node, index) => {
                let camera = this.graph.camera();
                let cameraQuat = new THREE.Quaternion(0, 0, 0, 1);
                cameraQuat.setFromRotationMatrix(camera.matrixWorldInverse);
                node.rotation.setFromQuaternion(cameraQuat.invert());
            });
            window.requestAnimationFrame(animBody);
        }).bind(this);
        window.requestAnimationFrame(animBody);
    }
    componentWillUnmount() {
        this.imgSprites = {};
        this.renderedNodes = [];
        this.nodeMap = {};
        this.willDismount = true;
    }

    render() {
        return (
            <div ref={this.mainDiv} className='md-full'/>
        )
    }
}