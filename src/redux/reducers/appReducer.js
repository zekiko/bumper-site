import * as actionTypes from '../actions/types'

export const initialState = {
  valueList: [],
  apiCallReady: false,
  listRendered: false,
  isMobile: window.innerWidth < 1296,
}

export default function appReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.ADD_VALUES:
      return { ...state, valueList: [...state.valueList, action.payload] }
    case actionTypes.IS_API_CALL_READY:
      return { ...state, apiCallReady: action.payload }
    case actionTypes.IS_LIST_RENDERED:
      return { ...state, listRendered: action.payload }
    case actionTypes.IS_MOBILE:
      return { ...state, isMobile: action.payload }
    default:
      return state
  }
}