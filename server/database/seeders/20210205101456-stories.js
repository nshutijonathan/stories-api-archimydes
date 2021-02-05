"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert(
      "stories",
      [
        {
          summary: "Fixing heroku issues",
          description: "our application fails in production",
          type: "bugfix",
          complexity: "Low",
          estimated_time_of_completion: "12hrs",
          cost: "viewing logs",
          status: "new",
          approved: true,
          rejected: false,
          added_by: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          summary: "Write tests ",
          description: "our application's test coverage is low",
          type: "enhancment",
          complexity: "Mid",
          estimated_time_of_completion: "12hrs",
          cost: "writting unit tests",
          status: "new",
          approved: true,
          rejected: false,
          added_by: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          summary: "Implement login",
          description:
            "Design and implement Auth microservice to users to log in ",
          type: "developement",
          complexity: "Hign",
          estimated_time_of_completion: "2days",
          cost: "Writing API endpoints",
          status: "new",
          approved: true,
          rejected: false,
          added_by: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
