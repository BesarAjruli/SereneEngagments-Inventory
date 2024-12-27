const {Client} = require('pg')

const SQL = `
CREATE TABLE IF NOT EXISTS inventory (
    id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    name TEXT,
    quantity INTEGER,
    price INTEGER,
    image BLOB
);
`;

async function main() {
    console.log('Seeding...')

    const dbUrl = process.argv[2];

    if (!dbUrl) {
        console.error("Error: No database URL provided.");
        console.log("Usage: node script.js <database-url>");
        process.exit(1); // Exit with failure code
    }

    const client = new Client({
        connectionString: dbUrl,
        ssl: { rejectUnauthorized: false }
    })

    await client.connect()
    await client.query(SQL)
    await client.end()
    console.log('Done')
}

main()