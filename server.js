const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const mineflayer = require('mineflayer');

const app = express();
const server = http.createServer(app);
const io = new Server(server);
let bots = {};

app.get('/', (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html lang="tr">
        <head>
            <meta charset="UTF-8">
            <title>WMC PANEL</title>
            <style>
                :root { 
                    --accent: #0088ff; 
                    --accent-glow: rgba(0, 136, 255, 0.4);
                    --bg: #0b0e14; 
                    --card-bg: #161a24; 
                    --text: #e1e1e1;
                    --border: #2d3345;
                }
                body { 
                    background: var(--bg); 
                    color: var(--text); 
                    font-family: 'Segoe UI', system-ui, sans-serif; 
                    margin: 0; 
                    display: flex; 
                    height: 100vh; 
                    overflow: hidden;
                }
                .sidebar { 
                    width: 340px; 
                    background: var(--card-bg); 
                    border-right: 1px solid var(--border); 
                    display: flex; 
                    flex-direction: column; 
                    padding: 25px;
                    box-shadow: 5px 0 15px rgba(0,0,0,0.3);
                    z-index: 20;
                }
                .main { 
                    flex: 1; 
                    padding: 80px 35px 35px 35px; 
                    overflow-y: auto; 
                    background: radial-gradient(circle at top right, #1a1f2e 0%, #0b0e14 100%);
                    position: relative;
                }
                h1 { 
                    font-size: 32px; 
                    letter-spacing: 4px; 
                    margin-bottom: 30px; 
                    color: var(--accent);
                    text-align: center;
                    text-shadow: 0 0 15px var(--accent-glow);
                    border-bottom: 2px solid var(--accent);
                    padding-bottom: 10px;
                }
                .section-title {
                    font-size: 11px;
                    text-transform: uppercase;
                    color: #8892b0;
                    margin-bottom: 12px;
                    font-weight: 800;
                    letter-spacing: 1px;
                }
                .card { 
                    background: rgba(22, 26, 36, 0.8); 
                    border: 1px solid var(--border); 
                    padding: 20px; 
                    border-radius: 12px; 
                    margin-bottom: 25px; 
                    backdrop-filter: blur(5px);
                    transition: transform 0.3s ease, box-shadow 0.3s ease;
                }
                .card:hover {
                    transform: translateY(-2px);
                    box-shadow: 0 8px 20px rgba(0,0,0,0.4);
                    border-color: var(--accent);
                }
                input { 
                    background: #080a0f; 
                    border: 1px solid var(--border); 
                    color: white; 
                    padding: 12px; 
                    margin: 5px 0 15px 0; 
                    width: 100%; 
                    border-radius: 6px; 
                    box-sizing: border-box;
                    outline: none;
                    transition: 0.2s;
                }
                input:focus { border-color: var(--accent); box-shadow: 0 0 8px var(--accent-glow); }
                .grid { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }
                button { 
                    background: var(--accent); 
                    color: white; 
                    border: none; 
                    padding: 14px; 
                    cursor: pointer; 
                    border-radius: 6px; 
                    font-weight: 700;
                    transition: all 0.2s;
                    box-shadow: 0 4px 0 #005bb7;
                }
                button:hover { filter: brightness(1.1); transform: scale(1.02); }
                button:active { transform: translateY(3px); box-shadow: 0 1px 0 #005bb7; }
                .btn-danger { background: #e63946; box-shadow: 0 4px 0 #9d1d28; }
                .btn-danger:active { box-shadow: 0 1px 0 #9d1d28; }
                .btn-secondary { background: #3d4455; box-shadow: 0 4px 0 #2a2f3b; }
                
                #log { 
                    background: #080a0f; 
                    height: 220px; 
                    border: 1px solid var(--border); 
                    padding: 12px; 
                    font-family: 'Consolas', monospace; 
                    font-size: 13px; 
                    overflow-y: auto; 
                    color: #a8b2d1;
                    border-radius: 6px;
                }
                #status-bar {
                    margin-top: auto;
                    padding: 15px;
                    background: linear-gradient(90deg, #161a24, #1f2535);
                    text-align: center;
                    border-radius: 8px;
                    font-size: 14px;
                    font-weight: bold;
                    border: 1px solid var(--border);
                }

                .lang-switcher {
                    position: absolute;
                    top: 20px;
                    right: 35px;
                    display: flex;
                    gap: 8px;
                    background: #1c2230;
                    padding: 6px;
                    border-radius: 50px;
                    border: 1px solid var(--accent);
                    z-index: 100; 
                    box-shadow: 0 0 15px rgba(0,136,255,0.2);
                }
                .lang-btn {
                    padding: 6px 16px;
                    border-radius: 50px;
                    cursor: pointer;
                    font-size: 12px;
                    font-weight: 800;
                    transition: 0.3s;
                    border: none;
                    background: transparent;
                    color: #555;
                    display: flex;
                    align-items: center;
                    gap: 5px;
                }
                .lang-btn.active {
                    background: var(--accent);
                    color: white;
                }
                .lang-btn:hover:not(.active) { background: rgba(255,255,255,0.05); }

                /* Footer */
                .footer {
                    position: fixed;
                    bottom: 10px;
                    right: 25px;
                    font-size: 17px;
                    color: #3d4455;
                    text-align: right;
                    pointer-events: none;
                    letter-spacing: 0.5px;
                }
            </style>
        </head>
        <body>
            <div class="sidebar">
                <h1>WMC</h1>
                <div class="section-title" data-key="conn_settings">Bağlantı Ayarları</div>
                <div class="grid">
                    <input id="host" placeholder="IP">
                    <input id="port" placeholder="Port">
                </div>
                <input id="ver" placeholder="Sürüm / Version">
                <input id="baseName" placeholder="Bot İsmi / Bot Name">
                <input id="count" type="number" placeholder="Sayı / Count">
                <input id="delay" type="number" value="800" placeholder="Gecikme / Delay (ms)">
                
                <button onclick="spawn()" data-key="btn_start">SİSTEMİ BAŞLAT</button>
                <button class="btn-danger" style="margin-top:10px" onclick="killAll()" data-key="btn_stop">HEPSİNİ DURDUR</button>
                
                <div class="section-title" style="margin-top:25px" data-key="sys_log">Sistem Günlüğü</div>
                <div id="log" data-key="ready">Sistem hazır...</div>
                
                <div id="status-bar"><span data-key="active_count">Aktif Bot Sayısı:</span> <span id="bot-count">0</span></div>
            </div>
            
            <div class="main">
                <div class="lang-switcher">
                    <button class="lang-btn active" onclick="setLang('tr')" id="btn-tr">🇹🇷 TR</button>
                    <button class="lang-btn" onclick="setLang('en')" id="btn-en">🇺🇸 EN</button>
                </div>

                <div class="card">
                    <div class="section-title" data-key="movement">Hareket Kontrolü</div>
                    <div class="grid">
                        <button onclick="cmd('forward')" data-key="forward">İLERİ GİT</button>
                        <button onclick="cmd('back')" data-key="back">GERİ GİT</button>
                        <button onclick="cmd('jump')" data-key="jump">ZIPLA</button>
                        <button onclick="cmd('swing')" data-key="swing">SOL TIK (VUR)</button>
                    </div>
                </div>

                <div class="card">
                    <div class="section-title" data-key="interaction">Etkileşim</div>
                    <input id="chatMsg" placeholder="...">
                    <div style="display:flex; align-items:center; gap:12px;">
                        <span style="font-size:11px; color:#8892b0; white-space:nowrap;" data-key="chat_delay">MESAJ ARALIĞI (MS):</span>
                        <input id="chatDelay" type="number" value="200" style="margin:0;">
                    </div>
                    <div class="grid" style="margin-top:15px;">
                        <button onclick="cmd('chat')" data-key="send_msg">MESAJ GÖNDER</button>
                        <button class="btn-secondary" onclick="cmd('drop')" data-key="drop">ENVANTERİ BOŞALT</button>
                    </div>
                </div>

                <div class="card">
                    <div class="section-title" data-key="vision">Bakış Açısı Kontrolü</div>
                    <div style="display:grid; grid-template-columns: repeat(3, 1fr); gap: 10px; align-items: center;">
                        <div></div>
                        <button onclick="cmd('lookUp')" data-key="up">YUKARI</button>
                        <div></div>
                        
                        <button onclick="cmd('rotLeft')" data-key="left">SOLA</button>
                        <input id="rotVal" type="number" value="20" style="margin:0; text-align:center;">
                        <button onclick="cmd('rotRight')" data-key="right">SAĞA</button>
                        
                        <div></div>
                        <button onclick="cmd('lookDown')" data-key="down">AŞAĞI</button>
                        <div></div>
                    </div>
                </div>

                <div class="footer">
                    Developed by <b>ubeytkzlts</b> | Eğitim amaçlı geliştirilmiştir.
                </div>
            </div>

            <script src="/socket.io/socket.io.js"></script>
            <script>
                const socket = io();
                const langs = {
                    tr: {
                        conn_settings: "Bağlantı Ayarları",
                        btn_start: "SİSTEMİ BAŞLAT",
                        btn_stop: "HEPSİNİ DURDUR",
                        sys_log: "Sistem Günlüğü",
                        ready: "Sistem hazır...",
                        active_count: "Aktif Bot Sayısı:",
                        movement: "Hareket Kontrolü",
                        forward: "İLERİ GİT",
                        back: "GERİ GİT",
                        jump: "ZIPLA",
                        swing: "SOL TIK (VUR)",
                        interaction: "Etkileşim",
                        chat_delay: "MESAJ ARALIĞI (MS):",
                        send_msg: "MESAJ GÖNDER",
                        drop: "ENVANTERİ BOŞALT",
                        vision: "Bakış Açısı Kontrolü",
                        up: "YUKARI",
                        down: "AŞAĞI",
                        left: "SOLA",
                        right: "SAĞA"
                    },
                    en: {
                        conn_settings: "Connection Settings",
                        btn_start: "START SYSTEM",
                        btn_stop: "STOP ALL",
                        sys_log: "System Log",
                        ready: "System ready...",
                        active_count: "Active Bot Count:",
                        movement: "Movement Control",
                        forward: "GO FORWARD",
                        back: "GO BACK",
                        jump: "JUMP",
                        swing: "LEFT CLICK",
                        interaction: "Interaction",
                        chat_delay: "CHAT DELAY (MS):",
                        send_msg: "SEND MESSAGE",
                        drop: "DROP INVENTORY",
                        vision: "Vision Control",
                        up: "LOOK UP",
                        down: "LOOK DOWN",
                        left: "ROTATE LEFT",
                        right: "ROTATE RIGHT"
                    }
                };

                let currentLang = 'tr';

                function setLang(lang) {
                    currentLang = lang;
                    document.getElementById('btn-tr').classList.toggle('active', lang === 'tr');
                    document.getElementById('btn-en').classList.toggle('active', lang === 'en');
                    
                    document.querySelectorAll('[data-key]').forEach(el => {
                        const key = el.getAttribute('data-key');
                        if (langs[lang][key]) el.innerText = langs[lang][key];
                    });
                }

                function spawn() {
                    socket.emit('spawn', {
                        host: document.getElementById('host').value,
                        port: document.getElementById('port').value,
                        ver: document.getElementById('ver').value,
                        name: document.getElementById('baseName').value,
                        count: parseInt(document.getElementById('count').value),
                        delay: parseInt(document.getElementById('delay').value)
                    });
                }
                function cmd(type) {
                    socket.emit('command', { 
                        type, 
                        val: document.getElementById('rotVal').value, 
                        msg: document.getElementById('chatMsg').value,
                        chatDelay: parseInt(document.getElementById('chatDelay').value)
                    });
                }
                function killAll() { socket.emit('killAll'); }
                socket.on('update', d => { document.getElementById('bot-count').innerText = d.count; });
                socket.on('log', m => {
                    const l = document.getElementById('log');
                    l.innerHTML += '<div style="margin-bottom:4px; border-left:2px solid var(--accent); padding-left:8px;">' + m + '</div>';
                    l.scrollTop = l.scrollHeight;
                });
            </script>
        </body>
        </html>
    `);
});

io.on('connection', (socket) => {
    socket.on('spawn', async (config) => {
        for (let i = 1; i <= config.count; i++) {
            const name = config.name ? (config.count > 1 ? `${config.name}${i}` : config.name) : `WMC_${Math.random().toString(36).substring(7).toUpperCase()}`;
            await new Promise(r => setTimeout(r, config.delay));
            const bot = mineflayer.createBot({
                host: config.host,
                port: parseInt(config.port),
                username: name,
                version: config.ver,
                hideErrors: true
            });
            bot.on('spawn', () => {
                bots[name] = bot;
                io.emit('log', `${name} başarıyla bağlandı.`);
                io.emit('update', { count: Object.keys(bots).length });
            });
            bot.on('error', () => io.emit('log', `Bağlantı Hatası: ${name}`));
            bot.on('end', () => {
                delete bots[name];
                io.emit('update', { count: Object.keys(bots).length });
            });
        }
    });

    socket.on('command', async (data) => {
        const botList = Object.values(bots);
        if (data.type === 'chat') {
            for (const bot of botList) {
                try {
                    bot.chat(data.msg);
                    if (data.chatDelay > 0) await new Promise(r => setTimeout(r, data.chatDelay));
                } catch (e) {}
            }
        } else {
            botList.forEach(bot => {
                try {
                    if (data.type === 'jump') { bot.setControlState('jump', true); setTimeout(() => bot.setControlState('jump', false), 400); }
                    if (data.type === 'forward') { bot.setControlState('forward', true); setTimeout(() => bot.setControlState('forward', false), 800); }
                    if (data.type === 'back') { bot.setControlState('back', true); setTimeout(() => bot.setControlState('back', false), 800); }
                    if (data.type === 'swing') bot.swingArm('right');
                    const degree = parseFloat(data.val) * (Math.PI / 180);
                    if (data.type === 'rotLeft') bot.look(bot.entity.yaw + degree, bot.entity.pitch);
                    if (data.type === 'rotRight') bot.look(bot.entity.yaw - degree, bot.entity.pitch);
                    if (data.type === 'lookUp') bot.look(bot.entity.yaw, bot.entity.pitch + degree);
                    if (data.type === 'lookDown') bot.look(bot.entity.yaw, bot.entity.pitch - degree);
                    if (data.type === 'drop') {
                        const items = bot.inventory.items();
                        if (items.length > 0) bot.tossStack(items[0]);
                    }
                } catch (e) {}
            });
        }
    });

    socket.on('killAll', () => {
        Object.values(bots).forEach(b => b.quit());
        bots = {};
        io.emit('log', "Tüm bot bağlantıları kesildi.");
        io.emit('update', { count: 0 });
    });
});

server.listen(3000, () => console.log('WMC: http://localhost:3000'));
