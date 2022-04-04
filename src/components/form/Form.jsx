import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faUser, faBuilding, faMobile, faEnvelope, faHouseChimney,
    faWrench, faPlus, faMinus, faArrowRightLong
} from '@fortawesome/free-solid-svg-icons'

export default function Form(props) {
    const { values, errors, handleChange, handleSubmit, handleClick, renderNothing } = props

    return (
        <div className="bg-white h-fit w-3/4 max-w-4xl rounded-3xl absolute top-64 z-20">
            {!renderNothing ?
                <form
                    className="rounded-3xl h-full max-w-full mx-auto pt-8"
                    onSubmit={handleSubmit}
                >
                    <p className="ml-7 whitespace-pre-line font-bold text-xl">
                        Join our network
                    </p>
                    <p className="ml-7 whitespace-pre-line font-content text-xl">
                        Free to join, no monthly fees
                    </p>
                    <div className="mx-10 h-[100px] mt-4">
                        <div className="flex flex-row items-center mb-0.5">
                            <FontAwesomeIcon icon={faUser} className="w-5 h-5" color="#ff733c" />
                            <label
                                className="block text-lg font-bold ml-1"
                            >
                                Name
                            </label>
                        </div>
                        <input
                            className={`bg-white focus:outline-none focus:shadow-outline border 
                                ${errors.name ? "border-red" : "border-black"} 
                                rounded-3xl px-4 block w-full h-12 appearance-none leading-normal`}
                            type="text"
                            id="name"
                            onChange={handleChange}
                            value={values.name || ''}
                            name="name"
                        />
                        {errors.name && (
                            <label className="text-xs text-red" >{errors.name}</label>
                        )}
                    </div>

                    <div className="mx-10 h-[100px]">
                        <div className="flex flex-row items-center mb-0.5">
                            <FontAwesomeIcon icon={faBuilding} className="w-5 h-5" color="#ff733c" />
                            <label
                                className="block text-lg font-bold ml-1"
                                htmlFor="password"
                            >
                                Company
                            </label>
                        </div>
                        <input
                            className={`bg-white focus:outline-none focus:shadow-outline border 
                                ${errors.company ? "border-red" : "border-black"} 
                                rounded-3xl py-2 px-4 block w-full h-12 appearance-none leading-normal`}
                            id="company"
                            type="text"
                            onChange={handleChange}
                            value={values.company || ''}
                            name="company"
                        />
                        {errors.company && (
                            <p className="text-xs text-red mt-1" >{errors.company}</p>
                        )}
                    </div>

                    <div className="mx-10 h-[100px]">
                        <div className="flex flex-row items-center mb-0.5">
                            <FontAwesomeIcon icon={faMobile} className="w-5 h-5" color="#ff733c" />
                            <label
                                className="block text-lg font-bold ml-1"
                                htmlFor="password"
                            >
                                Mobile phone number
                            </label>
                        </div>
                        <input
                            className={`bg-white focus:outline-none focus:shadow-outline border 
                                ${errors.mobile_phone ? "border-red" : "border-black"} 
                                rounded-3xl py-2 px-4 block w-full h-12 appearance-none leading-normal`}
                            id="mobile_phone"
                            type="text"
                            onChange={handleChange}
                            value={values.mobile_phone || ''}
                            name="mobile_phone"
                        />
                        {errors.mobile_phone && (
                            <p className="text-xs text-red mt-1" >{errors.mobile_phone}</p>
                        )}
                    </div>

                    <div className="mx-10 h-[100px]">
                        <div className="flex flex-row items-center mb-0.5">
                            <FontAwesomeIcon icon={faEnvelope} className="w-5 h-5" color="#ff733c" />
                            <label
                                className="block text-lg font-bold ml-1"
                                htmlFor="password"
                            >
                                Email address
                            </label>
                        </div>
                        <input
                            className={`bg-white focus:outline-none focus:shadow-outline border 
                                ${errors.email_address ? "border-red" : "border-black"} 
                                rounded-3xl py-2 px-4 block w-full h-12 appearance-none leading-normal`}
                            id="email_address"
                            onChange={handleChange}
                            value={values.email_address || ''}
                            type="email"
                            name="email_address"
                        />
                        {errors.email_address && (
                            <p className="text-xs text-red mt-1" >{errors.email_address}</p>
                        )}
                    </div>

                    <div className="mx-10 h-[100px]">
                        <div className="flex flex-row items-center mb-0.5">
                            <FontAwesomeIcon icon={faHouseChimney} className="w-5 h-5" color="#ff733c" />
                            <label
                                className="block text-lg font-bold ml-1"
                                htmlFor="password"
                            >
                                Postcode
                            </label>
                        </div>
                        <input
                            className={`bg-white focus:outline-none focus:shadow-outline border 
                                ${errors.postcode ? "border-red" : "border-black"} 
                                rounded-3xl py-2 px-4 block w-full h-12 appearance-none leading-normal`}
                            id="postcode"
                            type="text"
                            onChange={handleChange}
                            value={values.postcode || ''}
                            //required
                            name="postcode"
                        />
                        {errors.postcode && (
                            <p className="text-xs text-red mt-1" >{errors.postcode}</p>
                        )}
                    </div>

                    <div className="mx-10 h-[100px]">
                        <div className="flex flex-row items-center mb-0.5">
                            <FontAwesomeIcon icon={faWrench} className="w-5 h-5 mt-1" color="#ff733c" />
                            <p className="ml-1 whitespace-pre-line font-bold text-lg">
                                What services are you interested in?
                            </p>
                        </div>
                        <p className="whitespace-pre-line font-content text-slate-500 text-sm mb-2">
                            Please select the services you’re interested in offering your customers
                        </p>
                        <div className="flex flex-col mb-0.5 mt-1">
                            <div>
                                <button
                                    type="submit"
                                    onClick={(e) => handleClick(e, "pay_later")}
                                    className="inline-flex items-center border rounded-3xl 
                                            border-black mr-4 text-xl py-2 px-4 w-40 hover:bg-slate-200">
                                    <h3>PayLater</h3>
                                    {values.pay_later === "false" ?
                                        <FontAwesomeIcon icon={faPlus} className="w-5 h-5 ml-2" color="#000" />
                                        :
                                        <FontAwesomeIcon icon={faMinus} className="w-5 h-5 ml-2" color="#000" />
                                    }
                                </button>
                                <button
                                    type="submit"
                                    onClick={(e) => handleClick(e, "pay_now")}
                                    className="inline-flex items-center border rounded-3xl 
                                        border-black py-2 px-4 w-40 hover:bg-slate-200">
                                    <h3 className="text-xl" >PayNow</h3>
                                    {values.pay_now === "false" ?
                                        <FontAwesomeIcon icon={faPlus} className="w-5 h-5 ml-2" color="#000" />
                                        :
                                        <FontAwesomeIcon icon={faMinus} className="w-5 h-5 ml-2" color="#000" />
                                    }
                                </button>
                            </div>
                            {errors.pay && (
                                <p className="text-xs text-red" >{errors.pay}</p>
                            )}
                        </div>
                    </div>

                    <div className="h-[100px] mx-10 mb-10">
                        <button className="inline-flex items-center justify-center h-12
                                border rounded-3xl border-black mt-8 w-full bg-green hover:text-white">
                            <p className="text-xl" >Register</p>
                            <FontAwesomeIcon icon={faArrowRightLong} className="w-5 ml-2" />
                        </button>
                        <p className="whitespace-pre-line font-content leading-content text-center font-medium mt-3">
                            Already registered?
                            <span className="hover:underline text-green">
                                <a href="">Login</a>
                            </span>
                        </p>
                    </div>
                </form>
                :
                "Invalid media..."
            }
        </div>
    )
}