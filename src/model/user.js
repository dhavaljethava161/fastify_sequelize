import { Sequelize, DataTypes } from "sequelize";
export const sequelize = new Sequelize(
  "demo_database",
  "root",
  "" /*password */,
  {
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
  }
);

export const User = sequelize.define(
  "User",
  {
    id: { type: DataTypes.BIGINT, primaryKey: true, autoIncrement: true },
    username: {
      type: DataTypes.STRING(50),
      allowNull: false,
      unique: true,
      set(value) {
        this.setDataValue("username", value?.trim());
      },
    },
    email: {
      type: DataTypes.STRING(50),
      allowNull: false,
      unique: true,
      validate: { isEmail: true },
      set(value) {
        this.setDataValue("email", value?.trim());
      },
    },
    password: {
      type: DataTypes.STRING,
      validate: {
        isStrongPassword(value) {
          // Use a regular expression to check for strong password requirements
          if (
            !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/.test(
              value
            )
          ) {
            throw new Error(
              "Password must be strong with at least one lowercase letter, one uppercase letter, one digit, and one special character."
            );
          }
        },
      },
      allowNull: false,
    },
    number: {
      type: DataTypes.BIGINT,
      allowNull: false,
      unique: true,
      validate: {
        isNumeric: true,
      },
      // set(value) {
      //   this.setDataValue("number", value?.trim());
      // },
    },
    coin: {
      type: DataTypes.BIGINT,
      allowNull: false,
      validate: { isNumeric: true },
    },
    isAdmin: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      default: false,
      get() {
        returnValue(this, "isAdmin");
      },
      set(value) {
        setValue(value, "isAdmin", this);
      },
    },
    status: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      default: true,
      get() {
        returnValue(this, "status");
      },
      set(value) {
        setValue(value, "status", this);
      },
    },
  },

  { indexes: [{ unique: true, fields: ["number", "email"] }], timestamps: true }
);

function returnValue(value, property) {
  const returnValue = value.getDataValue(property);
  return (typeof returnValue === "string" && returnValue == "true") ||
    returnValue
    ? true
    : false;
}

function setValue(value, property, thisObj) {
  return thisObj.setDataValue(
    property,
    (typeof value === "string" && value == "true") ||
      (typeof value == "boolean" && value == true)
      ? true
      : false
  );
}

export default DataTypes;
