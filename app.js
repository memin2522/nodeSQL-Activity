const SqlConnection = require('./connection');

const db = new SqlConnection();

async function getAllSongs() {
    try {
        await db.connectToDb();
        const results = await db.query('SELECT * FROM song');
        console.log('Results:', results);
    } catch (err) {
        console.error('Error:', err);
    } finally {
        await db.closeConnection();
    }
}
getAllSongs();