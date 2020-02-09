import React, { useState, useEffect } from 'react';
import { Navbar, NavDropdown, Nav, FormControl, Form } from 'react-bootstrap';
import styled from 'styled-components';
import { BlogContextConsumer } from '../../context/blogContext';
// import {UserData} from '../../data/user';
import {UserService } from '../../service/userService';
import { FaUserCircle } from 'react-icons/fa';
import { UserInterface } from '../../interface/userInterface';


const Styles = styled.div`
 background-color: #2C3E50;color:white;text-align:center;  
`;

export interface Props{
  ClickHandler(uId:string):any
}

const SideNavigation:React.FC<Props> = ({ClickHandler}) => {

  const [user,setUser]=useState<string>('')
  // const [name,setname]=useState<UserInterface>({ uId: '',
  //   email: '',
  //   name: '',
  //   role: '',
  //   imgPath: ''})

  const clickHandler=(uId)=>{
    ClickHandler(uId);
  }

  // const users:UserInterface[]=UserService.getUser();

  const change=(e)=>{
    console.log(e.target.name)
    setUser(e.target.value)  
  }

  useEffect(() => {
  //   console.log(users)
  // users.map(user=>{
  //   return( 
  //  setname(user.name)
  //   )
  // })
//   async function getToken() {
//     const token = await UserService.getUser();
//     setname(token)
// }
// getToken();
  })

return(
  
        <Styles className='cont'>
                   <input type='text' className='form-control w-75 d-inline text-center mb-3' placeholder='Search for user' value={user} name='user' onChange={change}/>
                  {UserService.getUser().map(user=>{
                                  return( 
                                    <>
                                    <p>fsdafasd</p>
                                    <p onClick={()=>clickHandler(user.uId)}> <FaUserCircle/>{`'dfa'${user.name}`}</p>
                                    </>
                                  )
                                })}
    </Styles>

)
}

export default SideNavigation
