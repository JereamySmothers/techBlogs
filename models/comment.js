const { Model, DataTypes } = require('sequelize');
const { model } = require('../../classRepo/UofO-VIRT-BO-FSF-PT-04-2022-U-B/14-MVC/05-Module-Project/lesson-files/14.5/config/connection');
const sequelize = require('./config/connection');

class Comment extends Model {}

Comment.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        comment_text: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'id',
            }
        },
        post_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'post',
                key: 'id',
            }
        }
    },{
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'comment'
    }
);

model.exports = Comment;