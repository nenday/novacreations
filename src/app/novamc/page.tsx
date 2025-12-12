import Image from 'next/image';
import Link from 'next/link';

export default function NovaMC() {
  return (
    <>
      <header>
        <Image
          src="/NovaTransparent.png"
          alt="Nova Creations Logo"
          width={100}
          height={100}
          className="logo"
        />
      </header>
      <main>
        <div className="subpage-header">
          <Link href="/" className="back-link">
            &larr; Back
          </Link>
        </div>
        <div className="content-placeholder">
          Section content goes here…
        </div>
      </main>
      <footer>
        &copy; 2024 Nova Creations. All rights reserved.
      </footer>
    </>
  );
}