const SqlConnection = require('./connection');
const db = new SqlConnection();

async function getAllSongs() {
    try {
        const results = await db.query('SELECT * FROM song');
        console.log('Results:', results);
    } catch (err) {
        console.error('Error:', err);
    }
}

/*
 Dentro de esta función tiene que ir los nombres de cada una de las funciones que crearon para el CRUD
 Solamente cambien el nombre de la funcion y agreguen las lineas nuevas.
*/
async function testCrud(){
    try {
        await db.connectToDb();
        await getAllSongs();       
    } catch (err) {
        console.error('Error:', err);
    } finally {
        await db.closeConnection();
    }
}

testCrud();