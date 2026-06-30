require("dotenv").config();
const env = require("./src/config/env");
const app = require("./src/app");
const connectDB = require("./src/config/db");
const port = env.port;

const startServer = async () => {
    try {
        await connectDB();

        app.listen(port, () => {
            console.log(`🚀 Server running on port ${port}`);
        });

    } catch (error) {
        console.error("Failed to start server:", error);
        process.exit(1);
    }
};

startServer();