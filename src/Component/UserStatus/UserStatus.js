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
    const handleDeletUser = (id) => {
        const delet = window.confirm('Are Your Sure For Delation?');
        if (delet) {
            fetch(`http://localhost:5000/status/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('delet successfully')
                        const remainingBooking = status.filter(booking => booking._id !== id)
                        setStatus(remainingBooking)
                    }
                })
        }
    }
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
                                    deletUser={handleDeletUser}
                                ></UserStatusCard>
                            ))
                        }
                    </section>}
        </>
    );
};

export default UserStatus;