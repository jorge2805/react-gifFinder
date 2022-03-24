import React, { useState } from 'react'
import PropTypes from 'prop-types';


export const AddCategory = ({setCategories}) => {
  
    const [inputValue, setinputValue] = useState("")

    const onChangeInput = (e) =>{
        setinputValue(e.target.value)
    }

    const onSubmitForm = (e) =>{
        e.preventDefault();
        
        if (inputValue.trim().length >= 2) {
            setCategories(categories => [inputValue, ...categories]);
            setinputValue("");
        }        
    }

    return (    
    <>
    <form onSubmit={onSubmitForm}>
        <input
            type="text"
            value={inputValue}
            onChange = {onChangeInput}
        />
    </form>
    </>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}