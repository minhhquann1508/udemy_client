import React, { memo, useEffect, useState } from 'react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { CourseItem } from '../components'
import { getAllCourseApi } from '../apis/course'

function ListCourses({ sort }) {
    const [listCourses, setListCourse] = useState(null);

    const fetchCourseApi = async () => {
        const response = await getAllCourseApi({ sort });
        if (response.status === 200) {
            setListCourse(response.data.courses);
        } else {
            setListCourse(null);
        }
    };

    useEffect(() => {
        fetchCourseApi();
    }, []);

    const renderCourses = () => {
        if (listCourses) {
            return listCourses.map((course) => (
                <SwiperSlide key={course._id}>
                    <CourseItem courseData={course} />
                </SwiperSlide>
            ))
        } else {
            return new Array(10).fill(null).map((el, index) => (
                <SwiperSlide key={index}>
                    <div>Loading...</div>
                </SwiperSlide>
            ))
        }
    };

    return (
        <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            slidesPerView={5}
            spaceBetween={25}
            slidesPerGroup={2}
            navigation
            breakpoints={{
                0: {
                    slidesPerView: 2
                },
                768: {
                    slidesPerView: 3
                },
                987: {
                    slidesPerView: 4
                },
                1240: {
                    slidesPerView: 5
                }
            }}
        >
            {renderCourses()}
        </Swiper>
    )
}

export default memo(ListCourses)
