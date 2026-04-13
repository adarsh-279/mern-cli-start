import dotenv from "dotenv";
dotenv.config();

import express from "express";

const app = express();

app.use(express.json());
app.use(cookieParser());

app.get("/", (req, res) => {
    res.send("Default Route");
});

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port: https://localhost:${process.env.PORT}`);
});

export default app;
