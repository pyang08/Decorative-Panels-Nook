import React, { Component } from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from './components/main';
import { Link } from 'react-router-dom';
import FooterPage from './components/footerpage';



class App extends Component {
  render() {
    return (
      <div className="demo-big-content">
    <Layout>
        <Header className="header-color" title="Title" scroll>
            <Navigation>
                <Link to="/about">About</Link>
                <a href="http://localhost:5000">products1</a>
                <Link to="/contact">Contact</Link>
                <Link to="/signin">Sign in</Link>
            </Navigation>
        </Header>
        <Drawer title="Title">
            <Navigation>
            <Link to="/about">About</Link>
            <Link to="/products">products</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/signin">Sign in</Link>
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" />
            <Main/>
            
        </Content>
        <FooterPage/>
    </Layout>
</div> 
    );
  }
}

export default App;
