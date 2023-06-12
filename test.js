const Knex = require("knex");
const Client_Libsql = require(".");

const url = process.env.URL ?? "ws://localhost:8080";

let knex;
beforeEach(async () => {
    knex = Knex({
        client: Client_Libsql,
        connection: {
            filename: url,
        },
        useNullAsDefault: true,
    });

    await knex.schema.dropTableIfExists("t");
    await knex.schema.createTable("t", (t) => {
        t.integer("id").primary();
        t.text("a").notNullable();
        t.text("b");
    });
});
afterEach(() => {
    knex.destroy();
});

test("insert and get rows", async () => {
    await knex("t").insert({id: 1, a: "one", b: "ten"});
    await knex("t").insert({id: 2, a: "two", b: "twenty"});

    const rows = await knex("t").select().orderBy("id");
    expect(rows).toEqual([
        {id: 1, a: "one", b: "ten"},
        {id: 2, a: "two", b: "twenty"},
    ]);
});
