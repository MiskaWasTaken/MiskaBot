import { BotCommand } from '@extensions/BotCommand';
import { MessageEmbed } from 'discord.js';
const fetch = require('node-fetch'); 



export default class covid extends BotCommand {
    constructor() {
        super('covid', {
            aliases: ['covid'],
            description: 'Covid statistics',
            usage: '$covid',

            args: [
                {
                    id: 'country',
                    type: 'string'
                }
            ],

        })}  
    
    async exec(message, args) {


        const countries = args.country

        const noArgs = new MessageEmbed()
        .setTitle('Invalid Command Usage')
        .setColor('#8153e6')
        .setDescription(`You Can Try Using **$covid all** or **$covid Canada**`)

        if (!countries) {return message.reply({ embeds: [noArgs] })}
		

        if (message.content === "$covid all") {

            fetch(`https://covid19.mathdro.id/api`)
            .then(response => response.json())
            .then(data => {
         
                const confirmed = data.confirmed.value.toLocaleString()
                const recovered = data.recovered.value.toLocaleString()
                const deaths = data.deaths.value.toLocaleString()

                // making the covid embed with the world stats
                const statsCovid = new MessageEmbed()
                .setColor('#f71600')
                .setTitle(`Worldwide COVID-19 Stats 🌎`)
                .addFields(
                    { name: `Confirmed Cases:`, value: `${confirmed}`, inline: true },
                    { name: 'Recovered:', value: `${recovered}`, inline: true },
                    { name: 'Deaths', value: `${deaths}`, inline: true })
                    .setTimestamp()
                    .setFooter(`Requested by: ${message.author.username}`, 'https://i.imgur.com/I8qSDdc.jpg');
                    message.reply({ embeds: [statsCovid] });
            })

           

       
        } else {
    
            fetch(`https://covid19.mathdro.id/api/countries/${countries}`)
            .then(response => response.json())
            .then(data => {

                const confirmed = data.confirmed.value.toLocaleString()
                const  recovered = data.recovered.value.toLocaleString()
                const deaths = data.deaths.value.toLocaleString()

                const statsCovidc = new MessageEmbed()
                .setColor('#f71600')
                .setTitle(`Per-Country COVID-19 Stats 🌎`)
                .addFields(
                    { name: `COVID-19 Stats for:`, value: `${countries}`, inline: true },
                    { name: `Confirmed Cases:`, value: `${confirmed}`, inline: true },
                    { name: 'Recovered:', value: `${recovered}`, inline: true },
                    { name: 'Deaths', value: `${deaths}`, inline: true })
                    .setTimestamp()
                    .setFooter(`Requested by: ${message.author.username}`, 'https://i.imgur.com/I8qSDdc.jpg');  
                    message.reply({ embeds: [statsCovidc] });


            }).catch(e => {
                // if he can't find the country that u said it will send this message
                return message.channel.send('Something went wrong or you provided an invalid country')
            })}}}
