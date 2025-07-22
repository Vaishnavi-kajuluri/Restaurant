
import app from './app1.js';
import cors from 'cors'
//const cors = require('cors');
app.use(cors({
    origin: process.env.FRONTEND_URL || "http://localhost:5173", // Allow frontend origin
    credentials: true, // Allow cookies and authentication headers
    methods: ["GET", "POST", "PUT", "DELETE"], // Specify allowed HTTP methods
    allowedHeaders: ["Content-Type", "Authorization"] // Allow custom headers
}));

app.listen(process.env.PORT,()=>{
    console.log(`server running on ${process.env.PORT}`);
});