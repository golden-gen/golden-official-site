import Link from "next/link";

export default function AboutPage() {
  return (
    <main>
      About Golden Generation
      <div className="flex gap-8">
        <Link href="/" className="underline">
          Go back home
        </Link>
        <Link href="/blog" className="underline">
          Go to blog page
        </Link>
      </div>
    </main>
  );
}
