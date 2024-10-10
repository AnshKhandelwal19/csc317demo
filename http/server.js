import express from 'express';

const app = express();

app.get("/cars", (req, resp) => {
    resp.send("hello world");
});

app.post("/cars", (req, resp) => {
    resp.send("This is my POST handler");
});

app.listen(3000, () => {
    console.log("server is running on port 3000");
});