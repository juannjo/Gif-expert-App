import { useState } from "react"


const AddCategory = ({ onNewCategory }) => {
    const [inputValue, setInputValue] = useState('')   
    const inputChange = ({ target }) => {
        setInputValue(target.value)
    }
    const onSubmit = (event) => {
        event.preventDefault()
        if(inputValue !== ''){ 
            // setCategories([inputValue, ...categories])
            onNewCategory(inputValue)
            setInputValue('')
        }
    } 

    return (
        <form onSubmit={onSubmit}>
            <input
                type='text'
                placeholder='Buscar Gifs'
                value= {inputValue}
                onChange={inputChange}
                name="inputValue"
            />
        </form>
    )
}

export { AddCategory}