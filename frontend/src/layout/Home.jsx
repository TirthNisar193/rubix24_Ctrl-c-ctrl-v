import { Breadcrumb, Layout, Menu, theme } from 'antd';
import { useState } from 'react';
import './Home.css'
import Hero from './Hero';

const { Header, Content, Footer } = Layout;

const items = [
    {
      label: 'Home',
      key: 'home',
    },
    {
      label: 'Navigation Two',
      key: 'app',
    },
    {
        label: (
          <a href="/seismic"  rel="noopener noreferrer">
            Seismic Activity
          </a>
        ),
        key: 'alipay',
      },
    ];

const Home = () => {
    const [current, setCurrent] = useState('mail');
  const onClick = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
  };

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout>
      <Header
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 1,
          width: '100%',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <div className="demo-logo" />
        <Menu
          theme="dark"
          onClick={onClick} 
          selectedKeys={[current]} 
          mode="horizontal" 
          items={items}
          style={{
            flex: 1,
            minWidth: 0,
          }}
        />
      </Header>
      <Content
        style={{
          padding: '0 48px',
        }}
      >
        <Breadcrumb
          style={{
            margin: '16px 0',
          }}
        >
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <div
          style={{
            minHeight: 380,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          <Hero/>
        </div>
      </Content>
      <Footer
        style={{
          textAlign: 'center',
        }}
      >
        Ant Design ©{new Date().getFullYear()} Created by Ant UED
      </Footer>
    </Layout>
  );
};
export default Home;