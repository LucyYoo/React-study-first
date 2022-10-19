import React, { useContext } from 'react'
import AttendanceBook from './AttendanceBook';
import ThemeContext from './ThemeColor/ThemeContext'
import SignUp from './SignUp'
import Calculator from './Temperature/Calculator';

export default function MainContent(props) {
  const {theme, toggleTheme} = useContext(ThemeContext);

    return (
    <div
        style={{
            width: "50vw",
            height: "50vh",
            padding: "1.5rem",
            backgroundColor: theme == "light" ? "white" : "black",
            color: theme =="light" ? "black" : "white",
        }}
        >
            <p>안녕하세요, 테마 변경이 가능한 웹사이트 입니다.</p>
            < AttendanceBook />
            < SignUp />
            <Calculator />
            <button onClick={toggleTheme}>테마 변경</button>
    </div>
  )
}
