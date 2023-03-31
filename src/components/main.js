import React from 'react'
import { useState } from 'react';
import { data } from './data';
import Carddata from './carddata';

export default function Main() {

let [cartQty, setCartQty] = useState(0);

let [products, setProducts] = useState(data);


  return (
    <div>
      <div className="container my-3">
        <div class="container">
          <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid">
              <a class="navbar-brand" href="/">Cart Items= {cartQty}, Cart Value = Rs. {0}</a>
            </div>
          </nav>
        </div>


      <div class="row row-cols-2 row-cols-md-4 g-4">
        {products.map((p, i) => (
          <div class="col">
            <div className="card">
              <img src={p.image} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{p.title}</h5>
                <p className="card-text">
                this is a detail of product
                   <span className="badge text-bg-success">Rs.{p.price}</span>
                   <button onClick={()=>{setCartQty(cartQty + 1)}} href="/" className="btn btn-primary">Add to cart</button>
                </p>
                
                
                
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>

    
    </div>
  )
}
