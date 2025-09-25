const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(express.static('public'));

// Sample routes for debugging
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

app.get('/api/hello', (req, res) => {
    const message = 'Hello from debug server!';
    console.log('API called:', message);
    res.json({ message });
});

app.get('/api/debug/:id', (req, res) => {
    const { id } = req.params;
    const debugInfo = {
        id: parseInt(id),
        timestamp: new Date().toISOString(),
        message: `Debug info for ID: ${id}`
    };
    
    // Add breakpoint here for debugging
    console.log('Debug endpoint called with:', debugInfo);
    res.json(debugInfo);
});

app.post('/api/data', (req, res) => {
    const { body } = req;
    console.log('Received data:', body);
    
    // Process the data (add breakpoint for debugging)
    const processed = {
        ...body,
        processed: true,
        timestamp: new Date().toISOString()
    };
    
    res.json(processed);
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error('Error occurred:', err);
    res.status(500).json({ error: 'Internal Server Error' });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    console.log(`Visit http://localhost:${PORT} to test`);
});

module.exports = app;