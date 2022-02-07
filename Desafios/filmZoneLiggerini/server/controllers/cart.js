const Cart = require("../models/Cart");
const { response } = require("express");

const getMovies = async (req, res = response) => {
    Cart.find()
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

const add = async (req, res = response) => {
    const { name, image, description, price, year, 
            genre, filmZoneCategory, duration,
            addedToCart, id, returnDate, rented, client } = req.body;
  
    try {
        const exists = await Cart.findOne({ name: name });
        if (exists && client == exists?.client) {
            return res.status(403).json({
            message: "La pelicula ya se agrego",
            status: "error",
            code: 403
    
            });
        }
        
        const movie = new Cart({ name, image, description, price, year, 
            genre, filmZoneCategory, duration,
            addedToCart, id, returnDate, rented, client });
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
        const movie = await Cart.findById(_id);
  
        await Cart.findByIdAndDelete(_id);

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

const updateMovie = async (req, res = response) => {
    const _id = req.params.id;
    const { estado, ...body } = req.body;
  
    
        Cart.findById(_id, function (err, movie) {
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
  
        const movieUpdated = await Cart.findByIdAndUpdate(_id, body, {
            new: true,
        });
  
        res.json({
            status: "OK",
            movie: movieUpdated,
            code: 200
  
        });
    
};

module.exports = { getMovies, updateMovie, deleteMovie, add };