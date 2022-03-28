import * as actionTypes from './types'

export const addValueList = (data) => ({
    type: actionTypes.ADD_VALUES,
    payload: data,
})

export const setApiCallReady = (data) => ({
    type: actionTypes.IS_API_CALL_READY,
    payload: data,
})

export const setListRendered = (data) => ({
    type: actionTypes.IS_LIST_RENDERED,
    payload: data,
})

export const setIsMobile = (data) => ({
    type: actionTypes.IS_MOBILE,
    payload: data,
})