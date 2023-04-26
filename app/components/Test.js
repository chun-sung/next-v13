'use client'

import { useDispatch, useSelector } from "react-redux"
import { SET_NAME } from '../redux/reducers/profileSlice'

export default function Test() {

    const { name } = useSelector((state) => state.profile)
    const dispatch = useDispatch()

    return (
        <>
            <div>Redux State: {name}</div>        
            <button className="bg-red-300 rounded-lg w-52 mt-10 p-2 hover:bg-red-400" onClick={()=> {
                dispatch(SET_NAME('John'))
            }}>Click me (John)</button>
        </>
    )
}