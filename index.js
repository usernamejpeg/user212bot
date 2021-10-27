const Discord = require("discord.js");
const Client = new Discord.Client({
    intents:  [
         Discord.Intents.FLAGS.GUILDS,
         Discord.Intents.FLAGS.GUILD_MESSAGES
         
    ]
});

Client.on("ready", () => {
    console.log("bot opérationnel");
}); 
const prefix = "!";

Client.on("messageCreate", message => {
    if (message.author.bot) return; 
   
     
    //!maj
     if (message.content === prefix + "maj"){
        const embed = new Discord.MessageEmbed()
         .setColor("#FFFF00")
         .setTitle("Dev-Note")
         .setAuthor("UserBot", "https://images.assetsdelivery.com/compings_v2/benchart/benchart1310/benchart131000023.jpg")
         .setDescription("Création du salon test")
         .setTimestamp()
         .setFooter("User'server bot");


         
         
         


        message.channel.send({embeds: [embed]});

    }




    
});









Client.on("messageCreate", message => {
    if (message.author.bot) return; 
   
     
    //!sug
     if (message.content === prefix + "sug"){
        const embed = new Discord.MessageEmbed()
         .setColor("#FF0000")
         .setTitle("Suggestion")
         .setAuthor("UserBot", "https://images.assetsdelivery.com/compings_v2/benchart/benchart1310/benchart131000023.jpg")
         .setDescription("Une suggestion qui pourrait améliorer le serveur ? fait le nous savoir ! ")
         .setTimestamp()
         .setFooter("User'server bot");
         
 

         
         
         


        message.channel.send({embeds: [embed]});

    }




    
});







Client.on("messageCreate", message => {
    if (message.author.bot) return; 
   
     
    //!on
     if (message.content === prefix + "on"){
        const embed = new Discord.MessageEmbed()
         .setColor("#8000FF")
         .setTitle("Candidature")
         .setAuthor("UserBot", "https://images.assetsdelivery.com/compings_v2/benchart/benchart1310/benchart131000023.jpg")
         .setDescription("Tu souhaite rejoindre le staff du serveur ? dépose une candidature en cliquant sur le lien !  ")
         .setTimestamp()
         .setFooter("User'server bot")
         .setURL("https://www.youtube.com/watch?v=1iI-PD25QK4&t=731s")
         
 

         
         
         


        message.channel.send({embeds: [embed]});

    }




    
});




Client.on("messageCreate", message => {
    if (message.author.bot) return; 
   
     
    //!off
     if (message.content === prefix + "off"){
        const embed = new Discord.MessageEmbed()
         .setColor("#8000FF")
         .setTitle("Candidature fermé")
         .setAuthor("UserBot", "https://images.assetsdelivery.com/compings_v2/benchart/benchart1310/benchart131000023.jpg")
         .setDescription("Reviens plus tard !")
         .setTimestamp()
         .setFooter("User'server bot")
         
         

         
         
 

         
         
         


        message.channel.send({embeds: [embed]});

    }




    
});


    

Client.login("ODk3NzUxODA1OTU2NjA4MDUy.YWaOhQ.IJbus4DO7vSxtnDceRCWYqj1bMc");