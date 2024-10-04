'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Task extends Model {
    static associate(models) {
      // define association here
    }
  }

  Task.init(
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true, // Đánh dấu id là khóa chính
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      isCompleted: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      dueDate: {
        type: DataTypes.DATE,
      },
    },
    {
      sequelize,
      modelName: 'Task',
    }
  );

  return Task;
};
