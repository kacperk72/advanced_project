import {createPool} from "mysql2/promise";

export const pool = createPool({
    host: 'localhost',
    user: 'root',
    database: 'ogloszenia',
    namedPlaceholders: true,
    decimalNumbers: true,
})
