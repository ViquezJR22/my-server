const express = require("express");
const axios = require("axios");

const app = express();
const port = 3001;

app.get("/greet", (req, res) => {
res.send("Hello from Server 2!");
});

app.get("/", async (req, res) => {
try {
 const response = await axios.get("http://server1:3000/greet");
 res.send(`Server 1 says: "${response.data}"`);
} catch (error) {
 res.send("Could not reach Server 1");
}
});

app.listen(port, () => {
console.log(`Server 2 listening at http://localhost:${port}`);
});
