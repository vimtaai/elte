import React from "react";
import { useSelector } from "react-redux";
import { getMessages } from "../store/messages/selectors";
import { Message } from "semantic-ui-react";

import classes from "./MessageList.module.css";

export function MessageList() {
  const messages = useSelector(getMessages);

  return messages.length > 0 ? (
    <div className={classes.messageList}>
      {messages.map((message) => (
        <Message key={message.id} info className={classes.message}>
          {message.text}
        </Message>
      ))}
    </div>
  ) : null;
}
