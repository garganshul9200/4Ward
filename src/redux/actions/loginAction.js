import { store } from "../store"

import { checker } from "../reducer/loginReducer"

let dispatch = store.dispatch

export const checkStatus = (data)=>{
    dispatch(checker(data))
}