const jwt = require("jsonwebtoken");

const generateJWT = (_id, name) => {
  const payLoad = { _id, name };

  return new Promise((resolve, reject) => {
    jwt.sign(
      payLoad,
      "zxgtztst462463262asdgfsd",
      { expiresIn: "1h" },
      (err, token) => {
        if (err) {
          console.log(err);
          reject(err);
        } else {
          resolve(token);
        }
      }
    );
  });
};

module.exports = { generateJWT };
