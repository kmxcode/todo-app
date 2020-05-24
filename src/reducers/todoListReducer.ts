import * as actionTypes from '../actions/types/todoListTypes'
import { ISingleElementList } from './../entities/todoSingleEl'

export interface ITodoListReducer {
    todoList: ISingleElementList[];
}

const defaultState = (): ITodoListReducer => ({
    todoList: [{
        name: 'First',
        description: 'first description',
        id: 123
    },
    {
        name: 'Second',
        description: 'second description',
        id: 234
    },
    {
        name: 'Third',
        description: 'third description',
        id: 345
    }]
})

export default (state = defaultState(), action: any): ITodoListReducer => {
    switch (action.type) {
        case actionTypes.SET_NEW_ELEM: {
            return {
                ...state,
                todoList: [ ...state.todoList, action.newElem]
            }
        }
        case actionTypes.REMOVE_ELEM: {
            return {
                ...state,
                todoList: state.todoList.filter(elem => elem.id !== action.elemId)
            }
        }
        default: {
            return state
        }
    }
}