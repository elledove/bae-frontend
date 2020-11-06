
export function fetchOrders(){
    return (dispatch) => {
    fetch("http://localhost:3001/api/v2/orders")
    .then(response => response.json())
    .then(order => dispatch({
        type: 'FETCH_ORDERS',
        payload: order
    }))
    }
}