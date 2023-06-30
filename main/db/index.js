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
    const { tableName, columns } = data;
    const cols = Object.keys(columns).join(', ');
    const values = Object.values(columns)
      .map((value) => (typeof value === 'string' ? `'${value}'` : value))
      .join(',');
    const insertSQL = `INSERT INTO ${tableName} (${cols}) VALUES (${values})`;
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

export async function updateItem(data) {
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

export async function updateRecord(data) {
  return new Promise((resolve, reject) => {
    const { tableName, columns, condition, id } = data;
    console.log(data);
    const updateValues = Object.entries(columns)
      .map(([column, value]) => {
        if (typeof value === 'string') {
          return `${column} = '${value}'`;
        }
        return `${column} = ${value}`;
      })
      .join(', ');

    const updateSQL = `UPDATE ${tableName} SET ${updateValues} WHERE ${condition} = '${id}'`;
    console.log(updateSQL);
    db.run(updateSQL, function (err) {
      if (err) {
        reject(err);
      } else {
        console.log(`Record updated successfully in ${tableName}`);
        resolve(this.changes);
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

export async function retrieveMembers() {
  return new Promise((resolve, reject) => {
    const selectSQL = `SELECT A.name, A.phoneNumber,A.cnic,B.date, B.paid, B.balance
FROM members A
JOIN payingHistory B ON A.phoneNumber = B.phoneNumber;
`;

    db.all(selectSQL, function (err, rows) {
      if (err) {
        console.error(
          `Error fetching records from Members and payingHistory:`,
          err
        );
        reject(err);
      } else {
        console.log(
          `Fetched records successfully from Members and payingHistory`
        );
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
