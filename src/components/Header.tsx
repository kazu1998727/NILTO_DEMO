import Link from "next/link";

export function Header() {
  return (
    <header className="bg-background border-b">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <Link href="/">
              <span className="sr-only">Your Company Blog</span>
              <span className="text-2xl font-bold text-primary">多言語ブログ</span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
