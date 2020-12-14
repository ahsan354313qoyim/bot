exports.info = (id, BotName, corohelp, tampilTanggal, tampilWaktu, instagram, whatsapp, kapanbotaktif, grupch1, grupch2) => {
	return `${BotName}
  
Hai kak *${id.split("@s.whatsapp.net")[0]}*

GUNAKAN 
!donasi untuk berdonasi/membantu owner
!info untuk melihat info bot

INFO BOT! :
*AUTHOR*: Ahsan Adinul
*Youtube* : Ahsan Adinul


bot aktif selama : ${kapanbotaktif}
FOLLOW instagram
 ${instagram}

Owner : 
${whatsapp}`
}
