import dotenv from "dotenv";

dotenv.config();

const env = process.env.NODE_ENV || "development";
const debug = env !== "production";

export default {
  env: env,
  debug: debug,
  host: process.env.HOST || `0.0.0.0`,
  port: process.env.PORT || env === "production" ? 3000 : 3001,
  infura: {
    id: process.env.INFURA_PROJECT_ID,
    secret: process.env.INFURA_PROJECT_SECRET,
  },
};
