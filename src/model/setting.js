import { DataTypes } from "sequelize";
export default (sequelize) => {
  const Setting = sequelize.define(
    "Setting",
    {
      id: { type: DataTypes.BIGINT, primaryKey: true, autoIncrement: true },
      bidtime: { type: DataTypes.SMALLINT, allowNull: false },
      totaltime: { type: DataTypes.SMALLINT, allowNull: false },
      coin: {
        type: DataTypes.BIGINT,
        allowNull: false,
        get() {
          const rv = this.getDataValue("coin");
          return isNaN(rv) ? rv : parseInt(rv);
        },
      },
      amount: {
        type: DataTypes.BIGINT,
        allowNull: false,
        get() {
          const rv = this.getDataValue("amount");
          return isNaN(rv) ? rv : parseInt(rv);
        },
      },
    },
    { timestamps: true }
  );
  return Setting;
};
