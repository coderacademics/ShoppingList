import React from 'react';
import reactDOM from 'react-dom';
import "../css/style.css";
import Cancel from '@material-ui/icons/Cancel';
function Showlist(props){

    return (
        <div style={{ display: "flex" }}>
            <li id={props.id}>{props.item}</li>
            <button style={{ background: "transparent", border: "none" }} onClick={ () => {
               props.remove(props.id)
            }}
            ><Cancel /></button>
        </div>
    )
}
export default Showlist;