"use client";

export default function Error({ error }) {
  return (
    <main className="error">
      <h1>An error occured!</h1>
      <p>{JSON.stringify(error)}</p>
    </main>
  );
}
