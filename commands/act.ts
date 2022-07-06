import { ICommand } from 'WOKCommands' ;
import { CommandInteraction , Client , MessageActionRow , MessageSelectMenu, Interaction } from "discord.js";
import { DiscordTogether } from 'discord-together';

export default {

    name : 'act' ,
    category: "selection" ,
    description : "watching youtube" ,
    slash : 'both' ,
    init : async (client: Client) => {
        
        const discordtogether = new DiscordTogether(client);

        client.on('interactionCreate', (interaction) => {

            if(!interaction.isSelectMenu())return 

            const VoiceID = interaction.guild?.members.cache.get(interaction.user.id)?.voice.channelId 
            
            discordtogether.createTogetherCode(`${VoiceID}`, interaction.values[0]).then(async (invite : any) => {
                interaction.reply({content : `${invite.code}`});
            });
            
        })
    },
    callback: async ({message , args , interaction , client , channel}) => {
        const row = new MessageActionRow().addComponents(
            new MessageSelectMenu()
            .setCustomId("selection menu")
            .setPlaceholder("select")
            .addOptions(
                [
                    {
                        label : 'Youtube' ,
                        description : 'Youtube', 
                        value : 'youtube',

                    },
                    {
                        label : 'Poker' ,
                        description : "Poker",
                        value : 'poker',
                    },
                    {
                        label : 'Chess' ,
                        description : "chess",
                        value : 'chess',
                    },
                    {
                        label : 'Checkers' ,
                        description : "checkers",
                        value : 'checkers',
                    },
                    {
                        label : 'Betrayal' ,
                        description : "betrayal",
                        value : 'betrayal',
                    },
                    {
                        label : 'Fishington' ,
                        description : "fishing",
                        value : 'fishing',
                    },
                    {
                        label : 'Lettertile' ,
                        description : "lettertile",
                        value : 'lettertile',
                    },
                    {
                        label : 'Wordsnack' ,
                        description : "wordsnack",
                        value : 'wordsnack',
                    },
                    {
                        label : 'Doodlecrew' ,
                        description : "doodlecrew",
                        value : 'doodlecrew',
                    },
                    {
                        label : 'Spellcast' ,
                        description : "spellcast",
                        value : 'spellcast',
                    },
                    {
                        label : 'Awkword' ,
                        description : "awkword",
                        value : 'awkword',
                    },
                    {
                        label : 'Puttparty' ,
                        description : "puttparty",
                        value : 'puttparty',
                    },
                    {
                        label : 'Sketchheads' ,
                        description : "sketchheads",
                        value : 'sketchheads',
                    },
                    {
                        label : 'Ocho' ,
                        description : "ocho",
                        value : 'ocho',
                    }
                ]
            )
        )
        channel.send({
            content : 'select activity',
            components : [row] 
        })

    }

} as ICommand ;