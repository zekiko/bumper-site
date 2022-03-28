import React from 'react'
import { connect } from 'react-redux'
import './App.css'
import FormContainer from './components/form/FormContainer'
import Header from './components/header/Header'
import Appbar from './components/appbar/Appbar'
import List from './components/list/List'
import { setIsMobile } from './redux/actions/actions'

function App({ listRendered, isMobile, setIsMobile }) {

  const updateMedia = () => {
    if (isMobile !== window.innerWidth < 1296)
      setIsMobile(window.innerWidth < 1296);
  };

  React.useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  }, [isMobile]);

  return (
    <div className="bg-main-100 h-full flex flex-col justify-center items-center">
      <Appbar />
      {listRendered ?
        <List />
        :
        <>
          <Header />
          <FormContainer />
        </>
      }
    </div >
  )
}

const mapStateToProps = state => ({
  listRendered: state.appReducer.listRendered,
  isMobile: state.appReducer.isMobile,
})

const mapDispatchToProps = dispatch => ({
  setIsMobile: (data) => dispatch(setIsMobile(data)),
})

export default connect(mapStateToProps, mapDispatchToProps)(App)