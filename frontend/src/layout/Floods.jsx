import { Menu, Row, theme, Layout, Typography } from 'antd';
import React from 'react';
import {
  AppstoreOutlined,
  BarChartOutlined,
  CloudOutlined,
  ShopOutlined,
  TeamOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import flood_line from '../assets/flood_line.jpeg'
import Fdodont from '../components/Fdodont';

const { Title, Text } = Typography;

const { Header, Content, Footer, Sider } = Layout;
const items = [
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  BarChartOutlined,
  CloudOutlined,
  AppstoreOutlined,
  TeamOutlined,
  ShopOutlined,
].map((icon, index) => ({
  key: String(index + 1),
  icon: React.createElement(icon),
  label: `nav ${index + 1}`,
}));

// const items1 = ['1', '2', '3'].map((key) => ({
//   key,
//   label: `nav ${key}`,
// }));

const Floods = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <Layout hasSider>
    {/* <Header
        style={{
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <div className="demo-logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['2']}
          items={items1}
          style={{
            flex: 1,
            minWidth: 0,
          }}
        />
      </Header> */}
      <Sider
        style={{
          overflow: 'auto',
          height: '100vh',
          position: 'fixed',
          left: 0,
          top: 0,
          bottom: 0,
        }}
      >
        <div className="demo-logo-vertical" />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']} items={items} />
      </Sider>
      <Layout
        style={{
          marginLeft: 200,
        }}
      >
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        />
        <Content
          style={{
            margin: '24px 16px 0',
            overflow: 'initial',
          }}
        >
          <div
            style={{
            //   padding: 24,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
                         <Row style={{padding: '0% 5%'}}>
             <Title level={4}>Floods</Title>
             <Text>Floods are a recurrent phenomenon, which cause huge loss of lives and 
                damage to livelihood systems, property, infrastructure and public utilities. 
                It is a cause for concern that flood related damages show an increasing trend. 
                The average annual flood damage in the last 10 years period from 1996 to 2005 
                was Rs. 4745 crore as compared to Rs. 1805 crore, the corresponding average 
                for the previous 53 years. This can be attributed to many reasons including a 
                steep increase in population, rapid urbanization growing developmental and economic 
                activities in flood plains coupled with global warming.
            </Text>
              </Row>
            <Row justify={'center'}>
                <img src={flood_line} style={{width: '80%', padding: '3%'}}/>
            </Row>
            <Row style={{padding: '1% 5%'}}>
              <Fdodont/>
            </Row>
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
    </Layout>
  );
};
export default Floods;