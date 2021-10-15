import React, { useState, useEffect } from "react";
import { Link, Route, Switch } from 'react-router-dom'
import Home from './Home';
import Pizza from './Pizza';
import * as yup from 'yup';
import axios from "axios";
import schema from "./formSchema";



const initialFormValues =  {
  name: '',
  size: '',
  pepperoni: '',
  sausage: '',
  mushrooms: '',
  jalapenos: '',
  olives: '',
  special: '',
}
const initialFormErrors = {
  name: '',
  size: '',
  special: '',
}

const initialPizza = []
const initialDisabled = true


const App = () => {

  const [ pizza, setPizza] = useState(initialPizza)
  const [formValues, setFormValues] = useState(initialFormValues)
  const [formErrors, setFormErrors] = useState(initialFormErrors)
  const [disabled, setDisabled] = useState(initialDisabled)

  const postNewPizza = newPizza => {
    axios.post('https://reqres.in/api/orders', newPizza)
    .then(res => {
      setPizza([res.data, ...pizza]);
    }).catch(err => {
      console.error(err);
    }).finally(() => {
      setFormValues(initialFormValues);
    })
  }
    const validate = (name, value) => {
      yup.reach(schema, name)
      .validate(value)
      .then(() => setFormErrors({ ...formErrors, [name]: ''}))
      .catch(err => setFormErrors({ ...formErrors, [name]: err.errors[0] }))
    }

    const inputChange = (name, value) => {
      validate(name, value);
      setFormValues({
        ...formValues, 
        [name]: value
      })
    }

    const formSubmit = () => {
      const newPizza = {
        name: formValues.name.trim(),
        size: formValues.size,
        toppings: ['pepperone', 'sausage', 'mushrooms', 'jalapenos', 'olives']
        .filter(toppings => !!formValues[toppings])
      }
      postNewPizza(newPizza);
    }
    // useEffect (() => {
    //   isSchema.isValid(formValues).then(valid => setDisabled(!valid))
    // }, [formValues])

  return (
    <>
    
      <header>
      <h1>Lambda Eats</h1>
        <nav className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/pizza" id="pizza-form">Order</Link>
        
        </nav>
        </header>
      <Switch>
        <Route path="/">
      <Home />
      </Route>
      <Route path="/pizza">
        <Pizza 
        values={formValues}
        change={inputChange}
        submit={formSubmit}
        disabled={disabled}
        errors={formErrors}
        />
      </Route>
      </Switch>
    </>
  );
};
export default App;
