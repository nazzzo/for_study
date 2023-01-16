module.exports = (sequelize, Sequelize) => {
    class BoardTag extends Sequelize.Model {
      static createTable() {
        return this.init(
          {
            boardid: {
                type: Sequelize.INTEGER,
                allowNull: false,
            },
            tagid: {
                type: Sequelize.INTEGER,
                allowNull: false,
            },
          },
          {
            sequelize
          }
        );
      }
    }
    BoardTag.createTable();
  };
  