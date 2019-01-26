const path = require("path");
const router = require("express").Router();
const bookRoutes = require("./books");
const googleRoutes = require("./google");

//book route
router.use("/books", bookRoutes);

//google route
router.use("/google", googleRoutes);

//render html
router.use(function(req, res) {
    res.sendFile(path.join(__dirname, "./public/index.html"));
});

module.exports = router;