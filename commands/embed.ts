import { ICommand } from 'wokcommands'
import { MessageEmbed } from 'discord.js'
import client from '../index'

export default {

    category : 'testing' , 
    description : 'test embed' ,
    slash : 'both' ,
    
    callback : async ({message , text , channel , user , interaction}) => {

        const embed = new MessageEmbed()
        .setAuthor({ name: user.tag, iconURL: user.displayAvatarURL(), url: 'https://discord.js.org' })
        .setColor('BLUE')

        if(interaction){
            channel.send({ 
                embeds : [embed]
            })
        }
        else { 
            channel.send({
                embeds : [embed]
            })
        }

    }

} as ICommand ;