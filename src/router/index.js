
import user from "./user";
// import settings from "./setting";
// import deposits from "./deposite";
// import withdrawals from "./withdrawal";

export default async (fastify) => {
  fastify.register(user, { prefix: "/api/user" });
  //   fastify.register(settings, { prefix: "/api/setting" });
  //   fastify.register(deposits, { prefix: "/api/deposit" });
  //   fastify.register(withdrawals, { prefix: "/api/withdrawal" });
};
