import React from 'react';

const UserReturn = ({ userInfo }) => {
    const { userName, email, password } = userInfo;
    console.log(userInfo);
    return (
        <div>
            <p>{userName}</p>
        </div>
    );
};

export default UserReturn;