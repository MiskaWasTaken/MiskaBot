import { BotTasks } from '@extensions/BotTasks'


export default class extends BotTasks {
	constructor() {
		super("counter", {
			delay: 3600000,
			runOnStart: false
		});
	}
	async exec() {
		const guild = this.client.guilds.cache.get('868532678318780496');

          const userCount = guild.memberCount;
          const channel = guild.channels.cache.get('868532678318780501');
        channel.setName(`Total Members: ${userCount.toLocaleString()}`);
        console.log("Updating Member Count For Glowstik's Git Repo");
   
    }}
