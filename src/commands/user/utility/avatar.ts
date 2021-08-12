import { MessageEmbed } from "discord.js";
import { BotCommand } from "@extensions/BotCommand";

export default class avatar extends BotCommand {
	constructor() {
		super("avatar", {
			aliases: ["avatar"],
			description: "Show someones avatar",
			usage: "$avatar",
			cooldown: 2000,

			args: [
				{
					id: "user",
					type: "member",
					match: "restContent",
					default: (message) => message.author,
				},
			],

			slash:true,
			slashOptions: [
				{
					name: 'user',
					description: 'A users avatar',
					type:'USER',  
					required: true
				}
			]
		});
	}

	async exec(message, args) {
	
		let user
        
        if (args.user) {user = this.client.util.resolveUser(args.user, this.client.users.cache)}
        else user = message.author


		const avatar = user.displayAvatarURL({ size: 4096, dynamic: true });

		const embed = new MessageEmbed()
            .setDescription(`**${user.tag}'s Avatar**`)
            .setImage(avatar)
            .setColor("RANDOM");
		await message.reply({ embeds: [embed] });
	}
}
