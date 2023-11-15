import DataTypes, { sequelize } from "./user";
// import DataTypes from "./user";
export const Setting = sequelize.define(
  "Setting",
  {
    id: { type: DataTypes.BIGINT, primaryKey: true, autoIncrement: true },
    bidtime: { type: DataTypes.SMALLINT, allowNull: false },
    totaltime: { type: DataTypes.SMALLINT, allowNull: false },
    coin: {
      type: DataTypes.BIGINT,
      allowNull: false,
      get() {
        getValue(this, "coin");
      },
    },
    amount: {
      type: DataTypes.BIGINT,
      allowNull: false,
      get() {
        getValue(this, "amount");
      },
    },
  },
  { timestamps: true }
);
function getValue(thisObj, property) {
  const rv = thisObj.getDataValue(property);
  return isNaN(rv) ? rv : parseInt(rv);
}
