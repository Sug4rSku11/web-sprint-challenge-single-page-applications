import React from 'react'

//Pizza Form
export default function Pizza() {



    return (
        <form className="container">
           <div> <h5>Build Your own Pizza</h5>
            <img></img>
            </div>
            <div>
                <h3>Build Your Own Pizza</h3>
            </div>
            <div>
                <label>Choice of Size
                    <select>
                        <option value="">Select</option>
                        <option value="samll">Small</option>
                        <option value="medium">Medium</option>
                        <option value="large">Large</option>
                    </select>
                </label>
                <label>Add Toppings
                    <input 
                        type="checkbox"
                        name="pepperoni"
                    />
                </label>
                <label>Add Toppings
                    <input 
                        type="checkbox"
                        name="pepperoni"
                    />
                </label>
            </div>

        </form>
    )
}