import React from "react"
import { connect } from 'react-redux'
import { setListRendered, setFormRendered } from '../../redux/actions/actions'
import Appbar from './Appbar'

function AppbarContainer({ setListRendered, isMobile, setFormRendered }) {

    const handleRegisterClick = () => {
        setListRendered(false)
        setFormRendered(true)
    }

    const handleHomeClick = () => {
        setListRendered(false)
        setFormRendered(false)
    }

    return (
        <Appbar
            handleRegisterClick={handleRegisterClick}
            handleHomeClick={handleHomeClick}
            isMobile={isMobile}
        />
    )
}

const mapStateToProps = state => ({
    isMobile: state.appReducer.isMobile,
    formRendered: state.appReducer.formRendered,
    listRendered: state.appReducer.listRendered,
})

const mapDispatchToProps = dispatch => ({
    setListRendered: (data) => dispatch(setListRendered(data)),
    setFormRendered: (data) => dispatch(setFormRendered(data)),
})

export default connect(mapStateToProps, mapDispatchToProps)(AppbarContainer)