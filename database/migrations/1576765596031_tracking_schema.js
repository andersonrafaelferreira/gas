"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class TrackingSchema extends Schema {
  up() {
    this.create("trackings", table => {
      table.increments();
      table.string("proposal_id", 80).notNullable();
      table.float("latitude", 20);
      table.float("longitude", 20);
      table.timestamps();
    });
  }

  down() {
    this.drop("trackings");
  }
}

module.exports = TrackingSchema;
