import React from "react";
import SidebarChatRoom from "../SidebarChatRoom/SidebarChatRoom";
import classes from "./RequestList.module.css";
function RequestList({request}) {
  return (
    <ul className={classes.allChatItems}>
      {request.length > 0 &&
        request.map((req) => (
          <div >
            {req.from}
          </div>
        ))}
    </ul>
  );
}

export default RequestList;
