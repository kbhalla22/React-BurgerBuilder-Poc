import React from 'react';
import Aux from '../../../hoc/Aux';
import Button from '../../UI/Button/Button';

const orderSummary=(props)=>{
  const ingredientSummary=Object.keys(props.ingredients)
  .map(igKey=>{
  return (<li key={igKey} ><span style={{textTransform:'capitalize'}}>{igKey}:{props.ingredients[igKey]}</span></li>);
  });
  return (
    <Aux>
      <h3>Your order</h3>
      <p>A delicious burger with following ingredients:</p>
      <ul>
{ingredientSummary}
      </ul>
  <p><stong>Total Price:{props.price.toFixed(2)}</stong></p>
      <p>Continue to Checkout?</p>
      <Button btnType="Danger" clicked={props.purchaseCancelled}> CANCEL</Button>
      <Button btnType="Success" clicked={props.purchaseContinued}>CONTINUE</Button>
    </Aux>
  );

  };

export default orderSummary;