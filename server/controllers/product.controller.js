import Product from '../models/product.model.js'

const create = async(req, res) => {
    try
    {
        const product = new Product(req.body)
        await product.save()
        res.status(200).json({message: "Product Added Successfully!"})
    }catch(error){
        console.log(error.message)
        res.status(400).json({message: error.message})
    }
    
}

const list = async (req, res) => {
    try {
        let query = {};
        if (req.query.name) {
            query.name = { $regex: req.query.name, $options: 'i' };
        }
        let products = await Product.find(query).select('name description price quantity category');
        res.status(200).json(products);
    } catch (err) {
        console.log(err.message);
        res.status(400).json({ message: err.message });
    }
};


const productByID = async (req, res) => {
    try{
        const {id} = req.params;
        let product = await Product.findById(id)
        res.status(200).json(product)
    }catch(err){
        console.log(err.message)
        res.status(400).json({message: err.message})
    }
}

const update = async (req, res) => {
    try{
        const {id} = req.params;
        let product = await Product.findByIdAndUpdate(id, req.body)
        if(!product){
            return res.status(404).json({message: `Cannot find any product with ID ${id}`})
        }
        const updatedProduct = await Product.findById(id)
        res.status(200).json(updatedProduct)
    }catch(err){
        console.log(err.message)
        res.status(400).json({message: err.message})
    }
}

const deleteProductByID = async (req, res) => {
    try{
        const {id} = req.params;
        const product = await Product.findByIdAndDelete(id);
        if(!product){
            return res.status(404).json({message: `Cannot find any product with ID ${id}`})
        }
        res.status(200).json(product)

    }catch(err){
        console.log(err.message)
        res.status(400).json({message: err.message})
    }
}

const deleteProducts = async (req, res) => {
    try {
        await Product.deleteMany({});
        res.status(200).json({ message: "All products deleted successfully" });
    } catch (err) {
        console.log(err.message);
        res.status(400).json({ message: err.message });
    }
}

export default { create, list, productByID ,update, deleteProductByID, deleteProducts }