'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('shops', {
      id: {
         type: Sequelize.INTEGER,
         autoIncrement: true,
         primaryKey: true
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      thumb_url: Sequelize.STRING,
      create_at: Sequelize.DATE,
      updated_at: Sequelize.DATE,
    })
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('shops');

    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
  }
};
