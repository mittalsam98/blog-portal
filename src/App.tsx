import React, { useState, useReducer, useEffect } from "react";
import NavigationComponent from "./component/navigationComponent/NavigationComponent";
import SideNavigation from "./component/navigationComponent/SideNavigationComponent";
import { BlogContextProvider } from "./context/blogContext";
import { BlogProviderContextInterface } from "./interface/BlogProviderInterface";
import BlogViewComponent from "./component/commonComponent/BlogComponent/BlogViewComponent";
import { BlogService } from './service/blogService';
import './app.css';
import { BlogReducer } from "./reducer/blogReducer";
import { initialState } from './context/blogContext';
import {UserService } from './service/userService';

const App: React.FC = () => {
  const [side, setside] = useState<string>('sidebarC');
  const [content, setcontent] = useState<string>('contentC');
  const [show, setshow] = useState<boolean>(true);

  const [defaultBlogContext, setDefault] = useState<BlogProviderContextInterface>({
    data: BlogService.getBlogList(),
    comment: BlogService.getCommentList()
  })
  const handel=(uId)=>{
    const blog=BlogService.getBlogList().filter(user=>user.uId===uId)
    console.log("SDfsdf",blog)
    setDefault({comment:BlogService.getCommentList(),data:blog})
  }

  const togglehandel=()=>{
    setshow(!show);
  }
  const [state, dispatch] = useReducer(BlogReducer, initialState)

  useEffect(() => {
    console.log(UserService.getUser())   
    // console.log(state);
    // console.log(`This is dispatch output ${dispatch}`);
  }, [state, dispatch]);

  return (
    <BlogContextProvider value={defaultBlogContext}>
      <div className="App">
      <div  className={`sidebar border-right-5 border-dark ${show?side:''}`}> <SideNavigation ClickHandler={handel}/></div>

      <div className={`content ${show?content:''}`}> 
      <NavigationComponent show={show}  ClickHandler={togglehandel}/>
      <div id="app-container">
        <BlogViewComponent/>
        </div>
      </div>
      </div>
    </BlogContextProvider>
  );
};

export default App;