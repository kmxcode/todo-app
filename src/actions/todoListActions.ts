import * as actionTypes from './types/todoListTypes'
import { ISingleElementList } from '../entities/todoSingleEl'

export const setNewElemTodoList = (newElem: ISingleElementList) => ({
    type: actionTypes.SET_NEW_ELEM,
    newElem
})

export const removeElemTodoList = (elemId: number) => ({
    type: actionTypes.REMOVE_ELEM,
    elemId
})