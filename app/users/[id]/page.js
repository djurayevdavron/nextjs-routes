export default async function UserPage({ params }) {
  const { id } = await params;

  return (
    <main>
      <h1>User ID: {id}</h1>
    </main>
  );
}