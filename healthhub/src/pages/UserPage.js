import React from "react";
import { useParams } from 'react-router-dom';

function UserPage() {
    const {username} = useParams();

    return (
      <div className="UserPage">
        {username}
      </div>
    );
  }

  export default UserPage;