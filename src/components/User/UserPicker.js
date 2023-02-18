import { useEffect, useState } from "react";
import getData from "../../utils/api";
import Spinner from "../UI/Spinner";

export default function UserPicker() {
  const [users, setUsers] = useState(null);

  useEffect(() => {
    getData("/users").then((data) => {
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
