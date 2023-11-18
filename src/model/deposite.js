import { DataTypes } from "sequelize";

export default (sequelize) => {
  const Deposite = sequelize.define(
    "Desposite",
    {
      id: { type: DataTypes.BIGINT, primaryKey: true, autoIncrement: true },
      rupees: {
        type: DataTypes.BIGINT,
        allowNull: false,
        get() {
          const returnValue = this.getDataValue("rupees");
          console.log("isNaN(returnValue)===>", isNaN(returnValue));
          return isNaN(returnValue) ? returnValue : parseInt(returnValue);
        },
      },
      userId: {
        type: DataTypes.BIGINT,
        allowNull: false,
        references: {
          model: "user",
          key: "id",
        },
        get() {
          const returnValue = this.getDataValue("userId");
          return isNaN(returnValue) ? returnValue : parseInt(returnValue);
        },
      },
      status: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
        set(value) {
          this.setDataValue(
            "status",
            (typeof value === "string" && value == "true") ||
              (typeof value == "boolean" && value == true)
          );
        },
      },
    },
    { timestamps: true }
  );
  return Deposite;
};
