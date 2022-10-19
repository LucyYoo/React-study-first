import React, { useEffect, useState } from "react";
import Notification from "./Notification";

const notificationText = [
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

  useEffect(() => {
    const index = notifications.length;
    if (notifications.length < notificationText.length) {
      timer = setInterval(() => {
        setNotification([...notifications, notificationText[index]]);
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [notifications]);

  return (
    <>
      {notifications.map((notification) => {
        return (
          <Notification
            key={notification.id}
            id={notification.id}
            message={notification.message}
          />
        );
      })}
    </>
  );
}
