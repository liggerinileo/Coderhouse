const Movie = require("../models/Movie");
const { response } = require("express");

const getMovies = async (req, res = response) => {
    Movie.find()
    .then(movies => {
      res.json(
        movies
      );
    })
    .catch(err => {
      res.status(400).json({
        message: "Ocurrio un error en la base de datos",
        status: "error",
        code: 400
      })
    })
};

const getMovie = async (req, res = response) => {
  const _id = req.params.id;

  try {
    Movie.findById(_id, function (err, movie) {
      if (err){
        res.status(404).json({
          message: "No se encontró la pelicula",
          status: "error",
          code: 404
    
        })
      } else{
        res.json({
          movie,

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

const updateMovie = async (req, res = response) => {
  const _id = req.params.id;
  const { estado, ...body } = req.body;

  try {
    Movie.findById(_id, function (err, movie) {
      if (err){
        res.status(404).json({
          message: "No se encontró la pelicula",
          status: "error",
          code: 404
    
        })
      } else{
        res.json({
          movie,

        });
      }
    });

    const movieUpdated = await Movie.findByIdAndUpdate(_id, body, {
      new: true,
    });

    res.json({
      status: "OK",
      movie: movieUpdated,
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

const add = async (req, res = response) => {
  const { estado, ...body } = req.body;

  try {
    const exists = await Movie.findOne({ name: body.name });

    if (exists) {
      return res.status(403).json({
        message: "La pelicula ya existe",
        status: "error",
        code: 403

      });
    }

    const data = {
      ...body,
      name: body.name.toUpperCase(),
    };
    const movie = new Movie(data);
    await movie.save();
    res.status(200).json({
      status: "OK",
      movie,
      code: 200
      
    });
  } catch (error) {
    res.status(400).json({
      message: "Ocurrio un error",
      status: "error",
      code: 400

    })
  }
};

const deleteMovie = async (req, res = response) => {
  const _id = req.params.id;
  try {
    const movie = await Movie.findById(_id);

    await Movie.findByIdAndDelete(_id);
    res.status(202).json({
      message: "Se borró correctamente",
      status: "OK",
      code: 202, 
      movie

    })

  } catch (error) {
    res.status(400).json({
      message: "Ocurrio un error",
      status: "error",
      code: 400

    })
  }
};

module.exports = { getMovies, getMovie, updateMovie, add, deleteMovie };