import React, { useState } from 'react'

const styles ={
    wrapper: {
        padding: 16,
        display: 'flex',
        flexDirection: 'row',
        borderBottom: '1px solid gray',
    },

    greeting: {
        marginRight: 8,
    },
};

export default function Toolbar() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const onClickLogin = () => {
        setIsLoggedIn(true);
    }

    const onClickLogout = () => {
        setIsLoggedIn(false);
    }

  return (
    <>
    <div style={styles.wrapper}>
        {isLoggedIn && <span style={styles.greeting}>환영합니다!</span>}

        {isLoggedIn ? (
            <button onClick={onClickLogout}>로그아웃</button>
        ) : (
            <button onClick={onClickLogin}>로그인</button>
        )}
    </div>

    <div style={{ padding: 16 }}>소플과 함께하는 리액트 공부!</div>
    </>
  )
}
