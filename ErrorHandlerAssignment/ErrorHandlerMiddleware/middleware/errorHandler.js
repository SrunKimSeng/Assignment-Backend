// Npm packages
const { format } = require('date-fns');
const { v4: uuidv4 } = require('uuid');

// Core modules
const fs = require('fs');
const path = require('path');

const errorHandler = async (err, req, res, next) => {
  console.log('errorHandler triggered:', err.message);
    const logId = uuidv4();
    const timestamp = format(new Date(), 'yyyy-MM-dd HH:mm:ss');
    const logEntry = `${logId} \t [${timestamp}] \t ${err.name}: ${err.message}\n`;

    try {
        if (!fs.existsSync(path.join(__dirname, '..', 'logs'))) {
            fs.mkdirSync(path.join(__dirname, '..', 'logs'));
        }
        await fs.promises.appendFile(path.join(__dirname, '..', 'logs', 'errorLog.txt'), logEntry);
    } catch (fsErr) {
        console.error('Error writing to error log: ', fsErr);
    }
 
    console.error(`${err.name}: ${err.message}`);
    res.status(err.status || 500).send(`<h1>Server Error</h1><p>${err.message}</p>`);
};

module.exports = errorHandler;
