import React, { useEffect, useState } from 'react'
import { getAllUser } from '../../apis/user'
import notFoundCourse from '../../assets/not-found-course.jpg'
import icons from '../../utils/icons'
import Swal from 'sweetalert2';

function ManageUser() {
    const [lstUsers, setLstUsers] = useState(null);

    const fetchListUser = async () => {
        const response = await getAllUser();
        if (response.status === 200) {
            setLstUsers(response.data.users);
        }
    };

    useEffect(() => {
        fetchListUser();
    }, []);

    const handleDeleteEvent = async (courseId) => {
        // await Swal.fire({
        //     title: `Are you sure ?`,
        //     icon: 'question',
        //     showCancelButton: true,
        //     confirmButtonText: "Save",
        //     denyButtonText: `Don't save`
        // }).then((result) => {
        //     if (result.isConfirmed) {
        //         deletedCourse(courseId)
        //     }
        // });
    }

    const renderLstCourse = () => {
        if (lstUsers) {
            return lstUsers?.map((user) => (
                <tr key={user?._id} className="border-b border-opacity-20 dark:border-gray-700 dark:bg-gray-900">
                    <td className="p-3">
                        <img src={user?.avatar || notFoundCourse} className='w-8 h-8' alt="thumbnail" />
                    </td>
                    <td className="p-3">
                        <p className='line-clamp-1'>{user?.fullname}</p>
                    </td>
                    <td className="p-3">
                        <p className='line-clamp-1'>{user?.email}</p>
                    </td>
                    <td className="p-3">
                        <p>{user?.gender ? 'Male' : 'Female'}</p>
                    </td>
                    <td className="p-3">
                        <p className='line-clamp-1'>{user?.phone}</p>
                    </td>
                    <td className="p-3">
                        <p className='line-clamp-1 capitalize'>{user?.role}</p>
                    </td>
                    <td className="p-3 flex gap-2">
                        <button className='p-2 bg-blue-400 text-white hover:bg-blue-600'><icons.FaRegEdit /></button>
                        <button onClick={() => handleDeleteEvent(user?._id)} className='p-2 bg-red-500 text-white hover:bg-red-600'><icons.FaTrash /></button>
                    </td>
                </tr>
            ))
        }
    }

    return (
        <div className="container p-2 mx-auto sm:p-4 dark:text-gray-100">
            <h2 className="mb-4 text-2xl font-semibold leadi">Manage users</h2>
            <div className="overflow-x-auto">
                <table className="min-w-full text-xs">
                    <thead className="dark:bg-gray-700">
                        <tr className="text-left">
                            <th className="p-3">Avatar</th>
                            <th className="p-3">Fullname</th>
                            <th className="p-3">Email</th>
                            <th className="p-3">Gender</th>
                            <th className="p-3">Phone</th>
                            <th className="p-3">Role</th>
                            <th className="p-3">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {renderLstCourse()}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default ManageUser