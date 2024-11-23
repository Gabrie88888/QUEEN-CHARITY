//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "www.youtube.com";
global.video = "www.youtube.com";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "caseyrhodes46@gmail.com";
global.location = "Eiyenkorin, Nigeria";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://astrofx0011:astro@cluster0.lmwnxdt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "true";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/caseyweb/QUEEN-CHARITY";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VakUEfb4o7qVdkwPk83E";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VakUEfb4o7qVdkwPk83E";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://files.catbox.moe/6xuv7u.jpg";
global.devs = "254112192119";
global.sudo = process.env.SUDO || "254112192119";
global.owner = process.env.OWNER_NUMBER || "254112192119";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://files.catbox.moe/kwe3i5.jpg";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://rhodespair-1303049c463e.herokuapp.com";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiK0I1NFhsbG5uK2g0UmtKSnQrZDBzbWhvTlR4QVFIR0dLRTU4RG40QzdtTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUUtieERYbFRHa1QrTy9uVmZzWkY2YnZNS2lnRWJZQURiVGs3Z255dC8yUT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI2R2FtSjhLUys0WkxhaFFLYThQR0NCd3dMYlJQVXB2c3NlT3FzdTByUVYwPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJuSFhYd1ZaM0hCS0srSFhkcGVOWVVJNVBSdDM1Wmtzc28vY05VaFBGWFhvPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik9CYmVBaWMrdnNkdGRCYWdWazkyYWlPaUN6NXRSZVo2RHRsZytKTVc2RUk9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlQ2VEhsb0pTa2MvUlFEK0dqanY1eGEzN3hqdVM4YlBlWGNlOU9xbHI0ajA9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUU51L1FiWmZKMGgrcU94eWNWc053L1B5RFF5aHZqZjhKNEpaQ1Z6MWRXdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYU5sQ09hRjhlcGdiWUZCRnBmaTZxM3Q2VkhZODFNQjhvUFIrRWxhbG1TYz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkRhM0hSa1lEcC9EcVpGdWlDRjJnc2JRbXdGR3piSHBmQVdWNitHMHExSkd3em5jMjN6a1MxalhiTVFFcEF4eENMeU1qRTViSVlNTEVKUk9teUxMYWpBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjM0LCJhZHZTZWNyZXRLZXkiOiJoM1ZSSU1yR0tncFVYRTVHMy9pc2RnelZjWnorS0VPRzRpZXpwb1ZuMVd3PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJtd1ZGcDJfQlNxdWxPRkdMa05NaVlnIiwicGhvbmVJZCI6ImQwNGRjZTYwLWJjNzYtNDhjZi04Mzg5LTY3MTdiNDVlOGJiYiIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJUUGpZOG5iaG5vSFFXdEl6L08ycklQRXdReVE9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUHBmY3BBalF0VG5OTzZyNjJIRWNkZi9odXhvPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkxMU05HWE1QIiwibWUiOnsiaWQiOiIyMzQ3MDQ2NjI5MDIwOjY3QHMud2hhdHNhcHAubmV0IiwibmFtZSI6IuKAjuKAjsODw4fwnZG7w4/wnZG9w4t+8J2RrfCdkpkge+KAouKAmT4+4oCiXFwifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ01mRHJvWU5FTFByaHJvR0dBZ2dBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6InZnNy9GZnU1VFF1M3JtbmpZTXV2WjJKLzlxNjlIQi9MQUIwZW9pdHNZWFk9IiwiYWNjb3VudFNpZ25hdHVyZSI6IkE5NnB4T0pZOVI3U3RkWWZQY3V2SWt6b0duRi9IQW0xV0pKRlpvc2V0bmRRd0ZpdWN3SHAzUC84MHpYK1o4TEZWVExlSXhhV2lvRzVtYmIrdk5LS0FBPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJCS2dDY3hsOUxrQ00zNFYxY044bzRoczNhTWthejRaS1FFcHZRclB2QzFuRmhCM0V4ZlEvRnUzVU1Pd0hBY2Q5MXlYWXdIMU1aTXFJbFRkV0ZxLzRoUT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjIzNDcwNDY2MjkwMjA6NjdAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCYjRPL3hYN3VVMEx0NjVwNDJETHIyZGlmL2F1dlJ3Znl3QWRIcUlyYkdGMiJ9fV0sInBsYXRmb3JtIjoic21iaSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTczMjM1OTYxNywibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFQWWwifQ==" // session id here
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`QUEEN_CHARITY™`",
  author: process.env.PACK_AUTHER || "𒀱ꪳ𓊈𒆜𓂀ᴸᴼᴿᴰℂ𝔸𝕊𝔼𝕐ℝℍ𝕆𝔻𝔼𝕊𓂀𒆜𓊉 𒀱",
  packname: process.env.PACK_NAME || "𝐂𝐀𝐒𝐄𝐘𝐑𝐇𝐎𝐃𝐄𝐒 𝐓𝐄𝐂𝐇",
  botname: process.env.BOT_NAME || "`𝗤𝗨𝗘𝗘𝗡_𝗖𝗛𝗔𝗥𝗜𝗧𝗬`",
  ownername: process.env.OWNER_NAME || "𒀱ꪳ𓊈𒆜𓂀ᴸᴼᴿᴰℂ𝔸𝕊𝔼𝕐ℝℍ𝕆𝔻𝔼𝕊𓂀𒆜𓊉 𒀱",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "N I K K A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = true;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
