import React from 'react';
import { useForm } from 'react-hook-form';
import swal from 'sweetalert';

const CreatePost = () => {
    const { register, handleSubmit, reset } = useForm();
    // make hook form respons
    const onSubmit = data => {
        const formData = new FormData();
        if (!data.imgStatus) {
            return;
        }
        formData.append('userStatus', data.texStatus);
        formData.append('Image', data.imgStatus[0]);
        fetch('http://localhost:5000/status', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(result => {
                if (result) {
                    swal({
                        title: "Sign In successfull!",
                        icon: "success",
                    })
                }
            })
        reset()
    }
    return (
        <>
            <div className=' mt-10 w-96 mx-auto '>
                <div className="mt-5 md:mt-0">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="shadow sm:rounded-md sm:overflow-hidden">
                            <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
                                <div className="mt-1">
                                    <textarea
                                        id="about"
                                        name="about"
                                        rows={4}
                                        className="shadow-sm mt-1 block w-full sm:text-sm p-5 border border-gray-300 rounded-md "
                                        placeholder="Whats your mind ?"
                                        {...register("texStatus", { required: true })}
                                    />
                                </div>
                                <div>
                                    <div className="flex text-sm text-gray-600">
                                        <label
                                            htmlFor="file-upload"
                                            className="relative cursor-pointer bg-white font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none"
                                        >
                                            <input id="file-upload" accept='image/*' type="file" required {...register("imgStatus")} />
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="px-4 py-3 bg-gray-50 text-center sm:px-6">
                                <button
                                    type="submit"
                                    className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                >
                                    Post
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default CreatePost;