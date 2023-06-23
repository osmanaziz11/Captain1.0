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
          setTimeout(() => {
            resolve();
          }, 3000);
        })
        .catch((err) => {
          reject(err);
        });
    });
  });
}

export async function insertRecord(data) {
  return new Promise((resolve, reject) => {
    const { tableName, record } = data;
    const columns = Object.keys(record).join(', ');
    const values = Object.values(record)
      .map((value) => (typeof value === 'string' ? `'${value}'` : value))
      .join(',');

    const insertSQL = `INSERT INTO ${tableName} (${columns}) VALUES (${values})`;

    db.run(insertSQL, function (err) {
      if (err) {
        reject(err);
      } else {
        console.log(`Record inserted successfully into ${tableName}`);
        resolve(this.lastID);
      }
    });
  });
}

export async function updateItems(data) {
  return new Promise((resolve, reject) => {
    const { tableName, columns } = data;

    const updateSQL = `UPDATE items SET sold = sold + ? WHERE name = ?`;
    const values = [parseInt(columns.quantity.split(' ')[1][0]), columns.name];

    db.run(updateSQL, values, function (err) {
      if (err) {
        console.error(err);
        reject(err);
      } else {
        console.log(`Record updated successfully in items table`);
        resolve();
      }
    });
  });
}

export async function fetchRecords(tableName) {
  return new Promise((resolve, reject) => {
    const selectSQL = `SELECT * FROM ${tableName}`;

    db.all(selectSQL, function (err, rows) {
      if (err) {
        console.error(`Error fetching records from ${tableName}:`, err);
        reject(err);
      } else {
        console.log(`Fetched records successfully from ${tableName}`);
        resolve(rows);
      }
    });
  });
}

export async function deleteRecord(data) {
  return new Promise((resolve, reject) => {
    const { tableName, col, condition } = data;
    const deleteSQL = `DELETE FROM ${tableName} WHERE ${col} = "${condition}"`;
    console.log(deleteSQL);

    db.run(deleteSQL, function (err) {
      if (err) {
        reject(err);
      } else {
        console.log(`Record deleted successfully from ${tableName}`);
        resolve();
      }
    });
  });
}

export async function fetchRecord(data) {
  return new Promise((resolve, reject) => {
    const getSQL = `Select * FROM memberHistory WHERE phoneNumber = "${data}" ORDER BY date DESC;`;
    db.all(getSQL, function (err, rows) {
      if (err) {
        reject(err);
      } else {
        console.log(`Record fetched successfully from memberHistory`);
        resolve(rows);
      }
    });
  });
}
