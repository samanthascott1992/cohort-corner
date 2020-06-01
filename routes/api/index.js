const router = require("express").Router();
const linkRoutes = require("./links");

// link routes
router.use("/links", linkRoutes);

module.exports = router;
