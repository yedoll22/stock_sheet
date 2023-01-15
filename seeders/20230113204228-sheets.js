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
   * pattern: {
        type: DataTypes.STRING(10),
      },
      type: {
        type: DataTypes.STRING(10),
        allowNull: false,
      },
      width: {
        type: DataTypes.INTEGER,
      },
      height: {
        type: DataTypes.INTEGER,
      },
   */
    await queryInterface.bulkInsert(
      "Sheets",
      [
        {
          pattern: "F013-실버",
          type: "350IV",
          width: 590,
          height: 510,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          pattern: "F013-투명",
          type: "350IV",
          width: 590,
          height: 510,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          pattern: "HP38",
          type: "350IV",
          width: 590,
          height: 510,
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        // ---------------------------------------------

        {
          pattern: "DP01",
          type: "350B/W",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          pattern: "F009",
          type: "350B/W",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          pattern: "F013-투명",
          type: "350B/W",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          pattern: "H106",
          type: "350B/W",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          pattern: "HM01",
          type: "350B/W",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          pattern: "HP10",
          type: "350B/W",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          pattern: "HP42",
          type: "350B/W",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          pattern: "HP62",
          type: "350B/W",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          pattern: "K294",
          type: "350B/W",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          pattern: "K321",
          type: "350B/W",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          pattern: "KF004",
          type: "350B/W",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          pattern: "KF019",
          type: "350B/W",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          pattern: "KF023",
          type: "350B/W",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          pattern: "KP12-투명",
          type: "350B/W",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          pattern: "KP38",
          type: "350B/W",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          pattern: "KP63",
          type: "350B/W",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          pattern: "KP85",
          type: "350B/W",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          pattern: "KX165",
          type: "350B/W",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          pattern: "MP05",
          type: "350B/W",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          pattern: "S003",
          type: "350B/W",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          pattern: "KF015",
          type: "350B/W",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          pattern: "K254",
          type: "350B/W",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          pattern: "무광은지",
          type: "350B/W",
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        // ---------------------------------------

        {
          pattern: "DP01",
          type: "350B/W",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          pattern: "F009",
          type: "350B/W",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          pattern: "F013-투명",
          type: "350B/W",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          pattern: "H106",
          type: "350B/W",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          pattern: "HM01",
          type: "350B/W",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          pattern: "HP10",
          type: "350B/W",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          pattern: "HP42",
          type: "350B/W",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          pattern: "HP62",
          type: "350B/W",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          pattern: "K294",
          type: "350B/W",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          pattern: "K321",
          type: "350B/W",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          pattern: "KF004",
          type: "350B/W",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          pattern: "KF019",
          type: "350B/W",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          pattern: "KF023",
          type: "350B/W",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          pattern: "KP12-투명",
          type: "350B/W",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          pattern: "KP38",
          type: "350B/W",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          pattern: "KP63",
          type: "350B/W",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          pattern: "KP85",
          type: "350B/W",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          pattern: "KX165",
          type: "350B/W",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          pattern: "MP05",
          type: "350B/W",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          pattern: "S003",
          type: "350B/W",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          pattern: "KF015",
          type: "350B/W",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          pattern: "K254",
          type: "350B/W",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          pattern: "무광은지",
          type: "350B/W",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        // ---------------------------------------
        {
          pattern: "DP01",
          type: "300ART",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          pattern: "HM01",
          type: "300ART",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          pattern: "HM02",
          type: "300ART",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          pattern: "HM03",
          type: "300ART",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          pattern: "HM08",
          type: "300ART",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          pattern: "HP10",
          type: "300ART",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          pattern: "HP38",
          type: "300ART",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          pattern: "HP42",
          type: "300ART",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          pattern: "HP62",
          type: "300ART",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          pattern: "K196",
          type: "300ART",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          pattern: "K229",
          type: "300ART",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          pattern: "K278",
          type: "300ART",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          pattern: "K321",
          type: "300ART",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          pattern: "K321(구)",
          type: "300ART",
          createdAt: new Date(),
          updatedAt: new Date(),
          width: 640,
          height: 469,
        },
        {
          pattern: "KP07",
          type: "300ART",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          pattern: "KP38",
          type: "300ART",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          pattern: "KP63",
          type: "300ART",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          pattern: "KP73",
          type: "300ART",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          pattern: "KP85",
          type: "300ART",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          pattern: "KX165",
          type: "300ART",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          pattern: "MP05",
          type: "300ART",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          pattern: "MP06",
          type: "300ART",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          pattern: "은지",
          type: "300ART",
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
    await queryInterface.bulkDelete("Sheets", null, {});
  },
};
