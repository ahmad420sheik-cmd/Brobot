import express from "express";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("API running 🚀");
});

app.post("/api/chat", (req, res) => {
  const { message } = req.body;

  res.json({
    reply: "Bot says: " + message
  });
});

app.listen(5002, () => {
  console.log("Server running on http://localhost:5002");
});