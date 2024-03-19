import React from 'react';
import Card from 'react-bootstrap/Card';
import ner from '../images/ner.jpg';
import conn from '../images/conn.jpg';
import wdash from '../images/02-portfolio-4.jpg'
import stock from '../images/stock.png'
import workday from '../images/workday.png'
import wdashb from '../images/wdashb.png'
import CardGroup from 'react-bootstrap/CardGroup';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';


function Work() {
  return (
<div className="col-8 justify-content-center">
            
<Row xs={1} md={3} className="g-3">
<Col>
<Card >
  <Card.Img variant="top" src={ner} />
  <Card.Body>
    <Card.Title>Scientific Reports</Card.Title>
    <Card.Text>
      <div className="card-title"/>
      <a href="https://scholar.google.co.uk/citations?view_op=view_citation&hl=en&user=4UV74KQAAAAJ&citation_for_view=4UV74KQAAAAJ:2osOgNQ5qMEC" >Filtering property of myelinated internode can change neural information representability and might trigger a compensatory action during demyelination</a>
    </Card.Text>
  </Card.Body>
</Card>
</Col>
<Col>
<Card >
  <Card.Img variant="top" src={conn} />
  <Card.Body>
    <Card.Title>IEEE Conference</Card.Title>
    <Card.Text>
      <div className="card-title"/>
      <a href="https://scholar.google.co.uk/citations?view_op=view_citation&hl=en&user=4UV74KQAAAAJ&citation_for_view=4UV74KQAAAAJ:u5HHmVD_uO8C" >An automated toolchain for quantitative characterisation of structural connectome from MRI based on non-anatomical cortical parcellation</a>
    </Card.Text>
  </Card.Body>
</Card>
</Col>
<Col>
<Card >
  <Card.Img variant="top" src={wdashb} />
  <Card.Body>
    <Card.Title>Weather Dashboard</Card.Title>
    <Card.Text>
      <div className="card-title"/>
      <a href="https://sarbanibhadra.github.io/Weather_dashboard/starter/" >https://sarbanibhadra.github.io/Weather_dashboard/starter/</a>
    </Card.Text>
  </Card.Body>
</Card>
</Col>
<Col>
<Card >
  <Card.Img variant="top" src={wdash} />
  <Card.Body>
    <Card.Title>Team Profile Generator</Card.Title>
    <Card.Text>
      <div className="card-title"/>
      <a href="https://github.com/sarbanibhadra/Team-Profile-Generator" >https://github.com/sarbanibhadra/Team-Profile-Generator</a>
    </Card.Text>
  </Card.Body>
</Card>
</Col>
<Col>
<Card >
  <Card.Img variant="top" src={stock} />
  <Card.Body>
    <Card.Title>Stock-Up-App</Card.Title>
    <Card.Text>
      <div className="card-title"/>
      <a href="https://sarbanibhadra.github.io/Stock-Up-App/" >https://sarbanibhadra.github.io/Stock-Up-App/</a>
    </Card.Text>
  </Card.Body>
</Card>
</Col>
<Col>
<Card >
  <Card.Img variant="top" src={workday} />
  <Card.Body>
    <Card.Title>Work Day Schedular</Card.Title>
    <Card.Text>
      <div className="card-title"/>
      <a href="https://sarbanibhadra.github.io/Module7_Challenge/starter/" >https://sarbanibhadra.github.io/Module7_Challenge/starter/</a>
    </Card.Text>
  </Card.Body>
</Card>
</Col>
</Row>


</div>



  );
}
   
export default Work;
