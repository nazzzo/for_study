class CommentController {
  constructor({ commentService }) {
    this.commentService = commentService;
  }
  async getList(req, res, next) {
    try {
      const response = await this.commentService.getList();
      res.json(response);
    } catch (e) {
      next(e);
    }
  }
  async postComment(req, res, next) {
    try {
      if (!req.body.content) throw new Error("내용이 없습니다");
      req.body.userid = "web7722";
      const { userid, content } = req.body;
      console.log(`req.body :`, { userid, content });
      const response = await this.commentService.postComment({
        userid,
        content,
      });
      res.status(201).json(response);
    } catch (e) {
      next(e);
    }
  }
  async putComment(req, res, next) {
    try {
      if (!req.params.id) throw new Error("수정할 댓글이 없습니다");
      if (!req.body.content) throw new Error("수정할 내용을 입력해주세요");
      console.log(`putController:`, req.params.id, req.body.content);
      const response = await this.commentService.putComment(
        req.params.id,
        req.body.content
      );
      res.status(201).json(response);
    } catch (e) {
      next(e);
    }
  }
  async deleteComment(req, res, next) {
    try {
      if (!req.params.id) throw new Error("삭제할 댓글이 없습니다");
      const response = await this.commentService.deleteComment(req.params.id);
      res.status(201).json(response);
    } catch (e) {
      next(e);
    }
  }
}

module.exports = CommentController;

  