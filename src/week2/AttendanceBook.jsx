import React from 'react'


const students = [
    {
        name: "Inje",
    },
    {
        name: "Steve",
    },
    {
        name: "Bill",
    },
    {
        name: "Jeff",
    },
];

export default function AttendanceBook(props) {
  return (
    <ul>
        {students.map((student) => {
            return <li key={student.id}>{student.name}</li>
        })}
    </ul>
  )
}
