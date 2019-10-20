const backup = require('./src');
const cache = require('./src/fifo')();

setInterval(async () => {
	const date = new Date;

	if ((date.getHours() === 0 || date.getHours() === 12 ) && date.getMinutes() === 0) {
		const fileName = await backup();
	
		await cache.set(fileName);
	}
}, 60000);