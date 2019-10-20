const mysqldump = require('mysqldump');
const path = require('path');
const fs = require('fs').promises;
const { db, dump } = require('../config.json');

module.exports = async function backup() {
	const fileName = 'ufwd_dump_' + Date.now();
	
	try {
		await mysqldump({
			connection: db,
			dumpToFile: path.join(__dirname, `../store/${fileName}.sql`),
			dump
		});

		console.log(`[${new Date()}] Backup the database successfully! Created ${fileName}.sql`);
	} catch (error) {
		await fs.unlink(path.join(__dirname, `../store/${fileName}.sql`));

		console.log(`[${new Date()}] Backup the database failed! Error Information: ${error.message}`)
	}

	return fileName;
}

