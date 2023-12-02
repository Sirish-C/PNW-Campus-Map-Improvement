const express = require("express");
const app = express();
const port = 3000;
const buildingsRouter = require("./routers/buildings");
const parkingLots = require("./routers/parkingLots");
const emergencyExits = require("./routers/EmergencyExits");
const emergencyPoles = require("./routers/EmergencyPoles");
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.get("/", (req, res) => {
  res.json({ message: "Purdue Northwest campus map api is live - Team C" });
});
app.use("/buildings", buildingsRouter);
app.use("/parkinglots",parkingLots );
app.use("/emergencyExits",emergencyExits );
app.use("/emergencyPoles",emergencyPoles );
/* Error handler middleware */
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  console.error(err.message, err.stack);
  res.status(statusCode).json({ message: err.message });
  return;
});
const PORT = process.env.PORT || 3322;
app.listen(PORT,()=>{
    console.log(`Application running on PORT: ${PORT}`);
})
