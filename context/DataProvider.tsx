import React, { createContext, ReactNode, useState } from "react";
import { User } from "../model/User";
import { Event } from "../model/Event";
import { Comment } from "../model/Comment";
import { dummyUsers } from "../model/users";
import { dummyEvents } from "../model/events";
import { dummyComments } from "../model/comments";

interface IDataContext {
  users: User[];
  addUser: (u: User) => void;
  events: Event[];
  addEvent: (e: Event) => void;
  comments: Comment[];
  addComment: (c: Comment) => void;
}

const defaultState = {
  users: [],
  addUser: (u: User) => console.log("Function is not yet defined"),
  events: [],
  addEvent: (e: Event) => console.log("Function is not yet defined"),
  comments: [],
  addComment: (c: Comment) => console.log("Function is not yet defined")
};

export const DataContext = createContext<IDataContext>(defaultState);

interface DataProviderProps {
  children?: ReactNode;
}

export default function DataProvider(props: DataProviderProps) {
  const [users, setUsers] = useState<User[]>(dummyUsers);
  const [events, setEvents] = useState<Event[]>(dummyEvents);
  const [comments, setComments] = useState<Comment[]>(dummyComments);

  const addUser = (u: User) => {
    setUsers(existingUsers => [...existingUsers, u]);
  };

  const addEvent = (e: Event) => {
    setEvents(existingEvents => [...existingEvents, e]);
  };

  const addComment = (c: Comment) => {
    setComments(existingComments => [...existingComments, c]);
  };

  // TODO: Support updating a User, Event or Comment

  return (
    <DataContext.Provider
      value={{
        users: users,
        addUser: addUser,
        events: events,
        addEvent: addEvent,
        comments: comments,
        addComment: addComment
      }}
    >
      {props.children}
    </DataContext.Provider>
  );
}
