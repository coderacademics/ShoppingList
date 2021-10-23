import React, { useState } from "react";
import "../css/style.css";
import AddCircleIcon from '@material-ui/icons/AddCircle';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Cancel from '@material-ui/icons/Cancel'
import Reply from '@material-ui/icons/Reply'
import Showlist from './Showlist'
// import { fontSize } from "@mui/system";
function List() {

    const [carts, updateCart] = useState([]);
    const [wishlist, updatewishList] = useState([]);
    let tempcartText = "";
    function catchevent(event) {

        tempcartText = event.target.value;

    }
    function updatecart() {

        if (tempcartText != "") {
            updateCart([...carts, tempcartText]);
            document.querySelector(".input").value = "";
        }

    }
    function updatewishlist() {
        if (tempcartText != "")
            updatewishList([...wishlist, tempcartText]);
        document.querySelector(".input").value = "";
    }
    function removeCart(id) {
        updateCart((prevItem) => {

            return carts.filter((cart, index) => {
                return index !== id;
            });
            // return cart;
        });
    }
    function removeWishlist(id) {
        updatewishList((prevItem) => {

            return wishlist.filter((item, index) => {
                return index !== id;
            });
        });
    }
    
    return (

        <div className="List">
            <h1 style={{ textAlign: "center" }}>Shopping List</h1>
            <div className="top" style={{ display: 'flex', justifyContent: "space-around", textAlign: "center" }}>
                <input type="text" className="input" onChange={catchevent} placeholder="Enter the item you want to add" />
                <button type="submit" className="btn" onClick={updatecart}><ShoppingCartIcon /></button>
                <button type="submit" className="btn" onClick={updatewishlist}><AddCircleIcon /></button>
            </div>
            <div className="content" style={{ display: 'flex', justifyContent: "space-around" }}>
                <div className="Cart">
                    <ul style={{ display: "inline", fontSize: "1.5em", fontWeight: "800", letterSpacing: "2px" }} >
                        {carts.map((item, index) =>

                            <Showlist key={index} id={index} item={item} remove={removeCart} />
                        )}
                    </ul>
                  

                    <p className="total">Total items in the cart:<span style={{fontSize:"2em"}}>{carts.length}</span></p>
                    
                </div>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyItems: "space-around" }} >
                    <Reply style={{ border: "2px solid black", borderRadius: "30%", padding: "0.2em" }} onClick={
                        ()=>{
                            if(wishlist[0] !== "")
                            {

                            tempcartText=wishlist[0];
                            removeWishlist(0);
                            updatecart();
                            }
                        }
                    } />
                    <Reply style={{ border: "2px solid black", borderRadius: "30%", padding: "0.2em" }} className="icon"
                    onClick={() =>{
                        if(carts[0] !== "")
                        {

                        tempcartText=carts[0];
                        removeCart(0);
                        updatewishlist();
                        }
                    }} />
                    <div className="line"></div>
                </div>

                <div className="wish">
                    <ul style={{ display: "inline", fontSize: "1.5em", fontWeight: "800", letterSpacing: "2px" }}>
                        {wishlist.map((item, index) =>
                            <Showlist key={index} id={index} item={item} remove={removeWishlist} />

                        )}
                    </ul>
                   

                    <p className="total">Total items in your wishlist:<span style={{fontSize:"2em"}}>{wishlist.length}</span></p>
                    
                </div>

            </div>
        </div>
    )
}
export default List;