import { BotCommand } from '@extensions/BotCommand';
import { Assistant, AssistantLanguage } from "nodejs-assistant";
import config from '../../../extensions/config/config' //pls dont steal my data zord

export default class search extends BotCommand {
    constructor() {
        super('serach', {
            aliases: ['search'],
            description: 'yes',
            usage: 'gassist',
            cooldown: 5000,
            args: [
                {
                    id: 'search',
                    type: 'string',
                    match: 'restContent'
                }
            ],
            slash:true,
            slashOptions: [
                {
                    name: 'search',
                    description: 'Search query',
                    type:'STRING',  
                    required: true
                }]
        })
    }
    async exec() {

        const assistant = new Assistant(/* required credentials */ {
            type: 'authorized_user',
            client_id: '769876265849-qop8qbv4arc8grope52mti5ae3f4b36r.apps.googleusercontent.com', //pls dont steal my data zord
            client_secret: 'RDo12yJyg_HXAoVODe6mjoGF', //pls dont steal my data zord
            refresh_token: '1//0gLN_qdzngSm7CgYIARAAGBASNgF-L9IrxgaTup5hcO0rv1EAvWJRUuGPv5OlRmIyXFr0k4zhJptX--WgUMat1ZkreL1hlMEptg',//pls dont steal my data zord
        }, /* additional, optional options */ {
            locale: AssistantLanguage.ENGLISH, 
            deviceId: '287698408855044097',  //pls dont steal my data zord
            deviceModelId: '444871677176709141', //pls dont steal my data zord
        })

        assistant.query('Hi!')
  .then(response => {
    // response contains all the fields returned by the assistant, such as the text and audio
    console.log(`Response: ${response.text}`);
    // response.audio is a Buffer containing the audio response by the assistant
  })
  .catch(err => {
    console.error('ERROR: ', err);
  })
}}