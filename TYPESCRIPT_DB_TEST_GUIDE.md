# TypeScript Database Connection Testing Guide

## 📋 Step-by-Step Instructions

### Step 1: Install Dependencies

First, install `ts-node` which allows running TypeScript directly without compiling:

```powershell
npm install --save-dev ts-node
```

Or if you're using the updated `package.json`, simply run:

```powershell
npm install
```

---

### Step 2: Configure Your Database Connection String

1. **Open or create `.env.local`** file in your project root:
   ```
   d:\Harsh\PROJECTS\stock_site\.env.local
   ```

2. **Add your MongoDB connection string:**
   ```
   MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/databasename?retryWrites=true&w=majority
   ```

   **Getting your connection string:**
   - **MongoDB Atlas (Cloud)**: 
     - Go to [mongodb.com/cloud/atlas](https://mongodb.com/cloud/atlas)
     - Sign in to your cluster
     - Click "Connect" → "Drivers" → Copy the connection string
   
   - **Local MongoDB**:
     ```
     MONGODB_URI=mongodb://localhost:27017/databasename
     ```

3. **Replace placeholders:**
   - `username` → Your database username
   - `password` → Your database password
   - `cluster` → Your MongoDB cluster name
   - `databasename` → Name of your database

4. **Save the file**

---

### Step 3: Run the Database Test

Choose one of these methods:

#### Option A: Using npm script (Recommended)
```powershell
npm run test:db
```

#### Option B: Using npx directly
```powershell
npx ts-node test-db.ts
```

#### Option C: Using ts-node directly
```powershell
ts-node test-db.ts
```

---

### Step 4: Interpret the Results

#### ✅ Success Output
If you see this message, your database is working:
```
✨ All tests passed! Your database connection is working properly.
```

You'll also see:
- ✅ Connection details (host, port, database name)
- ✅ Database ping response
- ✅ List of available databases
- ✅ Safe disconnection confirmation

#### ❌ Error Output
If you see an error, the test script will:
1. Display the error message
2. Suggest the cause
3. Provide a troubleshooting checklist

---

## 🔧 Common Issues & Solutions

### Issue 1: "Cannot find module 'ts-node'"
**Solution:** Run `npm install --save-dev ts-node`

### Issue 2: "MONGODB_URI is not defined"
**Solution:** 
- Check that `.env.local` exists in your project root
- Verify the variable name is exactly `MONGODB_URI`
- Restart your terminal after creating the file

### Issue 3: "Connection refused" or "ECONNREFUSED"
**Solution:**
- If using local MongoDB: Start your MongoDB service
- If using MongoDB Atlas: Check that your IP is whitelisted in Network Access

### Issue 4: "Authentication failed"
**Solution:**
- Verify username and password in the connection string
- Check that special characters in password are URL-encoded
- Ensure the user has access to the specified database

### Issue 5: "Timed out" or "getaddrinfo ENOTFOUND"
**Solution:**
- Check internet connectivity
- Verify the cluster URL in the connection string
- Check if firewall/antivirus is blocking MongoDB port (27017)

---

## 📊 What the Test Does

| Step | Action | Purpose |
|------|--------|---------|
| 1 | Validates MONGODB_URI | Ensures connection string is configured |
| 2 | Connects to MongoDB | Verifies network connectivity and credentials |
| 3 | Displays connection info | Shows which host/database you're connected to |
| 4 | Runs database ping | Tests if the database server is responsive |
| 5 | Lists databases | Shows available databases and their sizes |
| 6 | Disconnects safely | Closes the connection properly |

---

## 🚀 Quick Reference

```powershell
# Install dependencies
npm install

# Run the test
npm run test:db

# Or directly with npx
npx ts-node test-db.ts

# Check your environment variable is set
$env:MONGODB_URI  # PowerShell
```

---

## 📝 Example Connection Strings

### MongoDB Atlas (Recommended)
```
MONGODB_URI=mongodb+srv://user:password@cluster0.abc1234.mongodb.net/mydb?retryWrites=true&w=majority
```

### Local MongoDB
```
MONGODB_URI=mongodb://localhost:27017/mydb
```

### MongoDB Atlas with Auth
```
MONGODB_URI=mongodb+srv://admin:SecurePass123@stock-cluster.abc1234.mongodb.net/stock_db?retryWrites=true&w=majority
```

---

## ✨ Advanced: Test via Next.js API Route

If you prefer to test within your application:

**Create `app/api/health/route.ts`:**
```typescript
import { connectToDatabase } from "@/databse/mongoose";

export async function GET() {
  try {
    const mongoose = await connectToDatabase();
    
    const pingResult = await mongoose.connection.db?.admin().ping();
    
    return Response.json({
      status: "healthy",
      message: "Database connected",
      database: mongoose.connection.name,
      timestamp: new Date().toISOString()
    });
  } catch (error: any) {
    return Response.json({
      status: "error",
      message: error.message
    }, { status: 500 });
  }
}
```

Then visit: `http://localhost:3000/api/health`

---

## 📞 Need Help?

If the test still fails:
1. Double-check your MongoDB connection string
2. Verify your IP is whitelisted (MongoDB Atlas)
3. Ensure MongoDB service is running
4. Check firewall settings
5. Review MongoDB Atlas user permissions
