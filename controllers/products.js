const getAllProductsStatic = async (req, res) => {
  res.status(200).json({ mgs: "products testing route" });
};

const getAllProducts = async (req, res) => {
  res.status(200).json({ mgs: "products route" });
};

module.exports = { getAllProducts, getAllProductsStatic };
