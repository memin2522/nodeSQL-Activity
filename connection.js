const mysql = require('mysql2');
const config = {
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'icetex'
};

class SqlConnection{
    constructor(){
        this.connection = mysql.createConnection(config);
    }
    
    connectToDb(){
        return new Promise((resolve, reject) => {
            this.connection.connect((err) => {
                if (err) {
                    return reject(err);
                }
                console.log('Conexión exitosa a MySQL');
                resolve();
            });
        });
    }
    
    query(sql, args) {
        return new Promise((resolve, reject) => {
          this.connection.query(sql, args, (err, results) => {
            if (err) {
              return reject(err);
            }
            resolve(results);
          });
        });
    }
    
    closeConnection() {
        return new Promise((resolve, reject) => {
          this.connection.end((err) => {
            if (err) {
              return reject(err);
            }
            resolve();
          });
        });
      }
    
}

module.exports=SqlConnection;


