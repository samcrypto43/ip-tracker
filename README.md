# 📍 IP Address Tracker

A modern, user-friendly web application to track IP addresses and discover their geographic location, ISP information, timezone, and more.

## Features

✨ **Key Features:**
- 🌍 Track any IP address or domain name
- 📍 Get precise geographic coordinates
- 🗺️ Interactive map visualization using Leaflet
- 🏢 View ISP and organization information
- ⏰ Display timezone information
- 🎨 Beautiful, responsive UI
- ⚡ Real-time tracking
- 📱 Mobile-friendly design

## How to Use

1. **Open the application** in your web browser
2. **Enter an IP address** or domain name in the search box
   - Examples: `8.8.8.8`, `1.1.1.1`, `google.com`, `github.com`
3. **Click "Search"** or press **Enter**
4. **View results** including:
   - IP Address
   - Location (City, Region)
   - Country
   - ISP/Organization
   - Timezone
   - Exact coordinates
   - Interactive map

## Technology Stack

- **Frontend:**
  - HTML5
  - CSS3 (with gradients and animations)
  - Vanilla JavaScript (ES6+)
  - Leaflet.js (for mapping)

- **APIs:**
  - ipapi.co (Free IP geolocation API - no key required!)

## Installation & Setup

### Option 1: Direct Usage (Recommended for beginners)
1. Clone this repository
   ```bash
   git clone https://github.com/samcrypto43/ip-tracker.git
   cd ip-tracker
   ```
2. Open `index.html` directly in your browser
   - Double-click the file, or
   - Right-click → Open with → Browser

### Option 2: Using a Local Server
1. Clone the repository
   ```bash
   git clone https://github.com/samcrypto43/ip-tracker.git
   cd ip-tracker
   ```

2. **Using Python 3:**
   ```bash
   python -m http.server 8000
   ```

3. **Using Python 2:**
   ```bash
   python -m SimpleHTTPServer 8000
   ```

4. **Using Node.js (http-server):**
   ```bash
   npx http-server
   ```

5. **Using Live Server (VS Code Extension):**
   - Install "Live Server" extension
   - Right-click on `index.html` → Open with Live Server

6. Open your browser and go to:
   - `http://localhost:8000` (for Python)
   - `http://localhost:5500` (for VS Code Live Server)

## File Structure

```
ip-tracker/
├── index.html      # Main HTML page
├── style.css       # Styling and design
├── script.js       # JavaScript functionality
├── README.md       # This file
└── server.js       # (Optional) Backend server
```

## API Information

### ipapi.co
- **Free Tier:** 30,000 requests/month
- **No API Key Required** for basic usage
- **Response includes:**
  - IP Address
  - Country & Region
  - City
  - Latitude & Longitude
  - ISP/Organization
  - Timezone
  - Postal Code
  - And more!

## Examples

### Track Google's DNS Server
- IP: `8.8.8.8`
- Expected: Google, USA

### Track Cloudflare's DNS
- IP: `1.1.1.1`
- Expected: Cloudflare, USA

### Track by Domain
- Domain: `google.com`
- The app will resolve it to an IP and show location

## Limitations

- **Rate Limiting:** Free API has request limits (check ipapi.co for current limits)
- **Accuracy:** Geolocation is approximate, not precise street address
- **VPN/Proxy:** Results may show VPN/proxy location, not actual user location
- **Privacy:** Only displays public information about IP addresses

## Troubleshooting

### "IP not found or invalid"
- Make sure you entered a valid IP address (e.g., 8.8.8.8)
- Check your internet connection
- The IP address might be private/internal (192.168.x.x)

### Map not loading
- Check browser console for errors
- Ensure Leaflet CSS/JS libraries are loaded
- Clear browser cache and reload

### Rate limit exceeded
- Wait a bit and try again
- The API might have a daily/monthly limit

## Features Coming Soon

- 🔐 VPN/Proxy detection
- 📊 Batch IP tracking
- 💾 Search history
- 🔗 Share location link
- 🌙 Dark mode
- 📈 Statistics dashboard

## Contributing

Feel free to fork this project and submit pull requests for any improvements!

## License

This project is open source and available under the MIT License.

## Support

Having issues? Try:
1. Clearing browser cache
2. Using a different browser
3. Checking your internet connection
4. Viewing browser console for error messages (F12)

## Disclaimer

This tool is for educational and informational purposes. Only use it with IP addresses you have permission to track. Respect privacy and legal regulations in your jurisdiction.

---

**Made with ❤️ by Sam Crypto**

🌟 If you found this helpful, please give it a star!
