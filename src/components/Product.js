
function Product({ item }) {
  return (
    <div className="Product">
      {item.id &&
        <div className="Product__container">
          <img 
            className="Product__container-image" 
            src={`https://homecenterco.scene7.com/is/image/SodimacCO/${item.id}`} 
            alt='product_img' 
          />
          <div className="Product__labels">
            <p>{item.id}</p>
            <p className="Product__labels-name">{item.name}</p>
            <p className="Product__labels-price">$ {item.variants[0]?.price[0]?.price}</p>
          </div>
        </div>
      }
    </div>
  );
}

export default Product;
