// Initialize map
let map = null;
let marker = null;

function initializeMap(lat, lon) {
    if (!map) {
        map = L.map('map').setView([lat, lon], 13);
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '© OpenStreetMap contributors',
            maxZoom: 19
        }).addTo(map);
    } else {
        map.setView([lat, lon], 13);
    }

    // Remove previous marker
    if (marker) {
        map.removeLayer(marker);
    }

    // Add new marker
    marker = L.marker([lat, lon]).addTo(map)
        .bindPopup(`<b>Location</b><br>Lat: ${lat}<br>Lon: ${lon}`)
        .openPopup();
}

// Fetch IP information
async function trackIP(ip) {
    try {
        // Show loading state
        showLoading();

        // Using ipapi.co free API (no key required)
        const response = await fetch(`https://ipapi.co/${ip}/json/`);

        if (!response.ok) {
            throw new Error('IP not found or invalid');
        }

        const data = await response.json();

        // Update UI with results
        displayResults(data);

        // Initialize map with location
        if (data.latitude && data.longitude) {
            initializeMap(data.latitude, data.longitude);
        }

    } catch (error) {
        showError(error.message);
        console.error('Error:', error);
    }
}

function displayResults(data) {
    // Update main results
    document.getElementById('ipResult').textContent = data.ip || '-';
    document.getElementById('locationResult').textContent = 
        `${data.city}, ${data.region}` || '-';
    document.getElementById('ispResult').textContent = data.org || '-';
    document.getElementById('timezoneResult').textContent = data.timezone || '-';

    // Update detailed results
    document.getElementById('countryResult').textContent = data.country_name || '-';
    document.getElementById('regionResult').textContent = data.region || '-';
    document.getElementById('latResult').textContent = data.latitude || '-';
    document.getElementById('lonResult').textContent = data.longitude || '-';

    // Hide loading, show results
    hideLoading();
}

function showLoading() {
    const resultsContainer = document.querySelector('.results-container');
    const loadingDiv = document.createElement('div');
    loadingDiv.className = 'loading';
    loadingDiv.id = 'loadingSpinner';
    loadingDiv.innerHTML = '<div class="spinner"></div><p>Tracking IP...</p>';
    resultsContainer.insertBefore(loadingDiv, resultsContainer.firstChild);
}

function hideLoading() {
    const loadingDiv = document.getElementById('loadingSpinner');
    if (loadingDiv) {
        loadingDiv.remove();
    }
}

function showError(message) {
    hideLoading();
    const resultsContainer = document.querySelector('.results-container');
    const errorDiv = document.createElement('div');
    errorDiv.className = 'error-message';
    errorDiv.id = 'errorMessage';
    errorDiv.textContent = `❌ Error: ${message}`;
    resultsContainer.insertBefore(errorDiv, resultsContainer.firstChild);

    // Remove error after 5 seconds
    setTimeout(() => {
        if (document.getElementById('errorMessage')) {
            document.getElementById('errorMessage').remove();
        }
    }, 5000);
}

// Get your own IP on page load
async function getOwnIP() {
    try {
        const response = await fetch('https://ipapi.co/json/');
        const data = await response.json();
        trackIP(data.ip);
    } catch (error) {
        console.error('Could not fetch own IP:', error);
    }
}

// Event listeners
document.getElementById('searchBtn').addEventListener('click', () => {
    const ip = document.getElementById('ipInput').value.trim();
    if (ip) {
        trackIP(ip);
    } else {
        showError('Please enter an IP address or domain name');
    }
});

document.getElementById('ipInput').addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        const ip = document.getElementById('ipInput').value.trim();
        if (ip) {
            trackIP(ip);
        }
    }
});

// Load own IP on page load
window.addEventListener('load', getOwnIP);
