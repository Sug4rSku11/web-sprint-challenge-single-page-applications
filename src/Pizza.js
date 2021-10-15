import React from 'react'

//Pizza Form
export default function Pizza(props) {
    const { values, submit, change, errors, disabled } = props
    const onSubmit = evt => {
        evt.preventDefault()
        submit()
    }
    const onChange = evt => {
        const { name, value, checked, type } = evt.target;
        const valueToUse = type === 'checkbox' ? checked : value;
        change(name, valueToUse);
    }



    return (
        <form className="container" onSubmit={onSubmit}>
            <div>
                <h3>Build Your Own Pizza</h3>
            </div>
            <div>
                <label>Name for Order
                    <input 
                    id="name-input"
                    value={values.name}
                    onChange={onChange}
                    name="name"
                    type="text"
                    placeholder='Name'
                    />
                </label>
                <div>{errors.name}</div>
            </div>
            <div>
                <label>Choice of Size
                    <select onChange={onChange} value={values.size} name="size">
                        <option value="">Select a Size</option>
                        <option value="small">Small</option>
                        <option value="medium">Medium</option>
                        <option value="large">Large</option>
                    </select>
                </label>
                <div className='errors'>{errors.size}</div>
                <label>Pepperoni
                    <input 
                        type="checkbox"
                        name="pepperoni"
                        onChange={onChange}
                        checked={values.pepperoni}
                    />
                </label>
                <label>Sausage
                    <input 
                        type="checkbox"
                        name="sausage"
                        onChange={onChange}
                        checked={values.sausage}
                    />
                </label>
                <label>Mushrooms
                    <input 
                        type="checkbox"
                        name="mushrooms"
                        onChange={onChange}
                        checked={values.mushrooms}
                    />
                </label>
                <label>Jalapenos
                    <input 
                        type="checkbox"
                        name="jalapenos"
                        onChange={onChange}
                        checked={values.jalapenos}
                    />
                </label>
                <label>Olives
                    <input 
                        type="checkbox"
                        name="olives"
                        onChange={onChange}
                        checked={values.olives}
                    />
                </label>
                <div className='errors'>{errors.toppings}</div>
                <label>Special Instructions
                    <input 
                    id="special-text"
                    value={values.special}
                    onChange={onChange}
                    name="special"
                    type="text"
                    placeholder='Special Instructions'
                    />
                </label>
                <div className='errors'>{errors.special}</div>
            </div>
            <button id="submitBtn" disabled={disabled}>Submit Order</button>
        </form>
    )
}