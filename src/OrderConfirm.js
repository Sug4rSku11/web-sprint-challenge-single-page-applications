import React from 'react';

export default function OrderConfirmation({details}) {
    if(!details) {
        return <h3>Working on fetching your order...</h3>
    }
    return (
        <div>
            <h4>Your Order Details</h4>
            <p>Name:{details.name}</p>
            <p>Size:{details.size}</p>
            {
                !!details.toppings && !!details.toppings.length &&
                <div>
                    <ul>{details.toppings.map((order, idx) => <li key={idx}>{order}</li>)}
                    </ul>
                </div>
            }
            <p>Special Instructions:{details.special}</p>
            
        </div>
    )
}