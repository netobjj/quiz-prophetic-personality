import React from 'react';
import MainHome from './MainHome';

import { Layout, theme } from 'antd';
const { Content } = Layout;


const HomePage = props => {
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();

    return (
        <Layout>
            
            <Content
                style={{
                    marginTop: '1%',
                    padding: '0 48px',
                    paddingTop: '64px'
                }}
            >
                <div
                    style={{
                        background: colorBgContainer,
                        minHeight: 280,
                        padding: 20,
                        borderRadius: borderRadiusLG,
                    }}
                >
                   <MainHome />
                </div>
            </Content>
            <div style={{ height: '600px', alignSelf: 'flex-end'}} className="div-temporary">
                    div-temporary HomePage
            </div>
        </Layout>
    );
}

export default HomePage;