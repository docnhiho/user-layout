import { Layout, Space } from 'antd';

import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import Headerr from '../Headerr/Headerr';
import Home from '../../Container/Home/index'


const { Header, Footer, Content } = Layout;
const headerStyle = {
    color: "black",
    height: 847,
    while: 1920,
    paddingInline: 50,
    lineHeight: '64px',
    backgroundColor: '#F0F0F0',
};
const contentStyle = {
    // textAlign: 'center',
    backgroundColor: 'white',
};

const footerStyle = {
    textAlign: 'center',
    color: '#fff',
    backgroundColor: '#7dbcea',
};


const PrimaryLayout = () => {
    return (
        <Layout>
            <Header style={headerStyle}>
                <Headerr></Headerr>
            </Header>
            <Content style={contentStyle}>
                {/* <Outlet></Outlet> */}
                <Home></Home>
            </Content>
            <Footer style={footerStyle}>Footer</Footer>
        </Layout>
    )


}
export default PrimaryLayout;
