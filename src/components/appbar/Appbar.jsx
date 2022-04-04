import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWrench, faWarehouse, faBars } from '@fortawesome/free-solid-svg-icons'
import Logo from '/public/bumperim.svg'

export default function Appbar(props) {

    const renderMobileAppbar = () => {
        return (
            <div className="w-full h-full flex flex-row items-center justify-between">
                <button
                    onClick={props.handleHomeClick}
                    className="flex h-full w-1/3 ml-4 items-center">
                    <img className="h-2/3 w-2/5" src={Logo} />
                </button>
                <button
                    onClick={props.handleRegisterClick}
                    type="button"
                    className="border rounded-full h-8 w-8 
                                flex items-center justify-center m-4 border-black ">
                    <FontAwesomeIcon icon={faBars} className="w-5 h-5" />
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

                <button
                    onClick={props.handleHomeClick}
                    className="flex h-full w-1/3 justify-center items-center">
                    <img className="h-2/3 w-2/5" src={Logo} />
                </button>

                <div className="flex h-full w-1/3 justify-end items-center">
                    <button
                        onClick={props.handleRegisterClick}
                        className="inline-flex items-center justify-end mt-1 py-2 
                                    px-4 w-0.8/2 h-3.5/5 hover:text-white text-base 
                                    font-bold border-b-4 border-black">
                        <h1>Partner sign up</h1>
                        <FontAwesomeIcon icon={faWrench} className="w-5 h-5 ml-2" />
                    </button>

                    <button
                        onClick={props.handleRegisterClick}
                        className="inline-flex items-center justify-center 
                                    border rounded-3xl border-black mt-1 
                                    py-2 ml-8 px-4 w-0.9/2 h-3.5/5 
                                    hover:text-white text-base font-bold">
                        <h1>Partner login</h1>
                        <FontAwesomeIcon icon={faWarehouse} className="w-5 h-5 ml-2" />
                    </button>
                </div>
            </div>
        )
    }

    return (
        <div className={`bg-orange ${props.isMobile ? 'w-full' : 'w-[95%]'} flex
                        h-14 max-w-screen-2xl z-30 ${props.isMobile ? '' : 'rounded-full'} 
                        fixed ${props.isMobile ? 'top-0' : 'top-4'} 
                        border border-black font-bold `}>
            {props.isMobile ?
                renderMobileAppbar()
                :
                renderDesktopApp()
            }
        </div>
    )
}