import moment from 'moment';
import React from 'react'
import { useSelector } from 'react-redux'
import icons from '../../utils/icons'

function ManageCategory() {
    const { categories } = useSelector((state) => state.categoriesReducer);

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

    const renderCategory = () => {
        if (categories) {
            return categories?.map((category) => (
                <tr key={category?._id} className="border-b border-opacity-20 dark:border-gray-700 dark:bg-gray-900">
                    <td className="p-3">
                        <p className='line-clamp-1'>{category?.title}</p>
                    </td>
                    <td className="p-3">
                        <p className='line-clamp-1'>{moment(category?.createdAt).format('DD/MM/YYYY')}</p>
                    </td>
                    <td className="p-3">
                        <p className='line-clamp-1'>{moment(category?.updatedAt).format('DD/MM/YYYY')}</p>
                    </td>
                    <td className="p-3 flex gap-2">
                        <button className='p-2 bg-blue-400 text-white hover:bg-blue-600'><icons.FaRegEdit /></button>
                        <button onClick={() => handleDeleteEvent(category?._id)} className='p-2 bg-red-500 text-white hover:bg-red-600'><icons.FaTrash /></button>
                    </td>
                </tr>
            ))
        }
    }

    return (
        <div>
            <h2 className="mb-4 text-2xl font-semibold">Manage category</h2>
            <div className="overflow-x-auto">
                <table className="min-w-full text-xs">
                    <thead className="dark:bg-gray-700">
                        <tr className="text-left">
                            <th className="p-3">Title</th>
                            <th className="p-3">Created date</th>
                            <th className="p-3">Last update</th>
                            <th className="p-3">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {renderCategory()}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default ManageCategory