const db = require("../db/query.js");



async function cleanGameRecords(req, res, next) {
    const oneDay = 86400000;

    await db.deleteManyGameLogs({
        where: {
            startTime: {
                lte: new Date(new Date() - oneDay)
            }
        }
    });

    next();
};

module.exports = cleanGameRecords;