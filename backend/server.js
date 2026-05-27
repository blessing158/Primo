const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

/* =========================
   HOME ROUTE
========================= */

app.get("/", (req, res) => {

  res.json({
    app: "Miity Backend",
    status: "Online",
    security: "Active"
  });

});

/* =========================
   LOGIN
========================= */

app.post("/login", (req, res) => {

  const { username } = req.body;

  if (!username) {

    return res.status(400).json({
      success: false,
      message: "Username required"
    });

  }

  res.json({
    success: true,
    message: "Login successful",
    user: username
  });

});

/* =========================
   MESSAGE
========================= */

app.post("/message", (req, res) => {

  const { message } = req.body;

  if (
    message.includes("hack") ||
    message.includes("spam") ||
    message.includes("scam")
  ) {

    return res.status(403).json({
      banned: true,
      reason: "Suspicious activity detected"
    });

  }

  res.json({
    success: true,
    message: "Message accepted"
  });

});

/* =========================
   START SERVER
========================= */

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {

  console.log(
    `Miity backend running on port ${PORT}`
  );

});
