const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/cohortCorner"
);

const linkSeed = [{
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
        url: " ",
        synopsis: "Descriptive listing of Query and Projection operators.",
        date: new Date(Date.now())
    },
    {
        category: "MongoDB",
        subject: "Mongojs Collection Methods",
        url: " ",
        synopsis: "A tutorial of Node.js module for MongoDB, that emulates the official MongoDB API as much as possible. It wraps MongoDB-native and is available through npm",
        date: new Date(Date.now())
    },
    {
        category: "Express",
        subject: "Express with API Reference",
        url: " ",
        synopsis: "Extensive listing of syntax resources for middleware function in Express.",
        date: new Date(Date.now())
    },
    {
        category: "Express",
        subject: "Express Tutorial for Routes and Controllers",
        url:  " ",
        synopsis: "This tutorial provides support in setting up routes (URL handling code) with handler functions for resources needed concerning endpoints.",
        date: new Date(Date.now())
    },
    {
        category: "Express",
        subject: "Express Response Methods", 
        url:  "",      
        synopsis: "Tutorial on the various methods of routing, and how an application's endpoints (URIs) respond to client requests.",
        date: new Date(Date.now())
    },
    {
        category: "Express",
        subject: "Using Express Middleware", 
        url: " ",
        synopsis: "A tutorial in helping to convey the logic of how Express applications are essentially a series of middleware function calls.",
        date: new Date(Date.now())
    },
    {
        category: "ReactJS",
        subject:  "Latest ReactJS Examples", 
        url: " ",
        synopsis: "Great examples and inspiration in building ReactJS applications.",
        date: new Date(Date.now())
    },
    {
        category: "ReactJS",
        subject:  "React State vs Props Explained",
        url: " ",
        synopsis: "Basic tutorial explaining and comparing React components to plain functions.",
        date: new Date(Date.now())
    },
    {
        category: "ReactJS",
        subject: "Rules of Hooks in React",
        url: " ",
        synopsis: "Tutorial on how to follow the rules in utilizing the JavaScript function of hooks in React.",
        date: new Date(Date.now())
    },
    { 
        category: "ReactJS",
        subject: "Fragments-React",
        url: " ",
        synopsis: "Tutorial on the motivation, usage and syntax of fragments in ReactJS.",
        date: new Date(Date.now())
    },
    {
        category: "Node.js",
        subject: "What exactly is Node.js?",
        url: " ",        
        synopsis: "Informative tutorial explaining how Node.js' run time environment includes everything one would need to execute a program written in JavaScript.",
        date: new Date(Date.now())
    },
    {
        category: "Node.js",
        subject: "Read Files with Node.js",
        url: " ",
        synopsis: "An informative tutorial on how to open and read files utilizing the fs method in Node.js.",
        date: new Date(Date.now())
    },
    {
        category: "Node.js",
        subject: "Understanding module.exports and exports in Node.js",
        url: " ",
        synopsis: "Informing tutorial on how modules essentially make our lives as developers easier, as we can utilize them them to augment our applications with functionality that we haven’t had to write ourselves.",
        date: new Date(Date.now())
    },
    {
        category: "Node.js",
        subject:  "How to Deploy a Node.js App to Heroku",
        url: " ",
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