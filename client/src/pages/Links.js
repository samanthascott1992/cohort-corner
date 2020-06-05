import React, { useState, useEffect } from "react";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";
import mongo from "../Images/mngodbimg.png";
import nExpress from "../Images/nexpress.jpg";
import ract from "../Images/react.png";
import node from "../Images/node.png";
import Nav from "../components/Nav";
import axios from "axios";
import { useAuth0 } from "../react-auth0-spa";
import html5 from "../Images/html5.png";
import js from "../Images/js.png";
import jquery from "../Images/jquery.png"

function Links() {
  // Setting our component's initial state
  const [links, setLinks] = useState([]);
  const [formObject, setFormObject] = useState({});
  const { user, isAuthenticated } = useAuth0();
  const [array, setArray] = useState([]);
  // Load all links and store them with setLinks
  useEffect(() => {
    loadLinks();
  }, []);

  // Loads all links and sets them to links
  function loadLinks() {
    API.getLinks()
      .then((res) => setLinks(res.data))
      .catch((err) => console.log(err));
  }

  // Handles updating component state when the user types into the input field
  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({ ...formObject, [name]: value });
  }

  // When the form is submitted, use the API.saveBook method to save the book data
  // Then reload books from the database
  function handleFormSubmit(event) {
    event.preventDefault();
    if (formObject.url && formObject.subject) {
      API.saveLink({
        category: formObject.category,
        subject: formObject.subject,
        url: formObject.url,
        synopsis: formObject.synopsis,
      })
        .then((res) => loadLinks())
        .catch((err) => console.log(err));
    }
    loadLinks();
  }

  const viewLinks = (e) => {
    const category = e.target.getAttribute("data-category") 
    API.getLinksbyCategory(category).then(res=>
      {setLinks(res.data)}
    
    )
  };

    const getLinks = () => {
      if (isAuthenticated) {
        axios.get("api/links/category/mongodb").then((res) => {
          setArray(res.data);
        });
      }
    };
  

  return (
    <Container fluid>
      <Nav />
      <Row>
        <Col size="md-6">
          <Jumbotron>
            <h2> Subjects to Choose From </h2>
          </Jumbotron>
       
          <button onClick={viewLinks} data-category="HTML5">
            {" "}
            HTML5 <img src={html5} width="50" height="50" alt="html5" data-category="HTML5" />{" "}
          </button>
          <button onClick={viewLinks} data-category="Javascript">
            {" "}
            Javascript <img src={js} width="50" height="50" alt="js" data-category="Javascript" />{" "}
          </button>
          <button onClick={viewLinks} data-category="JQuery">
            {" "}
            JQuery <img src={jquery} width="50" height="50" alt="js" data-category="JQuery" />{" "}
          </button>   <br />        
          <button onClick={viewLinks} data-category="MongoDB">
            {" "}
            MongoDB <img
              src={mongo}
              width="50"
              height="50"
              alt="mongodb"
              data-category="MongoDB"
            />{" "}
          </button>{" "}
          <button onClick={viewLinks} data-category="Express">
            {" "}
            Express <img
              src={nExpress}
              width="50"
              height="50"
              alt="express"
              data-category="Express"
            />{" "}
          </button>{" "}
          <button onClick={viewLinks} data-category="ReactJS">
            {" "}
            React <img src={ract} width="50" height="50" alt="react" data-category="ReactJS"/>{" "}
          </button>{" "}
          <button onClick={viewLinks} data-category="Node.js">
            {" "}
            Node <img src={node} width="50" height="50" alt="node" data-category="Node.js" />{" "}
          </button>
          <Jumbotron>
            <h1> Submit a New Link for Reference </h1>{" "}
          </Jumbotron>{" "}
          <form>
            <Input
            list="category"
              onChange={handleInputChange}
              name="category"
              placeholder="Please Pick a Category to Submit to!"
            />
            <datalist id="category">
              <option value="HTML5" />
              <option value="Javascript" />
              <option value="JQuery" />
              <option value="MongoDB" />
              <option value="Express" />
              <option value="ReactJS" />
              <option value="Node.js" />
            </datalist>
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
              disabled={
                !(formObject.category && formObject.subject && formObject.url)
              }
              onClick={handleFormSubmit}
            >
              Submit New Reference Link{" "}
            </FormBtn>{" "}
          </form>
        </Col>{" "}
        <Col size="md-6 sm-12">
          <Jumbotron>
            <h1> Reference Links </h1>{" "}
          </Jumbotron>{" "}
          {links.length ? (
            <List>
              {" "}
              {links.map((link) => (
                <ListItem key={link._id}>
                  <Link to={"/links/" + link._id}>
                    <strong> {link.subject} </strong>{" "}
                  </Link>{" "}
                </ListItem>
              ))}{" "}
            </List>
          ) : (
            <h3> No Results to Display </h3>
          )}{" "}
        </Col>{" "}
      </Row>{" "}
    </Container>
  );
}

export default Links;

