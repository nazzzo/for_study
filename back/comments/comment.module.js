// const {
//     sequelize: {
//       models: { Comment },
//     },
//     sequelize,
//   } = require("../models/index");
  
//   const CommentRepository = require("./comment.repository");
//   const CommentService = require("./comment.service");
//   const CommentController = require("./comment.controller");
//   const config = require("../config");
  
//   const repository = new CommentRepository({ Comment });
//   const service = new CommentService({ commentRepository: repository, config });
//   const controller = new CommentController({ commentService: service });
  

// // repository.findAll().then(v=>console.log(v))
// // repository.create({userid:"web7722", content:"hello world"}).then(v=>console.log(v))
// // repository.update({id:3,content:"수정 테스트"}).then(v=>console.log(v))
// // service.putComment({id:4,content:"수정 테스트"}).then(v=>console.log(v))
// // repository.destroy(5).then(v=>console.log(v))

// module.exports = {
//     repository,
//     service,
//     controller,
//   };