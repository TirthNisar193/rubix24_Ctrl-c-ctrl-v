import { Menu, Row, theme, Layout, Typography } from 'antd';
import React from 'react';
import flood_line from '../assets/flood_line.jpeg'
import Fdodont from '../components/Fdodont';
import Earthquake from './Earthquake';
import { Link } from 'react-router-dom';

const { Title, Text } = Typography;

const { Header, Content, Footer, Sider } = Layout;

const items = [
    {
      key: '1',
      label: 'Earthquake',
    },
    {
      key: '2',
      label: 'Floods'
    },
    {
        key: '3',
        label: 'Cyclone'
    },
    {
        key: '4',
        label: 'Tsunami'
    },
    {
        key: '5',
        label: 'Cloudburst'
      }
]

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
        <h1 style={{color: '#ffffff', alignSelf: 'center'}}>DisasterGuard</h1>
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['2']} items={items}>
        {items.map(item => (
          <Menu.Item key={item.key}>
            <Link to={`/${item.label.toLowerCase()}`}>{item.label}</Link>
          </Menu.Item>
        ))}
        </Menu>
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