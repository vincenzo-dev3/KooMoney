'use client';

const PhoneMockup = () => {
  return (
    <div className="relative z-10 translate-y-12">
      {/* The Glow behind the phone */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-br from-cyan-200/50 to-purple-200/50 blur-3xl rounded-full -z-10" />

      <div className="relative w-[320px] md:w-[380px]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/hero-phone.png"
          alt="Koo Money Gift Card App"
          className="w-full h-auto drop-shadow-2xl rounded-[3rem]"
        />
      </div>
    </div>
  );
};

export const Hero = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 md:px-12 h-screen min-h-[800px] flex flex-col lg:flex-row items-center justify-between relative overflow-hidden pb-20">

      {/* Left Column: Text Content */}
      <div className="flex flex-col justify-center items-start max-w-xl z-10">

        {/* 1. Headline: Tight & Punchy */}
        <h1 className="text-6xl md:text-7xl font-bold font-jakarta text-slate-900 leading-[1.1] tracking-tight mb-6">
          The Easiest Way <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-emerald-400">
            to Onboard Friends.
          </span>
        </h1>

        {/* 2. Subtitle: Larger text, constrained width, specific margin bottom */}
        <p className="text-lg md:text-xl text-slate-600 leading-relaxed mb-10 max-w-lg">
          Turn HBAR and Assets into shareable instruments. Whether sent via DM or handed over as a physical card, every gift creates a new on-chain user instantly.
        </p>

        {/* 3. CTA Button: anchored below the text */}
        <button
          onClick={() => window.location.href = '/demo'}
          className="
            bg-cyan-500 text-white font-bold text-lg px-10 py-4 rounded-full 
            shadow-[0_20px_40px_-15px_rgba(34,211,238,0.6)] 
            hover:-translate-y-1 transition-all duration-300
            flex items-center gap-3
            cursor-pointer
        ">
          Send a Gift Now
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
        </button>

      </div>

      {/* Right Visual */}
      <div className="relative flex justify-center lg:justify-end mt-10 lg:mt-0 h-full items-center lg:items-center">
        <PhoneMockup />
      </div>

      {/* Horizontal Divider */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent"></div>
    </section>
  );
};
