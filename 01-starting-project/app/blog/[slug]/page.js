export default function Post({ params }) {
  return (
    <main>
      <div>
        {params.slug}
      </div>
    </main>
  )
}