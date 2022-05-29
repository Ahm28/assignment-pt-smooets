"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "users",
      [
        {
          username: "test",
          email: "test@mail.com",
          password:
            "$2b$10$7ovHDrtaMe.FmutXxEhnWOo7rDOdTloUMgqms5RXYmL5/4dfM.OTm", //123456
          showPassword: null,
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("users", null, {});
  },
};
