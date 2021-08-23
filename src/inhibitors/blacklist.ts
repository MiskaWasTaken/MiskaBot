import { BotInhibitor } from '@extensions/BotInhibitor';
const db = require('quick.db')


class BlacklistInhibitor extends BotInhibitor {
	constructor() {
		super('blacklist', {
			reason: 'blacklist'
		});
	}

	async exec(message) {

		//you dont even deserve the honor of being in my database | haha sike im making a database - miska
		const blacklist = await db.get('list')
		// const blacklist = ['600875620808785941']
		// const log = db.get('list')
		// console.log(log)
		//  console.log(blacklist)
		return blacklist.includes(message.author.id)
	}
}

module.exports = BlacklistInhibitor;