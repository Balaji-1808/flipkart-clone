import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./ProductDetails.css";
import { FaCalendar, FaShoppingCart,FaTags } from "react-icons/fa";
import { AiFillStar, AiFillThunderbolt } from "react-icons/ai";
import { ProductsData } from "../../productsData";
import { useDispatch } from "react-redux";
import { addCart } from "../../slices/cartSlice";

const ProductDetails = () => {
  const [data, setData] = useState({});
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    const product = ProductsData.find((item) => item.id.toString() === id);
    setData(product);
  }, [id]);

  const addToCart = ()=>{
    dispatch(addCart(data))
  }

  // console.log(data);

  return (
    <div className="ProductDetails">
      <div className="ProductDetails-left">
        <div className="otherImgs">
          <img src={data.url} alt="" className="proimg" />
          <img src={data.url} alt="" className="proimg" />
          <img src={data.url} alt="" className="proimg" />
          <img src={data.url} alt="" className="proimg" />
          <img src={data.url} alt="" className="proimg" />
        </div>
        <div className="ProductDetail-Img">
          <img src={data.url} alt="" />
          <div className="ProductDetail-btns">
            <button className="ProductDetail-btn" onClick={addToCart}>
              <FaShoppingCart /> Add to Cart
            </button>
            <button className="ProductDetail-btn">
              <AiFillThunderbolt /> Buy Now
            </button>
          </div>
        </div>
      </div>

      <div className="ProductDetails-right">
        <p className="ProductName">{data.Product}</p>
        <div className="ratingsreviews">
          <div className="stars">
            {data.rating} <AiFillStar />
          </div>
          <div className="ratings">
            {data.reviews} Ratings & {data.rating} Reviews
          </div>
        </div>
        <p className="price">₹{data.Sellingprice}</p>
        <p className="packfee">+ ₹69 Secured Packing Fee</p>
        <p className="availableoff">Available Offers</p>
        <div className="offers">
          {/* <img src="" alt="" height={20} /> */}
          {/* <FontAwesomeIcon icon={faTags} /> */}
          <FaTags className="tag"/>
          <div>
            <b>Bank Offer </b> 5% Cashback on Flipkart Axis Bank CardT&C
          </div>
        </div>

        <div className="offers">
          {/* <img src="" alt="" height={20} /> */}
          <FaTags className="tag"/>
          <div>
            <b>Partner Offer </b>Sign up for Flipkart Pay Later and get Flipkart Gift card worth up to ₹500*Know More
          </div>
          
        </div>

        <div className="offers">
          {/* <img src="" alt="" height={20} /> */}
          <FaCalendar className="tag"/>
          <div>
            <b>EMI starting </b> from ₹832/month View Plans
          </div>  
        </div>

        <div className="descriptions">
          <div className="colors">
            <p className="color">Color</p>
            <div className="colorimgs">
              <img src={data.url} />
              <img src={data.url} />
              <img src={data.url} />
            </div>
          </div>
          <div className="highlights">
            <p className="highlight-title">Highlights</p>
            <ul className="highlight">
              <li className="highlight-item">{data.Descripition}</li>
              <li className="highlight-item">{data.Display}</li>
              <li className="highlight-item">{data.Camera}</li>
              <li className="highlight-item">{data.Battery}</li>
              <li className="highlight-item">{data.Proccessor}</li>
            </ul>
          </div>
        </div>

        <div className="RatingsAndReviews">
          <p className="RatingsAndReviews-title">Ratings & Reviews</p>
          <div className="RatingsAndReviews-container">
            <div className="RatingsAndReviews-stars">
              <p className="RatingsAndReviews-reviews">
                {data.rating} <AiFillStar />
              </p>
              <p className="RatingsAndReviews-ratings">
                {data.rating} Ratings & {data.reviews} Reviews
              </p>
            </div>
            <ul className="RatingsAndReviews-charts">
              <li>
                <p className="star">5</p>
                <div className="bar">
                  <div className="innerbar" style={{ width: "80%" }}></div>
                </div>
              </li>
              <li>
                <p className="star">4</p>
                <div className="bar">
                  <div className="innerbar" style={{ width: "50%" }}></div>
                </div>
              </li>
              <li>
                <p className="star">3</p>
                <div className="bar">
                  <div className="innerbar" style={{ width: "33.6%" }}></div>
                </div>
              </li>
              <li>
                <p className="star">2</p>
                <div className="bar">
                  <div className="innerbar" style={{ width: "29.6%" }}></div>
                </div>
              </li>
              <li>
                <p className="star">1</p>
                <div className="bar">
                  <div className="innerbar" style={{ width: "10%" }}></div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
