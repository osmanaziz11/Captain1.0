import { Schema, db } from './helper';

export async function initDB() {
  return new Promise((resolve, reject) => {
    db.serialize(() => {
      const createTablePromises = Schema.map((tableDef) => {
        const { tableName, columns } = tableDef;
        const createTableSQL = `CREATE TABLE IF NOT EXISTS ${tableName} (${columns})`;

        return new Promise((resolveTable, rejectTable) => {
          db.run(createTableSQL, (err) => {
            if (err) {
              console.error(`Error creating ${tableName} table:`, err);
              rejectTable(err);
            } else {
              console.log(`${tableName} table created successfully`);
              resolveTable();
            }
          });
        });
      });

      Promise.all(createTablePromises)
        .then(() => {
          resolve();
        })
        .catch((err) => {
          reject(err);
        });
    });
  });
}
