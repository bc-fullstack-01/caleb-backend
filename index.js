const express = require("express");

const app = express();
const PORT = "4000";

const postsRouter = require("./src/routes/postsRoutes");

app.use(express.json());

app.use("/posts", postsRouter);

app.listen(PORT, () => {
  console.log(`rodando em ${PORT}`);
});
