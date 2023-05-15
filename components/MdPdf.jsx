import React from "react";
import ReactDOM from "react-dom";
import HTMLFlipBook from "react-pageflip";
import { pdfjs, Document, Outline, Page as PdfPage } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';
import '../css/pdf-flip.css'

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.js`;

// TODO: display loading progress
// TODO: display error
// TODO: display outline
// TODO: responsiveness (portrait mode on mobile / small window)
//     TODD: decide single page view

export default class MdPdf extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currPage: 1,
            pageCount: 1,
            inputPageCount: 1,
            loaded: false,
            displayed: false,
            width: 100,
            height: 100
        };
        this.mainDiv = React.createRef();
        this.flipBook = React.createRef();
        this.scanPageId = 0;
        this.pdfMaxHeight = 100;
        this.pdfMaxWidth = 100;
    }

    componentDidMount() {
        let checkResize = mutations => {
            if (!this.state.displayed) {
                return;
            }
            const el = mutations[0].target;
            const w = el.clientWidth;
            const h = el.clientHeight;

            const isChange = mutations
                .map((m) => `${m.oldValue}`)
                .some((prev) => prev.indexOf(`width: ${w}px`) === -1 || prev.indexOf(`height: ${h}px`) === -1);
            
            if (isChange) {
                this.setState(this.getWidthHeight());
            }
        }
        const observer = new MutationObserver(checkResize);
        observer.observe(this.mainDiv.current, { attributes: true, attributeOldValue: true, attributeFilter: ['style'] });
    }

    componentWillUnmount() {
    }

    hasMergedPairs() {
        return this.props.mergedpairs ?? false;
    }

    hasCover() {
        return this.props.cover ?? false;
    }

    determineSize(pdf, page, callback) {
        let viewport = page.getViewport();
        let w = viewport.viewBox[2];
        let h = viewport.viewBox[3];
        this.pdfMaxHeight = Math.max(this.pdfMaxHeight, h);
        let isHalfWidth = this.hasMergedPairs() && !(this.hasCover() && this.scanPageId == 0);
        this.pdfMaxWidth = Math.max(this.pdfMaxWidth, w / (1 + isHalfWidth));
        this.scanPageId++;
        if (this.scanPageId < pdf.numPages) {
            pdf.getPage(this.scanPageId + 1).then((nextPage => this.determineSize(pdf, nextPage, callback)).bind(this));
        }
        else {
            callback();
        }
    }

    getWidthHeight() {
        let mainWidth = this.mainDiv.current.clientWidth;
        return {
            width: mainWidth,
            // TODO: single page mode?
            height: (this.pdfMaxHeight / (this.pdfMaxWidth * 2)) * mainWidth
        }
    }

    onDocumentLoaded(pdf) {
        this.scanPageId = 0;
        let callback = () => {
            let mainWidth = this.mainDiv.current.clientWidth;
            // TODO: single page mode?
            let mainHeight = (this.pdfMaxHeight / (this.pdfMaxWidth * 2)) * mainWidth;
            this.setState(
                {
                    loaded: true,
                    inputPageCount: pdf.numPages,
                    pageCount: this.hasMergedPairs()
                        ? pdf.numPages * 2 - (this.hasCover() ? 1 : 0)
                        : pdf.numPages,
                    ... this.getWidthHeight()
                }
            )
        };
        pdf.getPage(1).then((nextPage => this.determineSize(pdf, nextPage, callback.bind(this))).bind(this));
    }

    nextPage() {
        this.setState(
            { currPage: Math.min(this.state.currPage + 1, this.state.pageCount - 1) },
            () => this.flipBook.current?.pageFlip()?.flipNext()
        );
    }
    prevPage() {
        this.setState(
            { currPage: Math.max(this.state.currPage - 1, 0) },
            () => this.flipBook.current?.pageFlip()?.flipPrev()
        );
    }

    onItemClick({ pageNumber: itemPageNumber }) {
        this.setState(
            { currPage: itemPageNumber },
            () => this.flipBook.current?.pageFlip()?.flip({ pageNum: this.state.currPage - 1 })
        );
    }

    render() {
        let passProps = {...this.props};
        delete passProps.href;
        delete passProps.mergedPairs;
        delete passProps.hascover;

        if('filter' in passProps) {
            passProps.style = {filter: passProps.filter};
        }
        
        return (
            <div ref={this.mainDiv} className="mdPdf" {...passProps}>
                <Document
                    file={this.props.href}
                    onItemClick={this.onItemClick}
                    options={{
                        cMapUrl: `https://unpkg.com/pdfjs-dist@${pdfjs.version}/cmaps/`,
                        cMapPacked: true
                    }}
                    onLoadSuccess={this.onDocumentLoaded.bind(this)}
                > {
                    this.state.loaded
                    ? (
                        <HTMLFlipBook
                            width={this.state.width * 0.5}
                            height={this.state.height}
                            showCover={this.hasCover()}
                            maxShadowOpacity={0.3}
                            flippingTime={320}
                            usePortrait={false}
                        >{
                            this.hasMergedPairs()
                            ? (
                                Array.from(new Array(this.state.pageCount), (el, index) => {
                                    if (index == 0 && this.hasCover()) {
                                        return (
                                            <div className={`pdfpage page-${index}`} key={`page_${index}`}>
                                                <PdfPage pageIndex={index} width={this.state.width * 0.5} />
                                            </div>
                                        )
                                    }
                                    else {
                                        let rightSide = (index + (this.hasCover() ? 1 : 0)) % 2;
                                        let halfPageClass = "half-page" + (rightSide ? " right" : "");
                                        let pdfPageNum = Math.floor(index * 0.5 + (this.hasCover() ? 0.5 : 0));
                                        return (
                                            <div className={`pdfpage page-${index}`} key={`page_${index}`}>
                                                <div className={halfPageClass}>
                                                    <PdfPage pageIndex={pdfPageNum} width={this.state.width} />
                                                </div>
                                            </div>
                                        );
                                    }
                                })
                            ) : (
                                Array.from(new Array(this.state.pageCount), (el, index) => (
                                    <div className={`pdfpage page-${index}`} key={`page_${index}`}>
                                        <PdfPage pageIndex={index} width={this.state.width * 0.5} />
                                    </div>
                                ))
                            )
                        }
                        </HTMLFlipBook>
                    ) : (<p>Loading PDF</p>)
                }
                </Document>
            </div>
        );
    }
}