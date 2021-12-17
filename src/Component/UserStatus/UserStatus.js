import React, { useEffect } from 'react';
import { useState } from 'react/cjs/react.development';
import UserStatusCard from './UserStatusCard';

const UserStatus = () => {
    const [status, setStatus] = useState([]);
    const [isloading, setIsLoading] = useState(true)

    useEffect(() => {
        fetch('http://localhost:5000/status')
            .then(res => res.json())
            .then(data => setStatus(data)
            )
    }, []);

    return (
        <>
            {
                status.length === 0 ? <p className='mt-32 text-3xl font-bold'>Loading.....</p> :

                    <section class="text-gray-600 body-font border-2">
                        {
                            status.map(stat => (
                                <UserStatusCard
                                    key={stat._id}
                                    userStatuss={stat}
                                ></UserStatusCard>
                            ))
                        }
                    </section>}
        </>
    );
};

export default UserStatus;