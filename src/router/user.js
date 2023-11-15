import jwt from "jsonwebtoken";
import { model } from "../model";
import { config } from "../config";
import responseHandler from "../function/responseHandler";

export default async (fastify) => {
  fastify.post("/login", async (req, res) => {
    try {
      const { email, id } = req?.body;
      const user = await model.User.findOne({ where: { email } });
      if (user) {
        const token = await jwt.sign({ id, email }, config.secret, {
          expiresIn: "24h",
          notBefore: 1000,
        });
        responseHandler({ user, token }, req, res, "login successful");
      } else res.code(400).send({ message: "user not found" });
    } catch (err) {
      res.send({ code: 400, err: err.message });
    }
  });
};
