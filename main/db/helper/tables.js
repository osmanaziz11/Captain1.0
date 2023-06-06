const Schema = [
  {
    tableName: 'categories',
    columns: 'name TEXT PRIMARY KEY',
  },
  {
    tableName: 'items',
    columns:
      'category TEXT, name TEXT, purchasePrice REAL, salePrice REAL, quantity INTEGER, thumbnail TEXT,sold INTEGER DEFAULT 0, PRIMARY KEY (name, category), FOREIGN KEY (category) REFERENCES categories(name)',
  },
];
export default Schema;
