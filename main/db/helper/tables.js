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
  {
    tableName: 'admin',
    columns: 'username TEXT PRIMARY KEY,password TEXT,name TEXT,email TEXT',
  },
  {
    tableName: 'players',
    columns:
      'id TEXT PRIMARY KEY,name TEXT,gameId TEXT,tableId Text,FOREIGN KEY (gameId) REFERENCES games(id)',
  },
  {
    tableName: 'games',
    columns: 'id TEXT PRIMARY KEY,type TEXT,price REAL',
  },
  {
    tableName: 'tables',
    columns:
      'id TEXT PRIMARY KEY,name TEXT,status INTEGER,gameId TEXT,frame TEXT,FOREIGN KEY (gameId) REFERENCES games(id)',
  },
  {
    tableName: 'discount',
    columns:
      'id TEXT DEFAULT "DIS-D1",canteen REAL DEFAULT 0,game REAL DEFAULT 0',
  },
  {
    tableName: 'gameExpenses',
    columns: 'date DATE,gameType TEXT,cash REAL,expense REAL',
  },
];
export default Schema;
