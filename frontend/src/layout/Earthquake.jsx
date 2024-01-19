import { Menu, Row, theme, Layout, Typography } from 'antd';
import SeismicActivityGraphs from '../components/SeismicActivityGraphs';
import Eqdodont from '../components/Eqdodont';
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
const { Title, Text } = Typography;

const { Header, Content, Footer, Sider } = Layout;
const items = [
  {
    key: '1',
    label: 'Earthquake'
  },
  {
    key: '2',
    label: 'Floods'
  }
]

// const items1 = ['1', '2', '3'].map((key) => ({
//   key,
//   label: `nav ${key}`,
// }));

const Earthquake = () => {
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
              padding: 24,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
                         <Row style={{padding: '0% 5%'}}>
             <Title level={4}>Earthquake</Title>
             <Text>An earthquake is a phenomenon that occurs without warning and 
                involves violent shaking of the ground and everything over it. 
                It results from the release of accumulated stress of the moving 
                lithospheric or crustal plates. The earth's crust is divided into seven major plates, that are about 50 miles thick, which move slowly and continuously over the earth's interior and several minor plates. Earthquakes are tectonic in origin; that is the moving plates are responsible for the occurrence of violent shakes. The occurrence of an earthquake in a populated area may cause numerous casualties and injuries as well as extensive damage to property.</Text>
              </Row>
            <SeismicActivityGraphs />
            <Row style={{padding: '1% 5%'}}>
              <Eqdodont/>
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
export default Earthquake;