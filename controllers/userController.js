const User = require('../models').User;
const db = require('../models');

class UserController {
    constructor(email){
      this.email = email;
    }
    findAll(){
        return new Promise ( (resolve, reject)=> {
            User.findAll().then(users => {
                resolve(users);
            });
        });
    }
}

module.exports = UserController;