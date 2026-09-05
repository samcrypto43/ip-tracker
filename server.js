/**
 * IP Tracker Backend Server
 * Optional: Use this if you want to run the app with Node.js
 * 
 * Installation:
 * 1. npm install
 * 2. node server.js
 * 3. Open http://localhost:3000 in your browser
 */

const express = require('express');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname)));

// Root route
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// API endpoint to fetch IP info (if you want to proxy requests)
app.get('/api/ip/:ipAddress', async (req, res) => {
    try {
        const ipAddress = req.params.ipAddress;
        
        // Validate IP format (basic validation)
        if (!ipAddress.match(/^[\w.-]+$/)) {
            return res.status(400).json({ error: 'Invalid IP address or domain' });
        }

        // Fetch from ipapi.co
        const response = await fetch(`https://ipapi.co/${ipAddress}/json/`);
        
        if (!response.ok) {
            return res.status(404).json({ error: 'IP not found or invalid' });
        }

        const data = await response.json();
        res.json(data);

    } catch (error) {
        console.error('Error fetching IP info:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
    res.json({ status: 'OK', message: 'IP Tracker server is running' });
});

// 404 handler
app.use((req, res) => {
    res.status(404).json({ error: 'Route not found' });
});

// Error handler
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Something went wrong!' });
});

// Start server
app.listen(PORT, () => {
    console.log(`
    ╔════════════════════════════════════════╗
    ║       📍 IP Tracker Server Running     ║
    ╠════════════════════════════════════════╣
    ║  Server: http://localhost:${PORT}              ║
    ║  API: http://localhost:${PORT}/api/ip/:ip      ║
    ║  Health: http://localhost:${PORT}/api/health   ║
    ╚════════════════════════════════════════╝
    `);
});
