module.exports = (sequelize, DataTypes) => {
    const TodoStatus = {
        COMPLETED: 'COMPLETED',
        PENDING: 'PENDING',
    };
    const Todo = sequelize.define("Todo", {
        description: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        status: {
            type: DataTypes.ENUM,
            values: [TodoStatus.COMPLETED, TodoStatus.PENDING],
            allowNull: false,
        }
    })

    return Todo
}