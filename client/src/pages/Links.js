import React, { useState, useEffect } from "react";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";
import mongo from "../Images/mngodbimg.png"
import nExpress from "../Images/nexpress.jpg"
import ract from "../Images/react.png"
import node from "../Images/node.png"
import Nav from "../components/Nav";


function Links() {
  // Setting our component's initial state
  const [links, setLinks] = useState([])
  const [formObject, setFormObject] = useState({})

  // Load all books and store them with setBooks
  useEffect(() => {
    loadLinks()
  }, [])

  // Loads all books and sets them to books
  function loadLinks() {
    API.getLinks()
      .then(res => 
        setLinks(res.data)
      )
      .catch(err => console.log(err));
  };

  // Handles updating component state when the user types into the input field
  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({...formObject, [name]: value})
  };

  // When the form is submitted, use the API.saveBook method to save the book data
  // Then reload books from the database
  function handleFormSubmit(event) {
    event.preventDefault();
    if (formObject.url && formObject.subject) {
      API.saveLink({
        category: formObject.category,
        subject: formObject.subject,
        url: formObject.url,
        synopsis: formObject.synopsis
      })
        .then(res => loadLinks())
        .catch(err => console.log(err));
    }
    loadLinks();
  };

  
  return (
    
     <Container fluid>
       <Nav/>
        <Row>
          <Col size="md-6">
            <Jumbotron><h2>Subjects to Choose From</h2>
            
            </Jumbotron>
           
           <button> MongoDB <img src={mongo}width="50" height="50" alt="mongodb"/></button> <br />
              <button>Express   <img src={nExpress}width="50" height="50" alt="express"/></button> <br />
            <button>  React <img src={ract}width="50" height="50" alt="react"/></button> <br />
             <button> Node <img src={node}width="50" height="50" alt="node"/></button> <br />
           
            <Jumbotron>
              <h1>Submit a New Link for Reference</h1>
            </Jumbotron>
            <form>
              <Input 
              onChange={handleInputChange}
              name="category"
              placeholder="Please Pick a Category to Submit to!"
              />
              <Input
                onChange={handleInputChange}
                name="subject"
                placeholder="Subject (required)"
              /> 
               <Input
                onChange={handleInputChange}
                name="url"
                placeholder="URL (required)"
              />
              <TextArea
                onChange={handleInputChange}
                name="synopsis"
                placeholder="Synopsis (Optional)"
              />
              <FormBtn
                disabled={!(formObject.category && formObject.subject && formObject.url)}
                onClick= {handleFormSubmit}
              >
                Submit New Reference Link
              </FormBtn>
            </form>
           
          </Col>
          <Col size="md-6 sm-12">
            <Jumbotron>
              <h1>Reference Links</h1>
            </Jumbotron>
            {links.length ? (
              <List>
                {links.map(link => (
                  <ListItem key={link._id}>
                    <Link to={"/links/" + link._id}>
                      <strong>
                       {link.subject}
                      </strong>
                    </Link>
                    </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Col>
        </Row>
      </Container>
  );
  };


export default Links;