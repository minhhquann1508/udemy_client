import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { path } from './utils/path';
import { Public, Course, Courses, Home, Login, Register } from './pages/Public';
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
        </Route>
      </Routes>
    </div>
  );
}

export default App;
