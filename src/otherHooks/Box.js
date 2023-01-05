import React, { useRef } from 'react'
import Login from './Login'

function Box() {

    let inputRef = useRef(null);
    let h1Ref = useRef(null);

    const test = () => {
        console.log(inputRef.current.cities);
        // inputRef.current.hello();
        h1Ref.current.innerHTML = inputRef.current.cities.length
    }

  return (<>
    <Login ref={inputRef}/>
    <h1 ref={h1Ref}>0</h1>
    <button onClick={() => test()}>Test</button>
  </>
  )
}

export default Box