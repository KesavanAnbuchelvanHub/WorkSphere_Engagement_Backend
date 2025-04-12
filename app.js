// backend/app.js
require('dotenv').config();
const express = require('express');
const cors = require('cors');

const authRoutes = require('./routes/authRoutes');
const taskRoutes = require('./routes/taskRoutes');
const projectRoutes = require('./routes/projectRoutes');
const employeeRoutes = require('./routes/employeeRoutes');
const engagementRoutes = require('./routes/engagementRoutes');
const reportRoutes = require('./routes/reportRoutes');
const mlRoutes = require('./routes/mlRoutes');
const engagementReportRoutes = require('./routes/engagementReportRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Mount the routers
app.use('/login', authRoutes);
app.use('/tasks', taskRoutes);
app.use('/projects', projectRoutes);
app.use('/employees', employeeRoutes);
app.use('/engagements', engagementRoutes);
app.use('/report', reportRoutes);
app.use('/ml-update', mlRoutes);
app.use('/daily-engagement', engagementReportRoutes);

app.listen(PORT, () => {
    console.log(`Backend server is running at http://localhost:${PORT}`);
});
