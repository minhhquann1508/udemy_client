import { useFormik } from 'formik';
import React, { useState } from 'react'
import { updateAvatar } from '../apis/user';
import Swal from 'sweetalert2';

function UpdateAvatar({ userData, closeModal, userFormik }) {
    const [userImage, setUserImage] = useState(userData.avatar || '');
    const formik = useFormik({
        initialValues: {
            file: '',
        },
        onSubmit: async (value) => {
            const formData = new FormData();
            formData.append('avatar', value.file);
            const response = await updateAvatar(formData);
            if (response.status === 200) {
                await Swal.fire({
                    title: "Thành công",
                    text: 'Cập nhật thành công',
                    icon: "success",
                    confirmButtonColor: '#5624d0',
                });
                await userFormik.setFieldValue('avatar', response.path);
                await closeModal();
                await window.location.reload();
            } else {
                await Swal.fire({
                    title: "Oops",
                    text: response.response.data.msg,
                    icon: "error",
                    confirmButtonColor: '#5624d0',
                });
            }
        }
    })

    const fileInputOnchange = (e) => {
        const file = e.target.files[0];
        setUserImage(URL.createObjectURL(file));
        formik.setFieldValue('file', file);
    }

    return (
        <form onSubmit={formik.handleSubmit}>
            <input type="file" className='mb-5' onChange={fileInputOnchange} />
            <img src={userImage} className='w-[100px] h-[100px] rounded-full' alt="avatar" />
            <div className='flex justify-end'>
                <button type='submit' className='bg-main-purple text-white p-2 font-semibold'>Update</button>
            </div>
        </form>
    )
}

export default UpdateAvatar