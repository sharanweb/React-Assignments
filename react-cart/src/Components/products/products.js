import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./products.css"

export const Products = ()=> {
    const [item, setitem] = useState([]);

    useEffect(() => {
       getProduct();

    }, []);

    
    const  getProduct = async () => {
        try{
            
        let res = await fetch("https://fakestoreapi.com/products");
        let data  = await res.json();
        setitem(data);
         console.log(data);
        }
        catch(err) {
            console.log('err', err)

        }
    }




    return(
        <div className="great">
            <h1>Products</h1>
            <div className="mainBox">
               { item.map((el) => {
                    return(
                        <div className="eachProduct">
                            <Link to={`/products/${el.id}`} >
                        <div key={1}>
                            <img src={el.image} className="img_pro" alt="img"/>
                            <h3>{el.title}</h3>
                            
                        </div>
                        </Link>
                        </div>
                    )
                })
                }
            </div>
        </div>
    )
}