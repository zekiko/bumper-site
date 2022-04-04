import * as actionTypes from '../actions/types'
import { IS_MOBILE_SIZE, RENDER_NOTHING_SIZE } from '../../utils/constants'

export const initialState = {
  valueList: [],
  apiCallReady: false,
  listRendered: false,
  formRendered: false,
  isMobile: window.innerWidth < IS_MOBILE_SIZE,
  renderNothing: window.innerWidth < RENDER_NOTHING_SIZE
}

export default function appReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.ADD_VALUES:
      return { ...state, valueList: [...state.valueList, action.payload] }
    case actionTypes.IS_API_CALL_READY:
      return { ...state, apiCallReady: action.payload }
    case actionTypes.IS_LIST_RENDERED:
      return { ...state, listRendered: action.payload }
    case actionTypes.IS_FORM_RENDERED:
      return { ...state, formRendered: action.payload }
    case actionTypes.IS_MOBILE:
      return { ...state, isMobile: action.payload }
    case actionTypes.RENDER_NOTHING:
      return { ...state, renderNothing: action.payload }
    default:
      return state
  }
}