import React from 'react'
import { useParams } from 'react-router-dom'

function MainProfile() {
    const { userId } = useParams();
  return <div>hello {userId}</div>;
}

export default MainProfile
