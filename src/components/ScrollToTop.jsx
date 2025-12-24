import { useEffect, useState } from "react";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 300);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className={`
        fixed bottom-8 right-8 z-50
        h-14 w-14 rounded-full
        bg-gradient-to-tr from-[#0E6AB6] to-[#2E98DA]
        text-white text-2xl font-bold
        shadow-[0_12px_30px_rgba(14,106,182,0.45)]
        transition-all duration-300
        hover:scale-110 hover:-translate-y-1
        active:scale-95
        ${visible ? "opacity-100 scale-100" : "opacity-0 scale-0"}
      `}
    >
      ↑
    </button>
  );
}
