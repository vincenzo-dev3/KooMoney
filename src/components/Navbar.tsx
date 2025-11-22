"use client";

interface NavbarProps {
  onDevClick?: () => void;
}

export const Navbar = ({ onDevClick }: NavbarProps) => {
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-slate-100/50 bg-white/70 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 md:px-12">
        <div className="flex items-center gap-3 cursor-pointer">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/logo.png"
            alt="Koo Money Logo"
            className="h-16 w-auto object-contain"
            style={{ maxHeight: '64px' }}
          />
          <span className="text-xl font-extrabold text-slate-900 tracking-tight">Koo Money</span>
        </div>
        
        <button 
          onClick={() => {
            if (onDevClick) {
              onDevClick();
            } else {
              const element = document.getElementById('developers');
              element?.scrollIntoView({ behavior: 'smooth' });
            }
          }}
          className="text-slate-600 font-semibold hover:text-slate-900 transition-colors"
        >
          Developers
        </button>
      </div>
    </nav>
  );
};
