import React from 'react';
import { useForm } from 'react-hook-form';
import UserInfo from '../FetchUser/UserInfo';
import swal from 'sweetalert';


const SignIn = () => {
    const { register, handleSubmit, reset } = useForm();
    // make hook form respons
    const onSubmit = data => {
        fetch('http://localhost:5000/userr', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => {
                console.log(res);
                // make response after post
                if (res.ok) {
                    swal({
                        title: "Sign In successfull!",
                        icon: "success",
                    });
                }
                else {
                    swal({
                        title: "UserName or Password don't match",
                        icon: "warning",
                    });
                }
            })
        reset()
    }
    return (
        <>
            <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-md w-full space-y-8">
                    <div>
                        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                            Sign In
                        </h2>
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)} className="mt-8 space-y-6 ">
                        <input type="hidden" name="remember" value="true" />
                        <div className="rounded-md shadow-sm -space-y-px">
                            <div>
                                <label for="email-address" className="sr-only">Email address</label>
                                <input id="email-address" name="text" type="text" autocomplete="current" {...register("userName", { required: true })} className="appearance-none rounded-none relative block w-full my-1 px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder=" Username" />
                            </div>
                            <div>
                                <label for="email-address" className="sr-only">Email address</label>
                                <input id="email-address" name="password" type="password" autocomplete="current-password" {...register("pass", { required: true })} className="appearance-none rounded-none relative block w-full my-1 px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Password" />
                            </div>
                        </div>

                        <div className="flex items-center justify-end">

                            <div className="text-sm">
                                <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                                    Forgot your password?
                                </a>
                            </div>
                        </div>

                        <div>
                            <button type="submit" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                                    {/* <!-- Heroicon name: solid/lock-closed --> */}
                                    <svg className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                        <path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd" />
                                    </svg>
                                </span>
                                Sign In
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            <UserInfo></UserInfo>

        </>
    );
};

export default SignIn;