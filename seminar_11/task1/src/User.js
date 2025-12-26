export default function User({ users }) {
  return (
    <div>
      <h4>Utilizatori:</h4>
      <ul>
        {users.map((user, i) => (
          <li key={i}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}
