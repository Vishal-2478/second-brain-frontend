import { useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

const features = [
    {
        icon: (
            <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.742l7.73-8.835L1.254 2.25H8.08l4.261 5.635 5.903-5.635Zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
        ),
        title: "Save Tweets",
        desc: "Bookmark brilliant threads, hot takes, and insights — never lose a great tweet again.",
        color: "from-sky-400/20 to-blue-500/10",
        border: "border-sky-300/30",
        iconBg: "bg-sky-100 text-sky-600",
    },
    {
        icon: (
            <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current" xmlns="http://www.w3.org/2000/svg">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
            </svg>
        ),
        title: "YouTube Videos",
        desc: "Curate tutorials, lectures, and videos so they're always one click away.",
        color: "from-red-400/20 to-rose-500/10",
        border: "border-red-300/30",
        iconBg: "bg-red-100 text-red-600",
    },
    {
        icon: (
            <svg viewBox="0 0 24 24" className="w-6 h-6 fill-none stroke-current stroke-2" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
            </svg>
        ),
        title: "Documents & Links",
        desc: "Store articles, PDFs, and web pages alongside everything else in your brain.",
        color: "from-violet-400/20 to-purple-500/10",
        border: "border-violet-300/30",
        iconBg: "bg-violet-100 text-violet-600",
    },
    {
        icon: (
            <svg viewBox="0 0 24 24" className="w-6 h-6 fill-none stroke-current stroke-2" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
            </svg>
        ),
        title: "Instant Search",
        desc: "Find anything you've saved in seconds. Your memory, supercharged.",
        color: "from-amber-400/20 to-orange-500/10",
        border: "border-amber-300/30",
        iconBg: "bg-amber-100 text-amber-600",
    },
];

// const floatingCards = [
//     { type: "tweet", content: "Just read the most insightful thread on distributed systems...", author: "@techbro_dev", top: "8%", left: "4%", delay: "0s" },
//     { type: "yt", content: "MIT 6.006 Introduction to Algorithms - Lecture 1", channel: "MIT OpenCourseWare", top: "20%", right: "3%", delay: "0.4s" },
//     { type: "doc", content: "The Innovator's Dilemma - Clayton Christensen", top: "72%", left: "2%", delay: "0.8s" },
//     { type: "link", content: "How to build a second brain — Forte Labs", top: "65%", right: "4%", delay: "1.2s" },
// ];

export default function LandingPage() {
    const navigate = useNavigate();
    const [mounted, setMounted] = useState(false);
    const heroRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <div className="min-h-screen overflow-x-hidden font-sans" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            {/* Google Fonts */}
            <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,900;1,700&family=DM+Sans:wght@300;400;500;600&display=swap');

        * { box-sizing: border-box; }

        .hero-gradient {
          background: linear-gradient(135deg, #fde8c8 0%, #f8d5e0 30%, #e8d5f0 60%, #d0d5f5 100%);
        }

        .card-glass {
          background: rgba(255, 255, 255, 0.72);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
        }

        .cta-btn {
          background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 50%, #a855f7 100%);
          box-shadow: 0 4px 32px rgba(99, 102, 241, 0.45), 0 1px 0 rgba(255,255,255,0.2) inset;
          transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .cta-btn:hover {
          transform: translateY(-3px) scale(1.04);
          box-shadow: 0 8px 48px rgba(99, 102, 241, 0.6), 0 1px 0 rgba(255,255,255,0.2) inset;
        }

        .cta-btn:active {
          transform: translateY(-1px) scale(1.01);
        }

        .float-card {
          animation: float 6s ease-in-out infinite;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33% { transform: translateY(-8px) rotate(0.5deg); }
          66% { transform: translateY(-4px) rotate(-0.5deg); }
        }

        .fade-up {
          opacity: 0;
          transform: translateY(32px);
          transition: opacity 0.8s ease, transform 0.8s ease;
        }

        .fade-up.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .feature-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 20px 60px rgba(0,0,0,0.1);
        }

        .feature-card {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .noise-overlay {
          position: fixed;
          inset: 0;
          pointer-events: none;
          z-index: 0;
          opacity: 0.03;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
          background-size: 200px;
        }

        .orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(80px);
          pointer-events: none;
        }

        .pulse-ring {
          animation: pulse-ring 2.5s cubic-bezier(0.455, 0.03, 0.515, 0.955) infinite;
        }

        @keyframes pulse-ring {
          0% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(139, 92, 246, 0.5); }
          70% { transform: scale(1); box-shadow: 0 0 0 14px rgba(139, 92, 246, 0); }
          100% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(139, 92, 246, 0); }
        }

        .shimmer {
          background: linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.4) 50%, transparent 100%);
          background-size: 200% 100%;
          animation: shimmer 3s infinite;
        }

        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }

        nav {
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
        }
      `}</style>

            <div className="noise-overlay" />

            {/* ── NAVBAR ── */}
            <nav
                className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-4"
                style={{ background: "rgba(255,255,255,0.55)", borderBottom: "1px solid rgba(255,255,255,0.4)" }}
            >
                <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center cta-btn">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="white" strokeWidth="2" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636-.707.707M21 12h-1M4 12H3m3.343-5.657-.707-.707m2.828 9.9a5 5 0 1 1 7.072 0l-.548.547A3.374 3.374 0 0 0 14 18.469V19a2 2 0 1 1-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                        </svg>
                    </div>
                    <span className="font-semibold text-gray-800 text-lg tracking-tight">Second Brain</span>
                </div>
                <div className="flex items-center gap-4">
                    <button
                        onClick={() => navigate("/signin")}
                        className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors cursor-pointer"
                    >
                        Sign in
                    </button>
                    <button
                        onClick={() => navigate("/signup")}
                        className="cta-btn text-white text-sm font-medium px-5 py-2 rounded-full cursor-pointer"
                    >
                        Get Started
                    </button>
                </div>
            </nav>

            {/* ── HERO ── */}
            <section className="hero-gradient relative min-h-screen flex flex-col items-center justify-center px-4 pt-24 pb-16 overflow-hidden" ref={heroRef}>
                {/* Background orbs */}
                <div className="orb w-96 h-96 bg-violet-300/40" style={{ top: "-10%", right: "-8%" }} />
                <div className="orb w-80 h-80 bg-orange-200/50" style={{ bottom: "5%", left: "-8%" }} />
                <div className="orb w-64 h-64 bg-pink-200/40" style={{ top: "40%", left: "20%" }} />

                {/* Floating ambient cards — hidden on mobile */}
                <div className="hidden lg:block">
                    {/* Tweet card */}
                    <div
                        className="float-card card-glass absolute rounded-2xl p-4 w-64 border border-white/50 shadow-xl"
                        style={{ top: "18%", left: "4%", animationDelay: "0s" }}
                    >
                        <div className="flex items-center gap-2 mb-2">
                            <div className="w-8 h-8 rounded-full bg-sky-100 flex items-center justify-center">
                                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-sky-500"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.742l7.73-8.835L1.254 2.25H8.08l4.261 5.635 5.903-5.635Zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
                            </div>
                            <div>
                                <p className="text-xs font-semibold text-gray-800">@techbro_dev</p>
                                <p className="text-xs text-gray-400">saved just now</p>
                            </div>
                        </div>
                        <p className="text-xs text-gray-600 leading-relaxed">Just read the most insightful thread on distributed systems. Saving this for later 🧵</p>
                    </div>

                    {/* YT card */}
                    <div
                        className="float-card card-glass absolute rounded-2xl p-4 w-60 border border-white/50 shadow-xl"
                        style={{ top: "22%", right: "4%", animationDelay: "0.5s" }}
                    >
                        <div className="w-full h-20 bg-gray-900 rounded-lg mb-3 flex items-center justify-center relative overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-br from-red-900/50 to-gray-900" />
                            <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center z-10">
                                <svg className="w-4 h-4 fill-white ml-0.5" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                            </div>
                        </div>
                        <p className="text-xs font-semibold text-gray-800 leading-tight">MIT 6.006: Intro to Algorithms</p>
                        <p className="text-xs text-gray-400 mt-1">MIT OpenCourseWare</p>
                    </div>

                    {/* Doc card */}
                    <div
                        className="float-card card-glass absolute rounded-2xl p-4 w-52 border border-white/50 shadow-xl"
                        style={{ bottom: "18%", left: "5%", animationDelay: "1s" }}
                    >
                        <div className="flex items-center gap-2 mb-2">
                            <div className="w-8 h-8 rounded-lg bg-violet-100 flex items-center justify-center">
                                <svg className="w-4 h-4 text-violet-500 stroke-current" fill="none" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" /></svg>
                            </div>
                            <div>
                                <p className="text-xs font-semibold text-gray-800">Article saved</p>
                                <p className="text-xs text-gray-400">forte.com</p>
                            </div>
                        </div>
                        <p className="text-xs text-gray-600">Building a Second Brain — Tiago Forte</p>
                    </div>

                    {/* Link card */}
                    <div
                        className="float-card card-glass absolute rounded-2xl p-4 w-56 border border-white/50 shadow-xl"
                        style={{ bottom: "20%", right: "5%", animationDelay: "1.5s" }}
                    >
                        <div className="flex items-center gap-2">
                            <div className="w-8 h-8 rounded-lg bg-amber-100 flex items-center justify-center">
                                <svg className="w-4 h-4 text-amber-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" /></svg>
                            </div>
                            <div>
                                <p className="text-xs font-semibold text-gray-800">Link saved</p>
                                <p className="text-xs text-gray-400 truncate">github.com/readme</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Hero content */}
                <div
                    className="relative z-10 text-center max-w-3xl mx-auto"
                    style={{
                        opacity: mounted ? 1 : 0,
                        transform: mounted ? "translateY(0)" : "translateY(24px)",
                        transition: "opacity 0.9s ease, transform 0.9s ease",
                    }}
                >
                    <div className="inline-flex items-center gap-2 bg-white/60 border border-white/70 rounded-full px-4 py-1.5 mb-8 shadow-sm">
                        <div className="w-2 h-2 rounded-full bg-green-400 pulse-ring" />
                        <span className="text-xs font-medium text-gray-600">Your personal knowledge vault</span>
                    </div>

                    <h1
                        className="text-5xl md:text-7xl font-black leading-tight mb-6 text-gray-900"
                        style={{ fontFamily: "'Playfair Display', serif", letterSpacing: "-0.02em" }}
                    >
                        Stop forgetting
                        <br />
                        <span
                            className="italic"
                            style={{
                                background: "linear-gradient(135deg, #6366f1, #a855f7, #ec4899)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                                backgroundClip: "text",
                            }}
                        >
                            everything.
                        </span>
                    </h1>

                    <p className="text-lg md:text-xl text-gray-500 font-light leading-relaxed mb-10 max-w-xl mx-auto">
                        One place to save tweets, YouTube videos, articles, and links — so you always know where to find the things that matter.
                    </p>

                    <button
                        onClick={() => navigate("/signup")}
                        className="cta-btn text-white font-semibold text-base px-10 py-4 rounded-2xl inline-flex items-center gap-3 relative overflow-hidden group cursor-pointer"
                    >
                        <span className="shimmer absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <span className="relative">Build your Second Brain</span>
                        <svg className="w-5 h-5 relative transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                        </svg>
                    </button>

                    <p className="text-xs text-gray-400 mt-4">Free to start. No credit card required.</p>
                </div>

                {/* Scroll hint */}
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 opacity-40">
                    <p className="text-xs text-gray-500">scroll to explore</p>
                    <div className="w-px h-8 bg-gray-400 animate-pulse" />
                </div>
            </section>

            {/* ── FEATURES ── */}
            <section className="py-24 px-4 bg-white relative">
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-16">
                        <p className="text-sm font-semibold tracking-widest text-violet-500 uppercase mb-3">What you can store</p>
                        <h2
                            className="text-4xl md:text-5xl font-black text-gray-900 leading-tight"
                            style={{ fontFamily: "'Playfair Display', serif" }}
                        >
                            Everything. In one place.
                        </h2>
                        <p className="text-gray-400 mt-4 text-lg max-w-lg mx-auto font-light">
                            No more 47 open tabs, buried bookmarks, or "I know I saved this somewhere."
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {features.map((f, i) => (
                            <div
                                key={i}
                                className={`feature-card rounded-3xl p-7 bg-gradient-to-br ${f.color} border ${f.border}`}
                                style={{ animationDelay: `${i * 0.1}s` }}
                            >
                                <div className={`w-12 h-12 rounded-2xl ${f.iconBg} flex items-center justify-center mb-5`}>
                                    {f.icon}
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">{f.title}</h3>
                                <p className="text-gray-500 text-sm leading-relaxed">{f.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── HOW IT WORKS ── */}
            <section className="py-24 px-4" style={{ background: "linear-gradient(180deg, #fff 0%, #f5f0ff 100%)" }}>
                <div className="max-w-3xl mx-auto text-center">
                    <p className="text-sm font-semibold tracking-widest text-violet-500 uppercase mb-3">How it works</p>
                    <h2
                        className="text-4xl md:text-5xl font-black text-gray-900 mb-16 leading-tight"
                        style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                        Three steps to clarity
                    </h2>

                    <div className="flex flex-col gap-0 text-left">
                        {[
                            { num: "01", title: "Save anything", desc: "Paste a link, tweet URL, or YouTube video. It's in your brain instantly." },
                            { num: "02", title: "Organize automatically", desc: "Content is sorted by type. Tweets, videos, docs — always where you expect them." },
                            { num: "03", title: "Find it instantly", desc: "Search across everything you've saved. Never lose a great idea again." },
                        ].map((step, i) => (
                            <div key={i} className="flex items-start gap-8 py-10 border-b border-gray-100 last:border-0 group">
                                <span
                                    className="text-6xl font-black leading-none flex-shrink-0 transition-colors"
                                    style={{
                                        fontFamily: "'Playfair Display', serif",
                                        background: "linear-gradient(135deg, #e0e0e0, #c0c0c0)",
                                        WebkitBackgroundClip: "text",
                                        WebkitTextFillColor: "transparent",
                                        backgroundClip: "text",
                                    }}
                                >
                                    {step.num}
                                </span>
                                <div>
                                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{step.title}</h3>
                                    <p className="text-gray-400 text-base leading-relaxed">{step.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── FINAL CTA ── */}
            <section className="hero-gradient py-28 px-4 text-center relative overflow-hidden">
                <div className="orb w-64 h-64 bg-violet-300/40" style={{ top: "-30%", right: "10%" }} />
                <div className="orb w-48 h-48 bg-orange-200/50" style={{ bottom: "-20%", left: "10%" }} />

                <div className="relative z-10 max-w-xl mx-auto">
                    <h2
                        className="text-4xl md:text-6xl font-black text-gray-900 mb-6 leading-tight"
                        style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                        Ready to upgrade
                        <br />
                        <span
                            className="italic"
                            style={{
                                background: "linear-gradient(135deg, #6366f1, #a855f7)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                                backgroundClip: "text",
                            }}
                        >
                            your memory?
                        </span>
                    </h2>
                    <p className="text-gray-500 text-lg mb-10 font-light">
                        Join thousands who never lose a great idea again.
                    </p>

                    <button
                        onClick={() => navigate("/signup")}
                        className="cta-btn text-white font-semibold text-base px-10 py-4 rounded-2xl inline-flex items-center gap-3 group relative overflow-hidden cursor-pointer"
                    >
                        <span className="shimmer absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <span className="relative">Get Started — It's Free</span>
                        <svg className="w-5 h-5 relative transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                        </svg>
                    </button>
                </div>
            </section>

            {/* ── FOOTER ── */}
            <footer className="bg-white border-t border-gray-100 py-8 px-6 text-center">
                <div className="flex items-center justify-center gap-2 mb-2">
                    <div className="w-6 h-6 rounded-md flex items-center justify-center cta-btn">
                        <svg className="w-3 h-3" fill="none" stroke="white" strokeWidth="2" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636-.707.707M21 12h-1M4 12H3m3.343-5.657-.707-.707m2.828 9.9a5 5 0 1 1 7.072 0l-.548.547A3.374 3.374 0 0 0 14 18.469V19a2 2 0 1 1-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                        </svg>
                    </div>
                    <span className="font-semibold text-gray-700">Second Brain</span>
                </div>
                <p className="text-xs text-gray-400">© {new Date().getFullYear()} Second Brain. Your knowledge, organized.</p>
            </footer>
        </div>
    );
}