import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="hero">
      <Image
        src="/NovaTransparent.png"
        alt="Nova Creations Logo"
        width={70}
        height={70}
        className="hero-logo"
      />

      <div className="grid-container">
        <Link href="/builds" className="card">
          <h2>Builds</h2>
          <p>Explore our architectural masterpieces.</p>
        </Link>
        <Link href="/developers" className="card">
          <h2>Developers</h2>
          <p>Meet the team behind the magic.</p>
        </Link>
        <Link href="/novamc" className="card">
          <h2>NovaMC</h2>
          <p>Join our Minecraft server community.</p>
        </Link>
      </div>

      <div className="contact-section">
        <Link href="/contact" className="btn-contact">
          Contact
        </Link>
      </div>

      <div className="hero-footer">
        &copy; 2024 Nova Creations. All rights reserved.
      </div>
    </main>
  );
}
