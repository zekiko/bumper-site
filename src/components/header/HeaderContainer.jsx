import React from "react"
import { connect } from 'react-redux'
import { setListRendered, setFormRendered } from '../../redux/actions/actions'
import Header from "./Header"

function HeaderContainer({ setListRendered, setFormRendered }) {

    const handleHomePageClick = () => {
        setListRendered(false)
        setFormRendered(false)
    }

    const handleListPageClick = () => {
        setListRendered(true)
        setFormRendered(false)
    }

    return (
        <Header
            handleHomePageClick={handleHomePageClick}
            handleListPageClick={handleListPageClick}
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

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer)
