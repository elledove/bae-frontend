import React, { Component } from 'react';



 const OrderList = (props) => {
    return (
        <div>
            Order List
            {props.orders.map(order =>

                <ul key={order.id}>
                <li > {order.total}</li>
                <li > {order.name_for_order}</li>
                  {order.menu_items.map(o => 
                  <div>
                           <h4>{o.name}</h4>
                      <p>{o.description}</p>
                      </div>
                  )}  

                </ul>
            )}
            
            {/* {props.orders.map(o => o.menu_items.map(m => <ul key={m.id}>
            <li>{m.name} </li> 
            </ul>
            )
             
           )} */}
            
        </div>
    )

}

export default OrderList;