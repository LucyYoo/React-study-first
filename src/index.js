import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import Clock from './week1/LandingPage/Clock';
import CommentList from './week1/Comment/CommentList';
import NotificationList from './week1/User/Notification/NotificationList';
import NotiListCopy from './week1/User/Notification/NotiListcopy';
import Accommodate from './week1/useCounter/Accommodate';
import Login from './week1/User/Login'
import ConfirmButtonvFuction from './week1/User/ComfirmButton/ConfirmButtonvFuction';
//chapter_03
import Library from './week1/Book/Library';
import AttendanceBook from './week2/AttendanceBook';
import SignUp from './week2/SignUp';
import ProfileCoard from './week2/UserCard/ProfileCoard';
import DarkOnLight from './week2/ThemeColor/DarkOnLight';
import Calculator from './week2/Temperature/Calculator';
import Blocks from './week2/Blocks';

const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <Library />
//   </React.StrictMode>
// );

  root.render(
    <React.StrictMode>
      <Clock />
      <Blocks />
      <DarkOnLight />
      <SignUp />
      <ProfileCoard />
      <NotificationList />
      <Calculator />
    </React.StrictMode>
  );



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
