import Link from "next/link";

export default function Home() {
  return (
    <main>
      <img src="/logo.png" alt="A server surrounded by magic sparkles." />
      <h1>Welcome to this NextJS Course!</h1>
      <p>🔥 Let&apos;s get started! 🔥</p>
      <p><Link href="/about">Click here</Link> to know more about us and <Link href="/blog">here</Link> to access our exclusive blog.</p>
    </main>
  );
}
