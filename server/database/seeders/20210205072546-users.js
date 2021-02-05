"use strict";
import usersHelpers from "../../helpers/usersHelpers";
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
      "users",
      [
        {
          firstname: "Frank",
          lastname: "Lampard",
          email: "frank.lampard@gmail.com",
          password: usersHelpers.hashPassword("12345@12"),
          is_admin: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstname: "Lionel",
          lastname: "Messi",
          email: "lionel.messi@gmail.com",
          password: usersHelpers.hashPassword("12345@12"),
          is_admin: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstname: "Christiano",
          lastname: "Lonardo",
          email: "christiano.lonardo@gmail.com",
          password: usersHelpers.hashPassword("12345@12"),
          is_admin: false,
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
