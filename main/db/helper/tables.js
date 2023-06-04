const Schema = [
  {
    tableName: 'users',
    columns: 'id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT',
  },
  {
    tableName: 'products',
    columns: 'id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, price REAL',
  },
  {
    tableName: 'orders',
    columns:
      'id INTEGER PRIMARY KEY AUTOINCREMENT, userId INTEGER, productId INTEGER',
  },
  // Add more table definitions as needed
];
export default Schema;
