const router = require("express").Router();
const linksController = require("../../controllers/linksController");

// Matches with "/api/links"
router.route("/")
  .get(linksController.findAll)
  .post(linksController.create);

// Matches with "/api/links/:id"
router.route("/:id")
  .get(linksController.findById)
  .put(linksController.update)


module.exports = router;
