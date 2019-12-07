'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    const { INTEGER, STRING, DATE}= Sequelize
    return queryInterface.createTable('users', {
      user_id: {
         type: INTEGER,
         autoIncrement: true,
         primaryKey: true
      },
      username: {
        type: STRING(255),
        allowNull: false
      },
      email:{
        type: STRING(255),
        allowNull: false
      },
      password:{
        type: STRING(255),
        allowNull: false
      },
      avatarUrl: STRING(255),
      moble: STRING(11),
      sex: { type: INTEGER,
      defaultValue: 0},
      create_at: Sequelize.DATE,
      updated_at: Sequelize.DATE,

    });
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('users');
    /*

      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
  }
};
