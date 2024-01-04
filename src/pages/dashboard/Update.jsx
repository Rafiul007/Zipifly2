import React, { useState } from 'react'
import Login from '../login/Login'
import Dashboard from './Dashboard'
function Update() {
    const [token, setToken] = useState(null)
    return (
        <div>
            {!token ? (
                <Login setToken={setToken} />
            ) : (
                <Dashboard token={token} />
            )
            }
        </div>
    )
}

export default Update