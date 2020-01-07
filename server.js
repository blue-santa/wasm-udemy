// Express
const express = require('express')
const app = express()

// Serve static files from public
app.use( express.static('public') )

// Start Server
app.listen( 2223, () => console.log('Server running on port 2223') )
