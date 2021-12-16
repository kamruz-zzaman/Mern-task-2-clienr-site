import React from 'react';

const UserStatusCard = ({ userStatus }) => {
    const { texStatus, image } = userStatus;
    return (
        <>
            <div class="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
                <div class="text-center lg:w-2/3 w-full">
                    <p class="mb-8 leading-relaxed">{texStatus}</p>
                </div>
                {
                    image ? <><img class="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded" src={`data:image/png;base64,${image}`} />
                        <div class="flex justify-center">
                            <button class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Like</button>
                            <button class="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Comment</button>
                        </div></>
                        : <div class="flex justify-center">
                            <button class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Like</button>
                            <button class="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Comment</button>
                        </div>
                }

            </div>
        </>
    );
};

export default UserStatusCard;