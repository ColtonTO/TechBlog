const router = require("express").Router();
const homeRoutes = require("./home-routes")
const commentRoutes = require("./api/comment-routes")
const userRoutes = require("./api/user-routes")
const postRoutes = require("./api/post-routes")

router.use("/", homeRoutes);
router.use("/api/comments", commentRoutes)
router.use("/api/users", userRoutes)
router.use("/api/post", postRoutes)

module.exports = router;