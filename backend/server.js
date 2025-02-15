const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5001;


app.use(cors());
app.use(express.json());

// User authentication endpoints
app.post('/api/login', (req, res) => {
    console.log('Login request received');
    const { email, password } = req.body;
    console.log('Login attempt with:', { email, password });
    
    // TODO: Add actual authentication logic
    if (!email || !password) {
        console.log('Login failed: Missing email or password');
        return res.status(400).json({ 
            success: false, 
            message: 'Email and password are required' 
        });
    }

    console.log('Login successful');
    res.json({ success: true, message: 'Login successful' });
});


app.post('/api/register', (req, res) => {
    const { email, password, name } = req.body;
    // TODO: Add actual registration logic
    res.json({ success: true, message: 'Registration successful' });
});

app.get('/', (req, res) => {
    res.send('Welcome to the backend server!');
});


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
