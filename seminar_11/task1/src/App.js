import './App.css';
import { useEffect, useState } from 'react';
import Admin from './Admin';
import User from './User';
import UserDetails from './UserDetails';
function App() {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const admins = users.filter(u => u.type === "admin");
  const regulars = users.filter(u => u.type === "user");

  const [active, setActive] = useState(true);
  const [message, setMessage] = useState("");

  useEffect(() => {
    setMessage("Componenta a fost incarcata!");
    fetch("/users")
      .then(res => res.json())
      .then(data => setUsers(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h2>{message}</h2>

      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
        <div style={{
          width: 100,
          height: 100,
          background: !active ? "blue" : "red"
        }}></div>

        <div style={{
          width: 100,
          height: 100,
          background: !active ? "blue" : "red"
        }}></div>

        <button onClick={() => setActive(!active)}>Schimba</button>
      </div>


      <Admin users={admins} />
      <User users={regulars} />

      <UserDetails user={selectedUser} />
      <div style={{ marginTop: 20 }}>
        {users.map((user, i) => (
          <button
            key={i}
            onClick={() => setSelectedUser(user)}
            style={{ marginRight: 10 }}
          >
            {user.name}
          </button>
        ))}

      </div>
    </div>
  );
}

export default App;
