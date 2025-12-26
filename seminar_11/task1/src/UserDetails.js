export default function UserDetails({ user }) {
  if (!user) return <div>Selecteaza un utilizator pentru detalii</div>;

  return (
    <div>
      <h4>Detalii utilizator:</h4>
      <p>Nume: {user.name}</p>
      <p>Tip: {user.type}</p> 
    </div>
  );
}
