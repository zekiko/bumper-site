import React from 'react'
import { connect } from 'react-redux'
import MainPage from './pages/MainPage'
import ListPage from './pages/ListPage'
import FormPage from './pages/FormPage'
import { setIsMobile, setRenderNothing } from './redux/actions/actions'
import { IS_MOBILE_SIZE, RENDER_NOTHING_SIZE } from './utils/constants'

function App({ listRendered, formRendered, isMobile, setIsMobile, setRenderNothing, renderNothing }) {

  const updateMedia = () => {
    if (isMobile !== window.innerWidth < IS_MOBILE_SIZE) {
      setIsMobile(window.innerWidth < IS_MOBILE_SIZE)
    }
    if (renderNothing !== window.innerWidth < RENDER_NOTHING_SIZE) {
      setRenderNothing(window.innerWidth < RENDER_NOTHING_SIZE)
    }
  };


  React.useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  }, [isMobile, renderNothing]);

  const getPage = () => {
    if (listRendered)
      return <ListPage />

    if (formRendered)
      return <FormPage />

    return <MainPage />
  }

  return (
    <div className="bg-main-100 flex flex-col justify-center items-center">
      {getPage()}
    </div >
  )
}


const mapStateToProps = state => ({
  listRendered: state.appReducer.listRendered,
  formRendered: state.appReducer.formRendered,
  isMobile: state.appReducer.isMobile,
  renderNothing: state.appReducer.renderNothing
})

const mapDispatchToProps = dispatch => ({
  setIsMobile: (data) => dispatch(setIsMobile(data)),
  setRenderNothing: (data) => dispatch(setRenderNothing(data)),
})

export default connect(mapStateToProps, mapDispatchToProps)(App)