require('dotenv').config();
const fs = require('fs');
const chalk = require('chalk');

// Contact details
global.sessionid = process.env.SESSION_ID || '{"noiseKey":{"private":{"type":"Buffer","data":"qKfMTAsJ9AwlF2pwabfcHf9+kbSc6SFbKyzBxMGcU1s="},"public":{"type":"Buffer","data":"mkmuaLPEFpgmkAEQAIGDyRP/UxqSluevJU/jt41nDXM="}},"pairingEphemeralKeyPair":{"private":{"type":"Buffer","data":"SKzUPXRRSPcwA8rIMqYertvUjl6vT5jlv+nZlyjYqHw="},"public":{"type":"Buffer","data":"+0gqTQyb2HGJqmmIX3/q/9BVM95/XN2rv9GVsgb+EnU="}},"signedIdentityKey":{"private":{"type":"Buffer","data":"KJcaGVQJ0T+VVMIK1+uvaRx3PRhE2bR1Jd/bEqv4M34="},"public":{"type":"Buffer","data":"3FRLjlrBck6ETxt74FcUkDYCU2fO5U2JFjhZRIsvmH0="}},"signedPreKey":{"keyPair":{"private":{"type":"Buffer","data":"CM3JEhCg0jlwCKwdzdMEjasQ8aR3x7XpMHVCmGbcpG8="},"public":{"type":"Buffer","data":"Cq0uA4LlsMX9rcC+qOFLAKNxfkaM6T3HyEWLwwDBuTE="}},"signature":{"type":"Buffer","data":"XVpM6sYTEThyEphyBNyg3DWSecv2hA3eKlxTirBmjaOX08F4HvFhktiL96k8jy8bpM915QZEDqdgwSSl18yQAw=="},"keyId":1},"registrationId":195,"advSecretKey":"HvKysjU7USeJ9VkqvqDGSuJIKd4pfAf9Wqyj7VbWfII=","processedHistoryMessages":[],"nextPreKeyId":31,"firstUnuploadedPreKeyId":31,"accountSyncCounter":1,"accountSettings":{"unarchiveChats":false},"registered":true,"pairingCode":"494BJJXY","me":{"id":"242069283966:29@s.whatsapp.net","lid":"45625823494252:29@lid"},"account":{"details":"CPvN1s4MEPOik8UGGAEgACgA","accountSignatureKey":"DcO4U0H6fFTjdvmYHzmAuwldyv75DmrBkF/X5/K6d10=","accountSignature":"cVZTz1brh1Vnr1WnmRl2so9qdlE33v66wdxh3+FGZtkFuHmSKCKWYAiG3IYLXWnUEksFaA8bsd8XoCb82j8IiQ==","deviceSignature":"9KFgTJ6F6Mibi7R1Yyqtdvmz/+SVFbbvbqSvR3nyBZI/mhVRxifty4m0PTKQ5DIVSpCXq/y6pRFyk1+5iYlnCA=="},"signalIdentities":[{"identifier":{"name":"242069283966:29@s.whatsapp.net","deviceId":0},"identifierKey":{"type":"Buffer","data":"BQ3DuFNB+nxU43b5mB85gLsJXcr++Q5qwZBf1+fyundd"}}],"platform":"iphone","routingInfo":{"type":"Buffer","data":"CBIIBQ=="},"lastAccountSyncTimestamp":1755631996,"lastPropHash":"3gPUJk","myAppStateKeyId":"AAAAAKvh"}
    ';
global.ytname = process.env.YT_NAME || "YT: @EliteProTechs";
global.socialm = process.env.SOCIAL_M || "GitHub: EliteProTech";
global.location = process.env.LOCATION || "Nigeria, Port Harcourt";

// Creator details
global.ownernumber = process.env.OWNER_NUMBER || '242069283966';
global.ownername = process.env.OWNER_NAME || 'BMK_LAMELO🦂';
global.botname = process.env.BOT_NAME || 'LAMELO🇨🇩';

// Default settings 
global.prefix = process.env.PREFIX || '.';
// Settings: true=enable false=disable
global.autoRecording = process.env.AUTO_RECORDING === 'true';
global.autoTyping = process.env.AUTO_TYPING === 'true';
global.autorecordtype = process.env.AUTO_RECORD_TYPE === 'true';
global.autoread = process.env.AUTO_READ === 'false';
global.autobio = process.env.AUTO_BIO !== 'true'; // default true
global.anti92 = process.env.ANTI_92 === 'true';
global.autoswview = process.env.AUTO_SW_VIEW !== 'true'; // default true
global.welcome = process.env.WELCOME !== 'true'; // default true
global.autoreact = process.env.AUTO_REACT === 'false';
global.autolikestatus = process.env.AUTO_LIKE_STATUS === 'false';

// Thumbnail profile picture
global.elitepropp = process.env.ELITE_PRO_PP || 'https://i.ibb.co/jk0ynvbn/7a8c4b5b617fa11a1e9a61190f427546.jpg';
// Default emoji
global.themeemoji = process.env.THEME_EMOJI || '🇨🇩';


// Sticker details
global.packname = process.env.PACKNAME || 'Sticker By';
global.author = process.env.AUTHOR || 'ELITEPRO\n\nContact: +2348109263390';
// Default settings 2
global.wm = process.env.WM || "Youtube @EliteProTechs";
global.link = process.env.LINK || 'https://whatsapp.com/channel/0029VaXaqHII1rcmdDBBsd3g';

// Reply messages
global.mess = {
    done: '[✔] Task executed successfully.',
    prem: '[403] Access denied. Premium user required.',
    admin: '[401] Admin privileges required.',
    botAdmin: '[401] Bot must be an admin to run this command.',
    owner: '[403] Command restricted to bot owner.',
    group: '[400] Command available only in group chats.',
    private: '[400] Command available only in private chats.',
    wait: '[⏳] Processing... Please wait.',
    error: '[500] Unexpected error occurred.',
};

global.thumb = fs.readFileSync('./EliteProMedia/thumb.jpg');

let file = require.resolve(__filename);
fs.watchFile(file, () => {
    fs.unwatchFile(file);
    console.log(chalk.redBright(`Update'${__filename}'`));
    delete require.cache[file];
    require(file);
});
