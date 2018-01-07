const app = require('./app');
const Config = require('./config');
app.listen(Config.PORT, () => {
  console.log(`SERVER IS RUNNING ON PORT # ${Config.PORT}`);
});