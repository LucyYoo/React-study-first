import React, { useEffect, useRef, useState } from "react";
import Notification from "./Notification";

const reservedNotifications = [
    {   
        id: 1,
        message: "안녕하세요, 오늘 일정을 알려드립니다.",
    },
    {
        id: 2,
        message: "점심식사 시간입니다.",
    },
    {
        id: 3,
        message: "이제 곧 미팅이 시작됩니다.",
    },
];

let timer;

export default function NotificationList() {
    const [notifications, setNotification] = useState([]);
    const notiRef = useRef([]);

    useEffect(() => {
        timer = setInterval(() => {
            if(notifications.length < reservedNotifications.length){
                const index = notifications.length;
                console.log(notifications)
                setNotification(notiRef.current.push(reservedNotifications[index]));
            } 
            else{
                clearInterval(timer);
                return;
            }
        }, 1000);
    }, [])

  return (
    <div>
        {notifications.map((notification) => {
                    return <Notification 
                    key={notification.id}
                    id={notification.id}
                    message={notification.message} />;
        })}
    </div>
  )
}

