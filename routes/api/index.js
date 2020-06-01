const router = require("express").Router();
const linkRoutes = require("./links");


// link routes
router.use("/", linkRoutes);

module.exports = router;
