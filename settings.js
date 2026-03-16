const fs = require("fs");
const chalk = require("chalk");

// ==============================================
//              بيانات البوت الأساسية
// ==============================================
global.BOT_TOKEN = "8672948936:AAGamC2e-zZCYHpKK6lR-LkS_vJKcEsiTpg"; // توكن البوت الخاص بك
global.BOT_NAME = "█▓▒░ 𝐸𝐿_𝑀𝑂𝐷𝑀𝐸𝑁 𝑪𝑹𝑨𝑺𝑯 𝑻𝑬𝑺𝑻 ░▒▓█"; // اسم البوت (يمكن تغييره)
global.OWNER_NAME = "@HJ_K6 / 𝐸𝐿_𝑀𝑂𝐷𝑀𝐸𝑁"; // اسم المالك (يمكن إضافة أكثر من اسم)
global.OWNER = ["https://t.me/HJ_K6"]; // رابط المالك (رابط حساب التليجرام)
global.DEVELOPER = ["8665373093", "8206539702"]; // أيدي المطورين (رَقْمَين)
global.pp = 'https://mora-host.zya.me/11.jpg'; // رابط صورة البوت (اختياري)

// ==============================================
//              بيانات المجموعات والقنوات
// ==============================================
global.GROUP_ID = -1003877276188;       // ايدي المجموعة الأساسية
global.CHANNEL_ID = -1003877276188;     // ايدي القناة (يمكن نفس المجموعة)
global.GROUP_LINK = "https://t.me/baatb"; // رابط المجموعة (غيره إذا أردت)
global.CHANNEL_INVITE_LINK = "https://t.me/f_v_f_v_f"; // رابط القناة الجديد
global.WHATSAPP_LINK = "https://t.me/HJ_K6"; // رابط الواتساب (أو أي رابط)
global.YOUTUBE_LINK = "https://youtube.com/@mora_brt"; // رابط اليوتيوب (غيره)
global.INSTAGRAM_LINK = "https://www.instagram.com/mora_brt?igsh=YzJiY3R4d252Y3Fu"; // رابط الانستغرام

// ==============================================
//              أرقام الهواتف (اختياري)
// ==============================================
global.owner = ['+201122220720']; // أرقام الهواتف (يمكن تعديلها أو حذفها)

// ==============================================
//              إعدادات اللغة
// ==============================================
const { english } = require("./lib");
global.language = english;
global.lang = language;

// ==============================================
//      تحديث تلقائي للملف (لا تغيره)
// ==============================================
let file = require.resolve(__filename);
fs.watchFile(file, () => {
    fs.unwatchFile(file);
    console.log(chalk.redBright(`Update ${__filename}`));
    delete require.cache[file];
    require(file);
});