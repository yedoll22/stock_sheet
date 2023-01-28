"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    /**
    * name: {
        type: DataTypes.STRING(10),
        allowNull: false,
      },
      color_code: {
        type: DataTypes.STRING(10),
        allowNull: false,
      },
    */
    await queryInterface.bulkInsert(
      "Storages",
      [
        {
          name: "소부실앞",
          color_code: "#FBE7E9",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "1층밑",
          color_code: "#D4F8D3",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "1층위",
          color_code: "#EDE7FB",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "인쇄실",
          color_code: "#FFF0BB",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
