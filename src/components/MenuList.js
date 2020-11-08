import React from 'react';


const MenuList = (props) => {
return(
    <div>
      <h1>Menu Items</h1> 
   
    {props.menuitems.map(mi =><ul key={mi.id}>
    <li> <h3>{mi.name} </h3></li>
    <li> <h6>{mi.description}</h6></li>
    <li> <strong> price ${mi.price} </strong></li>



    </ul>)}


    </div>
)




}



export default MenuList;