/**
 * MongoDB Connection Test - TypeScript
 * Run with: npm run test:db
 */

import path from 'path';
import fs from 'fs';
import mongoose from 'mongoose';

// Load environment variables manually
const envPath = path.resolve(process.cwd(), '.env.local');
if (fs.existsSync(envPath)) {
  const envContent = fs.readFileSync(envPath, 'utf-8');
  envContent.split('\n').forEach((line) => {
    const trimmed = line.trim();
    if (trimmed && !trimmed.startsWith('#')) {
      const [key, ...valueParts] = trimmed.split('=');
      const value = valueParts.join('=').trim();
      if (key && value) {
        process.env[key] = value;
      }
    }
  });
}

const MONGODB_URI: string | undefined = process.env.MONGODB_URI;

async function testDatabaseConnection(): Promise<void> {
  console.log('🔍 Testing MongoDB Connection...\n');

  // Step 1: Validate environment variable
  if (!MONGODB_URI) {
    console.error('❌ ERROR: MONGODB_URI is not defined in .env file\n');
    console.log('📋 Fix this by:');
    console.log('1. Open or create .env.local in your project root');
    console.log('2. Add: MONGODB_URI=<your-connection-string>');
    console.log('3. Example: MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/dbname');
    process.exit(1);
  }

  // Mask the URI for display (show only first and last parts)
  const maskedUri = MONGODB_URI.replace(/(.{15}).*(.{10})/, '$1...$2');
  console.log('✅ MONGODB_URI found');
  console.log(`📌 Connection string: ${maskedUri}\n`);

  try {
    // Step 2: Connect to database
    console.log('⏳ Connecting to MongoDB...');
    const conn = await mongoose.connect(MONGODB_URI, {
      bufferCommands: false,
    });

    console.log('✅ Connected successfully!\n');

    // Step 3: Display connection details
    console.log('📊 Connection Information:');
    console.log(`   ├─ Host: ${conn.connection.host}`);
    console.log(`   ├─ Port: ${conn.connection.port}`);
    console.log(`   ├─ Database: ${conn.connection.name}`);
    const status = conn.connection.readyState === 1 ? '🟢 Connected' : '🔴 Disconnected';
    console.log(`   └─ Status: ${status}\n`);

    // Step 4: Ping the database
    console.log('⏳ Running database health check (ping)...');
    const pingResult = await conn.connection.db?.admin().ping();
    if (pingResult) {
      console.log('✅ Database responded to ping!');
      console.log(`   Response: ${JSON.stringify(pingResult)}\n`);
    }

    // Step 5: List available databases
    console.log('📚 Available Databases:');
    const dbList = await conn.connection.db?.admin().listDatabases();
    if (dbList?.databases) {
      const displayCount = Math.min(5, dbList.databases.length);
      for (let i = 0; i < displayCount; i++) {
        const db = dbList.databases[i];
        const sizeInMB = ((db.sizeOnDisk || 0) / 1024 / 1024).toFixed(2);
        console.log(`   ├─ ${db.name} (${sizeInMB} MB)`);
      }
      if (dbList.databases.length > 5) {
        console.log(`   └─ ... and ${dbList.databases.length - 5} more databases`);
      }
    }

    console.log('\n✨ All tests passed! Your database connection is working properly.\n');

    // Step 6: Disconnect
    await mongoose.disconnect();
    console.log('✅ Safely disconnected from database');
    process.exit(0);
  } catch (error: unknown) {
    console.error('❌ Connection Test Failed\n');

    if (error instanceof Error) {
      console.error('Error Message:');
      console.error(`   ${error.message}\n`);
    } else {
      console.error('   Unknown error occurred\n');
    }

    console.log('🔧 Troubleshooting Checklist:');
    console.log('   1. ✓ MONGODB_URI exists in .env or .env.local');
    console.log('   2. ✓ Connection string format is correct');
    console.log('   3. ✓ MongoDB server is running and accessible');
    console.log('   4. ✓ Username and password are correct');
    console.log('   5. ✓ IP address is whitelisted (for MongoDB Atlas)');
    console.log('   6. ✓ Network connectivity to database host\n');

    process.exit(1);
  }
}

// Run the test
testDatabaseConnection();
