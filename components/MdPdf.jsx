import React from "react";
import ReactDOM from "react-dom";
import HTMLFlipBook from "react-pageflip";
import { pdfjs, Document, Outline, Page as PdfPage } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

// TODO: HalfPage offset/styling implementation (mergedPairs)
// TODO: mergedPairs renderer with full page optional cover support
// TODO: display loading progress
// TODO: display error
// TODO: display outline
// TODO: determine size
// TODO: responsiveness (portrait mode on mobile / small window)

const Page = React.forwardRef(({ pageNumber, width }, ref) => {
    return (
      <div ref={ref}>
        <PdfPage pageNumber={pageNumber} width={width} />
      </div>
    );
});

const HalfPage = React.forwardRef(({ pageNumber, width }, ref) => {
    return (
      <div ref={ref}>
        <PdfPage pageNumber={pageNumber} width={width} />
      </div>
    );
});

export default class MdPdf extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currPage: 1,
            pageCount: 1,
            inputPageCount: 1,
            loaded: false,
            displayed: false,
            parallax: new ParallaxEffect()
        };
        this.mainDiv = React.createRef();
        this.flipBook = React.createRef();
    }

    componentDidMount() {
        if('parallax' in this.props) {
            this.state.parallax.register(this.mainDiv.current);
        }
    }

    componentWillUnmount() {
        this.state.parallax.unregister();
    }

    hasMergedPairs() {
        return this.props.hasMergedPairs ?? false;
    }

    hasCover() {
        return this.props.hasCover ?? false;
    }

    onDocumentLoaded(pdf) {
        this.setState(
            {
                loaded: true,
                inputPageCount: pdf.numPages,
                pageCount: this.hasMergedPairs()
                    ? pdf.numPages * 2 - this.hasCover() * 2
                    : pdf.numPages
            }
        )
    }

    nextPage() {
        this.setState(
            {
                currPage: Math.min(this.state.currPage + 1, this.state.pageCount)
            },
            () => this.flipBook.current?.pageFlip()?.flipNext()
        );
    }
    prevPage() {
        this.setState(
            {
                currPage: Math.max(this.state.currPage - 1, 1)
            },
            () => this.flipBook.current?.pageFlip()?.flipPrev()
        );
    }

    onItemClick({ pageNumber: itemPageNumber }) {
        this.setState(
            {
                currPage: itemPageNumber
            },
            () => this.flipBook.current?.pageFlip()?.flip({ pageNum: this.state.currPage })
        );
    }

    renderNormal() {
        return (<> {
            Array.from(new Array(this.state.pageCount), (el, index) => (
                <Page pageNumber={index} key={`page_${index}`} />
            ))
        } </>)
    }

    renderMergedPairs() {
        return (<> {
            Array.from(new Array(this.state.pageCount), (el, index) => (
                <Page pageNumber={index} />
            ))
        } </>)
    }

    render() {
        let passProps = {...this.props};
        delete passProps.href;

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
                            showCover={this.props.hasCover ?? false}
                            maxShadowOpacity={0.3}
                            flippingTime={400}
                        > {
                            this.hasMergedPairs()
                                ? this.renderMergedPairs()
                                : this.renderNormal()
                        }
                        </HTMLFlipBook>
                    )
                    : (<></>)
                }
                </Document>
            </div>
        );
    }
}