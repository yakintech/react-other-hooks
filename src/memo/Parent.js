import React, { useState } from 'react'
import Child from './Child'

function Parent() {

    const [counter, setcounter] = useState(0);


    return (<>
        <h1>Counter: {counter}</h1>
        <button onClick={() => setcounter(counter + 1)}>Increase</button>
        <Child title='Çağatay'/>
    </>
    )
}

export default Parent