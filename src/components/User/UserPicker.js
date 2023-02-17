import { useEffect, useState } from "react";
import Spinner from "../UI/Spinner";

export default function UserPicker() {
  const [users, setUsers] = useState(null);

  useEffect(() => {
    fetch("https://6b1rqw-3001.preview.csb.app/users")
      .then((res) => res.json())
      .then((data) => {
        console.log("data", data);
        setUsers(data);
      });
  }, []);

  if (users === null) {
    return <Spinner />;
  }
  return (
    <select>
      {users.map((u) => (
        <option key={u.id}>{u.name}</option>
      ))}
    </select>
  );
}
