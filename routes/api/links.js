const router = require("express").Router();
const linksController = require("../../controllers/linksController");

// Matches with "/api/links"
router.route("/");
// Matches with "/api/links"
router.route("/links")
    .get(linksController.findAll)
    .post(linksController.create);

// Matches with "/api/links/:id"
router.route("/links/:id")
    .get(linksController.findById)
    .put(linksController.update)

router.route("/links/category/:category")
    .get(linksController.category)



module.exports = router;