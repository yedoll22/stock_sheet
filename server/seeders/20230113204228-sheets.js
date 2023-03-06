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
    await queryInterface.bulkInsert(
      "Sheets",
      [
        {
          // id: "F013_350IV",
          pattern: "F013-실버",
          type: "350IV",
          width: 590,
          height: 510,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          // id: "F013-투명_350IV",
          pattern: "F013-투명",
          type: "350IV",
          width: 590,
          height: 510,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          // id: "HP38_350IV",
          pattern: "HP38",
          type: "350IV",
          width: 590,
          height: 510,
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        // ---------------------------------------------

        {
          // id: "DP01_350BW",
          pattern: "DP01",
          type: "350BW",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          // id: "F009_350BW",
          pattern: "F009",
          type: "350BW",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          // id: "F013-투명_350BW",
          pattern: "F013-투명",
          type: "350BW",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          // id: "H106_350BW",
          pattern: "H106",
          type: "350BW",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          // id: "HM01_350BW",
          pattern: "HM01",
          type: "350BW",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          // id: "HP10_350BW",
          pattern: "HP10",
          type: "350BW",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          // id: "HP42_350BW",
          pattern: "HP42",
          type: "350BW",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          // id: "HP62_350BW",
          pattern: "HP62",
          type: "350BW",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          // id: "K294_350BW",
          pattern: "K294",
          type: "350BW",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          // id: "K321_350BW",
          pattern: "K321",
          type: "350BW",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          // id: "KF004_350BW",
          pattern: "KF004",
          type: "350BW",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          // id: "KF019_350BW",
          pattern: "KF019",
          type: "350BW",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          // id: "KF023_350BW",
          pattern: "KF023",
          type: "350BW",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          // id: "KP12_350BW",
          pattern: "KP12-투명",
          type: "350BW",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          // id: "KP38_350BW",
          pattern: "KP38",
          type: "350BW",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          // id: "KP63_350BW",
          pattern: "KP63",
          type: "350BW",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          // id: "KP85_350BW",
          pattern: "KP85",
          type: "350BW",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          // id: "KX165_350BW",
          pattern: "KX165",
          type: "350BW",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          // id: "MP05_350BW",
          pattern: "MP05",
          type: "350BW",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          // id: "S003_350BW",
          pattern: "S003",
          type: "350BW",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          // id: "KF015_350BW",
          pattern: "KF015",
          type: "350BW",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          // id: "K254_350BW",
          pattern: "K254",
          type: "350BW",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          // id: "무광은지_350BW",
          pattern: "무광은지",
          type: "350BW",
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        // ---------------------------------------

        {
          // id: "DP01_300ART",
          pattern: "DP01",
          type: "300ART",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          // id: "HM01_300ART",
          pattern: "HM01",
          type: "300ART",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          // id: "HM02_300ART",
          pattern: "HM02",
          type: "300ART",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          // id: "HM03_300ART",
          pattern: "HM03",
          type: "300ART",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          // id: "HM08_300ART",
          pattern: "HM08",
          type: "300ART",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          // id: "HP10_300ART",
          pattern: "HP10",
          type: "300ART",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          // id: "HP38_300ART",
          pattern: "HP38",
          type: "300ART",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          // id: "HP42_300ART",
          pattern: "HP42",
          type: "300ART",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          // id: "HP62_300ART",
          pattern: "HP62",
          type: "300ART",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          // id: "K196_300ART",
          pattern: "K196",
          type: "300ART",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          // id: "K229_300ART",
          pattern: "K229",
          type: "300ART",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          // id: "K278_300ART",
          pattern: "K278",
          type: "300ART",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          // id: "K321_300ART",
          pattern: "K321",
          type: "300ART",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          // id: "K321(구)_300ART",
          pattern: "K321(구)",
          type: "300ART",
          createdAt: new Date(),
          updatedAt: new Date(),
          width: 640,
          height: 469,
        },
        {
          // id: "KP07_300ART",
          pattern: "KP07",
          type: "300ART",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          // id: "KP38_300ART",
          pattern: "KP38",
          type: "300ART",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          // id: "KP63_300ART",
          pattern: "KP63",
          type: "300ART",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          // id: "KP73_300ART",
          pattern: "KP73",
          type: "300ART",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          // id: "KP85_300ART",
          pattern: "KP85",
          type: "300ART",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          // id: "KX165_300ART",
          pattern: "KX165",
          type: "300ART",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          // id: "MP05_300ART",
          pattern: "MP05",
          type: "300ART",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          // id: "MP06_300ART",
          pattern: "MP06",
          type: "300ART",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          // id: "은지_300ART",
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
