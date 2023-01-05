import React, { forwardRef, useImperativeHandle, useRef } from 'react'

function ChildComp(props, ref) {

    const h1 = useRef(null)

    useImperativeHandle(
        ref,
        () => {
            return {
                name: 'Çağatay',
                changeHColor: () => {
                    h1.current.style.color = 'tomato';
                }
            }
        },
        [],
    )

    return (<>
        <h1 ref={h1}>Child Component</h1>
    </>
    )
}

export default forwardRef(ChildComp)