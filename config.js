const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
if (fs.existsSync('config.env'))
    require('dotenv').config({ path: __dirname + '/config.env' });
const path = require("path");
const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL;
module.exports = { session: process.env.SESSION_ID || 'BWM-XMD;;;H4sIAAAAAAAAA5VU246qSBT9l3qVPqIgiEknw9UL0oKIB51MJgUUyP1WgNjx3yfY3el+mHOmh6dKVbH2qrXW3q8gy8MaqagHi1dQVGELMRqWuC8QWACh8X1UAQJ4EEOwAEu52GkSGWUyT5b0ere1Ena5Wqaro3jcSDenzJo1ipejbqk9gzsBisZJQvc3gIi2p2w15W0kXZGZhqpxTuuzn7uStOWqeO8ZfdTX12y/zJ/BfUCEYRVmgVxcUIoqmKio12FYfY9+L9h1jcx51ehX2bW8jZCpOO+b2dKqGLve1RwlMHDlKmn+PfqKt73swgl9CqaaNcn1y3HX9S/LWI7aRLzJ09HBXK12cvFz6r7Rr8MgQ97aQxkOcf9t3XOFw9NLGfRspOkid/CF5KWpT4LFaKqVSVG3J2W+Xk+PMfk94pGq0zkNfX56O8cFKY6dc2Trox517ZxeHSdXp6RZZavYsvWVuF59ZCX+P7rDlVXtsx2VXlGSb9StJh4Yztnmwprfj68HnG1LmaEvbr2Mv0e/3CRd4ThnTWnXYreqMs3MD2lV9PNgmfPjyBs1sPAlJoryT/oQN9XvWKbX9maZkagvO5LMkmOujjb7SdduNRxpmOY0VrjZEulIVUA5SvyiLVUns+dxj1x+iatD7qxps6Ab69xMS8eelPxtGhrPjxfFqF97YDG5E6BCQVjjCuIwzx57NEcA6LUmciuEH/KCCS2/lKtEvE5wOT7PPIhzKiym2s+fbBucr1IYz0++JUB+Lz8DAhRV7qK6Rt4qrHFe9RqqaxigGiz+/IsAGbriN+OGctSEAH5Y1djKmiLJoffh6schdN28ybDZZ644LFAFFuTnNsI4zIJ60LHJYOVewhaJF4hrsPBhUqM7ATzUhi4a8MBBErk9X+zMp3IrWsrqoN/ithsoX/Ls7YrnzOcM8r0nmvLIJ9pjyCdIkfMnH84o0mchx3IzQIDwvWeGf35pYVt43Jo3RG98kAx/G1vZto3WHnVq+YcNb9qjCnlggasGEcCBbtwUhzxG2W9wdejmMBZJu5mS/a5zdn59ZA57d78yvuC+eQoWr59zSsy9Ac+gueVJVs6AAOkjguHwco5mWWY6YyhquqDYP+of3aAjLIofGcKAABkcLoMXXrL+1qShzrsJA4KHMAyTGiyAuFXNm8IbATc6Nt3pxJs8r/L8EIwP0z7S/5au2hS2UttRxrg5yfRMGVmlcN1fAxtu9wKmy2Lrz7jN1Uit/N9AwALQhoWLE6/kviZIlKUeGZ3WirXdO+3ttOolVIabYryLfOhcqIMaj3xFm61UGBkGx1xzXl+5/Onl0u31GxmdDpLNGKwUPA/V3sLztVg5ZpRIOjNtv0GcXozaW5XiFRPZJe3pQm5QuhHtLhZrofMhTPCN3VdckPY6bO2yC5qmkruMsezrLDiuw3ZMB31TXbq3vnzMheR9HoePjnl9j5ofosd4e3fhv8z6DD15J75AvM/LXwRLcOTA7Nj5C6mzqbDb7f1EDVzLPSnTkDQcpJYmNfJN19okKrjf/yJAkUDs51U6+Jg6EBAggTXmP5v2EKaoxjAtwGLCUjRLkhxNEyDt+aIwMcQfvQ744VPYEbj/A1cjKygHCAAA',
    PREFIXE: process.env.PREFIX || ".",
    OWNER_NAME: process.env.OWNER_NAME || "Ibrahim Adams",
    NUMERO_OWNER : process.env.NUMERO_OWNER || " Ibrahim Adams",              
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "yes",
    AUTO_DOWNLOAD_STATUS: process.env.AUTO_DOWNLOAD_STATUS || 'no',
    BOT : process.env.BOT_NAME || 'BMW_MD',
    URL : process.env.BOT_MENU_LINKS || 'https://files.catbox.moe/h2ydge.jpg',
    MODE: process.env.PUBLIC_MODE || "yes",
    PM_PERMIT: process.env.PM_PERMIT || 'yes',
    HEROKU_APP_NAME : process.env.HEROKU_APP_NAME,
    HEROKU_APY_KEY : process.env.HEROKU_APY_KEY ,
    WARN_COUNT : process.env.WARN_COUNT || '3' ,
    ETAT : process.env.PRESENCE || '',
    CHATBOT : process.env.PM_CHATBOT || 'no',
    DP : process.env.STARTING_BOT_MESSAGE || "yes",
    ANTIDELETE1 : process.env.ANTIDELETE1 || 'yes',
    ANTIDELETE2 : process.env.ANTIDELETE2 || 'yes',
    MENUTYPE : process.env.MENUTYPE || '',
    ANTICALL : process.env.ANTICALL || 'yes',
                  AUTO_REACT : process.env.AUTO_REACT || 'yes',
                  AUTO_REACT_STATUS : process.env.AUTO_REACT_STATUS || 'yes',
                  AUTO_REPLY : process.env.AUTO_REPLY || 'yes',
                  AUTO_READ : process.env.AUTO_READ || 'yes',
                  AUTO_SAVE_CONTACTS : process.env.AUTO_SAVE_CONTACTS || 'yes',
                  AUTO_REJECT_CALL : process.env.AUTO_REJECT_CALL || 'yes',
                  AUTO_BIO : process.env.AUTO_BIO || 'yes',
                  AUDIO_REPLY : process.env.AUDIO_REPLY || 'yes',
    DATABASE_URL,
    DATABASE: DATABASE_URL === databasePath
        ? "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway" : "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway",
   
};
let fichier = require.resolve(__filename);
fs.watchFile(fichier, () => {
    fs.unwatchFile(fichier);
    console.log(`mise à jour ${__filename}`);
    delete require.cache[fichier];
    require(fichier);
});

