import React from 'react';


export const CheckBox = (props) => {
    console.log(props);
    return(
        <div>
            <label> {props.name} </label>
            <input type="checkbox" name={props.name} value={props.id} onChange={props.handleCheckBox}/>
            

        </div>
    )

}