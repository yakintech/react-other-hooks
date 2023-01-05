import React from 'react'
import UseUserDetail from './UseUserDetail';

function Content() {
    let { user, loading } = UseUserDetail({ name: 'codeacademyprogramming' });

    return (<>
        {
            loading == true ? <p>loading...</p> : <>  <h1>Company: {user.company}</h1>
                <h1>Location: {user.location}</h1></>
        }


    </>
    )

}

export default Content