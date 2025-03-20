
# IP Tracker - Web Visitor Logger

Tento projekt sleduje základní informace o návštěvnících webu a odesílá je na Discord pomocí webhooku.

## 📌 Jak to funguje?
- Získává informace o IP adrese a lokaci uživatele pomocí [ipinfo.io](https://ipinfo.io).
- Extrahuje údaje o zařízení a prohlížeči.
- Odesílá data na Discord webhook jako embed zprávu.

## ⚠️ Upozornění
Použití tohoto skriptu ke sledování uživatelů bez jejich vědomí může být nelegální. Ujisti se, že dodržuješ zákony o ochraně osobních údajů.

## 🔧 Instalace a použití
1. Naklonuj repozitář:
   ```sh
   git clone https://github.com/Jomunyzx/JsTracker
   ```
2. Otevři složku projektu:
   ```sh
   cd JsTracker
   ```
3. Uprav `script.js` a nastav svůj **Discord webhook** a **ipInfo token**.
4. Přidej `script.js` na svůj web a zavolej funkci `trackUser();`.

## 📜 Licence
Tento projekt je poskytován "tak, jak je" bez jakýchkoli záruk. Použití na vlastní nebezpečí.
