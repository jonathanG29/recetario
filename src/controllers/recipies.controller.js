import Recipies from "../models/recipies.model.js";

//trae todas las recetas
export const getRecipies = async (req, res) => {
    const recepies = await Recipies.find()
    res.json(recepies)
};

//trae recetas favoritas por usuario registrado
export const getFavRecipies = async (req, res) =>{
    const recepies = await Recipies.find({
        user: req.user.id
    })
    if(!recepies) return res.status(400).json({message: "aun hay recetas guardadas"});
    res.json(recepies);
}

//Crea una receta
export const createRecipies = async (req, res) => {
    const { title, description, ingredients} = req.body

    const newRecipe = new Recipies({
        title,
        description,
        ingredients,
    })

    const savedRecipe = await newRecipe.save();
    res.json(savedRecipe);
};

// obtener un id:
export const getRecipie = async (req, res) => {
    const recipe = await Recipies.finById(req.params.id);
    if(!recipe) return res.status(404).json({message: "receta no encontrada"});
    res.json(recipe);
};

//eliminar receta
export const deleteRecipie = async (req, res) => {
    const recipe = await Recipies.finByIdDelete(req.params.id);
    if(!recipe) return res.status(404).json({message: "receta no encontrada"});
    return res.sendStatus(204);
};

//actualizar receta
export const updateRecipie = async (req, res) => {
    const recipe = await Recipies.findByIdAndUpdate(req.params.id, req.body,{ new: true})
    if(!recipe) return res.status(404).json({message: "receta no encontrada"})
    res.json(recipe)
};

//nos permite guardar la receta
export const favRecipe = async (req, res)=> {
    const recipe = await Recipies.findById(req.params.id)
    if(!recipe) return res.status(404).json({message: "receta no guardada"})
    res.json(recipe)
}