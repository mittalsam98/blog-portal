import {UserInterface } from "../interface/userInterface";

export class UserService {
    static getUser = () => { 
      let users:UserInterface[]=[];

          fetch('http://localhost:5000/user')
            .then((response) => {
            return response.json();
            })
            .then((myJson) => {
             for(var id in myJson){
              users.push(myJson[id])
             }
             console.log(users)

            });
            return users;

      // fetch('http://localhost:5000/user/',
      // {
      //   Content
      // })
      
      // .then(res=>console.log(res))
      // .catch(err=>console.log(err))
        // let users:UserInterface[] = [{
        //     "uId": "bcaa3141-227f-4660-876e-6373ec828fe4",
        //     "email":'mittalsam98@gmail.com',
        //     "name":'JohnSnow',
        //     "role":'admin',
        //     "imgPath":'ssss'
        //   }, {
        //     "uId": "8f0617e1-3987-45a8-b46a-aa668a0d3f32",
        //     "email":'rahul198@gmail.com',
        //     "name":'DaenerysTargaryen',
        //     "role":'admin',
        //     "imgPath":'ssss'
          
        //   }, {
        //     "uId": "6b9a6381-6489-478c-9341-71645553ee1f",
        //     "email":'rajansaini98@gmail.com',
        //     "name":'TyrionLanister',
        //     "role":'admin',
        //     "imgPath":'ssss'
            
        //   }, {
        //     "uId": "b3a75e29-9856-4c03-9660-075085ea00ff",
        //     "email":'pvrock@gmail.com',
        //     "name":'AryaStark',
        //     "role":'admin',
        //     "imgPath":'ssss'
          
        //   }, {
        //     "uId": "c4da92a6-73ea-4232-8359-c1808743a3d9",
        //     "email":'viratk43@gmail.com',
        //     "name":'SansaStark',
        //     "role":'admin',
        //     "imgPath":'ssss'
           
        //   }];
    }
}
