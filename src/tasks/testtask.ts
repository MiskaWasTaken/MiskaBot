import { BotTasks } from '@extensions/BotTasks'


export default class extends BotTasks {
	constructor() {
		super("counter", {
			delay: 3600000,
			runOnStart: false
		});
	}
	async exec() {
		const guild = this.client.guilds.cache.get('794739329956053063');

          const userCount = guild.memberCount;
          const channel = guild.channels.cache.get('864182952937127948');
        channel.setName(`Total Members: ${userCount.toLocaleString()}`);
        console.log("Updating Member Count For Glowstik's Git Repo");
   
    }}
