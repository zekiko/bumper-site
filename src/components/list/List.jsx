import { useRef, useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBuilding } from '@fortawesome/free-solid-svg-icons'
import { SCROLL_ITEM_SIZE } from '../../utils/constants'

function ListComponent({ list, ...props }) {
  const lastItemRef = useRef();
  const observer = useRef();
  const sliceNumber = SCROLL_ITEM_SIZE;
  const [renderedList, setRenderedList] = useState(list.slice(0, sliceNumber));
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");

  useEffect(() => {
    setRenderedList(list.slice(0, renderedList.length))
  }, [list, search])

  useEffect(() => {
    const options = {
      root: document,
      rootMargin: "20px",
      threshold: 1
    };
    const callback = (entries) => {
      if (entries[0].isIntersecting && renderedList.length < list.length) {
        setRenderedList((arr) => [
          ...arr,
          ...list.slice(arr.length, (page + 1) * sliceNumber)
        ]);

        if (renderedList.length >= sliceNumber && Math.ceil(renderedList.length / sliceNumber) !== page) {
          setPage(Math.ceil(renderedList.length / sliceNumber));
        }
      }
    };
    observer.current = new IntersectionObserver(callback, options);
    if (lastItemRef.current) {
      observer.current.observe(lastItemRef.current);
    }
    return () => {
      observer.current.disconnect();
    };
  }, [renderedList]);

  const getLastElement = (index) => {
    return index === renderedList.length - 1
      ?
      <div key={index + "ref"} ref={lastItemRef}>
        {renderedList.length === list.length ? "No more item!" : "Loading..."}
      </div>
      : ""
  }

  const handleChange = (event) => {
    setSearch(event.target.value)
  }

  return (
    <div className="h-3/4	h-3/4 w-full max-w-screen-2xl grid stretch justify-items-center absolute top-20 z-10">
      <div className="w-[60%] text-white flex flex-col">
        <div className="w-full text-white flex font-bold text-3xl">
          <p>Interested Dealerships</p>
        </div>
        <div className="bg-white h-40 w-full my-8 rounded-3xl 
                      flex flex-col justify-center items-center">
          <div className="flex flex-row w-[90%] justify-start mb-0.5">
            <FontAwesomeIcon icon={faBuilding} className="w-5 h-5 ml-2" color="#ff733c" />
            <label
              className="block text-md font-bold text-black	 ml-1"
            >
              Search Company
            </label>
          </div>
          <input
            className={`bg-white text-black focus:outline-none focus:shadow-outline 
                    border border-black rounded-3xl py-2 px-4 block 
                    w-[90%] h-14 appearance-none leading-normal`}
            type="text"
            id="search"
            onChange={handleChange}
            value={search || ''}
            name="search"
            placeholder="Start typing name, company, phone or email for search"
          />
        </div >
      </div>

      <div className="h-full	w-full overflow-y-auto grid stretch justify-items-center">
        {renderedList.length > 0 ?
          renderedList.map((item, index) => {
            if (!item.company.includes(search)) {
              return false;
            }

            return (
              <div
                key={item.company + index}
                className="bg-white h-80 w-[60%] mb-4 rounded-3xl flex 
                        justify-center items-center">
                <div className='w-full m-6 divide-y-2'>
                  <div className="flex h-10 justify-between 
                                items-center w-full font-bold text-xl	mb-3">
                    <p>{item.name}</p>
                  </div>

                  <div className="flex h-10 justify-between items-center w-full">
                    <p className='font-bold text-sm'>Company</p>
                    <p>{item.company}</p>
                  </div>

                  <div className="flex h-10 justify-between items-center w-full">
                    <p className='font-bold text-sm'>Mobile phone number</p>
                    <p>{item.mobile_phone}</p>
                  </div>

                  <div className="flex h-10 justify-between items-center w-full">
                    <p className='font-bold text-sm'>Email address</p>
                    <p>{item.email_address}</p>
                  </div>

                  <div className="flex h-10 justify-between items-center w-full">
                    <p className='font-bold text-sm'>Postcode</p>
                    <p>{item.postcode}</p>
                  </div>
                  {getLastElement(index)}
                </div>
              </div >
            );
          })
          :
          <div ref={lastItemRef}></div>
        }
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  list: state.appReducer.valueList,
})

const mapDispatchToProps = dispatch => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(ListComponent)