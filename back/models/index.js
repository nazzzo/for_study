const Sequelize = require("sequelize");
const config = require("../config");
const db = config.db[config.env];

const sequelize = new Sequelize(db.database, db.username, db.password, db);

require("./user.model")(sequelize, Sequelize);
require("./board.model")(sequelize, Sequelize);
require("./comment.model")(sequelize, Sequelize);
require("./like.model")(sequelize, Sequelize);
require("./tag.model")(sequelize, Sequelize);





(async () => {
  await sequelize.sync({ force: true });

const {
  models: { User, Board, Comment, Like, Tag },
} = sequelize

await User.create({ userid:"web7722", userpw:'1234', username: "avante"})
await User.create({ userid:"web8833", userpw:'1234', username: "sonata"})
await User.create({ userid:"web9944", userpw:'1234', username: "porter"})
await User.create({ userid:"admin", userpw:'1234', username: "관리자"})


await Board.create({ subject:"게시글1", content:'1234', userid: "web7722"})
await Board.create({ subject:"게시글2", content:'1234', userid: "web7722"})
await Board.create({ subject:"게시글3", content:'1234', userid: "web8833"})
await Board.create({ subject:"게시글4", content:'1234', userid: "web8833"})
await Board.create({ subject:"게시글5", content:'1234', userid: "web9944"})
await Board.create({ subject:"게시글6", content:'1234', userid: "web9944"})
await Board.create({ subject:"게시글7", content:'1234', userid: "admin"})
await Board.create({ subject:"게시글8", content:'1234', userid: "admin"})

await Comment.create({ boardid:2 ,content:'댓글1', userid: "web7722"})
await Comment.create({ boardid:3 ,content:'댓글2', userid: "web8833"})
await Comment.create({ boardid:4 ,content:'댓글3', userid: "web9944"})
await Comment.create({ boardid:4 ,content:'댓글4', userid: "admin"})

await Like.create({ boardid:3, userid: "web7722"})
await Like.create({ boardid:4, userid: "web8833"})
await Like.create({ boardid:5, userid: "web9944"})
await Like.create({ boardid:5, userid: "admin"})


// const board = await Board.findAll({ 
//   raw: true,
//   nest: true, // 가져온 유저 데이터를 객체로 변환 User: { userid: 'admin', userpw: '1234', username: '관리자' }
//   include:[{ model: User }],
// })
// console.log(board)

const [query] = await sequelize.query(`SELECT
A.boardid,
A.subject,
A.createdAt,
A.updatedAt,
A.hit,
A.userid,
B.username,
C.userid,
C.content
FROM Boards as A
JOIN Users as B
ON A.userid = B.userid
JOIN Comments as C
ON A.boardid = C.boardid
WHERE A.boardid;
`)
console.log(query); 
})();


module.exports = {
  sequelize,
  Sequelize,
};





// SELECT
// A.boardid,
// A.subject,
// A.createdAt,
// A.updatedAt,
// A.hit,
// A.userid,
// B.username,
// C.commentid,
// C.userid,
// C.content,
// D.likeid,
// FROM Boards as A
// JOIN Users as B
// ON A.userid = B.userid
// JOIN Comments as C
// ON A.boardid = C.boardid
// JOIN Likes as D
// ON A.boardid = D.boardid;