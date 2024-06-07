import products from '../data/product.js';

const getProducts = (req, res) => {
    res.json(products);
};

const placeOrder = (req, res) => {
    const { firstName, lastName, address, cartItems } = req.body;

    if (!firstName || !lastName || !address) {
        return res.status(400).json({ message: 'First name, last name, and address are required' });
    }

    console.log('Order placed:', { firstName, lastName, address, cartItems });
    res.status(200).json({ message: 'Order placed successfully' });
};

export { getProducts, placeOrder };
