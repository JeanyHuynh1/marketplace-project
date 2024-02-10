import Product from '../models/product.model.js'

const create = async(req, res) => {
    const product = new Product(req.body)
    console.log("***here", req.body)
    res.send(req.body)
}

export default { create }