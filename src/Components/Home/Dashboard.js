import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import StarRatings from "react-star-ratings";

export function Dashboard() {
  const [details, setDetails] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/Details.json")
      .then((data) => data.json())
      .then((response) => {
        setDetails(response);
      });
  }, []);
  var cart = [];
  function add(id) {
    details.map((value, index) => {
      let sno = value.id;
      if (id === sno) {
        let check = cart.some((item) => item.id === id);
        if (check) {
          alert("Product already added to cart!");
        } else {
          let divElement = document.createElement("div");
          divElement.innerHTML = `<div class = "bg-info"><div class = "container"><div class = "card w-25 m-3">
            <img src=${value.image}  className="card-img-top" alt="image"/>
            <div class="card-body">
            <h3 class = "card-title">${value.title}</h3>
            <h4>${value.id}</h4>
            <p>${value.price}</p><p>${value.category}</p>
            <input type="button" class="btn btn-danger m-2" value="-"/>
            <input type="button" class="btn btn-success m-2" value="+"/>
            <input type="button" class="btn btn-danger" value ="Remove" />
            </div></div></div></div>
            `;
          document.body.appendChild(divElement);
          let addItem = {
            id: value.id,
            title: value.title,
            price: value.price,
            category: value.category,
            image: value.image,
            count: value.rating.count,
            quantity: 1,
          };
          cart.push(addItem);
          alert("Product added the cart!");
        }
      }
    });
  }
  function increment(id) {
    alert("product increased successfully!");
  }
  function decrement(id) {
    alert("product reduced successfully!");
  }

  return (
    <>
      <nav class="navbar navbar-expand-lg bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            Realiti Fashion
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse">
            <div class="navbar-nav d-flex float-right">
              <Link to={`/view`}>
                <input
                  type="button"
                  class=" btn btn-primary text-white"
                  aria-current="page"
                  value="View details"
                />
              </Link>
            </div>
          </div>
        </div>
      </nav>
      <div className="container-fluid bg-dark-subtle">
        <div className="row gap-2 justify-content-center">
            <table border="2px">
                <thead className="text-center" border="2px">
                    <th border="2px">Image</th>
                    <th>Id</th>
                    <th>Title</th>
                    <th>Category</th>
                    <th>Price</th>
                    <th>Star Ratings</th>
                    <th>Action</th>
                    <th>Add</th>
                </thead>
                <tbody>

                    {
                        details.map((value, index) => (
                            <>
                                <tr>
                                    <td><img src={value.image} className="w-50"/></td>
                                    <td>{value.id}</td>
                                    <h4>{value.title}</h4>
                                    <td>{value.category}</td>
                                    <td>{value.price}</td>
                                    <td><StarRatings
                                        rating={value.rating.rate}
                                        starDimension="20px"
                                        starSpacing="2px"
                                        starRatedColor="gold"
                                    /></td>
                                    <td className="d-flex">
                                        <input type="button" className="btn btn-danger" value='-' onClick={()=>{decrement(value.id)}}/>
                                        <input type="button" className="btn btn-primary" value='+' onClick={()=>{increment(value.id)}}/>
                                    </td>
                                    <td>
                                        <input type="button" className="btn btn-primary" value='Add to cart' onClick={()=>{add(value.id)}}/>
                                    </td>
                                </tr>
                            </>
                        ))
                    }
                </tbody>
            </table>
        </div>
      </div>
    </>
  );
}