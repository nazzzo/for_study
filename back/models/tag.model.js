module.exports = (sequelize, Sequelize) => {
    class Tag extends Sequelize.Model {
      static createTable() {
        return this.init(
          {
            tagname: {
              type: Sequelize.STRING(30),
              allowNull: true,
            },
            tagid: {
              type: Sequelize.INTEGER,
              primaryKey: true,
              autoIncrement: true,
            },
          },
          {
            sequelize
          }
        );
      }
    }
    Tag.createTable();
  };
  