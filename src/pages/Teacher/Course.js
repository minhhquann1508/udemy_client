import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getSingleCourse } from '../../apis/course';
import { useFormik } from 'formik';
import icons from '../../utils/icons'

function Course() {
    const { courseId } = useParams();
    const [course, setCourse] = useState(null);

    const formik = useFormik({
        initialValues: {
            title: '',
            desc: '',
            subtitle: '',
            category: '',
            trailer: '',
            price: 0,
        }
    })

    const fetchCourseInfo = async () => {
        const response = await getSingleCourse(courseId);
        if (response.status === 200) {
            const { title, desc, subtitle, category, trailer, price } = response.data.course;
            formik.setFieldValue('title', title);
            formik.setFieldValue('desc', desc);
            formik.setFieldValue('subtitle', subtitle);
            formik.setFieldValue('category', category._id);
            formik.setFieldValue('trailer', trailer);
            formik.setFieldValue('price', price);
            setCourse(response.data.course);
        }
    };

    useEffect(() => {
        fetchCourseInfo()
    }, [courseId]);

    const renderInput = () => {
        const html = [];
        for (const key in formik.values) {
            if (key === 'category') {
                // html.push(<input key={key} type='text' value={formik.values[key]} onChange={formik.handleChange} />)
            } else {
                html.push(
                    <div key={key} className='w-full'>
                        <label className='capitalize block font-medium mb-2'>{key}</label>
                        <input className='border-2 w-full p-3 border-main-black' key={key} type='text' value={formik.values[key]} onChange={formik.handleChange} />
                    </div>
                )
            }
        }
        return html;
    }

    return (
        <div className='flex gap-10'>
            <div className='flex-3 flex flex-col items-center'>
                <img className='w-full border border-main-black' src={course?.thumbnail} alt="thumbnail" />
                <div className='flex gap-3 mt-3 text-[15px]'>
                    <span><span className='font-semibold'>Rating:</span> {course?.averangeRating.toFixed(1)}</span>
                    <span><span className='font-semibold'>Reviews:</span> {course?.numberOfReviews.toLocaleString()}</span>
                    <span><span className='font-semibold'>Views:</span> {course?.numberOfViews.toLocaleString()}</span>
                </div>
            </div>
            <div className='flex-7'>
                <form className='flex flex-col gap-3'>
                    {renderInput()}
                    <div className='flex justify-end mt-3'>
                        <button className='py-2.5 text-[16px] px-5 font-bold text-white bg-sub-purple hover:bg-main-purple'>Save</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Course