
export function fetchMenuItems(){
    return (dispatch) => {
        fetch('http://localhost:3001/api/v2/menu_items')
        .then(response => response.json())
        .then(items => dispatch({
            type: 'FETCH_MENU',
            payload: items
        }))
    }

}