const mongoose = require('mongoose');

const MONGO_URI = 'mongodb+srv://satokazuma51:<eYu4sS5HVkgRUwzg>@cluster1.hf5sp.mongodb.net/?retryWrites=true&w=majority&appName=Cluster1';

async function testDB() {
    try {
        await mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log('✅ Connected to MongoDB!');
    } catch (err) {
        console.error('❌ MongoDB connection failed:', err.message);
    } finally {
        mongoose.disconnect();
    }
}

testDB();
