import './App.css';
import { Footer } from './Footer';
import { Document, Page } from 'react-pdf'

import { pdfjs } from 'react-pdf';
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

const App = () => {
  const num_slides = 20
  const slides = Array.from({ length: num_slides }, (_, i) => i + 1);

  return (
    <div className="app-body">
      <header className="App-header">
        <img src="rrm_se_logo_white.png" className="App-logo" alt="logo" />
        <p>
          Här kommer snart mer information om<br/>Reduction Roadmap Sverige.
        </p>
        
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
        <div style={{ height: "841px", overflowY: "auto" }} className="bp3-dialog-body">
          <Document file={"250205rrm.pdf"}>
            {slides.map((n) => (
              <Page pageNumber={n}/>
            ))}
          </Document>
        </div>
      </header>
      <Footer/>
    </div>
    
  );
}

export default App;
