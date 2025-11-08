"use client";

import Link from "next/link";
import { useState } from "react";

type NavItem = { href: string; label: string };

const NAV_ITEMS: NavItem[] = [
  { href: "/", label: "Home" },
  { href: "/produk", label: "Produk" },
  { href: "/location", label: "Location" },
  { href: "/galery", label: "Galery" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="header">
      <nav className="nav" aria-label="Primary">
        <div className="container">
          <div className="left">
            <Link href="/" className="brand" onClick={() => setOpen(false)}>
              <span className="logo" aria-hidden>BC</span>
              <div className="brandText">
                <strong className="name">Babay Coffe</strong>
                <span className="tag">Crafted Daily</span>
              </div>
            </Link>
          </div>

          <button
            className="menuBtn"
            aria-label="Buka/Tutup menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="burger" />
          </button>

          <ul className="menu desktop">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="border-solid link mx-5">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="ctaWrap">
            <Link href="/order" className="cta">Pesan Sekarang</Link>
          </div>
        </div>

        {open && (
          <div className="mobilePanel" onClick={() => setOpen(false)}>
            <ul className="menu mobile">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="link">
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/order" className="cta full">Pesan Sekarang</Link>
              </li>
            </ul>
          </div>
        )}
      </nav>

      <style jsx>{`
        :global(:root) {
          /* Coffee palette */
          --oat-milk: #D7BDA6;      /* light base */
          --cinnamon: #B8957F;      /* warm mid */
          --caramel: #AB7843;       /* accent */
          --chestnut: #6D3914;      /* primary */
          --espresso: #4C2B08;      /* deep */

          /* Mapped variables for existing styles */
          --cream: var(--oat-milk);
          --cream-2: #E9D7C9; /* lighter oat milk for chips */
          --brown: var(--chestnut);
          --brown-2: var(--espresso);
          --ink: var(--espresso);
        }

        .header { position: sticky; top: 0; z-index: 50; }
        .nav {
          background: var(--cream);
          border-bottom: 1px solid rgba(0,0,0,0.06);
          box-shadow: 0 8px 16px rgba(107,66,38,0.06);
        }
        .container {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr auto auto;
          align-items: center;
          gap: 12px;
          padding: 12px 16px;
        }

        .brand {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          text-decoration: none;
          color: var(--ink);
        }
        .logo {
          width: 40px; height: 40px; border-radius: 999px;
          background: radial-gradient(80% 80% at 30% 30%, var(--brown-2), var(--brown));
          color: #fff; display: inline-flex; align-items: center; justify-content: center;
          font-weight: 800; letter-spacing: 0.6px;
        }
        .brandText { display: grid; line-height: 1; }
        .name { font-weight: 800; letter-spacing: 0.5px; }
        .tag { font-size: 12px; color: rgba(0,0,0,0.55); }

        .menuBtn { display: inline-flex; align-items: center; justify-content: center; width: 40px; height: 40px; border-radius: 10px; border: 1px solid rgba(0,0,0,0.08); background: var(--cream-2); cursor: pointer; }
        .burger { position: relative; width: 20px; height: 2px; background: var(--ink); }
        .burger::before, .burger::after { content: ""; position: absolute; left: 0; width: 20px; height: 2px; background: var(--ink); }
        .burger::before { top: -6px; }
        .burger::after { top: 6px; }

        .menu { list-style: none; display: none; gap: 10px; padding: 0; margin: 0; }
        .menu.desktop { display: none; }
        .link {
          display: inline-block;
          padding: 8px 14px;
          text-decoration: none;
          color: var(--brown);
          background: var(--cream-2);
          border: 1px solid rgba(107, 66, 38, 0.25);
          border-radius: 999px;
          letter-spacing: 0.4px;
          font-weight: 600;
          transition: background .2s ease, color .2s ease, box-shadow .2s ease, border-color .2s ease, transform .05s ease;
          box-shadow: 0 1px 0 rgba(107,66,38,0.06) inset;
        }
        .link:hover { background: var(--brown); color: #fff; border-color: var(--brown-2); box-shadow: 0 6px 12px rgba(77,43,8,0.18); }
        .link:active { transform: translateY(1px); }

        .ctaWrap { display: none; }
        .cta { display: inline-block; background: var(--brown); color: #fff; text-decoration: none; padding: 10px 16px; border-radius: 999px; font-weight: 700; letter-spacing: 0.3px; box-shadow: 0 6px 14px rgba(77,43,8,0.22); }
        .cta:hover { background: var(--caramel); }
        .cta.full { width: 100%; text-align: center; }

        .mobilePanel { border-top: 1px dashed rgba(0,0,0,0.08); background: var(--cream-2); }
        .menu.mobile { display: grid; gap: 4px; padding: 10px 16px 16px; }

        /* Desktop layout */
        @media (min-width: 900px) {
          .container { grid-template-columns: auto 1fr auto; padding: 14px 24px; }
          .menuBtn { display: none; }
          .menu.desktop { display: inline-flex; justify-self: center; }
          .ctaWrap { display: block; }
        }
      `}</style>
    </header>
  );
}
