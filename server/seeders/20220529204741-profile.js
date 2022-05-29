"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "profiles",
      [
        {
          about: "test for seeder",
          old: 20,
          address: "kota cimahi",
          phone: 81222333,
          role: "frontend",
          idUser: 2,
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("profiles", null, {});
  },
};
