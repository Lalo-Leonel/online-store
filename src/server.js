const { app } = require('./app');
const { sequelize } = require("./database");

const port = process.env.PORT || 8000;

async function connect (){
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
}
connect()

app.listen(port, () => {
  console.log(`App running at http://localhost:${port}`);
});