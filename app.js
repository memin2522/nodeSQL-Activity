const SqlConnection = require('./connection');
const db = new SqlConnection();


//Create 
async function CreateStudent(cedula, name) {
    try {
        const results = await db.query('INSERT INTO student (cedula, name) VALUES (?,?)', [cedula, name]);
        console.log('Results:', results);
    } catch (err) {
        console.error('Error:', err);
    }
}

//Recover
async function GetAllStudents() {
    try {
        const results = await db.query('SELECT * FROM student');
        console.log('Results:', results);
    } catch (err) {
        console.error('Error:', err);
    }
}

async function GetStudentByCedula(cedula) {
    try {
        const results = await db.query('SELECT * FROM student WHERE cedula = ?', [cedula]);
        console.log('Results:', results);
    } catch (err) {
        console.error('Error:', err);
    }
}

//Update
async function UpdateStudentByCedula(cedula) {
    try {
        const results = await db.query('UPDATE student SET name = "Sergio Reyes" WHERE cedula = ?', [cedula]);
        console.log('Results:', results);
    } catch (err) {
        console.error('Error:', err);
    }
}

//Delete
async function DeleteStudentByCedula(cedula) {
    try {
        const results = await db.query('DELETE FROM student WHERE cedula = ?', [cedula]);
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
        //await CreateStudent("1000284236", "Memo Reyes");
        await GetAllStudents();
        await GetStudentByCedula("1000284236");
        await UpdateStudentByCedula("1000284236");
        await DeleteStudentByCedula("1000284236");   
    } catch (err) {
        console.error('Error:', err);
    } finally {
        await db.closeConnection();
    }
}

testCrud();