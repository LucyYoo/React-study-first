import React, { useState } from 'react'

export default function ConfirmButtonvFuction() {
  const [isConfirmed, setIsConfirmed] = useState(false);

  const handleConfirm = () => {
    setIsConfirmed((prevIsConfirmed) => !prevIsConfirmed);
    setIsConfirmed(!isConfirmed);
  };
  
    return (
        <button onClick={handleConfirm} disabled={isConfirmed}>
            {isConfirmed ? "확인됨" : "확인하기"}
        </button>
  )
}
