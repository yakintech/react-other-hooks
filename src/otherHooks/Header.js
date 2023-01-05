import React, { useRef } from 'react'

function Header({inputId}) {


    const focusInput = () => {
        document.getElementById(inputId).focus();
    }

    return (<>
   
        <button onClick={() => focusInput()}>Focus</button>
    </>
    )
}

export default Header