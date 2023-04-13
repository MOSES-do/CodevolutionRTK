import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { ordered, restocked } from './icecreamSlice'

const IcecreamView = () => {
    const icecream = useSelector((state) => state.icecream.numOfIcecreams)
    const dispatch = useDispatch()

    return (
        <div>
            <h2>Number of icecream - {icecream}</h2>
            <button onClick={() => dispatch(ordered())}>Order icecream</button>
            <button onClick={() => dispatch(restocked(3))}>Restock icecream</button>
        </div>
    )
}

export default IcecreamView