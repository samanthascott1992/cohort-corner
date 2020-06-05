const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/cohortCorner"
);

const linkSeed = [
    {
        category: "HTML5",
        subject: "HTML Reference",
        url: "https://www.w3schools.com/tags/",
        synopsis: "HTML tags referenced in alphabetical order.",
        date: new Date(Date.now())
    },
    {
        category: "HTML5",
        subject: "HTML DOCTYPE Declaration",
        url: "https://www.w3schools.com/tags/tag_doctype.asp",
        synopsis: "This link shows you how an HTML5 document is started.",
        date: new Date(Date.now())
    },
        {
        category: "HTML5",
        subject: "YouTube My First HTML File",
        url: "https://www.youtube.com/watch?v=ieb6Svbc10E",
        synopsis: "A video to walk through how to set up an HTML file.",
        date: new Date(Date.now())
    },
    {
        category: "HTML5",
        subject: "MDN HTML5 Developer Guide",
        url: "https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5",
        synopsis: "Offers additional resources and knowledge about HTML5. ",
        date: new Date(Date.now())
    },
    {
        category: "Javascript",
        subject: "Loops and Iteration",
        url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration",
        synopsis: "Gives examples of different types of loops able to be written in Javascript. ",
        date: new Date(Date.now())
    },
    {
        category: "Javascript",
        subject: "Callback Functions and How to Use Them",
        url: "http://javascriptissexy.com/understand-javascript-callback-functions-and-use-them/",
        synopsis: "Walks through what callbacks are. Gives basics of how to implement them and what they look like. ",
        date: new Date(Date.now())
    },
    {
        category: "Javascript",
        subject: "Javascript Beginner Async",
        url: "http://javascriptissexy.com/understand-javascript-callback-functions-and-use-them/",
        synopsis: "Explains what Async is and how to program asynchronously.",
        date: new Date(Date.now())
    },
    {
        category: "JQuery",
        subject: "JQuery API Documentation",
        url: "https://api.jquery.com/",
        synopsis: "A list of API documentation manipulators and descriptions of what they do.",
        date: new Date(Date.now())
    },
    {
        category: "JQuery",
        subject: "JQuery CDN",
        url: "https://api.jquery.com/",
        synopsis: "List of Jquery links to be able to add to implement within your application.",
        date: new Date(Date.now())
    },
    {
        category: "JQuery",
        subject: "YouTube Sandwich Click tutorial",
        url: "https://www.youtube.com/watch?v=6BLReDBUZRk",
        synopsis: "Video tutorial of how to make sandwich click app from lesson 4.1",
        date: new Date(Date.now())
    },
    {
        category: "MongoDB",
        subject: "MongoDB Installation Instructions",
        url: "https://github.com/scwebd/mongo-install-instructions",
        synopsis: "Instructions on how to install and configure MongoDB and all necessary dependencies on various operating systems.",
        date: new Date(Date.now())
    },
    {
        category: "MongoDB",
        subject: "MongoDB Cheat Sheet - Essential MongoDB Shell Commands",
        url: "https://www.opentechguides.com/how-to/article/mongodb/118/mongodb-cheatsheat.html",
        synopsis: "A listing of the most commonly used Mongo Shell commands with example usage.",
        date: new Date(Date.now())
    },
    {
        category: "MongoDB",
        subject: "MongoDB Query Operators",
        url: "https://docs.mongodb.com/manual/reference/operator/query/",
        synopsis: "Descriptive listing of Query and Projection operators.",
        date: new Date(Date.now())
    },
    {
        category: "MongoDB",
        subject: "Mongojs Collection Methods",
        url: "https://github.com/mongo-js/mongojs#api",
        synopsis: "A tutorial of Node.js module for MongoDB, that emulates the official MongoDB API as much as possible. It wraps MongoDB-native and is available through npm",
        date: new Date(Date.now())
    },
    {
        category: "Express",
        subject: "Express with API Reference",
        url: "http://expressjs.com/en/4x/api.html#res.end",
        synopsis: "Extensive listing of syntax resources for middleware function in Express.",
        date: new Date(Date.now())
    },
    {
        category: "Express",
        subject: "Express Tutorial for Routes and Controllers",
        url: "https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/routes",
        synopsis: "This tutorial provides support in setting up routes (URL handling code) with handler functions for resources needed concerning endpoints.",
        date: new Date(Date.now())
    },
    {
        category: "Express",
        subject: "Express Response Methods",
        url: "https://expressjs.com/en/guide/routing.html#response-methods",
        synopsis: "Tutorial on the various methods of routing, and how an application's endpoints (URIs) respond to client requests.",
        date: new Date(Date.now())
    },
    {
        category: "Express",
        subject: "Using Express Middleware",
        url: "https://expressjs.com/en/guide/using-middleware.html",
        synopsis: "A tutorial in helping to convey the logic of how Express applications are essentially a series of middleware function calls.",
        date: new Date(Date.now())
    },
    {
        category: "ReactJS",
        subject: "Latest ReactJS Examples",
        url: "https://react.rocks/",
        synopsis: "Great examples and inspiration in building ReactJS applications.",
        date: new Date(Date.now())
    },
    {
        category: "ReactJS",
        subject: "React State vs Props Explained",
        url: "https://codeburst.io/react-state-vs-props-explained-51beebd73b21",
        synopsis: "Basic tutorial explaining and comparing React components to plain functions.",
        date: new Date(Date.now())
    },
    {
        category: "ReactJS",
        subject: "Rules of Hooks in React",
        url: "https://reactjs.org/docs/hooks-rules.html",
        synopsis: "Tutorial on how to follow the rules in utilizing the JavaScript function of hooks in React.",
        date: new Date(Date.now())
    },
    {
        category: "ReactJS",
        subject: "Fragments-React",
        url: "https://reactjs.org/docs/fragments.html",
        synopsis: "Tutorial on the motivation, usage and syntax of fragments in ReactJS.",
        date: new Date(Date.now())
    },
    {
        category: "Node.js",
        subject: "What exactly is Node.js?",
        url: "https://www.freecodecamp.org/news/what-exactly-is-node-js-ae36e97449f5/",
        synopsis: "Informative tutorial explaining how Node.js' run time environment includes everything one would need to execute a program written in JavaScript.",
        date: new Date(Date.now())
    },
    {
        category: "Node.js",
        subject: "Read Files with Node.js",
        url: "https://stackabuse.com/read-files-with-node-js/",
        synopsis: "An informative tutorial on how to open and read files utilizing the fs method in Node.js.",
        date: new Date(Date.now())
    },
    {
        category: "Node.js",
        subject: "Understanding module.exports and exports in Node.js",
        url: "https://www.sitepoint.com/understanding-module-exports-exports-node-js/",
        synopsis: "Informing tutorial on how modules essentially make our lives as developers easier, as we can utilize them them to augment our applications with functionality that we haven’t had to write ourselves.",
        date: new Date(Date.now())
    },
    {
        category: "Node.js",
        subject: "How to Deploy a Node.js App to Heroku",
        url: "https://scotch.io/tutorials/how-to-deploy-a-node-js-app-to-heroku",
        synopsis: "Tutorials on implementation and tools needed to deploy a Node.js application to Heroku.",
        date: new Date(Date.now())
    },
];

db.Link
    .remove({})
    .then(() => db.Link.collection.insertMany(linkSeed))
    .then(data => {
        console.log(data.result.n + " records inserted!");
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });