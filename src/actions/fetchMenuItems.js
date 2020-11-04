
export function fetchMenuItems(){
    return (dispatch) => {
        fetch('http://localhost:3000/api/v1/menu_items')
        .then(response => response.json())
        .then(items => dispatch({
            type: 'FETCH_MENU',
            payload: items
        }))
    }

}