import userRoute from "./users.route.js";
import authRoute from "./auth.route.js";
import roomsRoute from "./rooms.route.js";
import hotelsRoute from "./hotels.route.js";

export default function routes(app) {
  app.use("/user", userRoute);
  app.use("/auth", authRoute);
  app.use("/rooms", roomsRoute);
  app.use("/hotels", hotelsRoute);
}
