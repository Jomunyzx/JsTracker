# IP Tracker - Web Visitor Logger

This project tracks basic information about website visitors and sends it to a Discord webhook.

## 📌 How It Works?
- Retrieves visitor IP and location data using [ipinfo.io](https://ipinfo.io).
- Extracts device and browser details.
- Sends the collected data to a Discord webhook as an embedded message.

## ⚠️ Disclaimer
Using this script to track users without their consent may be illegal. Make sure to comply with privacy laws (e.g., GDPR, CCPA).

## 🔧 Installation & Usage
1. Clone the repository:
   ```sh
   git clone https://github.com/Jomunyzx/JsTracker
   ```
2. Navigate to the project folder:
   ```sh
   cd JsTracker
   ```
3. Edit `tracker.js` and set your **Discord webhook URL** and **ipInfo token**.
4. Add `tracker.js` to your website with: <script src="tracker.js"></script>;`.

## 📜 License
This project is provided "as is" without any warranties. Use at your own risk.