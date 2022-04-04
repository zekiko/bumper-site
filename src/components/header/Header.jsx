import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeftLong, faArrowRightLong } from '@fortawesome/free-solid-svg-icons'

function Header(props) {
    return (
        <div className="bg-transparent w-3/4 max-w-4xl rounded-3xl absolute top-20 z-10">
            <div className='flex justify-between'>
                <button onClick={props.handleHomePageClick}>
                    <FontAwesomeIcon icon={faArrowLeftLong} className="w-7 h-7" color="#fff" />
                </button>
                <button onClick={props.handleListPageClick}>
                    <FontAwesomeIcon icon={faArrowRightLong} className="w-7 h-7" color="#fff" />
                </button>
            </div>
            <p className="text-4xl font-bold text-white	mb-4">
                Join our network
            </p>
            <p className="text-md font-bold text-white	mb-4">
                Offer PayLater to split servicing and repair work into monthly instalments - interest-free.
                Use PayNow to take secure payments online
            </p>
        </div>
    )
}

export default Header
