import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] px-4 text-center">
      <div className="space-y-4">
        <h1 className="font-display text-8xl font-bold tracking-tight text-stone-900">
          404
        </h1>
        <h2 className="text-2xl font-medium tracking-tight text-stone-900 sm:text-3xl">
          Page not found
        </h2>
        <p className="max-w-[600px] text-lg text-stone-600">
          Sorry, we couldn&apos;t find the page you&apos;re looking for. It might have been moved or doesn&apos;t exist.
        </p>
      </div>
      
      <div className="mt-10">
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-full bg-orange-600 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-orange-700"
        >
          Go back home
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
