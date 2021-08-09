import { BotCommand } from '@extensions/BotCommand';
import { MessageEmbed } from 'discord.js';
const Math = require('math.js');

export default class hug extends BotCommand {
    constructor() {
        super('hug', {
            aliases: ['hug'],
            description: 'Hug someone',
            usage: '$hug @user',
            cooldown: 2000,
            args: [
                {
                    id: 'user',
                    type: 'user',
                    match: 'restContent'
                },

        ],

        slash:true,
        slashOptions: [
            {
                name: 'user',
                description: 'the person you want to hug',
                type:'USER' //says you hugged undefined 
            }
        ]

        })
    }
    async exec(message, args) {

       const images = [
            "https://media3.giphy.com/media/od5H3PmEG5EVq/giphy.gif?cid=790b7611d83ae7330719da9abb0a6ce1247b71e8834a1d9b&rid=giphy.gif&ct=g",
            "https://media1.giphy.com/media/GMFUrC8E8aWoo/giphy.gif?cid=790b7611d8e34ecf787888c3dfbe12fad9cf2b2241adf13c&rid=giphy.gif&ct=g",
            "https://media4.giphy.com/media/3bqtLDeiDtwhq/giphy.gif?cid=790b7611dcf86226465771065504da689f7764aa49231c06&rid=giphy.gif&ct=g",
            "https://media.giphy.com/media/sUIZWMnfd4Mb6/giphy.gif",
            "https://media1.giphy.com/media/IRUb7GTCaPU8E/giphy.gif?cid=790b7611d5de806d23c37a6aa68aeac92eac6c616507d1d4&rid=giphy.gif&ct=g",
            "https://media0.giphy.com/media/lrr9rHuoJOE0w/giphy.gif?cid=790b761160c4f5187de80dc1385d7118eb50e16e2619f881&rid=giphy.gif&ct=g",
            "https://media0.giphy.com/media/ZQN9jsRWp1M76/giphy.gif?cid=790b76118fccd6bab25e9aff0ceb3211ccbab641ace82adf&rid=giphy.gif&ct=g",            
            "https://media2.giphy.com/media/5eyhBKLvYhafu/giphy.gif?cid=790b761113a546f4b114b93d7dbbebcb80470e438dbde73e&rid=giphy.gif&ct=g",            
            "https://media3.giphy.com/media/pXQhWw2oHoPIs/giphy.gif?cid=790b7611d1c696f8afd499584af0a950d12166ccef2fe3ea&rid=giphy.gif&ct=g",
            "https://media2.giphy.com/media/3ZnBrkqoaI2hq/giphy.gif?cid=790b7611a0cd20ab0dc417fee1d3818ae55ca91e8fda9d51&rid=giphy.gif&ct=g",
            "https://media1.tenor.com/images/1069921ddcf38ff722125c8f65401c28/tenor.gif?itemid=11074788",
            "https://media1.tenor.com/images/6db54c4d6dad5f1f2863d878cfb2d8df/tenor.gif?itemid=7324587",
            "https://media1.tenor.com/images/7db5f172665f5a64c1a5ebe0fd4cfec8/tenor.gif?itemid=9200935",
            "https://media1.tenor.com/images/4db088cfc73a5ee19968fda53be6b446/tenor.gif?itemid=14637016",
            "https://media1.tenor.com/images/f5df55943b64922b6b16aa63d43243a6/tenor.gif?itemid=9375012",
            "https://media1.tenor.com/images/e58eb2794ff1a12315665c28d5bc3f5e/tenor.gif?itemid=10195705",
            "https://media1.tenor.com/images/16f4ef8659534c88264670265e2a1626/tenor.gif?itemid=14903944",
            "https://media1.tenor.com/images/d19bfd9ba90422611ec3c2d835363ffc/tenor.gif?itemid=18374323",
            "https://media1.tenor.com/images/a211f33e4ff688f9101a46ed95f2fb21/tenor.gif?itemid=19327081",
            "https://media1.tenor.com/images/df8b87203442db2c2af2a806eb7153d4/tenor.gif?itemid=16300141",
            "https://media1.tenor.com/images/bb841fad2c0e549c38d8ae15f4ef1209/tenor.gif?itemid=10307432",
            "https://media1.tenor.com/images/1a7b7ced63d344e40d567779d5e9fe7c/tenor.gif?itemid=14389983",
            "https://media1.tenor.com/images/68cc73bdd66f0467ceb3e49ce5967dbc/tenor.gif?itemid=12668756",
            "https://media1.tenor.com/images/efdd8f53689b1bb3437054d608156e95/tenor.gif?itemid=4986736",
            "https://media1.tenor.com/images/c9e2e21f4eedd767a72004e4ab521c9d/tenor.gif?itemid=13576064"

        ]



        if (args.user){

        const hugEmbed = new MessageEmbed()
            .setTitle(`You hug ${args.user.username} :heart:`)
            .setImage(images[Math. floor(Math. random()*images. length)])
            .setTimestamp()
        
            message.reply({ embeds: [hugEmbed] });
        }

        if (!args.user) return message.reply("Please mention a user")

        }

}