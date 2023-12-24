import Link from "next/link";

export default function BlogPage() {
  return (
    <main>
      This is our blog page
      <div className="flex gap-8">
        <Link href="/" className="underline">
          Go back home
        </Link>
        <Link href="/about" className="underline">
          Go to about page
        </Link>
      </div>
    </main>
  );
}
