import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightLong, faUserShield } from '@fortawesome/free-solid-svg-icons'
import Car from '/public/car-mountain-banner.jpg'
import Man from '/public/man.svg'
import Star from '/public/trustpilotStar.svg'
import Rating from '/public/trustpilotRating.svg'

export default function Main() {
    return (
        <div className="w-full grid " >

            {/* HEADER PART */}
            <div className="w-full h-fit">
                <div style={{
                    backgroundImage: `url(${Car})`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat'
                }}
                    className="bg-black w-full h-full flex items-center justify-center px-10" >
                    <div className="w-[95%] h-fit max-w-screen-2xl text-base font-bold text-black mt-14 ">
                        <div className='flex flex-row items-center my-10'>
                            <h1 className='capitalize text-2xl'>
                                excellent
                            </h1>
                            <img src={Rating} className='m-2'></img>
                            <img src={Star} className='m-2'></img>
                        </div>
                        <div className="text-5xl flex flex-col uppercase">
                            become a bumper approved
                            <h3>dependable dealership</h3>
                        </div>
                        <div className='flex flex-col mt-10 mb-5'>
                            Join our network of 3,000+ garages and dealerships who already
                            <h3>offer Bumper to their customers.</h3>
                        </div>
                        <div className='w-1/4'>
                            <button
                                className="w-60 inline-flex items-center justify-center 
                                            border rounded-3xl border-black mt-8 p-2 bg-green hover:text-white">
                                <p className="text-xl" >
                                    Register your interest
                                </p>
                                <FontAwesomeIcon icon={faArrowRightLong} className="w-3 ml-2" />
                            </button>
                            <p className="whitespace-pre-line font-content leading-content font-medium my-4">
                                Already registered?
                                <span className="hover:underline text-green ml-1"><a href="">Login</a></span></p>
                        </div>
                    </div>
                </div>
            </div>

            {/* CONTENT PART */}
            <div className="w-full h-fit" >
                <div className="w-full h-fit flex flex-col items-center justify-center px-10 bg-white " >
                    <div className="w-[95%] h-3/4 max-w-screen-2xl flex flex-row text-base font-medium text-black ">
                        <div className="w-2/3 h-full">
                            <p className='flex flex-col text-sm font-bold mt-4'>
                                PayLater
                            </p>
                            <p className='flex flex-col text-sm text-black mb-4'>
                                Allow your customers to split their repair or service bill over montly payments
                            </p>
                            <div className='flex flex-col text-4xl text-orange  uppercase	font-bold tracking-[-.06em] mb-4'>
                                <h3>No risk for dealers</h3>
                                No worry for drivers
                            </div>
                            <div className='flex flex-col text-xs font-bold'>
                                <p className='mb-4'>
                                    It's simple as
                                </p>
                                <div className='flex flex-col'>
                                    <div className='flex items-center'>
                                        <span className='w-5 h-5 mr-4 flex justify-center items-center bg-orange rounded-full'>1</span>
                                        Fix it
                                    </div>
                                    <p className='text-xs font-normal ml-9 mb-4'>
                                        Your customers bring their vehicle to you.
                                        You repair and service the car.
                                        Everyting just like it works right now.
                                    </p>
                                    <div className='flex items-center'>
                                        <span className='w-5 h-5 mr-4 flex justify-center items-center bg-orange rounded-full'>1</span>
                                        Split it
                                    </div>
                                    <p className='text-xs font-normal ml-9 mb-4'>
                                        Your customers bring their vehicle to you.
                                        You repair and service the car.
                                        Everyting just like it works right now.
                                    </p>
                                    <div className='flex items-center'>
                                        <span className='w-5 h-5 mr-4 flex justify-center items-center bg-orange rounded-full'>1</span>
                                        Sorted
                                    </div>
                                    <p className='text-xs font-normal ml-9 mb-4'>
                                        Your customers bring their vehicle to you.
                                        You repair and service the car.
                                        Everyting just like it works right now.
                                    </p>
                                </div>
                            </div>
                            <button
                                className="w-60 inline-flex items-center justify-center 
                                            border rounded-3xl border-black mt-8 mb-2 p-2 bg-green hover:text-white">
                                <p className="text-xl" >Register your interest</p>
                                <FontAwesomeIcon icon={faArrowRightLong} className="w-3 ml-2" />
                            </button>
                        </div>
                        <div className="w-1/3 h-[500px] flex mb-4">
                            <img src='/public/phone.svg' ></img>
                        </div>
                    </div>
                </div>
            </div>

            {/* FOOTER PART */}
            <div className={`bg-main-100 h-[200px] w-full`}>
                <div className="w-full h-full flex items-center justify-center px-10" >
                    <div className="w-[95%] h-3/4 max-w-screen-2xl text-base font-bold text-white mb-4">
                        <p className='flex flex-col uppercase mb-5'>
                            benefits our other partners have noticed offering paylater
                        </p>
                        <div className='flex flex-row mb-5 text-xs'>
                            <div className='flex flex-col'>
                                <h3 className='text-xl text-green'>71%</h3>
                                of customers authorised more work because they split their bill with Bumper
                            </div>
                            <div className='flex flex-col'>
                                <h3 className='text-xl text-green'>90%</h3>
                                of customers would return to the same garage because they offered Bumper
                            </div>
                            <div className='flex flex-col'>
                                <h3 className='text-xl text-green'>+350%</h3>
                                increase in avarage invoice of customers using Bumper to split their bill.
                            </div>
                            <div className='flex flex-col'>
                                <h3 className='text-xl text-green'>89%</h3>
                                of customers felt less stressed because they used Bumper to spread the cost.
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* SECODANRY CONTENT PART */}
            <div className="w-full h-fit" >
                <div className="w-full h-full flex flex-col items-center justify-center px-10 bg-white" >
                    <div className="w-[95%] h-3/4 max-w-screen-2xl flex flex-row text-base font-medium text-black my-4 ">
                        <div className='flex flex-col'>
                            <p className='font-bold mb-4'>
                                PayNow
                            </p>
                            <p className='font-normal mb-4'>
                                Our contactless payment solution that allows you to take payments online from your cutomers.
                            </p>
                            <p className='font-bold mb-8 uppercase text-4xl text-orange'>
                                Accept payments anywhere, anytime
                            </p>
                            <p className='font-bold mb-4'>
                                Benefits of PayNow
                            </p>
                            <div className='w-full flex flex-row justify-between'>
                                <div className='w-1/3 flex flex-row items-start'>
                                    <div className="w-[60px] h-[60px] bg-orange rounded-full flex justify-center items-center mr-2" >
                                        <FontAwesomeIcon icon={faUserShield} className="w-[60%] h-[60%]" />
                                    </div>
                                    <div className='w-2/3 flex flex-col'>
                                        <p className='font-bold'>
                                            Secure
                                        </p>
                                        <p className='font-light'>
                                            Prevent customers from revealing sensitive information over the phone, GDPR safe and tested
                                        </p>
                                    </div>
                                </div>
                                <div className='w-1/3 flex flex-row items-start'>
                                    <div className="w-[60px] h-[60px] bg-orange rounded-full flex justify-center items-center mr-2" >
                                        <FontAwesomeIcon icon={faUserShield} className="w-[60%] h-[60%]" />
                                    </div>
                                    <div className='w-2/3 flex flex-col'>
                                        <p className='font-bold'>
                                            Secure
                                        </p>
                                        <p className='font-light'>
                                            Prevent customers from revealing sensitive information over the phone, GDPR safe and tested
                                        </p>
                                    </div>
                                </div>
                                <div className='w-1/3 flex flex-row items-start'>
                                    <div className="w-[60px] h-[60px] bg-orange rounded-full flex justify-center items-center mr-2" >
                                        <FontAwesomeIcon icon={faUserShield} className="w-[60%] h-[60%]" />
                                    </div>
                                    <div className='w-2/3 flex flex-col'>
                                        <p className='font-bold'>
                                            Secure
                                        </p>
                                        <p className='font-light'>
                                            Prevent customers from revealing sensitive information over the phone, GDPR safe and tested
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <button className="w-60 inline-flex items-center justify-center 
                                            border rounded-3xl border-black mt-8 p-2 bg-green hover:text-white">
                                <p className="text-xl" >Register your interest</p>
                                <FontAwesomeIcon icon={faArrowRightLong} className="w-3 ml-2" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* LAST PART */}
            <div className="w-full h-fit" >
                <div className="w-full h-full grid">
                    <div className="w-full h-full flex flex-col">
                        <div
                            className='h-[500px] w-full flex items-center justify-end'
                            style={{
                                backgroundImage: `url(${Man})`,
                                backgroundPosition: 'center',
                                backgroundSize: 'cover',
                                backgroundRepeat: 'no-repeat'
                            }}>
                            <div className='w-1/4 h-3/5 bg-white rounded-lg mr-20 flex p-4 overflow-hidden font-light'>
                                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                                The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here,
                                content here', making it look like readable English.
                            </div>
                        </div>
                        <div className='h-[100px] w-full bg-orange'></div>
                    </div>
                </div>
            </div>
        </div>
    )
}