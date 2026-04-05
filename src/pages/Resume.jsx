import Navbar from '../components/Navbar';
import PageTransition from '../components/PageTransition';
import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/Page/TextLayer.css';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import './Resume.css';

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

export default function Resume() {
  const [numPages, setNumPages] = useState(null);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
      <div className="page-wrapper">
        <Navbar />
        <PageTransition>
          <div className="resume-container">
            {/* Custom Header & Download Button */}
            {/* <div className="resume-header">
              <h2 className="resume-title">Resume</h2>
              <a 
                href="/resume.pdf" 
                download="Zack_Kouba_Resume.pdf" 
                className="download-btn"
              >
                Download PDF
              </a>
            </div> */}
            {/* The Clean PDF Display */}
            <div className="pdf-wrapper">
              <Document
                file="/resume.pdf"
                onLoadSuccess={onDocumentLoadSuccess}
                className="pdf-document"
                // Optional: Add a loading state so it doesn't look blank while processing
                loading={<div className="loading-text">Loading resume...</div>}
              >
                {/* If your resume is multiple pages, you can map through numPages here. 
                    Assuming it is 1 page for now: */}
                <Page 
                  pageNumber={1} 
                  renderTextLayer={true} // Allows copy/pasting
                  renderAnnotationLayer={false} // Hides links/tools to keep it clean
                  scale={1.2} // Adjust this to make the resume larger or smaller on screen
                  className="pdf-page"
                />
              </Document>
            </div>
          </div>
        </PageTransition>
      </div>
  );
}