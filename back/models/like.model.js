module.exports = (sequelize, Sequelize) => {
  class Like extends Sequelize.Model {
    static createTable() {
      return this.init(
        {
          likeid: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
          },
          boardid: {
            type: Sequelize.INTEGER,
            allowNull: false,
          },
          userid: {
            type: Sequelize.STRING(30),
            allowNull: false,
          },
        },
        {
          sequelize,
        }
      );
    }
  }
  Like.createTable();
};
