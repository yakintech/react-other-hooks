import React from 'react'
import UseUserDetail from './UseUserDetail'

function SiteHeader() {

    let { user, loading } = UseUserDetail({ name: 'yakintech' });

    return (<>
        {
            loading == true ? <p>loading...</p> : <>  <h1>Company: {user.company}</h1>
                <h1>Location: {user.location}</h1></>
        }
    </>
    )
}

export default SiteHeader