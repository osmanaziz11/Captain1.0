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
  {
    tableName: 'members',
    columns: ' name TEXT, phoneNumber TEXT PRIMARY KEY, cnic TEXT',
  },
  {
    tableName: 'membersHistory',
    columns:
      'transId INTEGER,phoneNumber TEXT, date DATE,type TEXT,name TEXT,price TEXT,total REAL,paid REAL, balance REAL, FOREIGN KEY (phoneNumber) REFERENCES members(phoneNumber)',
  },
  {
    tableName: 'payingHistory',
    columns: 'phoneNumber TEXT, date DATE,paid REAL,balance REAL',
  },
  {
    tableName: 'expenses',
    columns: 'date DATE,type TEXT,amount REAL',
  },
  {
    tableName: 'saleHistory',
    columns:
      'name TEXT,date DATE,sold INTEGER,FOREIGN KEY (name) REFERENCES items(name)',
  },
];
export default Schema;
