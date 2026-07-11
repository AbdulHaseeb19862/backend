import express from "express";
import cors from "cors";
const app = express();
app.use(cors());
app.use(express.static("dist"));
const PORT = process.env.PORT || 5000;
const jokes = [
  {
    id: 1,
    setup: "Why don't programmers like nature?",
    punchline: "It has too many bugs.",
  },
  {
    id: 2,
    setup: "Why do Java developers wear glasses?",
    punchline: "Because they don't C#.",
  },
  {
    id: 3,
    setup: "Why was the JavaScript developer sad?",
    punchline: "Because he didn't Node how to Express himself.",
  },
  {
    id: 4,
    setup: "What is a programmer's favorite place?",
    punchline: "The Foo Bar.",
  },
  {
    id: 5,
    setup: "Why did the computer go to the doctor?",
    punchline: "Because it caught a virus.",
  },
];

app.get("/", (req, res) => {
  res.send("Hello from the backend!");
});
app.get("/api/jokes", (req, res) => {
  res.status(200).json(jokes);
});
app.get("/api/data", (req, res) => {
  res.json({ message: "This is data from the backend!" });
});
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
