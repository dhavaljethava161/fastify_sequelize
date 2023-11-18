import { model, sequelize } from "../model";

const admin = [
  {
    id: 1,
    username: "dhaval",
    email: "dhaval.work123@gmail.com",
    password: "Dhaval@123",
    number: 7048324593,
    coin: 100,
    isAdmin: true,
    status: true,
    createdAt: "2023-11-09 11:50:00",
    updatedAt: "2023-11-09 11:50:00",
  },
  {
    id: 2,
    username: "dharmik",
    email: "dharmik.work123@gmail.com",
    password: "Dhaval@123",
    number: 8128967713,
    coin: 100,
  },
  {
    id: 3,
    username: "darshan",
    email: "darshan.work123@gmail.com",
    password: "Dhaval@123",
    number: 9824785424,
    coin: 100,
  },
];

export const initializeDatabase = async () => {
  try {
    await sequelize.sync({ alter: true, force: true }).then(() => {
      console.log("Database synchronized");
    });

    await model.User.bulkCreate(admin).then(() => {
      console.log("User record created");
    });
  } catch (error) {
    console.log("error has been occured");
    console.error("Database initialization error:", error);
  }
};
