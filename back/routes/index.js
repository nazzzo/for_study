const express = require("express")
const router = express.Router()
const commentRouter = require("../comments/comment.route")
// const userRouter = require

router.use("/comments", commentRouter)

module.exports = router