const router = require("express").Router();
const userRoutes = require("./user");
const path = require("path");

// API routes
router.use("/api/user", userRoutes);
// If no API routes are hit, send the React app
router.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"), function (err) {
    if (err) {
      res.status(500).send(err);
    }
  });
});
module.exports = router;
