const jwt = require("jsonwebtoken");
const User = require("../models/User");


const validarToken = (req, resp, next) => {
  const token = req.header("x-token");

  if (!token) {
    return resp.status(401).json({
      ok: false,
      msg: "No hay token",
    });
  }

  try {
    const { _id, userName } = jwt.verify(token, process.env.SECRET_JWT_SEED);
    req.id = _id;
    req.name = userName;
    next();
  } catch (error) {
    console.log(error);
    return resp.status(401).json({
      status: "error",
      code: 401,
      message: "Token invalido",
    });
  }
};

const validarAdmin = async (req, resp, next) => {
  const _id = req.id;

  try {
    const user = await User.findById(_id);

    if (!user) {
      return resp.status(401).json({
        status: "error",
        code: 401,
        message: "El usuario es inexistente",
      });
    }

    if (!user.isAdmin) {
      return resp.status(403).json({
        status: "error",
        code: 403,
        message: "No tiene acceso",
      });
    }
    next();
  } catch (error) {
    resp.status(401).json({
      status: "error",
      code: 401,
      message: "No es administrador",
    });
  }
};

module.exports = {
  validarToken,
  validarAdmin,
};
