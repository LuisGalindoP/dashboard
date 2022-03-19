const dataTestController = require("../controllers/dataTest.controller");

module.exports = (app) => {
    app.get('/data', dataTestController.getAllData);
    app.post("/data/new", dataTestController.addNewData);
    app.get("/data/:id", dataTestController.getOneData);
    app.put("/data/:id/update", dataTestController.updateData);
    app.post("/data/:id", dataTestController.removeOneData);
}