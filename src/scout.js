// Require scout-apm first, before other requires
const scout = require("@scout_apm/scout-apm");
const express = require("express");

// The "main" function
async function start() {
  // Trigger the download and installation of the core-agent
  await scout.install({
    allowShutdown: true, // allow shutting down spawned scout-agent processes from this program
    monitor: true, // enable monitoring
    name: "",
    key: "",
  });

  // Initialize your express application
  const app = express();

  // Enable the app-wide scout middleware
  app.use(scout.expressMiddleware());

  // Add other middleware and routes
  // app.use( ... )
  // app.get( ... )

  // Start express
  app.start();
}

// If this script is executed directly, run the start function
if (require.main === module) { start(); }
