import './App.css';
import React, { Component } from 'react';
import CV from './components/CV'
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';


class App extends Component {
  constructor() {
    super();
  }


  generatePDF() {
    let pdf = new jsPDF('p', 'pt', 'a4');
    let pWidth = pdf.internal.pageSize.width; // 595.28 is the width of a4
    let srcWidth = document.getElementById('cv').scrollWidth;
    let margin = 18; // narrow margin - 1.27 cm (36);
    let scale = (pWidth - margin * 2) / srcWidth;
    pdf.html(document.getElementById('cv'), {
        x: margin,
        y: margin,
        html2canvas: {
            scale: scale,
        },
        callback: function () {
            window.open(pdf.output('bloburl'));
        }
    });
}
  

  render() {
    return (
      <>
        <CV/>
        <div className="pdf">
          <button id="pdfButton" onClick={this.generatePDF}> Generate PDF </button>
        </div>
      </>
    );
  }
}

export default App;
