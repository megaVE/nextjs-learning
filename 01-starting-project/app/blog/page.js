import Link from "next/link";

export default function Blog() {
  return (
    <main>
      <h1>Blog Main Page</h1>
      <p>Check out our newest posts:</p>
      <h3>
        <Link href="/blog/post-1">Post 1</Link>
      </h3>
      <h3>
        <Link href="/blog/post-2">Post 2</Link>
      </h3>
    </main>
  )
}