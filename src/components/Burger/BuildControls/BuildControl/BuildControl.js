import styled from './BuildControl.module.css'


const BuildControl = (props) => {
  return (

    <div className={styled.BuildControl}>
      <div className={styled.Label}>{props.label}</div>
      <button
        className={styled.Less}
        onClick={props.removed}
        disabled={props.disabled}>Less
      </button>
      <button className={styled.More} onClick={props.added}>More</button>
    </div>
  )

}

export default BuildControl;
