import React, { useEffect } from 'react';
import { useState } from 'react/cjs/react.development';
import UserStatusCard from './UserStatusCard';

const UserStatus = () => {
    const [status, setStatus] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/status')
            .then(res => res.json())
            .then(data => setStatus(data)
            )
    }, []);
    return (
        <>
            <section class="text-gray-600 body-font">
                {
                    status.map(stat => (
                        <UserStatusCard
                            key={stat._id}
                            userStatus={stat}
                        ></UserStatusCard>
                    ))
                }
            </section>
        </>
    );
};

export default UserStatus;