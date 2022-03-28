import React from "react"
import axios from 'axios'
import { connect } from 'react-redux'
import validate from '../../utils/validation';
import useForm from '../../hooks/useForm'
import FormComponent from './Form'
import { addValueList, setApiCallReady, setListRendered } from '../../redux/actions/actions'

function FormContainer({addValueList, apiCallReady, setApiCallReady, setListRendered}) {
    const {
        values,
        errors,
        handleChange,
        handleSubmit,
        handleClick,
    } = useForm(register, validate);

    React.useEffect(() => {
        if (apiCallReady) {
            axios.post('https://proto.bumper.co.uk/core/dealership/reg/sandbox', values)
                .then(response => {
                    //console.log('response', response)
                    //success
                    addValueList(values)
                    setListRendered(true)
                })
                .catch(err => console.log('err', err))
            setApiCallReady(false)
        }
    }, [apiCallReady])

    function register(data) {
        console.log('No errors, register callback called!');
        setApiCallReady(true)
    }

    return (
        <FormComponent
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
})

const mapDispatchToProps = dispatch => ({
    addValueList: (data) => dispatch(addValueList(data)),
    setApiCallReady: (data) => dispatch(setApiCallReady(data)),
    setListRendered: (data) => dispatch(setListRendered(data)),
})

export default connect(mapStateToProps, mapDispatchToProps)(FormContainer)
