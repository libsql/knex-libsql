# knex-libsql

A [Knex][knex] dialect for [libSQL/sqld][sqld], using the [`@libsql/sqlite3`][libsql-node-sqlite3] package
that emulates `sqlite3`.

[knex]: https://github.com/knex/knex
[sqld]: https://github.com/libsql/sqld
[libsql-node-sqlite3]: https://github.com/libsql/libsql-node-sqlite3

## Installation

```shell
npm install @libsql/knex-libsql
```

## Usage

```javascript
const Client_Libsql = require('@libsql/knex-libsql');
const Knex = require("knex");

const knex = Knex({
    client: Client_Libsql,
    connection: {
        filename: "libsql://localhost:8080?tls=0",
    },
});
```

### URL

The library accepts the same URLs as [`@libsql/sqlite3`][libsql-node-sqlite3-url]:

- `http://` and `https://` connect to a libsql server over HTTP,
- `ws://` and `wss://` connect to the server over WebSockets,
- `libsql://` connects to the server using the default protocol (which is now HTTP). `libsql://` URLs use TLS by default, but you can use `?tls=0` to disable TLS (e.g. when you run your own instance of the server locally).

To use a JWT for authentication, you can use the `authToken` query parameter (for example,
`ws://localhost?authToken=<token>`).

You can also pass a `file:` URL to use a local file, like `file:test.db` or `file:/tmp/test.db`.

## License

This project is licensed under the MIT license.

### Contribution

Unless you explicitly state otherwise, any contribution intentionally submitted for inclusion in `@libsql/knex-libsql` by you, shall be licensed as MIT, without any additional terms or conditions.
