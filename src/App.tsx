import './App.css';
import { Footer } from './Footer';
import { Document, Page } from 'react-pdf'

import { useState, useEffect } from 'react'

import { pdfjs } from 'react-pdf';
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";
import type { PDFDocumentProxy, PDFPageProxy } from 'pdfjs-dist';
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

interface PdfViewerProps {
  file: string;
  num_slides: number;
}

const App = () => {
  // file should reside in public folder
  const pdf_file = "2025_06_16_RRMSWEHemsida_lbv.pdf"
  const num_slides = 10
  
  return (
    <div className="app-body">
      {/*
      <header className="App-header">
      </header>
      */}
      <main className="pdf-container">
        {/*
        <img src="rrm_se_logo_white.png" className="App-logo" alt="logo" />
        <p>
        Här kommer snart mer information om<br/>Reduction Roadmap Sverige.
        </p>
        */}
        {/*
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
          >
        Learn React
        </a>
        */}
        <PdfViewer file={pdf_file} num_slides={num_slides}/>
        {/*<Document file={pdf_file}
          onLoadError={console.error}>
          {slides.map((n) => (
            <Page pageNumber={n}/>
            ))}
            </Document>
        */}
      </main>
      <Footer/>
    </div>
    
  );
}

const PdfViewer: React.FC<PdfViewerProps> = ({ file, num_slides }) => {
  const [scale, setScale] = useState<number>(1);
  const [pageHeight, setPageHeight] = useState<number | null>(null);
  const slides = Array.from({ length: num_slides }, (_, i) => i + 1);
  //const [width, setWidth] = useState(600);

  // Called when the page loads and gives us the actual PDF page size (in points)
  const handleFirstPageLoad = (page: PDFPageProxy): void => {
    setPageHeight(page.view[3]);
  };
  
  useEffect(() => {
    const updateScale = () => {
      if (pageHeight) {
        const headerHeight = 0; // adjust to match your header
        const footerHeight = 40; // adjust to match your footer
        const availableHeight = window.innerHeight - headerHeight - footerHeight;

        const calculatedScale = availableHeight / pageHeight;
        console.log(availableHeight);
        setScale(calculatedScale);
      }
    };

    updateScale();
    window.addEventListener('resize', updateScale);
    return () => window.removeEventListener('resize', updateScale);
  }, [pageHeight]);

  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <Document
        file={file}
        onLoadError={(error: Error) => console.error('PDF load error:', error)}
        onLoadSuccess={(pdf: PDFDocumentProxy) =>
          console.log(`PDF loaded: ${pdf.numPages} pages`)
        }
      >
        <Page
          key="first"
          pageNumber={slides[0]}
          scale={scale}
          onLoadSuccess={handleFirstPageLoad}
        />
        {slides.slice(1).map((n) => (
          <Page key={n} pageNumber={n} scale={scale} />
        ))}
      </Document>
    </div>
          );
};

export default App;
