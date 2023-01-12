module.exports = (sequelize, Sequelize) => {
    class Board extends Sequelize.Model {
      static createTable() {
        return this.init(
          {
            boardid: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true,
              },
            subject: {
              type: Sequelize.STRING(100),
              allowNull: false,
            },
            content: {
              type: Sequelize.TEXT,
              allowNull: false,
            },
            hit: {
              type: Sequelize.INTEGER,
              defaultValue: 0,
            },
            userid: {
              type: Sequelize.STRING(30),
              allowNull: true,
            },
          },
          {
            sequelize,
          }
        );
      }
      static associate(models) {
        this.belongsTo(models.User, {
          foreignKey: "userid",
        });
      }
    }
    Board.createTable();
    return Board;
  };