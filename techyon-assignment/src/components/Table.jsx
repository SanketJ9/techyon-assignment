import { useState, useEffect, useId } from "react";
import logo from "../assets/logo.png";
import SwornMember from "./SwornMember";

const App = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const id = useId();

  useEffect(() => {
    setLoading(true);
    fetch("https://anapioficeandfire.com/api/houses")
      .then((response) => response.json())
      .then((json) => {
        setUsers(json);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <div className="table-cont">
      {loading ? (
        <div>Loading...</div>
      ) : (
        <>

          <div className="logo-cont"><img src={logo} alt="" /></div>
          <table>
            <tr>
              <th>Name of the house</th>
              <th>Region</th>
              <th>Name of all the titles</th>
              <th>Sworn members</th>
            </tr>
            {users?.map((user) => (
              <tr key={id}>
                <td>{user.name}</td>
                <td>{user.region}</td>
                <td>{user.titles.length ? user.titles.join(",") : <p>none</p>}</td>
                <td>
                  {user?.swornMembers.length > 0
                    ? user?.swornMembers.map((val) => <SwornMember url={val} />)
                    : "None"}
                </td>
              </tr>
            ))}
          </table>
        </>
      )}
    </div>
  );
};

export default App;
