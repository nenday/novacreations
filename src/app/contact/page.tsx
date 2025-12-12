import Image from 'next/image';
import Link from 'next/link';

export default function Contact() {
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
          <p>We'd love to hear from you!</p>
          <br />
          <p>
            <strong>Email:</strong> contact@novacreations.site
          </p>
          <p>
            <strong>Discord:</strong> discord.gg/novacreations
          </p>
          <br />
          <p>[Contact Form Placeholder]</p>
        </div>
      </main>
      <footer>
        &copy; 2024 Nova Creations. All rights reserved.
      </footer>
    </>
  );
}