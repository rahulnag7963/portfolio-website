import React from 'react'
import {Stack, ListGroup, Col, Row, Tab} from "react-bootstrap";
import picture2 from "../pictures/me2.png";
import Fade from "react-reveal/Fade";

const About = () => {
  return (
    <div>
      <Stack direction="horizontal" gap={5}>
        <Stack>
          <Fade right big><div className="display-5 p-3"> My name is Rahul,
          A UBC computer science student, with a passion for Web/Blockchain development. </div>
          </Fade>
          <Fade right big>
            <div className="display-6 p-3"> List of skills developed: </div> 
            <div className="p-3">
            <Tab.Container id="list-group-tabs-example" defaultActiveKey="#link1">
            <Row>
              <Col sm={4}>
                <ListGroup>
                  <ListGroup.Item action href="#link1">
                    ReactJS
                  </ListGroup.Item>
                  <ListGroup.Item action href="#link2">
                    Bootstrap
                  </ListGroup.Item>
                  <ListGroup.Item action href="#link3">
                    HTML/CSS
                  </ListGroup.Item>
                  <ListGroup.Item action href="#link4">
                    Java
                  </ListGroup.Item>
                  <ListGroup.Item action href="#link5">
                    Javascript
                  </ListGroup.Item>
                  <ListGroup.Item action href="#link6">
                    SQL databases
                  </ListGroup.Item>
                  <ListGroup.Item action href="#link7">
                    Relevent Courses 
                  </ListGroup.Item>
                  <ListGroup.Item action href="#link8">
                    Extraciricular courses 
                  </ListGroup.Item>
                </ListGroup>
              </Col>
              <Col sm={8}>
                <Tab.Content>
                  <Tab.Pane eventKey="#link1">
                    <div> Developed several websites using ReactJS, such as cryptocurency pricetracker, 
                    a frontend test for developing a website around a nasa api, built a project around texting 
                    individuals using react as the frontend.</div>
                  </Tab.Pane>
                  <Tab.Pane eventKey="#link2">
                    <div> All websites developed using ReactJS also used Boostrap to make the UI more professional.</div>
                  </Tab.Pane>
                  <Tab.Pane eventKey="#link3">
                    <div> Not only used HTML/CSS in all my React projects, but also used in an Ecomerce project, 
                    and a chatbot project for school.</div>
                  </Tab.Pane>
                  <Tab.Pane eventKey="#link4">
                    <div> Java was the first language taught to us in unversity, with a majority of courses being 
                    taught in this language. Not only that, but I also built a tax calculator in Java, which can
                    calculate a British Columbian's provincial and Federal taxes. Also gives rough estimate of
                    taxes that an individual will pay in the future based on inflation data from past 5 years. </div>
                  </Tab.Pane>
                  <Tab.Pane eventKey="#link5">
                    <div> Javascript was not only used in react websites, but also in Graphic design (WebGL), 
                    and a discord chatbot. </div>
                  </Tab.Pane>
                  <Tab.Pane eventKey="#link6">
                    <div> Taken an entire course on SQL databases, and used Databases in an Eccomerce project, where
                    we used JSP and Docker to form an SQL database based on user data (ex. login info, prices of products, 
                    etc.). </div>
                  </Tab.Pane>
                  <Tab.Pane eventKey="#link7">
                    <div> Databases (learned fundementals of SQL and Database design), Graphic Design (learned 
                    fundementals of Graphic design and its applications in WebGL), Software Engineering (learned
                    software Engineering fundementals such as activities of specification, implementation, design, 
                    maintenance and testing.) and Networks (learned fundementals of networks and use cases in wireshark) </div>
                  </Tab.Pane>
                  <Tab.Pane eventKey="#link8">
                    <div> Taken a course on Solidity, a language used for the Ethereum Blockchain, along with 
                      fundementals of a blockchain. </div>
                  </Tab.Pane>
                </Tab.Content>
              </Col>
            </Row>
          </Tab.Container>
            </div>
          </Fade>
        </Stack>
        <Fade big><img className="rounded-circle px-4 mt-2 p-3" width = "710" height = "638" src={picture2} ></img></Fade>
      </Stack>
    </div>
  )
}

export default About