// index.js
// Simple Express server demonstrating x402 protocol implementation

import express from "express";

const app = express();
const PORT = process.env.PORT || 8080;

// Basic /api/x402 endpoint returning "402 Payment Required" schema
app.get("/api/x402", (req, res) => {
  res.status(402).json({
    x402Version: 1,
    resource: "https://x402lite.com/api/x402",
    description: "Demo endpoint for x402 protocol - micropayment required",
    mimeType: "application/json",
    asset: "USD",
    payTo: "0x0000000000000000000000000000000000000000",
    maxAmountRequired: 0.01,
    maxTimeoutSeconds: 300,
    accepts: [
      {
        asset: "USD",
        description: "Pay $0.01 to view premium ranking data",
        mimeType: "application/json",
        payTo: "0x0000000000000000000000000000000000000000",
        maxAmountRequired: 0.01,
        maxTimeoutSeconds: 300
      }
    ]
  });
});

// Home route
app.get("/", (req, res) => {
  res.send(
    "<h1>x402Lite Learning Kit</h1><p>This is a demo of the x402 Payment Required protocol.</p>"
  );
});

app.listen(PORT, () =>
  console.log(`🚀 x402Lite server running on http://localhost:${PORT}`)
);
