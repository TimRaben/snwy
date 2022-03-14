const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    var welkomEmbed = new discord.MessageEmbed()
            .setColor("PURPLE")
            .setTitle("Week Evaluatie - Week 7")
            .setDescription(`${args.slice(0).join(' ')}`)
            .setAuthor("Management Snwy")
            .setThumbnail("https://images-ext-2.discordapp.net/external/I2ZYn5h72yExewguZzpWhObtsXHNf5H-yuBZWy-YkNw/%3Fsize%3D256/https/cdn.discordapp.com/banners/845678808857051146/29290c6892cf37941c542a77146da8dc.png")
            .setFooter("Snwy Discord - Week Evaluatie");

        return message.channel.send(welkomEmbed);

}

module.exports.help = {
    name: "say"
}