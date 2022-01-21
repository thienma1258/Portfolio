import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import { AiOutlineDownload } from "react-icons/ai";
import { pdfjs } from "react-pdf";
import { useSelector } from "react-redux";
import { Document, Page } from "react-pdf";

import "react-pdf/dist/esm/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function ResumeNew() {
  // eslint-disable-next-line 
  const [width, setWidth] = useState(1200);

  const owner = useSelector((state) => state.owner);
  const [numPages, setNumPages] = useState(null);
  const [currentPage,setCurrentPages] = useState(1);

  useEffect(() => {
    setWidth(window.innerWidth);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        <Document file={owner.resumeURL} onLoadSuccess={onDocumentLoadSuccess} >
          <Page pageNumber={currentPage} height={1000} className="resume-page" />
        </Document>
        <p style={{position: "relative"}}>
        {currentPage >1 ?(<Button variant="secondary" className ="button-page" onClick={()=>setCurrentPages(currentPage-1)}>Previous</Button>):("")}
           Page {currentPage} of {numPages}
        {currentPage < numPages ?(<Button variant="secondary" className ="button-page" onClick={()=>setCurrentPages(currentPage+1)}>Next</Button>):("")}
        </p>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={owner.resumeURL} target="_blank">
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
