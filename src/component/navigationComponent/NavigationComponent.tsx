import React, { Component } from "react";
import ReactDOM from 'react-dom';
import { Navbar, Nav } from 'react-bootstrap';
import CreateBlogComponent from "../commonComponent/BlogComponent/CreateBlogComponent";
import SuggestionBlogComponent from '../userComponent/blogComponent/suggestionBlogComponent/SuggestionBlogComponent';
import BlogViewComponent from "../commonComponent/BlogComponent/BlogViewComponent";
import styled from 'styled-components';
import logo from "../../asset/internity_logo.png";
import UserViewComponent from "../userComponent/blogComponent/UserViewComponent";
import {FaChevronLeft, FaChevronRight} from 'react-icons/fa';

const Styles = styled.div`
  @media (min-width: 994px) {
/* margin-top:-50px;margin-left:-30px; */
/* background-color: #172451; position:fixed;width:83%; */
  }
  .navbar { background-color: #2C3E50; color: white;}
  a, .navbar-nav, .navbar-light .nav-link {
    color: #fff;
    &:hover { color: #1f0; }
  }
  .navbar-brand {
    font-size: 1.4em;
    color: #fff;
    &:hover { color: white; }
  }
`;

export interface Props { 
ClickHandler:()=>void;
show:boolean;
}

export interface State { }
class NavigationComponent extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Styles>
        <Navbar variant="light">
        <Navbar.Brand><p /*className='icon'*/ onClick={this.props.ClickHandler}>{this.props.show?<FaChevronLeft/>:<FaChevronRight/>}</p></Navbar.Brand>
        <Navbar.Brand href="JavaScript:Void(0);">
            <img
              alt=""
              src={logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
              onClick={BlogViewLink}
            />
          </Navbar.Brand>
        
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
          <Nav.Item>
            
            <Nav.Link href="JavaScript:Void(0);" onClick={BlogViewLink}>
              HOME
            </Nav.Link>
            </Nav.Item> 
            <Nav.Link href="JavaScript:Void(0);" onClick={CreateBlogLink}>
              CREATE</Nav.Link>
        
            <Nav.Link href="JavaScript:Void(0);" onClick={UserViewLink}>
              BLOG STATUS
            </Nav.Link>
            <Nav.Link href="JavaScript:Void(0);" onClick={SuggestionViewLink}>
                SUGGEST
              </Nav.Link>
            
          </Nav>
            {/* <Navbar.Text>
              <a href="JavaScript:Void(0);">LOGOUT</a>
            </Navbar.Text> */}
          </Navbar.Collapse>
        </Navbar>
      </Styles>
    );
  }
}
                                                                                                                               
const CreateBlogLink = () => {
  ReactDOM.render(
    <CreateBlogComponent />,
    document.getElementById("app-container")
  );
};

const BlogViewLink = () => {
  ReactDOM.render(
    <BlogViewComponent />,
    document.getElementById("app-container")
  );
};

const UserViewLink = () => {
  ReactDOM.render(
    <UserViewComponent />, document.getElementById("app-container")
  );
};
const SuggestionViewLink = () => {
  ReactDOM.render(
    <SuggestionBlogComponent />, document.getElementById('app-container')
  );
};

export default NavigationComponent;