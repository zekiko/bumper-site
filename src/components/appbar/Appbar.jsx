import React from "react"
import { connect } from 'react-redux'
import { setListRendered } from '../../redux/actions/actions'
import Logo from '../../bumperim.svg'

function Appbar({ setListRendered, isMobile }) {
    const handleClick = () => {
        setListRendered(false)
    }

    const renderMobileAppbar = () => {
        return (
            <div className="w-full h-full flex flex-row items-center justify-between">
                <div className="flex h-full w-1/3 ml-4 items-center">
                    <img className="h-2/3 w-2/5" src={Logo} />
                </div>
                <button
                    onClick={handleClick}
                    type="button" className="btn btn-ghost border rounded-full h-8 w-8 flex items-center justify-center m-4 border-black">
                    <svg aria-hidden="true" focusable="false" data-icon="bars" className="w-5 h-5" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                        <path fill="currentColor" d="M0 96C0 78.33 14.33 64 32 64H416C433.7 64 448 78.33 448 96C448 113.7 433.7 128 416 128H32C14.33 128 0 113.7 0 96zM0 256C0 238.3 14.33 224 32 224H416C433.7 224 448 238.3 448 256C448 273.7 433.7 288 416 288H32C14.33 288 0 273.7 0 256zM416 448H32C14.33 448 0 433.7 0 416C0 398.3 14.33 384 32 384H416C433.7 384 448 398.3 448 416C448 433.7 433.7 448 416 448z">
                        </path>
                    </svg>
                </button>
            </div>
        )
    }

    const renderDesktopApp = () => {
        return (
            <div className="flex h-full w-full items-center px-10">
                <div className="flex w-1/3 justify-between items-center text-base">
                    <h1>Apply</h1>
                    <h1>How it works</h1>
                    <h1>About us</h1>
                    <h1>Blog</h1>
                </div>

                <div className="flex h-full w-1/3 justify-center items-center">
                    <img className="h-2/3 w-2/5" src={Logo} />
                </div>

                <div className="flex h-full w-1/3 justify-end items-center">
                    <button
                        onClick={handleClick}
                        className="inline-flex items-center justify-end mt-1 py-2 px-4 w-0.8/2 h-3.5/5 hover:text-white text-base font-bold border-b-4 border-black">
                        <h1>Partner sign up</h1>
                        <svg aria-hidden="true" focusable="false" data-icon="wrench" className="w-5 h-5 ml-2" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                            <path fill="currentColor" d="M507.6 122.8c-2.904-12.09-18.25-16.13-27.04-7.338l-76.55 76.56l-83.1-.0002l0-83.1l76.55-76.56c8.791-8.789 4.75-24.14-7.336-27.04c-23.69-5.693-49.34-6.111-75.92 .2484c-61.45 14.7-109.4 66.9-119.2 129.3C189.8 160.8 192.3 186.7 200.1 210.1l-178.1 178.1c-28.12 28.12-28.12 73.69 0 101.8C35.16 504.1 53.56 512 71.1 512s36.84-7.031 50.91-21.09l178.1-178.1c23.46 7.736 49.31 10.24 76.17 6.004c62.41-9.84 114.6-57.8 129.3-119.2C513.7 172.1 513.3 146.5 507.6 122.8zM80 456c-13.25 0-24-10.75-24-24c0-13.26 10.75-24 24-24s24 10.74 24 24C104 445.3 93.25 456 80 456z">
                            </path>
                        </svg>
                    </button>

                    <button
                        onClick={handleClick}
                        className="inline-flex items-center justify-center border rounded-3xl border-black mt-1 py-2 ml-8 px-4 w-0.9/2 h-3.5/5 hover:text-white text-base font-bold">
                        <h1>Partner login</h1>
                        <svg aria-hidden="true" focusable="false" data-icon="garage" className="w-5 h-5 ml-2" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                            <path fill="currentColor" d="M323 51.12C321.1 50.34 318.9 50.34 316.1 51.12L62.98 154.1C53.93 157.8 48 166.6 48 176.3V488C48 501.3 37.25 512 24 512C10.75 512 0 501.3 0 488V176.3C0 147 17.78 120.6 44.95 109.6L298.1 6.634C312.5 1.164 327.5 1.164 341 6.634L595 109.6C622.2 120.6 640 147 640 176.3V488C640 501.3 629.3 512 616 512C602.7 512 592 501.3 592 488V176.3C592 166.6 586.1 157.8 577 154.1L323 51.12zM143.1 368V488C143.1 501.3 133.3 512 119.1 512C106.7 512 95.1 501.3 95.1 488V232C95.1 209.9 113.9 192 135.1 192H504C526.1 192 544 209.9 544 232V488C544 501.3 533.3 512 520 512C506.7 512 496 501.3 496 488V368H143.1zM143.1 320H496V240H143.1V320zM360 416C373.3 416 384 426.7 384 440C384 453.3 373.3 464 360 464H279.1C266.7 464 255.1 453.3 255.1 440C255.1 426.7 266.7 416 279.1 416H360z">
                            </path></svg>
                    </button>
                </div>
            </div>
        )
    }

    return (
        <div className="bg-orange w-[95%] h-14 max-w-screen-2xl rounded-full fixed top-4 border border-black font-bold ">
            {isMobile ?
                renderMobileAppbar()
                :
                renderDesktopApp()
            }
        </div>
    )
}
const mapStateToProps = state => ({
    isMobile: state.appReducer.isMobile,
})

const mapDispatchToProps = dispatch => ({
    setListRendered: (data) => dispatch(setListRendered(data)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Appbar)
