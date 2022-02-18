import styled from './Button.module.css'

const Button = (props) => (
  <button
    className={[styled.Button, styled[props.btnType]].join(' ')}
    onClick={props.clicked}
  >
    {props.children}
  </button>
)

export default Button