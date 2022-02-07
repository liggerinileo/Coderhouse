const { response } = require("express");
const User = require("../models/User");
const { generateJWT } = require("../helpers/jwt");

const getUsers = async (req, res = response) => {
    User.find()
    .then(users => {
        res.json({
            status: "ok",
            code: 200,
            users
        });
    })
    .catch(err => {
      res.status(400).json({
        message: "Ocurrio un error en la base de datos",
        status: "error",
        code: 400
      })
    })
};

const getUser = async (req, res = response) => {
  const _id = req.params.id;

  try {
    User.findById(_id, function (err, user) {
      if (err){
        res.status(404).json({
          message: "No se encontró el usuario",
          status: "error",
          code: 404
    
        })
      } else{
        res.json({
          user,

        });
      }
  });
  } catch (err) {
    res.status(400).json({
      message: "Ocurrio un error en la base de datos",
      status: "error",
      code: 400

    })
  }
};

const createUser = async (req, res = response) => {
    const { email, userName, password, isAdmin } = req.body;

    const exists = await User.findOne({ userName });
    
    if (exists) {
        return res.status(403).json({
            message: "El nombre de usuario ya existe",
            status: "error",
            code: 403
    
        });
    }
    
    const user = new User({email, userName, password, isAdmin});
        
    await user.save();
    res.status(202).json({
        status: "OK",
        user,
        code: 202,
          
    });
    
};

const updateUser = async (req, res = response) => {
  const _id = req.params.id;
  const { estado, ...body } = req.body;

  try {
    User.findById(_id, function (err, user) {
      if (err){
        res.status(404).json({
          message: "No se encontró al usuario",
          status: "error",
          code: 404
    
        })
      } else{
        res.json({
          user,

        });
      }
    });

    const userUpdated = await User.findByIdAndUpdate(_id, body, {
      new: true,
    });

    res.json({
      status: "OK",
      movie: userUpdated,
      code: 200

    });
  } catch (err) {
    res.status(400).json({
      message: "Ocurrio un error",
      status: "error",
      code: 400

    })
  }
};

const login = async (req, res = response) => {
    const { userName, password } = req.body;
  
    try {
      const user = await User.findOne({ userName });
  
      if (!user) {
        return res.status(400).json({
            status: "error",
            message: "El usuario es inexistente",
        });
      }
  
      if (user.password != password) {
        return res.status(400).json({
            status: "error",
            message: "La contraseña es incorrecta",
        });
      }
  
      const token = await generateJWT(user._id, user.userName);
  
      return res.status(200).json({
        status: "ok",
        code: 200,
        user,
        token

      });
    } catch (error) {
      console.log(error);
  
      return res.status(500).json({
        status: "error",
        code: 500,
        message: "Ocurrio un error en el servidor",
        
      });
    }
};

const deleteUser = async (req, res = response) => {
  const _id = req.params.id;
  try {
    const user = await User.findById(_id);

    await User.findByIdAndDelete(_id);
    res.status(202).json({
      message: "Se borró correctamente",
      status: "OK",
      code: 202, 
      user

    })

  } catch (error) {
    res.status(400).json({
      message: "Ocurrio un error",
      status: "error",
      code: 400

    })
  }
};

module.exports = { getUsers, createUser, login, getUsers, getUser, deleteUser, updateUser };