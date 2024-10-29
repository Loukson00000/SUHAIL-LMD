const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "https://telegra.ph/file/085c4b1068f0f4f8db970.mp4" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/Loukson/SUHAIL-LMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://iili.io/dmKqfTP.jpg" || "https://iili.io/dmKqfTP.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "©✮✮✮ʟᴏᴜᴋsᴏɴ ᵘᶻᵘᵐᵃᵏⁱ₊ ͟͟͞͞➳" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "22502331988";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "true"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://telegra.ph/file/085c4b1068f0f4f8db970.mp4,https://iili.io/dmKqfTP.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "22502331988,923xxxxxxxx";

global.api_smd = "https://api.junn4.my.id" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_14_49_10_29_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQwLFxuICAgICAgICAxMzksXG4gICAgICAgIDg3LFxuICAgICAgICAxOSxcbiAgICAgICAgMjAsXG4gICAgICAgIDIzNyxcbiAgICAgICAgNTQsXG4gICAgICAgIDE1MCxcbiAgICAgICAgNDQsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTU1LFxuICAgICAgICA5NSxcbiAgICAgICAgMTMyLFxuICAgICAgICAxMDEsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTg3LFxuICAgICAgICAxNjksXG4gICAgICAgIDQ3LFxuICAgICAgICAyNDcsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTY1LFxuICAgICAgICAxNCxcbiAgICAgICAgNTQsXG4gICAgICAgIDE2LFxuICAgICAgICAyMyxcbiAgICAgICAgMjMzLFxuICAgICAgICA5MSxcbiAgICAgICAgMjQ1LFxuICAgICAgICAyNTUsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjUzLFxuICAgICAgICA5NVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzcsXG4gICAgICAgIDE5MixcbiAgICAgICAgNTMsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjUxLFxuICAgICAgICA3OCxcbiAgICAgICAgNTYsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjMsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTc1LFxuICAgICAgICAyMzEsXG4gICAgICAgIDQwLFxuICAgICAgICAxODksXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjE3LFxuICAgICAgICAxNjIsXG4gICAgICAgIDE3NixcbiAgICAgICAgNzUsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTA4LFxuICAgICAgICAxODAsXG4gICAgICAgIDQ4LFxuICAgICAgICAxMTQsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTQyLFxuICAgICAgICAyMjYsXG4gICAgICAgIDk4LFxuICAgICAgICAyMzAsXG4gICAgICAgIDQxLFxuICAgICAgICAxMDQsXG4gICAgICAgIDQ3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0MCxcbiAgICAgICAgMTIxLFxuICAgICAgICAzMixcbiAgICAgICAgOTMsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjI4LFxuICAgICAgICAxNDMsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTM2LFxuICAgICAgICA2LFxuICAgICAgICAyMDEsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjU0LFxuICAgICAgICAxNzYsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTE1LFxuICAgICAgICAyNTQsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjExLFxuICAgICAgICAyMjMsXG4gICAgICAgIDgwLFxuICAgICAgICA2NixcbiAgICAgICAgMTYyLFxuICAgICAgICAxNjcsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjI2LFxuICAgICAgICA4OSxcbiAgICAgICAgMjAyLFxuICAgICAgICA4OCxcbiAgICAgICAgMTUyLFxuICAgICAgICA4OSxcbiAgICAgICAgOTJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzgsXG4gICAgICAgIDIyLFxuICAgICAgICAxNzQsXG4gICAgICAgIDk0LFxuICAgICAgICAxOTUsXG4gICAgICAgIDg3LFxuICAgICAgICAxNTEsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTA1LFxuICAgICAgICAyOSxcbiAgICAgICAgMTg4LFxuICAgICAgICAyMTIsXG4gICAgICAgIDY3LFxuICAgICAgICAxNTUsXG4gICAgICAgIDk5LFxuICAgICAgICA0MSxcbiAgICAgICAgNDgsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTY5LFxuICAgICAgICAxMDksXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTU3LFxuICAgICAgICAxOSxcbiAgICAgICAgMTE4LFxuICAgICAgICAxMDMsXG4gICAgICAgIDQyLFxuICAgICAgICA4NCxcbiAgICAgICAgMTEzLFxuICAgICAgICAxMzksXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjU0LFxuICAgICAgICA5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjAsXG4gICAgICAgIDkzLFxuICAgICAgICA1NSxcbiAgICAgICAgOCxcbiAgICAgICAgMjEsXG4gICAgICAgIDkyLFxuICAgICAgICAyMjQsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjAzLFxuICAgICAgICAxNTcsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTkwLFxuICAgICAgICAyMTIsXG4gICAgICAgIDgsXG4gICAgICAgIDIwMixcbiAgICAgICAgMzksXG4gICAgICAgIDQzLFxuICAgICAgICAxOTksXG4gICAgICAgIDE5NyxcbiAgICAgICAgNDMsXG4gICAgICAgIDEzMCxcbiAgICAgICAgNDMsXG4gICAgICAgIDE3LFxuICAgICAgICAyMCxcbiAgICAgICAgMTIyLFxuICAgICAgICA0OSxcbiAgICAgICAgMjE0LFxuICAgICAgICAyMTcsXG4gICAgICAgIDcxLFxuICAgICAgICAyNTQsXG4gICAgICAgIDMzLFxuICAgICAgICAxMTVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTAxLFxuICAgICAgICAxOTcsXG4gICAgICAgIDExNSxcbiAgICAgICAgNjYsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjM1LFxuICAgICAgICAxOTAsXG4gICAgICAgIDkwLFxuICAgICAgICA0MyxcbiAgICAgICAgMTM3LFxuICAgICAgICAyMSxcbiAgICAgICAgMTAwLFxuICAgICAgICAxNDQsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjAxLFxuICAgICAgICAxMzcsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjIyLFxuICAgICAgICAxNjEsXG4gICAgICAgIDU4LFxuICAgICAgICAxMjQsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTU1LFxuICAgICAgICAxMTgsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTcwLFxuICAgICAgICAxMzUsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTg3LFxuICAgICAgICAyMyxcbiAgICAgICAgMTU4LFxuICAgICAgICA0MVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDg4XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEyOSxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAxMTJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1NCxcbiAgICAgICAgMTUsXG4gICAgICAgIDc3LFxuICAgICAgICA0NCxcbiAgICAgICAgMTY5LFxuICAgICAgICAxNSxcbiAgICAgICAgMTQxLFxuICAgICAgICAxOTgsXG4gICAgICAgIDE1LFxuICAgICAgICAyNDIsXG4gICAgICAgIDM4LFxuICAgICAgICAxMzYsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTYsXG4gICAgICAgIDMyLFxuICAgICAgICAxMTQsXG4gICAgICAgIDE1MCxcbiAgICAgICAgOTMsXG4gICAgICAgIDU2LFxuICAgICAgICAxNTEsXG4gICAgICAgIDM4LFxuICAgICAgICAxMDUsXG4gICAgICAgIDExLFxuICAgICAgICAxNDQsXG4gICAgICAgIDk5LFxuICAgICAgICAxNzcsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTI5LFxuICAgICAgICAxOTMsXG4gICAgICAgIDIyMyxcbiAgICAgICAgNjYsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTk0LFxuICAgICAgICAyMjgsXG4gICAgICAgIDE1LFxuICAgICAgICAyMTcsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTM0LFxuICAgICAgICAxMzMsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjEyLFxuICAgICAgICA3NSxcbiAgICAgICAgMTAzLFxuICAgICAgICAyMDQsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTYxLFxuICAgICAgICA4NixcbiAgICAgICAgNTEsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjAwLFxuICAgICAgICA0NixcbiAgICAgICAgMjExLFxuICAgICAgICAyMjgsXG4gICAgICAgIDcsXG4gICAgICAgIDcyLFxuICAgICAgICA1MixcbiAgICAgICAgMjAyLFxuICAgICAgICAyMTIsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTc1LFxuICAgICAgICA3MCxcbiAgICAgICAgNDYsXG4gICAgICAgIDc4LFxuICAgICAgICAxXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyMDcsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiM0tyTHlSQ1hMWU40Z1lOMGVYUHJxVm9iemV4SXJ1ZXpweGhHeG81YnQ5QT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiT0NHLWMyRmtUN2VHcllnOGY3ZXZIZ1wiLFxuICBcInBob25lSWRcIjogXCI5ZDU2ZmExNS0wNzNjLTRhMjMtYWNiOS1lOGIyNjhkNDAyNTJcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTgyLFxuICAgICAgMTQsXG4gICAgICAyNDksXG4gICAgICAyNDQsXG4gICAgICA1MCxcbiAgICAgIDU1LFxuICAgICAgMTY1LFxuICAgICAgMTQyLFxuICAgICAgMTc3LFxuICAgICAgMjUxLFxuICAgICAgMTUsXG4gICAgICAxODQsXG4gICAgICAyLFxuICAgICAgNzgsXG4gICAgICA1MixcbiAgICAgIDEwNyxcbiAgICAgIDIwMSxcbiAgICAgIDE1MSxcbiAgICAgIDE0MCxcbiAgICAgIDI0MlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA5LFxuICAgICAgMTY0LFxuICAgICAgNjUsXG4gICAgICAxOTYsXG4gICAgICAxNDYsXG4gICAgICAxMzEsXG4gICAgICAxMTUsXG4gICAgICA5OSxcbiAgICAgIDI5LFxuICAgICAgNTIsXG4gICAgICA2OCxcbiAgICAgIDIzLFxuICAgICAgMTIwLFxuICAgICAgMzAsXG4gICAgICAyMjQsXG4gICAgICA0MSxcbiAgICAgIDcsXG4gICAgICAxMjIsXG4gICAgICAxOTYsXG4gICAgICA3MlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJMWkRMTEwzTFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjQzODkxNjI0MDEzOjI5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxNzA2NjEwMTIwOTUyMTk6MjlAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTFdaNlRvUTgrdUR1UVlZQWlBQUtBQT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCI1Z2g0V2g4R2JhaGJ2OWw4ZE5JNTBqMjlIeWNKdFhQQnZ3SFFWR2xVOENjPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIitKd25sOGxNY3ZqRk5uV24rUDg5UFcvWUVlSVlWWU9YMS83MXNxNDFlWWRibGFRWjFoL2xFZTdvWU5mcTR0d1dNRXFvRUFQTjNPTW9ZQjF3MVRVc0RRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcInVkbkJQZkwva0psZE5sK05NT0dYbXlNNzlqQnZXTlo5dnNoK2x6ZFdBckw3WEo3YW40VTErNDVmQkFYRzNzc21LUEVCbDkxWWthSm1qK2hCbzBzcENBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI0Mzg5MTYyNDAxMzoyOUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDksXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMzlcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczMDIxMzM2NixcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQU0rTFwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTStMLmpzb24iOiAie1wia2V5RGF0YVwiOlwiRUxqSHVVMWtvcm9vS1UyamZiRkp5d2taRFpGcDBIYnJGTHoyR3FJN0swTT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxMjMzNTgzODcsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswXX0sXCJ0aW1lc3RhbXBcIjpcIjE3Mjk4MTA1ODQ4MzFcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "2", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ✮✮✮ʟᴏᴜᴋsᴏɴ ᵘᶻᵘᵐᵃᵏⁱ₊ ͟͟͞͞➳ ® 』```", //*『✮✮✮ʟᴏᴜᴋsᴏɴ ᵘᶻᵘᵐᵃᵏⁱ₊ ͟͟͞͞➳』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "✮✮✮ʟᴏᴜᴋsᴏɴ ᵘᶻᵘᵐᵃᵏⁱ₊ ͟͟͞͞➳",
  packname: process.env.PACK_NAME || "✮✮✮ʟᴏᴜᴋsᴏɴ ᵘᶻᵘᵐᵃᵏⁱ₊ ͟͟͞͞➳",
  botname : process.env.BOT_NAME  || "NARUTO-MD",
  ownername:process.env.OWNER_NAME|| "✮✮✮ʟᴏᴜᴋsᴏɴ ᵘᶻᵘᵐᵃᵏⁱ₊ ͟͟͞͞➳",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "NARUTO"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
