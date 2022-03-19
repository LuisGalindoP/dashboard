const mongoose = require('mongoose');

const dbName = "dashboardDB";

mongoose.connect(`mongodb://127.0.0.1/${dbName}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => {
    console.log(`You are connected to ${dbName} database compa`);
})
.catch((error) =>{
    console.log(`There was an error connecting to DB, read ${error}`);
})