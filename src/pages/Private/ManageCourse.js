import React, { useEffect, useState } from 'react'
import { getAllCourseApi, deleteCourse } from '../../apis/course'
import notFoundCourse from '../../assets/not-found-course.jpg'
import icons from '../../utils/icons'
import Swal from 'sweetalert2';

function ManageCourse() {
    const [lstCourses, setLstCourses] = useState(null);

    const fetchListCourse = async () => {
        const response = await getAllCourseApi();
        if (response.status === 200) {
            setLstCourses(response.data.courses);
        }
    };

    const deletedCourse = async (courseId) => {
        const response = await deleteCourse(courseId);
        if (response.status === 200) {
            await Swal.fire({
                title: `Successfull`,
                icon: 'success',
            });
            await fetchListCourse();
        } else {
            await Swal.fire({
                title: `Oops ?`,
                icon: 'error',
                text: response.response.data.msg
            });
        }
    }

    useEffect(() => {
        fetchListCourse();
    }, []);

    const handleDeleteEvent = async (courseId) => {
        await Swal.fire({
            title: `Are you sure ?`,
            icon: 'question',
            showCancelButton: true,
            confirmButtonText: "Save",
            denyButtonText: `Don't save`
        }).then((result) => {
            if (result.isConfirmed) {
                deletedCourse(courseId)
            }
        });
    }

    const renderLstCourse = () => {
        if (lstCourses) {
            return lstCourses?.map((course) => (
                <tr key={course?._id} className="border-b border-opacity-20 dark:border-gray-700 dark:bg-gray-900">
                    <td className="p-3">
                        <img src={course?.thumbnail || notFoundCourse} className='w-8 h-8' alt="thumbnail" />
                    </td>
                    <td className="p-3">
                        <p className='line-clamp-1'>{course?.title}</p>
                    </td>
                    <td className="p-3">
                        <p className='line-clamp-1'>{course?.subtitle}</p>
                    </td>
                    <td className="p-3">
                        <p>{course?.averangeRating.toFixed(1)}</p>
                    </td>
                    <td className="p-3">
                        <p className='line-clamp-1'>{course?.owner.fullname}</p>
                    </td>
                    <td className="p-3">
                        <p>{course?.price.toLocaleString()}</p>
                    </td>
                    <td className="p-3 flex gap-2">
                        <button className='p-2 bg-blue-400 text-white hover:bg-blue-600'><icons.FaRegEdit /></button>
                        <button onClick={() => handleDeleteEvent(course?._id)} className='p-2 bg-red-500 text-white hover:bg-red-600'><icons.FaTrash /></button>
                    </td>
                </tr>
            ))
        }
    }

    return (
        <div className="container p-2 mx-auto sm:p-4 dark:text-gray-100">
            <h2 className="mb-4 text-2xl font-semibold">Manage courses</h2>
            <div className="overflow-x-auto">
                <table className="min-w-full text-xs">
                    <thead className="dark:bg-gray-700">
                        <tr className="text-left">
                            <th className="p-3">Thumbnail</th>
                            <th className="p-3">Title</th>
                            <th className="p-3">Subtitle</th>
                            <th className="p-3">Rating</th>
                            <th className="p-3">Owner</th>
                            <th className="p-3">Price</th>
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

export default ManageCourse