import fastify from "fastify";
import "dotenv/config";
import { initializeDatabase } from "./database";
import { model } from "./model";
import router from "./router";
const app = fastify({ logger: true });
const port = 3000;

router(app);
app.get("/", (req, res) => {
  res.send("hello");
});
app.listen({ port }, async (err) => {
  if (err) {
    console.error("Fastify server startup error:", err);
  } else {
    await initializeDatabase();
    console.log(`Server is running on port ${port}`);
  }
});
