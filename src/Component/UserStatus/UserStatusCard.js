import React from 'react';
import { Menu, Transition } from '@headlessui/react'
import { Link } from 'react-router-dom';

const UserStatusCard = ({ userStatus }) => {
    const { _id, texStatus, image } = userStatus;
    return (
        <>
            <div class="container mx-auto flex px-5 py-24 items-center justify-center flex-col border-2">

                <div class="text-center lg:w-2/3 w-full">
                    <p class="mb-8 leading-relaxed">{texStatus}</p>
                </div>
                {
                    image ? <><img class="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded" alt='' src={`data:image/png;base64,${image}`} />
                        <div class="flex justify-center">
                            <button class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Like</button>
                            <button class="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg mr-5">Comment</button>
                            <div className='flex justify-end'>
                                <Menu as="div" className="relative inline-block text-left">
                                    <div>
                                        <Menu.Button className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500">
                                            ...
                                        </Menu.Button>
                                    </div>

                                    <Transition
                                        // as={Fragment}
                                        enter="transition ease-out duration-100"
                                        enterFrom="transform opacity-0 scale-95"
                                        enterTo="transform opacity-100 scale-100"
                                        leave="transition ease-in duration-75"
                                        leaveFrom="transform opacity-100 scale-100"
                                        leaveTo="transform opacity-0 scale-95"
                                    >
                                        <Menu.Items className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                                            <div className="py-1">
                                                <Menu.Item>
                                                    {({ active }) => (
                                                        <Link
                                                            to={`/status/${_id}`}
                                                            className='block text-center font-bold hover:bg-violet-600 hover:text-white'
                                                        >
                                                            Edit Post
                                                        </Link>
                                                    )}
                                                </Menu.Item>
                                                <Menu.Item>
                                                    {({ active }) => (
                                                        <Link
                                                            to=""
                                                            className='block text-center font-bold hover:bg-violet-600 hover:text-white'
                                                        >
                                                            Delet Post
                                                        </Link>
                                                    )}
                                                </Menu.Item>
                                            </div>
                                        </Menu.Items>
                                    </Transition>
                                </Menu>
                            </div>
                        </div></>
                        : <div class="flex justify-center">
                            <button class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Like</button>
                            <button class="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg mr-5">Comment</button>
                            <Menu as="div" className="relative inline-block text-left">
                                <div>
                                    <Menu.Button className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500">
                                        ...
                                    </Menu.Button>
                                </div>

                                <Transition
                                    // as={Fragment}
                                    enter="transition ease-out duration-100"
                                    enterFrom="transform opacity-0 scale-95"
                                    enterTo="transform opacity-100 scale-100"
                                    leave="transition ease-in duration-75"
                                    leaveFrom="transform opacity-100 scale-100"
                                    leaveTo="transform opacity-0 scale-95"
                                >
                                    <Menu.Items className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none ">
                                        <div className="py-1">
                                            <Menu.Item>
                                                {({ active }) => (
                                                    <Link
                                                        to={`/status/${_id}`}
                                                        className='block text-center font-bold hover:bg-violet-600 hover:text-white'
                                                    >
                                                        Edit Post
                                                    </Link>
                                                )}
                                            </Menu.Item>
                                            <Menu.Item>
                                                {({ active }) => (
                                                    <Link
                                                        to=""
                                                        className='block text-center font-bold hover:bg-violet-600 hover:text-white'
                                                    >
                                                        Delet Post
                                                    </Link>
                                                )}
                                            </Menu.Item>
                                        </div>
                                    </Menu.Items>
                                </Transition>
                            </Menu>
                        </div>


                }

            </div>
        </>
    );
};

export default UserStatusCard;