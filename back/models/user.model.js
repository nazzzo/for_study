module.exports = (sequelize, Sequelize) => {
    class User extends Sequelize.Model {
      static createTable() {
        return this.init(
          {
            userid: {
              type: Sequelize.STRING(30),
              primaryKey: true,
            },
            userpw: {
              type: Sequelize.STRING(64),
              allowNull: false,
            },
            username: {
              type: Sequelize.STRING(20),
              alllowNull: false,
            },
          },
          {
            sequelize,
          }
        );
      }
      // static associate(models) {
      //   this.hasMany(models.Board, {
      //     foreignKey: "userid",
      //   });
      // }
    }
    User.createTable();
  
    return User;
  };
  