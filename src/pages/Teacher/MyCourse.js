import React, { useEffect } from 'react'
import icons from '../../utils/icons'
import { useDispatch, useSelector } from 'react-redux'
import { getTeacherCoursesAction } from '../../store/actions/courses';
import { TeacherCourse } from '../../components';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

function MyCourse() {
    const { user } = useSelector((state) => state.authReducer);
    const { courses, isLoading } = useSelector((state) => state.teacherReducer);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getTeacherCoursesAction({ owner: user?.id }));
    }, []);

    const renderListCourse = () => {
        if (isLoading) {
            return new Array(5).fill(null).map((el, i) => (
                <div key={i}>
                    <Skeleton className='h-[200px] mb-3' />
                    {new Array(5).fill(null).map((el, index) => (
                        <Skeleton key={index} />
                    ))}
                </div>
            ))
        } else {
            return courses?.courses?.map((course) => (
                <TeacherCourse courseData={course} key={course._id} />
            ))
        }
    }

    const handleChangeSearch = (e) => {
        const { value } = e.target;
        if (value === '') {
            dispatch(getTeacherCoursesAction({ owner: user?.id }));
        } else {
            dispatch(getTeacherCoursesAction({ owner: user?.id, title: value }));
        }
    }

    return (
        <div>
            <h1 className='font-semibold text-[28px] mb-5'>Courses</h1>
            <div className='w-full flex justify-between items-center'>
                <form className='flex items-center border-2 border-main-black'>
                    <input onChange={handleChangeSearch} type="text" className='outline-none px-3' placeholder='Search your courses' />
                    <div className='bg-main-black flex justify-center cursor-pointer items-center h-full p-2.5 hover:bg-[#3e4143]'>
                        <button className='text-[18px] text-[#ffffff]'><icons.IoSearchSharp /></button>
                    </div>
                </form>
                <button className='p-2.5 bg-sub-purple hover:bg-main-purple text-[16px] font-bold text-[#ffffff]'>New course</button>
            </div>
            <div className='flex flex-col gap-5 mt-8'>
                {renderListCourse()}
            </div>
        </div>
    )
}

export default MyCourse