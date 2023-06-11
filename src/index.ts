import { Knex, knex } from "knex";
const Client_SQLite3 = require("knex/lib/dialects/sqlite3");

export default class Client_Libsql extends Client_SQLite3 {
    _driver() {
        return require("@libsql/sqlite3");
    }
}

Object.assign(Client_Libsql.prototype, {
  dialect: 'libsql',

  driverName: 'libsql',
});

module.exports = Client_Libsql
