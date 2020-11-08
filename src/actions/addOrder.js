export default function addOrder(data){
    // debugger;
    const order = {name:data.name, menu_item_ids:data.menu_item_ids}
    return (dispatch) => {
        fetch("http://localhost:3001/api/v2/orders", {
        credentials: "include",
        headers: {'Content-Type':'application/json'},
        method: 'POST',
        body: JSON.stringify({order:{name_for_order:data.name_for_order, menu_item_ids:data.menu_item_ids}})
        })
        .then(response => response.json())
        .then(data => dispatch({
            type: "ADD_ORDERS",
            payload: data
        }))
    }
}



