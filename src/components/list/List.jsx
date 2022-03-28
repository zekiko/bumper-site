import { useRef, useState, useEffect } from 'react'
import { connect } from 'react-redux'

function ListComponent({ list, ...props }) {
  const lastItemRef = useRef();
  const observer = useRef();
  const sliceNumber = 5;
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
    <div className="h-3/4	w-full grid stretch justify-items-center">
      <div className="w-[60%] text-white flex flex-col">
        <div className="w-full text-white flex font-bold text-3xl">
          <p>Interested Dealerships</p>
        </div>
        <div className="bg-white h-40 w-full my-8 rounded-3xl flex flex-col justify-center items-center">
          <div className="flex flex-row w-[90%] justify-start mb-0.5">
            <svg aria-hidden="true" focusable="false"  data-icon="building" className="svg-inline--fa fa-building fa-1x text-reverse-content mr-0.25 w-5 h-5" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
              <path className="fill-icon-orange" fill="currentColor" d="M336 0C362.5 0 384 21.49 384 48V464C384 490.5 362.5 512 336 512H240V432C240 405.5 218.5 384 192 384C165.5 384 144 405.5 144 432V512H48C21.49 512 0 490.5 0 464V48C0 21.49 21.49 0 48 0H336zM64 272C64 280.8 71.16 288 80 288H112C120.8 288 128 280.8 128 272V240C128 231.2 120.8 224 112 224H80C71.16 224 64 231.2 64 240V272zM176 224C167.2 224 160 231.2 160 240V272C160 280.8 167.2 288 176 288H208C216.8 288 224 280.8 224 272V240C224 231.2 216.8 224 208 224H176zM256 272C256 280.8 263.2 288 272 288H304C312.8 288 320 280.8 320 272V240C320 231.2 312.8 224 304 224H272C263.2 224 256 231.2 256 240V272zM80 96C71.16 96 64 103.2 64 112V144C64 152.8 71.16 160 80 160H112C120.8 160 128 152.8 128 144V112C128 103.2 120.8 96 112 96H80zM160 144C160 152.8 167.2 160 176 160H208C216.8 160 224 152.8 224 144V112C224 103.2 216.8 96 208 96H176C167.2 96 160 103.2 160 112V144zM272 96C263.2 96 256 103.2 256 112V144C256 152.8 263.2 160 272 160H304C312.8 160 320 152.8 320 144V112C320 103.2 312.8 96 304 96H272z">
              </path>
            </svg>
            <label
              className="block text-md font-bold text-black	 ml-1"
            >
              Search Company
            </label>
          </div>
          <input
            className={`bg-white text-black focus:outline-none focus:shadow-outline border border-black rounded-3xl py-2 px-4 block w-[90%] h-14 appearance-none leading-normal`}
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
              <div key={item.company + index} className="bg-white h-80 w-[60%] mb-4 rounded-3xl flex justify-center items-center">
                <div className='w-full m-6 divide-y-2'>
                  <div className="flex h-10 justify-between items-center w-full font-bold text-xl	mb-3">
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

                  <div />

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