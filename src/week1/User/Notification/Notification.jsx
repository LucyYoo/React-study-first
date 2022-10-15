import React, { useEffect } from "react";

const styles = {
    wrapper: {
        margin: 9,
        padding: 9,
        display: "flex",
        flexDirection: "row",
        border: "1px solid gray",
        borderRadius: 16,
    },

    messageText: {
        color: "black",
        fontSize: 16,
    },
};

export default function Notification(props) {
  return (
    <div style={styles.wrapper}>
        <span style={styles.messageText}>{props.message}</span>
    </div>
  )
}


// class Notification extends React.Component{
//     constructor(props){
//         super(props);

//         this.setState = {};
//     }

//     render(){
//         return(
//             <div style={styles.wrapper}>
//                 <span style={styles.messageText}>{this.props.message}</span>
//             </div>
//         );
//     }
// }

// export default Notification;