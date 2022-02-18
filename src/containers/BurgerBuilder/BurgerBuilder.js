import React, { useState, useEffect } from 'react';

import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'
import Modal from '../../components/UI/Modal/Modal'
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary'
import Spinner from '../../components/UI/Spinner/Spinner'
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHanler';
import axios from '../../axios-orders'

const INGREDIENT_PRICES = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.3,
  bacon: 0.7,
}

const Burgerbuilder = () => {
  const [totalPrice, setTotalPrice] = useState(4)
  const [purchasable, setPurchasable] = useState(false)
  const [purchasing, setPurchasing] = useState(false)
  const [loading, setLoading] = useState(false)
  const [ingredients, setIngredients] = useState(null)
  const [error, setError] = useState(false)

  useEffect(() => {
    axios.get('https://reactjs-my-burger-a2fe6-default-rtdb.asia-southeast1.firebasedatabase.app/ingredients.json')
      .then(response => {
        setIngredients(response.data)
      })
      .catch(error => { setError(true) })
  }, [])

  const updatePurchaseState = (ingredients) => {
    const sum = Object.keys(ingredients)
      .map(igKey => {
        return ingredients[igKey]
      })
      .reduce((sum, cur) => sum + cur, 0)
    setPurchasable(sum > 0)
  }

  const purchaseHandler = () => {
    setPurchasing(true)
  }

  const purchaseCancelHandler = () => {
    setPurchasing(false)
  }

  const purchaseContinueHandler = () => {
    // alert('You Continue!')
    setLoading(true)
    const order = {
      ingredients: ingredients,
      price: totalPrice,
      customer: {
        name: 'Shinagawa Yasuo',
        address: {
          street: 'Teststreet 1',
          zipCode: '1999',
          country: 'Vietnam'
        },
        email: 'test@test.com'
      },
      deliveryMethod: 'fastest'
    }
    axios.post('/orders.json', order)
      .then(response => {
        setLoading(false)
        setPurchasing(false)
      })
      .catch(error => {
        setLoading(false)
        setPurchasing(false)
      })
  }

  const addIngredientHandler = (type) => {
    const oldCount = ingredients[type]
    const updatedCount = oldCount + 1
    const updatedIngredient = { ...ingredients }
    updatedIngredient[type] = updatedCount
    const priceAddition = INGREDIENT_PRICES[type]
    const oldPrice = totalPrice
    const newPrice = oldPrice + priceAddition
    setTotalPrice(newPrice)
    setIngredients(updatedIngredient)
    updatePurchaseState(updatedIngredient)
  }

  const removeIngredientHandler = (type) => {
    const oldCount = ingredients[type]
    if (oldCount > 0) {
      const updatedCount = oldCount - 1
      const updatedIngredient = { ...ingredients }
      updatedIngredient[type] = updatedCount
      const priceDeduction = INGREDIENT_PRICES[type]
      const oldPrice = totalPrice
      if (oldPrice > 4) {
        const newPrice = oldPrice - priceDeduction
        setTotalPrice(newPrice)
        setIngredients(updatedIngredient)
      }
      updatePurchaseState(updatedIngredient)
    }
  }

  const disabledInfo = { ...ingredients }
  for (let key in disabledInfo) {
    disabledInfo[key] = disabledInfo[key] <= 0
  }

  let orderSummary = null

  let burger = error ? <p>Ingredients can't be loaded</p> : <Spinner />
  if (ingredients) {
    burger = (
      <React.Fragment>
        <Burger ingredients={ingredients} />
        <BuildControls
          ingredientAdded={addIngredientHandler}
          ingredientRemoved={removeIngredientHandler}
          purchasable={purchasable}
          disabled={disabledInfo}
          ordered={purchaseHandler}
          currentPrice={totalPrice} />
      </React.Fragment>
    )
    orderSummary = <OrderSummary
      price={totalPrice}
      purchaseContinued={purchaseContinueHandler}
      purchaseCancelled={purchaseCancelHandler}
      ingredients={ingredients} />
  }

  if (loading) {
    orderSummary = <Spinner />
  }

  return (
    <React.Fragment>
      <Modal show={purchasing} modalClosed={purchaseCancelHandler}>
        {orderSummary}
      </Modal>
      {burger}
    </React.Fragment>
  )
}

export default withErrorHandler(Burgerbuilder, axios)