import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../store/actions/userActions";
import "./users.css";

const Users = () => {
  const dispatch = useDispatch();
  const usersListData = useSelector((state) => state.usersList);
  const { loading, error, users } = usersListData;
  console.log(users);
  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);
  return (
    <div className="user_data">
      <div className="student_name">
        <h1>Student Name:-</h1>
        {loading
          ? "Loading..."
          : error
          ? error.message
          : users.map((item, index) => {
              return (
                <div key={index} className="student_data">
                  <h3>{item.name}</h3>
                </div>
              );
            })}
      </div>
      <div className="student_name">
        <h1>Student Skills:-</h1>
        {loading
          ? "Loading..."
          : error
          ? error.message
          : users.map((item) => {
              return (
                <div key={item._id} className="student_data">
                  <h3>{item.skills}</h3>
                </div>
              );
            })}
      </div>
      <div className="student_name">
        <h1>Student Language:-</h1>
        {loading
          ? "Loading..."
          : error
          ? error.message
          : users.map((item) => {
              return (
                <div key={item._id}  className="student_data">
                  <h3>{item.language}</h3>
                </div>
              );
            })}
      </div>
    </div>
  );
};

export default Users;
