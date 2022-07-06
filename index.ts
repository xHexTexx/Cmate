import DiscordJS, { Intents } from 'discord.js'
import path from 'path'
import WOKCommands from 'wokcommands'
import mongoose from 'mongoose'
import posnSchema from './posn-schema'
import 'dotenv/config'

const client = new DiscordJS.Client({
    intents : [
        Intents.FLAGS.GUILDS ,
        Intents.FLAGS.GUILD_MESSAGES,
    ]
});

client.login(process.env.Token)  

client.on('ready' ,async (client) => {

    console.log(`Legendary ${client.user.tag}`) 

    new WOKCommands(client , {
        commandDir : path.join(__dirname  , 'commands') ,
        typeScript : true ,
        mongoUri : process.env.MongoURI || ''
    })

})

export default client