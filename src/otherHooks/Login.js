import React, { forwardRef, useEffect, useImperativeHandle, useRef } from 'react'

function Login(props, ref) {

    let inputRef = useRef(null);

useImperativeHandle(
  ref,
  () => {
    return {
        focusInput : () => {
            inputRef.current.focus();
        },
        name: 'Çağatay',
        cities: ['Baku', 'İzmir'],
        hello: () => {
            alert('Hello !')
        }
    }
  },
  [],
)

  return (<>
        <input ref={inputRef} type='text' />
  </>)
}

export default forwardRef(Login)