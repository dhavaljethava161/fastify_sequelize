import DataTypes, { sequelize } from "./user";

export const Deposite = sequelize.define("Desposite", {
  id: { type: DataTypes.BIGINT, primaryKey: true, autoIncrement: true },
  //   rs:{type:DataTypes.}
});
