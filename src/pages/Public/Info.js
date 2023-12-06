import React, { memo, useEffect, useState } from 'react'
import { getUserInfo, updateUser } from '../../apis/user'
import { useFormik } from 'formik';
import notFoundUserImg from '../../assets/notfound_user.jpg';
import icons from '../../utils/icons';
import { useNavigate, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import { Modal } from 'antd';
import { UpdateAvatar } from '../../components'
import { logout } from '../../utils/fn';
import { updateInfoUser } from '../../utils/validation';

function Info() {
    const { userId } = useParams();
    const navigate = useNavigate();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleOk = () => {
        setIsModalOpen(false);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const fetchCurrentUserInfo = async () => {
        const response = await getUserInfo();
        if (response.status === 200) {
            const { fullname, email, phone, gender, desc, avatar, facebook, website, linkdedin, youtube, twiter } = response.data.user;
            formik.setFieldValue('fullname', fullname);
            formik.setFieldValue('email', email);
            formik.setFieldValue('phone', phone);
            formik.setFieldValue('gender', gender);
            formik.setFieldValue('desc', desc || '');
            formik.setFieldValue('avatar', avatar || '');
            formik.setFieldValue('facebook', facebook || '');
            formik.setFieldValue('website', website || '');
            formik.setFieldValue('youtube', youtube || '');
            formik.setFieldValue('linkdedin', linkdedin || '');
            formik.setFieldValue('twiter', twiter || '');
        }
    }

    const formik = useFormik({
        initialValues: {
            fullname: '',
            email: '',
            desc: '',
            phone: '',
            gender: true,
            avatar: '',
            facebook: '',
            website: '',
            youtube: '',
            linkdedin: '',
            twiter: '',
        },
        validationSchema: updateInfoUser,
        onSubmit: async (value) => {
            const response = await updateUser(userId, value);
            if (response.status === 200) {
                await Swal.fire({
                    title: "Thành công",
                    text: 'Cập nhật thành công',
                    icon: "success",
                    confirmButtonColor: '#5624d0',
                });
            } else {
                await Swal.fire({
                    title: "Opps",
                    text: response.response.data.msg,
                    icon: "error",
                    confirmButtonColor: '#5624d0',
                });
            }
        }
    })

    const renderInput = () => {
        const html = [];
        for (const key in formik.values) {
            if (key !== 'avatar') {
                if (key === 'gender') {
                    html.push(<select key={key} name='gender' onChange={formik.handleChange} className='border p-3 border-black'>
                        <option value={formik.values[key]} className='p-3'>{formik.values[key] ? 'Male' : 'Female'}</option>
                        <option value={!formik.values[key]} className='p-3'>{!formik.values[key] ? 'Male' : 'Female'}</option>
                    </select>);
                }
                else if (key === 'email') {
                    html.push(
                        <div key={key} className='w-full'>
                            <input type="text" disabled={true} value={formik.values[key]} name={key} onChange={formik.handleChange} placeholder={`${key}`} className='cursor-not-allowed w-full border border-main-black p-3' />
                            <p className={`${(formik.errors && formik.touched[key]) ? 'block text-red-500 text-[13px]' : 'hidden'}`}>{formik.errors[key]}</p>
                        </div>
                    )
                }
                else {
                    html.push(
                        <div key={key} className='w-full'>
                            <input type="text" value={formik.values[key]} name={key} onChange={formik.handleChange} placeholder={`${key}`} className='w-full border border-main-black p-3' />
                            <p className={`${(formik.errors && formik.touched[key]) ? 'block text-red-500 text-[13px]' : 'hidden'}`}>{formik.errors[key]}</p>
                        </div>
                    )
                }
            }
        }
        return html;
    }

    useEffect(() => {
        fetchCurrentUserInfo();
    }, []);

    return (
        <>
            <Modal title="Cập nhật hình ảnh" footer={false} open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                <UpdateAvatar userData={formik.values} closeModal={handleCancel} userFormik={formik} />
            </Modal>
            <div className='flex justify-center py-10'>
                <div className='w-[90%] md:w-[70%] flex flex-col md:flex-row border'>
                    <div className='flex-3 border-r'>
                        <div className='flex flex-col items-center gap-3 p-5 mb-5'>
                            <div className='flex flex-col items-center'>
                                <img onClick={showModal} className='border border-main-purple cursor-pointer w-[130px] h-[130px] rounded-full' src={formik.values.avatar || notFoundUserImg} alt="avatar" />
                            </div>
                            <h6 className='font-bold text-[15px]'>{formik.values.fullname}</h6>
                        </div>
                        <ul className='flex flex-col'>
                            <li className='w-full p-2 hover:bg-gray-500 cursor-pointer hover:text-[#ffffff] font-semibold flex justify-center md:justify-normal items-center gap-3'><span><icons.FaKey /></span> <span>Change password</span></li>
                            <li className='w-full p-2 hover:bg-gray-500 cursor-pointer hover:text-[#ffffff] font-semibold flex justify-center md:justify-normal items-center gap-3'><span><icons.FaDiscourse /></span> <span>Your courses</span></li>
                            <li onClick={() => logout(navigate)} className='w-full p-2 hover:bg-gray-500 cursor-pointer hover:text-[#ffffff] font-semibold flex justify-center md:justify-normal items-center gap-3'><span><icons.ImExit /></span> <span>Logout</span></li>
                        </ul>
                    </div>
                    <div className='flex-7'>
                        <div className='text-center p-5 border-b'>
                            <h3 className='font-extrabold text-[17px]'>Public profile</h3>
                            <p className='text-[15px]'>Add information about yourself</p>
                        </div>
                        <form onSubmit={formik.handleSubmit} className='flex flex-col gap-5 m-8'>
                            {renderInput()}
                            <div>
                                <button type='submit' className='bg-main-black font-bold text-[#FFFFFF] px-5 py-2.5 hover:bg-black'>Save</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>

    )
}

export default memo(Info)