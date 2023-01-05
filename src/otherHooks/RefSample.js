import React, { useRef } from 'react'
import ChildComp from './ChildComp';

function RefSample() {

    let h1Ref = useRef();

    const changeChild = () => {

        h1Ref.current.changeHColor();

    }   

  return (<>
    <button onClick={() => changeChild()}>Change Child Component</button>
    <ChildComp ref={h1Ref}/>
  </>)
}

export default RefSample