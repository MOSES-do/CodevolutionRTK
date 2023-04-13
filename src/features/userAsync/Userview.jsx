import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUsers } from './userSlice'
const Userview = () => {
    const dispatch = useDispatch()
    const { users, loading, error } = useSelector((state) => state.user)

    useEffect(() => {
        let mount = true;

        if (mount) {
            dispatch(fetchUsers())
        }

        return () => {
            console.log("Cleaned up")
            mount = false;
        }
    }, [])

    return (
        <React.Fragment>
            <h2>List of Users</h2>
            {loading && <div>Loading...</div>}
            {!loading && error ? <div>Error: {error}</div> : null}
            {!loading && users.length ? (
                <ul>
                    {users.map(user => (
                        <li style={{ listStyle: "none" }} key={user.id}>{user.username}</li>
                    ))}
                </ul>
            ) : null}
        </React.Fragment>
    )
}

export default Userview