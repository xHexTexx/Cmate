import { ButtonInteraction, MessageActionRow, MessageButton } from 'discord.js';
import { ICommand } from 'wokcommands'
import client from '../index'
import posnSchema from '../posn-schema'
import mongoose , {Schema} from 'mongoose'

export default {

    category : 'testing' ,
    description : 'posnwu.xyz' ,
    slash : 'both' ,
    expectedArgs : '<username><password>' ,
    
    options : [
        {
            name: 'username',
            description: 'Your username',
            required: true,
            type : 'STRING' ,
        }
        ,
        {
            name: 'password',
            description: 'Your password',
            required: true,
            type : 'STRING' ,
        }
    ],
    callback : async ({ interaction : msgInt , channel, message , user , args}) => {

        const username = args[0] 
        const password = args[1]
        const userid = user.id

        if(msgInt){

            await mongoose.connect('mongodb+srv://tokyo682:Uraza11!@class.fpbsi.mongodb.net/test', {
                keepAlive : true
            })

            const registed = await posnSchema.findOne({user_id : `${userid}`})
            
            if(registed === null){
                await new posnSchema({user_id : `${userid}` , user_name : username , password : password}).save()
            }
            else {
                await posnSchema.updateOne({user_id : `${userid}`} ,{user_name : username , password : password} ) 
            }
            msgInt.reply({content : 'register completed'})
        }

    }
} as ICommand ;