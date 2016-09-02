/*
 * Main application config. Put configuration settings that the app needs.
 */

// Determine the node env based on the NODE_ENV environment variable.
const NODE_ENV = process.env.NODE_ENV || "development";

// Define environment-specific configuration
const config = {
  development: {
    port: process.env.PORT || 3000,
  },
  production: {
    port: process.env.PORT || 4000,
  }
};
module.exports = config[NODE_ENV];
