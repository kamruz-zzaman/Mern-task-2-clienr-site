import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { useState } from 'react/cjs/react.development';
import swal from 'sweetalert';

const EditPost = () => {
    const { id } = useParams();
    const [specificPost, setSpecificPost] = useState([]);
    // fetching packages by id
    useEffect(() => {
        fetch(`http://localhost:5000/status/${id}`)
            .then(res => res.json())
            .then(data => setSpecificPost(data));
    }, []);
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {

        fetch(`http://localhost:5000/status/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => {
                // make response after post
                if (res.ok) {
                    swal({
                        title: "Status Update Successfully!",
                        icon: "success",
                    });
                    window.location.reload();
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
                                        placeholder="update status"
                                        {...register("texStatus", { required: true })}
                                        defaultValue={specificPost.userStatus}
                                    />
                                </div>
                                <img src={`data:image/png;base64,${specificPost.image}`} alt="" />
                            </div>
                            <div className="px-4 py-3 bg-gray-50 text-center sm:px-6">
                                <button
                                    type="submit"
                                    className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                >
                                    Update
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default EditPost;