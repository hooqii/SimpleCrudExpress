import supabase from '../config/supabaseClient.js'

const getAllProducts = async (req, res) => {
    const { data, error } = await supabase.from('products').select();
    if (error) return res.status(400).send(error);
    res.send(data);
};

const getProductById = async (req, res) => {
    const { data, error } = await supabase.from('products').select().eq('id', req.params.id);
    if (error) return res.status(400).send(error);
    res.send(data);
};

const createProduct = async (req, res) => {
    const { error } = await supabase.from('products').insert(req.body);
    if (error) return res.status(400).send(error);
    res.send('Product created!');
};

const updateProduct = async (req, res) => {
    const { error } = await supabase.from('products').update(req.body).eq('id', req.params.id);
    if (error) return res.status(400).send(error);
    res.send('Product updated!');
};

const deleteProduct = async (req, res) => {
    const { error } = await supabase.from('products').delete().eq('id', req.params.id);
    if (error) return res.status(400).send(error);
    res.send('Product deleted!');
};

export default { getAllProducts, getProductById, createProduct, updateProduct, deleteProduct };
