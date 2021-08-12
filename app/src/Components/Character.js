import React, { useEffect } from 'react'
import {connect} from 'react-redux'
import {getFact} from '../actions/appActions'

export const Character = (props) => {
    useEffect(() => {
        props.getFact()
    }, [])
    return(<div className="dog">
        <div className="imgcontainer">
      <img src={props.item.url} />
      </div>
      {console.log(props.item)}
<button onClick={()=>props.getFact()}>Change Dog</button>
    </div>)
}

const mapPropstoState = (state) =>{
    console.log(state)
return {
    item: state
}
}
export default connect(mapPropstoState, {getFact})(Character)