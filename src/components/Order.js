import React from 'react';



 const Order = ({order}) => {
     
    
    return (
        
        <div>
                      

                <ul key={order.id}>
                <li > Total: ${order.total}</li>
                <li > Pick-up Name: {order.name_for_order}</li>
                  {order.menu_items.map(o => 
                  <div>
                           <h4>{o.name}</h4>
                      <p>{o.description}</p>
                      
                      </div>
                      
                  )}  

                </ul>
            
            
            
            
        </div>
    )

}

export default Order;