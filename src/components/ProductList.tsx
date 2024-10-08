import useProducts from "../hooks/useProducts";


const ProductList = () => {
  const { products } = useProducts();
  console.log(products)
  

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {products.map((product) => (
        <div key={product.sku} className="bg-white shadow-md rounded-lg p-4">
          
          {/* <img src={require(`../assets/${product.sku}.jpg`)} alt="image" /> */}

          {/* dynamic image */}
          <img src={new URL(`../assets/${product.sku}.jpg`, import.meta.url).href} 
          alt="image"
          className="w-full object-cover rounded-lg mx-auto"/>

          

          <h2 className="text-lg font-bold">{product.name}</h2>
          <p>SKU: {product.sku}</p>
          <p>Price: ${product.price}</p>
          <p>Name: ${product.name}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductList;