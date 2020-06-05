import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import Nav from "../components/Nav";

function Detail(props) {
  const [link, setLink] = useState({})
  console.log("link: " + JSON.stringify(link));

  // When this component mounts, grab the book with the _id of props.match.params.id
  // e.g. localhost:3000/books/599dcb67f0f16317844583fc
  const {id} = useParams()
  useEffect(() => {
    API.getLink(id)
      .then(res => setLink(res.data))
      .catch(err => console.log(err));
  }, [])

  return (
    
          <Container fluid>
        <Nav/>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1>
                {link.category}
                </h1>
                 {link.subject}
              </Jumbotron>
          </Col>
        </Row>
        <Row>
          <Col size="md-10 md-offset-1">
            <article>
              <h2>Reference Link:</h2>
              <a href={link.url}>{link.url}</a> 
              <h2>Synopsis</h2>
              <p>
                {link.synopsis}
              </p>
            </article>
          </Col>
        </Row>
        <Row>
          <Col size="md-2">
            <Link to="/links">← Back to References</Link>
          </Col>
        </Row>
      </Container>
      
    );
  }


export default Detail;
