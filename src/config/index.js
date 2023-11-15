const {
  DB_NAME,
  DB_USER,
  DB_PASSWORD,
  DB_HOST,
  DB_PORT,
  DB_TIMEZONE,
  DB_DIALECT,
  SECRET,
} = process?.env;

export const config = {
  db: {
    name: DB_NAME,
    user: DB_USER,
    pass: DB_PASSWORD,
    host: DB_HOST,
    port: DB_PORT,
    timeZone: DB_TIMEZONE,
    dialect: DB_DIALECT,
  },
  secret: SECRET,
};
