import React from 'react';


const MenuList = (props) => {
return(
    <div>
      <h3> Menu Items</h3> 
  Hi! Here Is The Menu Of The Week!!!!!!
    {props.menuitems.map(mi =><ul key={mi.id}>
    <li>{mi.name}</li>
    <li>{mi.description}</li>
    <li> price ${mi.price}</li>



    </ul>)}


    </div>
)




}



export default MenuList;