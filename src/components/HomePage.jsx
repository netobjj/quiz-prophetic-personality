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
            
                <footer className="bg-gray-100 text-center text-gray-700 text-sm footer justify-center align-middle h-[200px] p-[20px] m-[20px]">
                    Feito por{" "}
                    <a
                        href="https://www.instagram.com/neto.euclides_/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 hover:underline"
                    >
                        Neto
                    </a>
                </footer>
        </Layout>
    );
}

export default HomePage;