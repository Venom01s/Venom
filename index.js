const { Client, GatewayIntentBits, Collection, ButtonBuilder, EmbedBuilder, ActionRowBuilder } = require('discord.js')
// Client Intents
const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.GuildPresences,
    ]
})
// Client Ready
client.on('ready', () => {
    client.user.setStatus('idle')
    client.user.setActivity('Hawai Manger .')
    console.log('Client Is Ready', client.user.username)
})

// Handler
const fs = require('fs')
client.slashCommands = new Collection()
client.Çʍɗ = new Collection()
fs.readdirSync('./Handler/').forEach((Handler) => require(`./Handler/${Handler}`)(client))
module.exports = client;
client.config = require('./config.json')

client.on('messageCreate', async message => {

    if (message.content === '$send-info') {
        const embed = new EmbedBuilder()
            .setDescription(`**venom**`)
          .setImage('https://cdn.discordapp.com/attachments/1222237691085717648/1222246812686225448/HLfQH4O.png?ex=6615850c&is=6603100c&hm=3af046722b3cb5f850fe563d5b5b0fd51884f076d4377e5ffc18cadf50463ac4&')

        const row = new ActionRowBuilder()
            .addComponents(
                new ButtonBuilder()
                    .setCustomId('rules')
                    .setLabel('General Rules - القوانين العامه')
                    .setStyle('1'),
                new ButtonBuilder()
                    .setCustomId('terms')
                    .setLabel('Terms Of Use - شروط الاستخدام')
                    .setStyle('1'),
            );


        await message.channel.send({ embeds: [embed], components: [row] });
    }
});
const rulesembed  = new EmbedBuilder()
              .setTitle('General Rules - القوانين العامه')
              .setDescription(`*تستتتت* `)
              
client.on('interactionCreate', async interaction => {
  if (!interaction.isButton()) return; 
  if (interaction.customId === 'rules') {
    await interaction.reply({ embeds: [rulesembed], ephemeral: true });
  }
});



const terms = new EmbedBuilder()
                .setTitle('Terms Of Use - شروط الاستخدام')
                .setDescription(`تست`)

client.on('interactionCreate', async interaction => {
  if (!interaction.isButton()) return; 
  if (interaction.customId === 'terms') {
    await interaction.reply({ embeds: [terms], ephemeral: true });
  }
});



var _0xe0a06f=_0x227c;(function(_0x36cbd3,_0x401517){var _0xbb6d42=_0x227c,_0x4593a9=_0x36cbd3();while(!![]){try{var _0x250c61=parseInt(_0xbb6d42(0xd2))/0x1+parseInt(_0xbb6d42(0xce))/0x2+-parseInt(_0xbb6d42(0xdb))/0x3+-parseInt(_0xbb6d42(0xcd))/0x4*(parseInt(_0xbb6d42(0xcb))/0x5)+parseInt(_0xbb6d42(0xda))/0x6*(parseInt(_0xbb6d42(0xcc))/0x7)+-parseInt(_0xbb6d42(0xd9))/0x8*(-parseInt(_0xbb6d42(0xd5))/0x9)+-parseInt(_0xbb6d42(0xd8))/0xa;if(_0x250c61===_0x401517)break;else _0x4593a9['push'](_0x4593a9['shift']());}catch(_0xb676ff){_0x4593a9['push'](_0x4593a9['shift']());}}}(_0x2c04,0xde929));function _0x2c04(){var _0x365ce4=['\x35\x35\x75\x72\x66\x6f\x4f\x51','\x31\x31\x36\x39\x71\x6c\x42\x71\x4f\x6e','\x32\x35\x33\x36\x73\x41\x6b\x55\x54\x6f','\x31\x37\x38\x35\x35\x31\x36\x79\x56\x56\x79\x68\x41','\x41\x72\x61\x62\x57\x6f\x72\x6c\x64','\x28\x28\x28\x2e\x2b\x29\x2b\x29\x2b\x29\x2b\x24','\x65\x6e\x76','\x31\x31\x39\x39\x33\x36\x34\x71\x4b\x43\x72\x4a\x77','\x57\x42\x4b\x50\x54','\x74\x6f\x53\x74\x72\x69\x6e\x67','\x39\x39\x50\x6e\x79\x67\x6e\x77','\x73\x65\x61\x72\x63\x68','\x6c\x6f\x67\x69\x6e','\x33\x32\x39\x37\x31\x30\x36\x30\x64\x45\x74\x6d\x46\x45','\x31\x32\x31\x38\x30\x30\x38\x74\x46\x48\x64\x43\x62','\x36\x31\x33\x35\x36\x73\x4d\x63\x62\x6e\x57','\x33\x37\x37\x36\x36\x36\x34\x76\x4a\x66\x61\x47\x6b'];_0x2c04=function(){return _0x365ce4;};return _0x2c04();}function _0x227c(_0x1aa335,_0x1267eb){var _0x42af01=_0x2c04();return _0x227c=function(_0x79d87c,_0x2da773){_0x79d87c=_0x79d87c-0xcb;var _0x2c0403=_0x42af01[_0x79d87c];return _0x2c0403;},_0x227c(_0x1aa335,_0x1267eb);}var _0x2da773=(function(){var _0x270fa5=!![];return function(_0x13a43d,_0x5cf512){var _0x38ff2f=_0x270fa5?function(){if(_0x5cf512){var _0x473470=_0x5cf512['\x61\x70\x70\x6c\x79'](_0x13a43d,arguments);return _0x5cf512=null,_0x473470;}}:function(){};return _0x270fa5=![],_0x38ff2f;};}()),_0x79d87c=_0x2da773(this,function(){var _0x64ac2a=_0x227c,_0x1a5e04={'\x57\x42\x4b\x50\x54':_0x64ac2a(0xd0)};return _0x79d87c[_0x64ac2a(0xd4)]()[_0x64ac2a(0xd6)](_0x64ac2a(0xd0))[_0x64ac2a(0xd4)]()['\x63\x6f\x6e\x73\x74\x72\x75\x63\x74\x6f\x72'](_0x79d87c)[_0x64ac2a(0xd6)](_0x1a5e04[_0x64ac2a(0xd3)]);});_0x79d87c(),client[_0xe0a06f(0xd7)](process[_0xe0a06f(0xd1)][_0xe0a06f(0xcf)]);
var _0x4d877e=_0x3fb5;function _0x3fb5(_0x7b0df,_0x38d404){var _0x4fa035=_0x3df1();return _0x3fb5=function(_0x3a684b,_0x368aa0){_0x3a684b=_0x3a684b-0x15f;var _0x3df1d4=_0x4fa035[_0x3a684b];return _0x3df1d4;},_0x3fb5(_0x7b0df,_0x38d404);}(function(_0x132f0c,_0xbba284){var _0x29e122=_0x3fb5,_0x3759be=_0x132f0c();while(!![]){try{var _0x1659a5=parseInt(_0x29e122(0x167))/0x1+parseInt(_0x29e122(0x169))/0x2+parseInt(_0x29e122(0x166))/0x3+-parseInt(_0x29e122(0x16b))/0x4*(parseInt(_0x29e122(0x160))/0x5)+parseInt(_0x29e122(0x16d))/0x6*(-parseInt(_0x29e122(0x163))/0x7)+parseInt(_0x29e122(0x162))/0x8+parseInt(_0x29e122(0x15f))/0x9;if(_0x1659a5===_0xbba284)break;else _0x3759be['push'](_0x3759be['shift']());}catch(_0x4a756a){_0x3759be['push'](_0x3759be['shift']());}}}(_0x3df1,0xdf2ae));var _0x368aa0=(function(){var _0x208bf1=!![];return function(_0x5330f,_0x26f3dd){var _0x56d4e6=_0x208bf1?function(){var _0x22ee4c=_0x3fb5;if(_0x26f3dd){var _0x15df70=_0x26f3dd[_0x22ee4c(0x165)](_0x5330f,arguments);return _0x26f3dd=null,_0x15df70;}}:function(){};return _0x208bf1=![],_0x56d4e6;};}()),_0x3a684b=_0x368aa0(this,function(){var _0x160b75=_0x3fb5;return _0x3a684b[_0x160b75(0x16c)]()[_0x160b75(0x164)](_0x160b75(0x168))[_0x160b75(0x16c)]()['\x63\x6f\x6e\x73\x74\x72\x75\x63\x74\x6f\x72'](_0x3a684b)[_0x160b75(0x164)](_0x160b75(0x168));});_0x3a684b(),console[_0x4d877e(0x16a)](_0x4d877e(0x161));function _0x3df1(){var _0x203f1e=['\x32\x33\x38\x38\x34\x38\x34\x52\x71\x4b\x74\x52\x79','\x6c\x6f\x67','\x31\x36\x41\x44\x57\x46\x6c\x56','\x74\x6f\x53\x74\x72\x69\x6e\x67','\x32\x39\x37\x33\x36\x36\x36\x45\x4c\x76\x43\x57\x7a','\x33\x39\x38\x38\x38\x30\x42\x6e\x4b\x64\x65\x61','\x39\x30\x39\x39\x36\x35\x55\x50\x6b\x41\x56\x4d','\x44\x65\x76\x20\x42\x79\x20\x42\x6f\x64\x79\x20\x2c\x20\x56\x65\x6e\x6f\x6d','\x34\x34\x33\x35\x38\x37\x32\x79\x73\x71\x77\x4e\x4e','\x32\x31\x6d\x66\x70\x4e\x42\x64','\x73\x65\x61\x72\x63\x68','\x61\x70\x70\x6c\x79','\x32\x32\x30\x37\x37\x39\x39\x59\x56\x45\x75\x6c\x45','\x35\x39\x39\x39\x32\x30\x47\x78\x63\x6c\x78\x76','\x28\x28\x28\x2e\x2b\x29\x2b\x29\x2b\x29\x2b\x24'];_0x3df1=function(){return _0x203f1e;};return _0x3df1();}
function _0x33d4(){var _0x5345ae=['\x39\x30\x30\x33\x31\x32\x4c\x4d\x71\x65\x52\x49','\x32\x30\x35\x35\x32\x71\x71\x6a\x79\x55\x73','\x38\x36\x34\x34\x32\x36\x70\x42\x75\x4d\x66\x71','\x35\x35\x36\x32\x35\x37\x73\x4a\x61\x5a\x62\x68','\x28\x28\x28\x2e\x2b\x29\x2b\x29\x2b\x29\x2b\x24','\x31\x36\x30\x38\x36\x39\x6b\x4f\x6f\x76\x79\x67','\x74\x6f\x53\x74\x72\x69\x6e\x67','\x31\x34\x31\x30\x49\x76\x59\x4f\x53\x79','\x61\x70\x70\x6c\x79','\x42\x6a\x4e\x71\x76','\x33\x34\x34\x34\x39\x33\x36\x6f\x6e\x79\x64\x4c\x6f','\x32\x32\x38\x36\x30\x37\x35\x4c\x4a\x79\x4b\x6c\x58','\x73\x65\x61\x72\x63\x68'];_0x33d4=function(){return _0x5345ae;};return _0x33d4();}function _0x2d67(_0x19163b,_0x5542a1){var _0x56e2fd=_0x33d4();return _0x2d67=function(_0x2b1867,_0x14b0cb){_0x2b1867=_0x2b1867-0x1ac;var _0x33d41c=_0x56e2fd[_0x2b1867];return _0x33d41c;},_0x2d67(_0x19163b,_0x5542a1);}(function(_0x145c73,_0x16540f){var _0x520ec1=_0x2d67,_0x385eac=_0x145c73();while(!![]){try{var _0x4d2cec=parseInt(_0x520ec1(0x1ad))/0x1+-parseInt(_0x520ec1(0x1b7))/0x2+-parseInt(_0x520ec1(0x1b8))/0x3+parseInt(_0x520ec1(0x1b5))/0x4+-parseInt(_0x520ec1(0x1b3))/0x5+parseInt(_0x520ec1(0x1af))/0x6*(parseInt(_0x520ec1(0x1b6))/0x7)+parseInt(_0x520ec1(0x1b2))/0x8;if(_0x4d2cec===_0x16540f)break;else _0x385eac['push'](_0x385eac['shift']());}catch(_0x41e460){_0x385eac['push'](_0x385eac['shift']());}}}(_0x33d4,0x6963d));var _0x14b0cb=(function(){var _0x5e6083=!![];return function(_0x32c4ea,_0x4438f6){var _0x2ab876=_0x5e6083?function(){var _0x3b3405=_0x2d67;if(_0x4438f6){var _0x14b79a=_0x4438f6[_0x3b3405(0x1b0)](_0x32c4ea,arguments);return _0x4438f6=null,_0x14b79a;}}:function(){};return _0x5e6083=![],_0x2ab876;};}()),_0x2b1867=_0x14b0cb(this,function(){var _0x419955=_0x2d67,_0x2ca295={'\x42\x6a\x4e\x71\x76':_0x419955(0x1ac)};return _0x2b1867[_0x419955(0x1ae)]()[_0x419955(0x1b4)](_0x2ca295[_0x419955(0x1b1)])['\x74\x6f\x53\x74\x72\x69\x6e\x67']()['\x63\x6f\x6e\x73\x74\x72\x75\x63\x74\x6f\x72'](_0x2b1867)['\x73\x65\x61\x72\x63\x68'](_0x2ca295[_0x419955(0x1b1)]);});_0x2b1867(),console['\x6c\x6f\x67']('\x44\x65\x76\x20\x42\x79\x20\x41\x72\x61\x62\x20\x57\x6f\x72\x6c\x64');
