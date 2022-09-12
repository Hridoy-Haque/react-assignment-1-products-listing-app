export default function Product({ product }) {
  const { title, price, description, image, rating } = product;
  const { rate, count } = rating;
  console.log(rate, count);
  return (
    <div className="card">
      <div className="card_image">
        <img src={image} alt="card_image" />
      </div>
      <div className="product_details">
        <div className="price_rating">
          <p>Price : ${price}</p>
          <p>
            Rating : {rate}/{count}
          </p>
        </div>
        <h4 className="product_title">{title}</h4>

        <p className="desc">Description : {description}</p>
        <button type="button" className="cart_btn">
          Add to cart
        </button>
      </div>
    </div>
  );
}
