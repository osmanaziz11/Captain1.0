const Schema = [
  {
    tableName: 'categories',
    columns: 'name TEXT PRIMARY KEY, id INTEGER',
  },
  {
    tableName: 'items',
    columns:
      'id INTEGER PRIMARY KEY AUTOINCREMENT, category TEXT, name TEXT, price REAL, thumbnail TEXT, FOREIGN KEY (category) REFERENCES categories(name)',
  },
  {
    tableName: 'orders',
    columns:
      'id INTEGER PRIMARY KEY AUTOINCREMENT, userId INTEGER, productId INTEGER',
  },
  // Add more table definitions as needed
];
export default Schema;
