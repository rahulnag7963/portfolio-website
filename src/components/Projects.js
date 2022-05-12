import React from 'react'
import { Stack, Card, Button, Col, Row} from 'react-bootstrap'
import Fade from 'react-reveal/Fade';

const Project = () => {
  return (
    <div>
      <Stack>
        <Fade right><div className="display-1 p-3"> Projects Built</div></Fade>
          <Fade right big>
          <Row>
          <Col>
          <div className="p-3">
          <Card style={{ width: "16rem" }}>  
          <Card.Img variant="top" src="https://images6.alphacoders.com/974/974885.jpg" />
            <Card.Body>
              <Card.Title>Cryptocurency Price cheking website</Card.Title>
              <Card.Text>
                Built a webapp that displays important information (ex. marketcap, volume, etc.) of the top 250 cryptocurencies by Marketcap.
              </Card.Text>
              <Card.Text> 
                Built using ReactJS, Bootstrap, and React chartJS. The data is recieved from CoinGecko Api, and displayed
                on the website. ChartJS also provides a graph of the price data, segmeente dinto 30, 90 and 365 days. 
              </Card.Text>
              <Button variant="primary" href="https://cryptocurrencypricechecker.on.fleek.co/"> Website </Button>{' '}
              <Button variant="info" href="https://github.com/rahulnag7963/cpc"> Code </Button>
            </Card.Body>
          </Card>
          </div>
          </Col>
          <Col>
          <div className= "p-3">
          <Card style={{ width: "16rem" }}>
          <Card.Img variant="top" src="https://wallpapercave.com/wp/wp3454606.jpg" />
            <Card.Body>
              <Card.Title>Nasa API website</Card.Title>
              <Card.Text>
                Built a webapp that displays the daily photo of the day from Nasa using an API.
              </Card.Text>
              <Card.Text> 
                Built using ReactJS and Bootstrap, with the data coming from the Nasa API. Includes a like button 
                and a description of the picture in question.   
              </Card.Text>
              <Button variant="primary" href="https://nasainstajam.on.fleek.co/"> Website</Button>{' '}
              <Button variant="info" href="https://github.com/rahulnag7963/shopify_frontend_challenge"> Code </Button>
            </Card.Body>
          </Card>
          </div>
          </Col>
          <Col>
          <div className="p-3">
          <Card style={{ width: "16rem" }}>
          <Card.Img variant="top" src="https://wallpapercave.com/wp/wp3537544.jpg" />
            <Card.Body>
              <Card.Title>Eccomerce store</Card.Title>
              <Card.Text>
                Built an eccormerce store in a group of 4 that allows users to buy produts from a page. 
                My main part in the project was dealing with the login/account functions and overall aesthetics of the page.
              </Card.Text>
              <Card.Text> 
                Built using JSP, HTML, Docker, SQL database and Bootstrap. Includes several pages such as a landing page,
                login page, buying products page, etc. Includes an SQL database for dealing with the backend.   
              </Card.Text>
              <Button variant="info" href="https://github.com/rahulnag7963/cosc304project"> Code </Button>
            </Card.Body>
          </Card>
          </div>
          </Col>
          <Col>
          <div className="p-3">
          <Card style={{ width: "16rem" }}>
          <Card.Img variant="top" src="https://wallpaperaccess.com/full/2975895.jpg" />
            <Card.Body>
              <Card.Title>Java Tax Calculator</Card.Title>
              <Card.Text>
                Built a Tax Calculator that can find out the amount that an individual needs to pay in taxes in
                British Columbia, Canada. 
              </Card.Text>
              <Card.Text> 
                Built using only Java. The calculator can calculate your after income taxes from all types of income
                (ex. dividend, investment, capital gains, etc.) as well as predicite what taxes you will pay in the
                future, which is done based on the inflation rate of the past 5 years. 
              </Card.Text>
              <Button variant="info" href="https://github.com/rahulnag7963/Tax-Calculator"> Code </Button>
            </Card.Body>
          </Card>
          </div>
          </Col>
          </Row>
          </Fade>
      </Stack>
    </div>
  )
}

export default Project