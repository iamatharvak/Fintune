import React, { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { NAV_LINKS } from "../constants";
import logo from "../assets/Fintune Logo.png";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        visible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
      } bg-white/90 backdrop-blur-md shadow-md`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between py-3">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img src={logo} alt="Fintune" className="w-28 h-auto" />
        </Link>

        {/* ================= DESKTOP NAV ================= */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => {
            const hasChildren = !!link.children;
            const isOpen = openMenu === link.name;

            return (
              <div
                key={link.name}
                className="relative"
                onMouseEnter={() => hasChildren && setOpenMenu(link.name)}
                onMouseLeave={() => hasChildren && setOpenMenu(null)}
              >
                <Link
                  to={link.href}
                  className="flex items-center gap-1 font-medium text-sm uppercase tracking-wider text-slate-700 hover:text-accent transition-colors"
                >
                  {link.name}
                </Link>

                {hasChildren && isOpen && (
                  <div className="absolute left-1/2 top-full -translate-x-1/2 z-50">
                    <div className="h-4 w-full" />
                    <div className="w-[360px] rounded-2xl bg-white border border-slate-200 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.15)]">
                      <div className="p-3">
                        {link.children.map((child) => (
                          <Link
                            key={child.name}
                            to={child.href}
                            className="group block rounded-xl px-4 py-3 hover:bg-slate-50 transition-colors"
                          >
                            <div className="text-sm font-medium text-slate-900 group-hover:text-accent">
                              {child.name}
                            </div>
                            <div className="text-xs text-slate-500 mt-0.5"></div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}

          {/* CTA */}
          <Link
            to="/contact"
            className="px-5 py-2 rounded-full font-semibold bg-secondary text-yellow-950 hover:bg-blue-800 hover:text-white transition-all shadow-lg"
          >
            Work with us
          </Link>
        </nav>

        {/* ================= MOBILE TOGGLE ================= */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          aria-label="Toggle menu"
        >
          {isMobileOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* ================= MOBILE MENU ================= */}
      {isMobileOpen && (
        <div className="md:hidden bg-white border-t shadow-lg">
          <div className="px-4 py-4 space-y-3">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                onClick={() => setIsMobileOpen(false)}
                className="block text-slate-700 font-medium py-2 border-b border-slate-100"
              >
                {link.name}
              </Link>
            ))}

            <Link
              to="/contact"
              onClick={() => setIsMobileOpen(false)}
              className="block text-center bg-secondary text-black py-3 rounded-lg font-semibold"
            >
              Work with us
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
