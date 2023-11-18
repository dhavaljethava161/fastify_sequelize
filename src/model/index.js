import { Sequelize } from "sequelize";
import user from "./user";
import setting from "./setting";
import deposite from "./deposite";

const sequelize = new Sequelize("demo_database", "root", "" /*password */, {
  host: "127.0.0.1",
  dialect: "mysql",
  dialectOptions: {
    // useUTC: false,  //The useUTC option was used in older versions of MySQL2 to control whether the MySQL database connection should use UTC time or not. In more recent versions of MySQL2, this option has been deprecated and is no longer needed because the library uses UTC time by default.
  },
  logging: (sql) => {
    //  logging: true, HAS BEEN DEPRECATED
    // You can customize the logging behavior here
    console.log(sql);
  },
  timezone: "+05:30", // // Corrected timezone offset "Asia/Kolkata" is deprecated
  define: {
    freezeTableName: true,
  },
});

// const User = user(sequelize);
// const Setting = setting(sequelize);
// const Deposite = deposite(sequelize);

const model = {
  User: user(sequelize),
  Setting: setting(sequelize),
  Deposite: deposite(sequelize),
};

export { sequelize, Sequelize, model };
