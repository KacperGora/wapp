import React from "react";
import classes from "./ListChat.module.css";
import noImg from "../../../../Assets/images/no-user-image.gif";
function ListChat() {
  return (
    <ul className={classes.allChatItems}>
      <li onClick={(e)=>{console.log(e)}} className={classes.singleItem}>
        <div className={classes.imgBox}>
          <img src={noImg} alt="User avatar" />
        </div>
        <div className={classes.msgDetails}>
          <div className={classes.msgAuthor}>Name</div>
          <div className={classes.messageText}>lorem ipsum bla bla bla</div>
        </div>
        <div className={classes.textTime}>Time</div>
      </li>
      <li className={classes.singleItem}>
        <div className={classes.imgBox}>
          <img src={noImg} alt="User avatar" />
        </div>
        <div className={classes.msgDetails}>
          <div className={classes.msgAuthor}>Name</div>
          <div className={classes.messageText}>lorem ipsum bla bla bla</div>
        </div>
        <div className={classes.textTime}>Time</div>
      </li>
      <li className={classes.singleItem}>
        <div className={classes.imgBox}>
          <img src={noImg} alt="User avatar" />
        </div>
        <div className={classes.msgDetails}>
          <div className={classes.msgAuthor}>Name</div>
          <div className={classes.messageText}>lorem ipsum bla bla bla</div>
        </div>
        <div className={classes.textTime}>Time</div>
      </li>
      <li className={classes.singleItem}>
        <div className={classes.imgBox}>
          <img src={noImg} alt="User avatar" />
        </div>
        <div className={classes.msgDetails}>
          <div className={classes.msgAuthor}>Name</div>
          <div className={classes.messageText}>lorem ipsum bla bla bla</div>
        </div>
        <div className={classes.textTime}>Time</div>
      </li>
      <li className={classes.singleItem}>
        <div className={classes.imgBox}>
          <img src={noImg} alt="User avatar" />
        </div>
        <div className={classes.msgDetails}>
          <div className={classes.msgAuthor}>Name</div>
          <div className={classes.messageText}>lorem ipsum bla bla bla</div>
        </div>
        <div className={classes.textTime}>Time</div>
      </li>
      <li className={classes.singleItem}>
        <div className={classes.imgBox}>
          <img src={noImg} alt="User avatar" />
        </div>
        <div className={classes.msgDetails}>
          <div className={classes.msgAuthor}>Name</div>
          <div className={classes.messageText}>lorem ipsum bla bla bla</div>
        </div>
        <div className={classes.textTime}>Time</div>
      </li>
      <li className={classes.singleItem}>
        <div className={classes.imgBox}>
          <img src={noImg} alt="User avatar" />
        </div>
        <div className={classes.msgDetails}>
          <div className={classes.msgAuthor}>Name</div>
          <div className={classes.messageText}>lorem ipsum bla bla bla</div>
        </div>
        <div className={classes.textTime}>Time</div>
      </li>
      <li className={classes.singleItem}>
        <div className={classes.imgBox}>
          <img src={noImg} alt="User avatar" />
        </div>
        <div className={classes.msgDetails}>
          <div className={classes.msgAuthor}>Name</div>
          <div className={classes.messageText}>lorem ipsum bla bla bla</div>
        </div>
        <div className={classes.textTime}>Time</div>
      </li>
      <li className={classes.singleItem}>
        <div className={classes.imgBox}>
          <img src={noImg} alt="User avatar" />
        </div>
        <div className={classes.msgDetails}>
          <div className={classes.msgAuthor}>Name</div>
          <div className={classes.messageText}>lorem ipsum bla bla bla</div>
        </div>
        <div className={classes.textTime}>Time</div>
      </li>
      <li className={classes.singleItem}>
        <div className={classes.imgBox}>
          <img src={noImg} alt="User avatar" />
        </div>
        <div className={classes.msgDetails}>
          <div className={classes.msgAuthor}>Name</div>
          <div className={classes.messageText}>lorem ipsum bla bla bla</div>
        </div>
        <div className={classes.textTime}>Time</div>
      </li>
      <li className={classes.singleItem}>
        <div className={classes.imgBox}>
          <img src={noImg} alt="User avatar" />
        </div>
        <div className={classes.msgDetails}>
          <div className={classes.msgAuthor}>Name</div>
          <div className={classes.messageText}>lorem ipsum bla bla bla</div>
        </div>
        <div className={classes.textTime}>Time</div>
      </li>
      <li className={classes.singleItem}>
        <div className={classes.imgBox}>
          <img src={noImg} alt="User avatar" />
        </div>
        <div className={classes.msgDetails}>
          <div className={classes.msgAuthor}>Name</div>
          <div className={classes.messageText}>lorem ipsum bla bla bla</div>
        </div>
        <div className={classes.textTime}>Time</div>
      </li>
      <li className={classes.singleItem}>
        <div className={classes.imgBox}>
          <img src={noImg} alt="User avatar" />
        </div>
        <div className={classes.msgDetails}>
          <div className={classes.msgAuthor}>Name</div>
          <div className={classes.messageText}>lorem ipsum bla bla bla</div>
        </div>
        <div className={classes.textTime}>Time</div>
      </li>
    </ul>
  );
}

export default ListChat;
