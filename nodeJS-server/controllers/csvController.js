const fs = require("fs");
const path = require('path');
let csvToJson = require('convert-csv-to-json');
const csvFilePath = path.resolve(__dirname, '../users.csv')

exports.insertUsersToCSV = async (users) => {
    console.info("insertUsersToCSV")
    try {
        users.forEach(user => {
            let csvRow = '';
            Object.entries(user).forEach(([ key,value]) => {
                csvRow += `${value}, `;
            });
            csvRow += '\n';
            insertToCSV(csvFilePath, csvRow);
        });
    } catch (err) {
        console.error(err);
        throw err;
    }
}

const insertToCSV = (path, csvRow) => {
    console.info("insertToCSV")
    try {
        fs.appendFileSync(path, csvRow);
    } catch (err) {
        console.error(err);
        throw err;
    }
}

exports.getUsersFromCSV = async () => {
    console.info("getUsersFromCSV")
    try {
        let usersArray = csvToJson.fieldDelimiter(',').getJsonFromCsv(csvFilePath);
        return {users: usersArray};
    } catch (err) {
        console.error(err);
        throw err;
    }
}

exports.getUserFromCSV = async (userName) => {
    console.info("getUserFromCSV")
    this.user = {};
    try {
        let usersArray = csvToJson.fieldDelimiter(',').getJsonFromCsv(csvFilePath);
        await usersArray.forEach(user => {
            if (user.userName === userName) {
                this.user = user;
            }
        })
        return this.user;
    } catch (err) {
        console.error(err);
        throw err;
    }
}


