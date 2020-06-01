import axios from "axios";

export default {
  // Gets all books
  getLinks: function() {
    return axios.get("/api/links");
  },
  // Gets the book with the given id
  getLink: function(id) {
    return axios.get("/api/links/" + id);
  },
  // Deletes the book with the given id
  deleteLink: function(id) {
    return axios.delete("/api/links/" + id);
  },
  // Saves a book to the database
  saveLink: function(linkData) {
    return axios.post("/api/links", linkData);
  }
};
