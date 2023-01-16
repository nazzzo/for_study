class BoardRepository {
  constructor({ Board, Comment, Like , sequelize }) {
    this.Board = Board;
    this.Comment = Comment
    this.Like = Like
    this. sequelize = sequelize
  }
async findAll() {
    try {
      const query = `SELECT 
      A.boardid,
      A.userid, 
      B.username, 
      A.subject, 
      A.createdAt, 
      A.hit, 
      (SELECT COUNT(boardid) FROM Comments WHERE boardid = A.boardid) AS commentCount, 
      (SELECT COUNT(boardid) FROM Likes WHERE boardid = A.boardid) AS likeCount 
      FROM Boards AS A 
      JOIN Users AS B 
      ON A.userid = B.userid 
      ORDER BY A.boardid DESC;`
      const [findAll] = await this.sequelize.query(query);
      return findAll;
    } catch (e) {
      throw new Error(e);
    }
  }

  async findOne(id) {
    try {
      const boardQuery = `SELECT * FROM Boards WHERE boardid = ${id}`;
      const commentQuery = `SELECT * FROM Comments WHERE boardid = ${id}`;
      const likeQuery = `SELECT likeid,boardid,userid FROM Likes WHERE boardid = ${id}`;

      const [boardResult] = await this.sequelize.query(boardQuery);
      const [commentResult] = await this.sequelize.query(commentQuery);
      const [likeResult] = await this.sequelize.query(likeQuery);
      return { view: boardResult, comments: commentResult, likes: likeResult };
    } catch (e) {
      throw new Error(e);
    }
  }
  //   async findAll() {
//     try {
//       const findAll = await this.Board.findAll({
//         order: [["boardid", "DESC"]],
//       });
//       return findAll;
//     } catch (e) {
//       throw new Error(e);
//     }
//   }
//   async findOne(id) {
//     try {
//       const findOne = await this.Board.findOne({
//         where: { boardid: id },
//       });
//       return findOne;
//     } catch (e) {
//       throw new Error(e);
//     }
//   }
  async createBoard(writeData) {
    try {
      const create = await this.Board.create(writeData);
      return create;
    } catch (e) {
      throw new Error(e);
    }
  }
  async updateBoard({ id, subject, content }) {
    console.log('update :', id, subject, content);
    try {
      const update = await this.Board.update(
        {
          subject: subject,
          content: content,
        },
        { where: { boardid: id } }
      );
      return update;
    } catch (e) {
      throw new Error(e);
    }
  }
  async destroyBoard(id) {
    console.log("repo :", id);
    try {
      const destroy = await this.Board.destroy({
        where: { boardid: id },
      });
      return destroy;
    } catch (e) {
      throw new Error(e);
    }
  }

  async createComment(commentData) {
    console.log("repo :", commentData)
    try {
      const create = await this.Comment.create(commentData);
      return create;
    } catch (e) {
      throw new Error(e);
    }
  }
  async updateComment({ id, content }) {
    console.log('update :', id, content);
    try {
      const update = await this.Comment.update(
        {
          content: content,
        },
        { where: { commentid: id } }
      );
      return update;
    } catch (e) {
      throw new Error(e);
    }
  }
  async destroyComment(id) {
    console.log("repo :", id);
    try {
      const destroy = await this.Comment.destroy({
        where: { commentid: id },
      });
      return destroy;
    } catch (e) {
      throw new Error(e);
    }
  }

  async createLike(likeData) {
    console.log("repo :", likeData)
    try {
      const create = await this.Like.create(likeData);
      return create;
    } catch (e) {
      throw new Error(e);
    }
  }
  async destroyLike({ likeid, userid }) {
    console.log("repo :", likeid);
    try {
      const destroy = await this.Like.destroy({
        where: { 
            likeid: likeid,
            userid: userid 
        },
      });
      return destroy;
    } catch (e) {
      throw new Error(e);
    }
  }
}

module.exports = BoardRepository;


