export default async function ProfilePage() {
  const response = await fetch('http://localhost:3000/api/users/1', {
    cache: 'no-store',
  });
  const user = await response.json();

  return (
    <main>
      <h1>Profile</h1>
      <p>Welcome, {user.name}!</p>
    </main>
  );
}
