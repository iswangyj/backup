const config = require('../config.json');
const fs = require('fs').promises;
const path = require('path');

module.exports = function FIFOCache() {
	const capacity = config.capacity || 200;
	const _store = [];

	return {
		async set(key) {
			if (_store.length === capacity) {
				const fileName = _store.shift();

				try {
					await fs.unlink(path.join(__dirname, `../store/${fileName}.sql`));

					console.log(`[${new Date()}] Removed the oldest file successfully! Deleted ${fileName}.sql`);
				} catch (error) {
					console.log(`[${new Date()}] Removed the oldest file failed! Error Information: ${error.message}`)
				}
			}

			_store.push(key);
		}
	}
}