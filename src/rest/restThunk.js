import axios from 'axios'
import { addValueList, setListRendered } from '../redux/actions/actions'

export const sendDataToApi = (values) => {
    return (dispatch) => {
        return axios.post('https://proto.bumper.co.uk/core/dealership/reg/sandbox', values)
            .then(response => {
                //success
                dispatch(addValueList(values))
                dispatch(setListRendered(true))
            })
            .catch(err => console.log('err', err))
    };
}