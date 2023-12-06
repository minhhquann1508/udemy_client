import React, { useState } from 'react';
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
} from '@ant-design/icons';
import { Layout, Menu, Button, theme } from 'antd';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import icons from '../../utils/icons';
const { Header, Sider, Content } = Layout;

const item = [
    {
        key: 'manage-course',
        icon: <icons.FaVideo />,
        label: 'Courses',
    },
    {
        key: 'manage-user',
        icon: <icons.FaUserCircle />,
        label: 'Users',
    },
    {
        key: 'manage-category',
        icon: <icons.BiCategory />,
        label: 'Category',
    },
]

const Private = () => {
    const [collapsed, setCollapsed] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();
    const path = location.pathname.split('/')[2]
    const {
        token: { colorBgContainer },
    } = theme.useToken();
    return (
        <Layout>
            <Sider trigger={null} className='bg-main-black' collapsible collapsed={collapsed}>
                <div className="demo-logo-vertical" />
                <Menu
                    className='bg-main-black text-[#ffffff] font-bold text-[16px]'
                    defaultSelectedKeys={[path]}
                    items={item}
                    onClick={({ key }) => navigate(`${key}`)}
                />
            </Sider>
            <Layout>
                <Header
                    style={{
                        padding: 0,
                        background: colorBgContainer,
                    }}
                >
                    <Button
                        type="text"
                        icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                        onClick={() => setCollapsed(!collapsed)}
                        style={{
                            fontSize: '16px',
                            width: 64,
                            height: 64,
                        }}
                    />
                </Header>
                <Content
                    style={{
                        margin: '24px 16px',
                        padding: 24,
                        minHeight: 700,
                        background: colorBgContainer,
                    }}
                >
                    <Outlet />
                </Content>
            </Layout>
        </Layout>
    );
};
export default Private;