import React, { useEffect, useState } from "react";
import StarRatings from "react-star-ratings";

export function Home() {
    const [details, setDetails] = useState([])
    useEffect(() => {
        fetch("http://localhost:3000/Details.json")
            .then(data => data.json())
            .then((response) => {
                setDetails(response)
            })
    }, [])
    return (
        <>
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
                                        <input type="button" className="btn btn-danger" value='-'/>
                                        <input type="button" className="btn btn-primary" value='+'/>
                                    </td>
                                    <td>
                                        <input type="button" className="btn btn-primary" value='Add to cart'/>
                                    </td>
                                </tr>
                            </>
                        ))
                    }
                </tbody>
            </table>
        </>
    );
}