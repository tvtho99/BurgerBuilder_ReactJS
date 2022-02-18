import styled from './BurgerIngredient.module.css'

import PropTypes from 'prop-types';


const BurgerIngredient = (props) => {
  let ingredient = null

  switch (props.type) {
    case ('bread-bottom'):
      ingredient = <div className={styled.BreadBottom}></div>
      break
    case ('bread-top'):
      ingredient = (
        <div className={styled.BreadTop}>
          <div className={styled.Seeds1}></div>
          <div className={styled.Seeds2}></div>
        </div>
      )
      break
    case ('meat'):
      ingredient = <div className={styled.Meat}></div>
      break
    case ('cheese'):
      ingredient = <div className={styled.Cheese}></div>
      break
    case ('bacon'):
      ingredient = <div className={styled.Bacon}></div>
      break
    case ('salad'):
      ingredient = <div className={styled.Salad}></div>
      break
    default:
      ingredient = null
  }

  return ingredient
}

BurgerIngredient.propTypes = {
  type: PropTypes.string.isRequired
}

export default BurgerIngredient