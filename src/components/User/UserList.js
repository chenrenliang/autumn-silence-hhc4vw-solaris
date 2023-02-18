import { useState, useEffect } from "react";
import Spinner from "../UI/Spinner";
import getData from "../../utils/api";

export default function UsersList() {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [users, setUsers] = useState(null);

  const [userIndex, setUserIndex] = useState(0);

  const user = users?.[userIndex];

  useEffect(() => {
    getData("/users")
      .then((data) => {
        console.log("data", data);
        setUsers(data);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error);
        setIsLoading(false);
      });
  }, []);

  if (error) {
    return <p>{error.message}</p>;
  }

  if (isLoading) {
    return (
      <p>
        <Spinner />
        Loading users...
      </p>
    );
  }

  return (
    <>
      <ul className="users items-list-nav">
        {users.map((u, i) => (
          <li key={u.id} className={i === userIndex ? "selected" : null}>
            <button className="btn" onClick={() => setUserIndex(i)}>
              {u.name}
            </button>
          </li>
        ))}
      </ul>
      {users && (
        <div className="item user">
          <div className="item-header">
            <h2>{user.name}</h2>
          </div>
          <div className="user-details">
            <h3>{user.title}</h3>
            <p>{user.notes}</p>
          </div>
        </div>
      )}
    </>
  );
}
