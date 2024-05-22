import { store } from "../store"
import { add, subtract } from "../reducer/countReducer"

const dispatch = store.dispatch

export const incr = (data) => {

    dispatch(add(data))
}

export const decr = (data) =>{
    dispatch(subtract(data))
}