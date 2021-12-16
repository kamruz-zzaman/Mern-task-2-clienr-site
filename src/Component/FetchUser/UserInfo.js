import React, { useEffect, useState } from 'react';
import UserReturn from './UserReturn';

const UserInfo = () => {
    const [user, setUser] = useState([]);
    const [userr, setUserr] = useState({});
    useEffect(() => {
        fetch('http://localhost:5000/user')
            .then(res => res.json())
            .then(data => setUser(data))
    }, []);
    // console.log(user);
    let userData;
    user.map(userInfo => userData = userInfo)
    console.log(userData);
    return (
        <div>
        </div>
    );
};

export default UserInfo;