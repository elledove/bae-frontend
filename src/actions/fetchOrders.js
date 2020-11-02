
export function fetchOrders(){
    return (dispatch) => {
    fetch("http://localhost:3000/api/v1/orders")
    .then(response => response.json())
    .then(order => dispatch({
        type: 'FETCH_ORDERS',
        payload: order
    }))
    }
}