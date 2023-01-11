module.exports = (sequelize, Sequelize) => {
    class Comment extends Sequelize.Model {
        static createTable() {
            return this.init ({
                // init은 정적 메서드. 실행주체는 Comment class입니다
                userid: {
                    type: Sequelize.STRING(30),
                    allowNull: false,
                },
                content: {
                    type: Sequelize.TEXT(),
                    allowNull: false,
                }
            },
            {
                // init 메서드로 생성한 테이블 정보를 아래 인스턴스에 전달해야 합니다
                sequelize: sequelize
            }
            )
        }
    }
    Comment.createTable()
}