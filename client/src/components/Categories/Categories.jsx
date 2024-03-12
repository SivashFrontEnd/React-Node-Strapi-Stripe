import React from "react";
import "./Categories.scss";
import { NavLink } from "react-router-dom";

const Categories = () => {
  return (
    <div className="categories">
      <div className="col">
        <div className="row">
            <img src="https://static2.issaplus.com/wa-data/public/photos/92/69/6992/6992.530x509.jpg" alt="" />
            <button>
                <NavLink className='link' to='/products/1'>Sale</NavLink>
            </button>
        </div>
        <div className="row"><img src="https://static2.issaplus.com/wa-data/public/photos/92/69/6992/6992.530x509.jpg" alt="" />
            <button>
                <NavLink className='link' to='/products/1'>Sale</NavLink>
            </button></div>
      </div>
      <div className="col">
        <div className="row"><img src="https://static2.issaplus.com/wa-data/public/photos/92/69/6992/6992.530x509.jpg" alt="" />
            <button>
                <NavLink className='link' to='/products/1'>Sale</NavLink>
            </button></div>
      </div>
      <div className="col col-l">
        <div className="row">
            <div className="col">
                <div className="row"><img src="https://static2.issaplus.com/wa-data/public/photos/92/69/6992/6992.530x509.jpg" alt="" />
            <button>
                <NavLink className='link' to='/products/1'>Sale</NavLink>
            </button></div>
            </div>
            <div className="col">
                <div className="row"><img src="https://static2.issaplus.com/wa-data/public/photos/92/69/6992/6992.530x509.jpg" alt="" />
            <button>
                <NavLink className='link' to='/products/1'>Sale</NavLink>
            </button></div>
            </div>
        </div>
        <div className="row"><img src="https://static2.issaplus.com/wa-data/public/photos/92/69/6992/6992.530x509.jpg" alt="" />
            <button>
                <NavLink className='link' to='/products/1'>Sale</NavLink>
            </button></div>
      </div>
    </div>
  );
};

export default Categories;
