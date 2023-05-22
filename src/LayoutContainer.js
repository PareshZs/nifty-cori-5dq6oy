import React from 'react'
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import ContentContainer from './ContentContainer'
const { Header, Content, Footer } = Layout;
const LayoutContainer = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout className="layout">
      <Header
        style={{
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <div className="demo-logo" />
        {/* <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['2']}
          items={new Array(15).fill(null).map((_, index) => {
            const key = index + 1;
            return {
              key,
              label: `nav ${key}`,
            };
          })} */}
        {/* /> */}
      </Header>
      <Content
        style={{
          padding: '50px',
          height:'1080px'
        }}
      >
        <div
          className="site-layout-content"
          style={{
            background: colorBgContainer,
          }}
        >
          <ContentContainer/>
        </div>
      </Content>
      <Footer
        style={{
          textAlign: 'center',
        }}
      >
        POC @ZS
      </Footer>
    </Layout>
  );
};
export default LayoutContainer;
