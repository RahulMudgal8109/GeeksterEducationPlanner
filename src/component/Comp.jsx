import React, { Fragment } from 'react'

const Comp = (props) => {
    // console.log(props)
  return (
    <Fragment>
    <div className="flex">
    <div className='text'>{props.text}</div>
    <div className='hours'>{props.num}</div>
    <button 
          className='plus' value="+"
          onClick={(e) => props.onclick(e.target.value,props.index)}
        >
          +
        </button>
        <button 
          className='minus' value="-"
          onClick={(e) => props.onclick(e.target.value,props.index)}
        >
          -
        </button>
    </div>

    </Fragment>
  )
}

export default Comp