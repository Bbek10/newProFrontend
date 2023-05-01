import React, { Fragment, useEffect } from "react";
import { CgMouse, CgSearch } from "react-icons/all";
import "./Home.css";
import ProductCard from "./ProductCard.js";
import MetaData from "../layout/MetaData";
import { clearErrors, getProduct } from "../../actions/productAction";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../layout/Loader/Loader";
import { useAlert } from "react-alert";
import { Link } from "react-router-dom";
import Company from "../layout/Company/Company";

const Home = () => {
  const alert = useAlert();
  const dispatch = useDispatch();
  const { loading, error, products } = useSelector((state) => state.products);

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    dispatch(getProduct());
  }, [dispatch, error, alert]);

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <MetaData title="ProFitness" />

          <div className="banner">
            <p>Welcome to ProFitness</p>
            <h1>We value your health</h1>

            <Link to="/search">
              <button>
                Search for a product <CgSearch />
              </button>
            </Link>

            <a href="#container">
              <button>
                Scroll <CgMouse />
              </button>
            </a>
          </div>
          <Company />

          <h2 className="homeHeading">Featured Products</h2>

          {/* show in the home page */}
          <div className="container" id="container">
            {products &&
              products.map((product) => (
                <ProductCard key={product._id} product={product} />
              ))}
          </div>
          <div className="btn">
            <Link to={"/products"}>
              <button>
                View all Products <CgMouse />
              </button>
            </Link>
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default Home;
