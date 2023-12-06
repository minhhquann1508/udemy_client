import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { path } from './utils/path';
import { Public, Course, Courses, Home, Login, Register, Info, Profile, NotFound, About, Search } from './pages/Public';
import { Teacher, AllReviews, MyCourse, TeacherCourse } from './pages/Teacher';
import { Private, ManageCourse, ManageUser, ManageCategory } from './pages/Private';
import { useDispatch } from 'react-redux';
import { getCourseCategoriesAction } from './store/actions/categories';

function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCourseCategoriesAction())
  }, []);

  return (
    <div className="min-h-screen overflow-y-auto font-main">
      <Routes>
        <Route path={path.public} element={<Public />}>
          <Route path={path.home} element={<Home />} />
          <Route path={path.course} element={<Course />} />
          <Route path={path.courses} element={<Courses />} />
          <Route path={path.login} element={<Login />} />
          <Route path={path.register} element={<Register />} />
          <Route path={path.info} element={<Info />} />
          <Route path={path.profile} element={<Profile />} />
          <Route path={path.about} element={<About />} />
          <Route path={path.search} element={<Search />} />
          <Route path='*' element={<NotFound />} />
        </Route>
        <Route path={path.teach} element={<Teacher />} >
          <Route path={path.allReview} element={<AllReviews />} />
          <Route path={path.myCourse} element={<MyCourse />} />
          <Route path={path.course} element={<TeacherCourse />} />
        </Route>
        <Route path={path.admin} element={<Private />} >
          <Route path={path.manageCourse} element={<ManageCourse />} />
          <Route path={path.manageUser} element={<ManageUser />} />
          <Route path={path.manageCategory} element={<ManageCategory />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
