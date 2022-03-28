import React from "react"

export default function Form(props) {
    const { values, errors, handleChange, handleSubmit, handleClick } = props

    return (
        <div className="bg-white h-2/3 w-3/4 max-w-4xl rounded-3xl">

            <form
                className="bg-white rounded-3xl px-1 pt-6 pb-8 mb-4 max-w-full mx-auto"
                onSubmit={handleSubmit}
            >
                <p className="ml-7 whitespace-pre-line font-bold text-xl">Join our network</p>
                <p className="ml-7 whitespace-pre-line font-content text-xl">Free to join, no monthly fees</p>
                <div className="m-7">
                    <div className="flex flex-row items-center mb-0.5">
                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="user" className="svg-inline--fa fa-user fa-1x text-reverse-content mr-0.25 w-5 h-5" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                            <path className="fill-icon-orange" fill="currentColor"
                                d="M224 256c70.7 0 128-57.31 128-128s-57.3-128-128-128C153.3 0 96 57.31 96 128S153.3 256 224 256zM274.7 304H173.3C77.61 304 0 381.6 0 477.3c0 19.14 15.52 34.67 34.66 34.67h378.7C432.5 512 448 496.5 448 477.3C448 381.6 370.4 304 274.7 304z">
                            </path>
                        </svg>
                        <label
                            className="block text-lg font-bold ml-1"
                        >
                            Name
                        </label>
                    </div>
                    <input
                        className={`bg-white focus:outline-none focus:shadow-outline border ${errors.name ? "border-red" : "border-black"} rounded-3xl py-2 px-4 block w-full h-14 appearance-none leading-normal`}
                        type="text"
                        id="name"
                        onChange={handleChange}
                        value={values.name || ''}
                        required
                        name="name"
                    />
                    {errors.name && (
                        <p className="text-xs text-red mt-1" >{errors.name}</p>
                    )}
                </div>

                <div className="m-7">
                    <div className="flex flex-row items-center mb-0.5">
                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="building" className="svg-inline--fa fa-building fa-1x text-reverse-content mr-0.25 w-5 h-5" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                            <path className="fill-icon-orange" fill="currentColor" d="M336 0C362.5 0 384 21.49 384 48V464C384 490.5 362.5 512 336 512H240V432C240 405.5 218.5 384 192 384C165.5 384 144 405.5 144 432V512H48C21.49 512 0 490.5 0 464V48C0 21.49 21.49 0 48 0H336zM64 272C64 280.8 71.16 288 80 288H112C120.8 288 128 280.8 128 272V240C128 231.2 120.8 224 112 224H80C71.16 224 64 231.2 64 240V272zM176 224C167.2 224 160 231.2 160 240V272C160 280.8 167.2 288 176 288H208C216.8 288 224 280.8 224 272V240C224 231.2 216.8 224 208 224H176zM256 272C256 280.8 263.2 288 272 288H304C312.8 288 320 280.8 320 272V240C320 231.2 312.8 224 304 224H272C263.2 224 256 231.2 256 240V272zM80 96C71.16 96 64 103.2 64 112V144C64 152.8 71.16 160 80 160H112C120.8 160 128 152.8 128 144V112C128 103.2 120.8 96 112 96H80zM160 144C160 152.8 167.2 160 176 160H208C216.8 160 224 152.8 224 144V112C224 103.2 216.8 96 208 96H176C167.2 96 160 103.2 160 112V144zM272 96C263.2 96 256 103.2 256 112V144C256 152.8 263.2 160 272 160H304C312.8 160 320 152.8 320 144V112C320 103.2 312.8 96 304 96H272z">
                            </path>
                        </svg>
                        <label
                            className="block text-lg font-bold ml-1"
                            htmlFor="password"
                        >
                            Company
                        </label>
                    </div>
                    <input
                        className="bg-white focus:outline-none focus:shadow-outline border border-black rounded-3xl py-2 px-4 block w-full h-14 appearance-none leading-normal"
                        id="company"
                        type="text"
                        onChange={handleChange}
                        value={values.company || ''}
                        required
                        name="company"
                    />
                    {errors.company && (
                        <p className="text-xs text-red mt-1" >{errors.company}</p>
                    )}
                </div>

                <div className="m-7">
                    <div className="flex flex-row items-center mb-0.5">
                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="mobile" className="svg-inline--fa fa-mobile fa-1x text-reverse-content mr-0.25 w-5 h-5" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                            <path className="fill-icon-orange" fill="currentColor" d="M320 0H64C37.5 0 16 21.5 16 48v416C16 490.5 37.5 512 64 512h256c26.5 0 48-21.5 48-48v-416C368 21.5 346.5 0 320 0zM240 447.1C240 456.8 232.8 464 224 464H159.1C151.2 464 144 456.8 144 448S151.2 432 160 432h64C232.8 432 240 439.2 240 447.1z">
                            </path>
                        </svg>
                        <label
                            className="block text-lg font-bold ml-1"
                            htmlFor="password"
                        >
                            Mobile phone number
                        </label>
                    </div>
                    <input
                        className={`bg-white focus:outline-none focus:shadow-outline border ${errors.phone ? "border-red" : "border-black"} rounded-3xl py-2 px-4 block w-full h-14 appearance-none leading-normal`}
                        id="mobile_phone"
                        type="text"
                        onChange={handleChange}
                        value={values.mobile_phone || ''}
                        required
                        name="mobile_phone"
                    />
                    {errors.mobile_phone && (
                        <p className="text-xs text-red mt-1" >{errors.mobile_phone}</p>
                    )}
                </div>

                <div className="m-7">
                    <div className="flex flex-row items-center mb-0.5">
                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="envelope" className="svg-inline--fa fa-envelope fa-1x text-reverse-content mr-0.25 w-5 h-5" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                            <path className="fill-icon-orange" fill="currentColor" d="M256 352c-16.53 0-33.06-5.422-47.16-16.41L0 173.2V400C0 426.5 21.49 448 48 448h416c26.51 0 48-21.49 48-48V173.2l-208.8 162.5C289.1 346.6 272.5 352 256 352zM16.29 145.3l212.2 165.1c16.19 12.6 38.87 12.6 55.06 0l212.2-165.1C505.1 137.3 512 125 512 112C512 85.49 490.5 64 464 64h-416C21.49 64 0 85.49 0 112C0 125 6.01 137.3 16.29 145.3z">
                            </path>
                        </svg>
                        <label
                            className="block text-lg font-bold ml-1"
                            htmlFor="password"
                        >
                            Email address
                        </label>
                    </div>
                    <input
                        className="bg-white focus:outline-none focus:shadow-outline border border-black rounded-3xl py-2 px-4 block w-full h-14 appearance-none leading-normal"
                        id="email_address"
                        onChange={handleChange}
                        value={values.email_address || ''}
                        required
                        type="email"
                        name="email_address"
                    />
                    {errors.email_address && (
                        <p className="text-xs text-red mt-1" >{errors.email_address}</p>
                    )}
                </div>

                <div className="m-7">
                    <div className="flex flex-row items-center mb-0.5">
                        <svg aria-hidden="true" focusable="false" data-icon="house-chimney" className="svg-inline--fa fa-house-chimney fa-1x text-reverse-content mr-0.25 w-5 h-5" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                            <path className="fill-icon-orange" fill="currentColor" d="M511.8 287.6L512.5 447.7C512.5 450.5 512.3 453.1 512 455.8V472C512 494.1 494.1 512 472 512H456C454.9 512 453.8 511.1 452.7 511.9C451.3 511.1 449.9 512 448.5 512H392C369.9 512 352 494.1 352 472V384C352 366.3 337.7 352 320 352H256C238.3 352 224 366.3 224 384V472C224 494.1 206.1 512 184 512H128.1C126.6 512 125.1 511.9 123.6 511.8C122.4 511.9 121.2 512 120 512H104C81.91 512 64 494.1 64 472V360C64 359.1 64.03 358.1 64.09 357.2V287.6H32.05C14.02 287.6 0 273.5 0 255.5C0 246.5 3.004 238.5 10.01 231.5L266.4 8.016C273.4 1.002 281.4 0 288.4 0C295.4 0 303.4 2.004 309.5 7.014L416 100.7V64C416 46.33 430.3 32 448 32H480C497.7 32 512 46.33 512 64V185L564.8 231.5C572.8 238.5 576.9 246.5 575.8 255.5C575.8 273.5 560.8 287.6 543.8 287.6L511.8 287.6z">
                            </path></svg>
                        <label
                            className="block text-lg font-bold ml-1"
                            htmlFor="password"
                        >
                            Postcode
                        </label>
                    </div>
                    <input
                        className="bg-white focus:outline-none focus:shadow-outline border border-black rounded-3xl py-2 px-4 block w-full h-14 appearance-none leading-normal"
                        id="postcode"
                        type="text"
                        onChange={handleChange}
                        value={values.postcode || ''}
                        required
                        name="postcode"
                    />
                    {errors.postcode && (
                        <p className="text-xs text-red mt-1" >{errors.postcode}</p>
                    )}
                </div>

                <div className="m-7">
                    <div className="flex flex-row items-center mb-0.5">
                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="wrench" className="svg-inline--fa fa-wrench fa-1x text-reverse-content mr-0.25 w-5 h-5" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                            <path className="fill-icon-orange" fill="currentColor" d="M507.6 122.8c-2.904-12.09-18.25-16.13-27.04-7.338l-76.55 76.56l-83.1-.0002l0-83.1l76.55-76.56c8.791-8.789 4.75-24.14-7.336-27.04c-23.69-5.693-49.34-6.111-75.92 .2484c-61.45 14.7-109.4 66.9-119.2 129.3C189.8 160.8 192.3 186.7 200.1 210.1l-178.1 178.1c-28.12 28.12-28.12 73.69 0 101.8C35.16 504.1 53.56 512 71.1 512s36.84-7.031 50.91-21.09l178.1-178.1c23.46 7.736 49.31 10.24 76.17 6.004c62.41-9.84 114.6-57.8 129.3-119.2C513.7 172.1 513.3 146.5 507.6 122.8zM80 456c-13.25 0-24-10.75-24-24c0-13.26 10.75-24 24-24s24 10.74 24 24C104 445.3 93.25 456 80 456z">
                            </path>
                        </svg>
                        <p className="ml-1 whitespace-pre-line font-bold text-lg">What services are you interested in?</p>
                    </div>
                    <p className="whitespace-pre-line font-content text-sm">Please select the services you’re interested in offering your customers</p>
                    <div className="flex flex-row items-center mb-0.5 mt-1">
                        <button
                            type="submit"
                            onClick={(e) => handleClick(e, "pay_later")}
                            className="inline-flex items-center border rounded-3xl border-black mr-4 mt-1 text-2xl py-2 px-4 w-40 hover:bg-slate-200">
                            <p>PayLater</p>
                            {values.pay_later === "false" ?
                                <svg aria-hidden="true" focusable="false" data-icon="plus" className="w-5 ml-4" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                    <path fill="currentColor" d="M432 256c0 17.69-14.33 32.01-32 32.01H256v144c0 17.69-14.33 31.99-32 31.99s-32-14.3-32-31.99v-144H48c-17.67 0-32-14.32-32-32.01s14.33-31.99 32-31.99H192v-144c0-17.69 14.33-32.01 32-32.01s32 14.32 32 32.01v144h144C417.7 224 432 238.3 432 256z">
                                    </path>
                                </svg>
                                :
                                <svg aria-hidden="true" focusable="false" data-icon="minus" className="w-5 ml-4" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                    <path fill="currentColor" d="M400 288h-352c-17.69 0-32-14.32-32-32.01s14.31-31.99 32-31.99h352c17.69 0 32 14.3 32 31.99S417.7 288 400 288z">
                                    </path>
                                </svg>
                            }
                        </button>
                        <button
                            type="submit"
                            onClick={(e) => handleClick(e, "pay_now")}
                            className="inline-flex items-center border rounded-3xl border-black mt-1 py-2 px-4 w-40 hover:bg-slate-200">
                            <p className="text-2xl" >PayNow</p>
                            {values.pay_now === "false" ?
                                <svg aria-hidden="true" focusable="false" data-icon="plus" className="w-5 ml-4" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                    <path fill="currentColor" d="M432 256c0 17.69-14.33 32.01-32 32.01H256v144c0 17.69-14.33 31.99-32 31.99s-32-14.3-32-31.99v-144H48c-17.67 0-32-14.32-32-32.01s14.33-31.99 32-31.99H192v-144c0-17.69 14.33-32.01 32-32.01s32 14.32 32 32.01v144h144C417.7 224 432 238.3 432 256z">
                                    </path>
                                </svg>
                                :
                                <svg aria-hidden="true" focusable="false" data-icon="minus" className="w-5 ml-4" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                    <path fill="currentColor" d="M400 288h-352c-17.69 0-32-14.32-32-32.01s14.31-31.99 32-31.99h352c17.69 0 32 14.3 32 31.99S417.7 288 400 288z">
                                    </path>
                                </svg>
                            }
                        </button>
                    </div>
                    {errors.pay && (
                        <p className="text-xs text-red mt-1" >{errors.pay}</p>
                    )}

                    <button className="inline-flex items-center justify-center border rounded-3xl border-black mt-8 py-2 px-4 w-full bg-green hover:text-white">
                        <p className="text-2xl" >Register</p>
                        <svg aria-hidden="true" focusable="false" data-icon="arrow-right-long" className="w-6 ml-4 group-hover:text-reverse " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                            <path fill="currentColor" d="M363.3 100.7l144 144C510.4 247.8 512 251.9 512 255.1s-1.562 8.188-4.688 11.31l-144 144c-6.25 6.25-16.38 6.25-22.62 0s-6.25-16.38 0-22.62l116.7-116.7H16c-8.844 0-16-7.156-16-15.1c0-8.844 7.156-16 16-16h441.4l-116.7-116.7c-6.25-6.25-6.25-16.38 0-22.62S357.1 94.44 363.3 100.7z">
                            </path>
                        </svg>
                    </button>

                    <p className="whitespace-pre-line font-content leading-content text-center font-medium mt-3">Already registered? <span className="hover:underline text-green"><a href="">Login</a></span></p>
                </div>
            </form>
        </div>
    )
}