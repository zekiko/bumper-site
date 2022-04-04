import React from "react"
import { connect } from 'react-redux'
import validate from '../../utils/validation';
import useForm from '../../hooks/useForm'
import FormComponent from './Form'
import { addValueList, setApiCallReady, setListRendered } from '../../redux/actions/actions'
import { sendDataToApi } from '../../rest/restThunk'

function FormContainer({ apiCallReady, setApiCallReady, sendDataToApi, renderNothing }) {
    const {
        values,
        errors,
        handleChange,
        handleSubmit,
        handleClick,
    } = useForm(register, validate);

    React.useEffect(() => {
        if (apiCallReady) {
            sendDataToApi(values)
            setApiCallReady(false)
        }
    }, [apiCallReady])

    function register(data) {
        console.log('No errors, register callback called!');
        setApiCallReady(true)
    }
    
    return (
        <FormComponent
            renderNothing={renderNothing}
            values={values}
            errors={errors}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            handleClick={handleClick}
        />
    )
}

const mapStateToProps = state => ({
    valueList: state.appReducer.valueList,
    apiCallReady: state.appReducer.apiCallReady,
    listRendered: state.appReducer.listRendered,
    renderNothing: state.appReducer.renderNothing,
})

const mapDispatchToProps = dispatch => ({
    addValueList: (data) => dispatch(addValueList(data)),
    setApiCallReady: (data) => dispatch(setApiCallReady(data)),
    setListRendered: (data) => dispatch(setListRendered(data)),
    sendDataToApi: (data) => dispatch(sendDataToApi(data)),
})

export default connect(mapStateToProps, mapDispatchToProps)(FormContainer)
