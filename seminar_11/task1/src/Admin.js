export default function Admin({ users }) {
  return (
    <div>
      <h4>Administratori:</h4>
      <ul>
        {users.map((user, i) => (
          <li key={i}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}
