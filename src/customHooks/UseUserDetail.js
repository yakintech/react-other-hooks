import React, { useEffect, useState } from 'react'

function UseUserDetail({ name }) {

    const [user, setuser] = useState({});
    const [loading, setloading] = useState(false);

    useEffect(() => {
        fetch(`https://api.github.com/users/${name}`)
            .then(res => res.json())
            .then(data => {
                setuser(data);
                setloading(false);
            })
    }, [])
    return { user, loading }
}

export default UseUserDetail