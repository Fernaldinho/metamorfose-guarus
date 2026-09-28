import { useEffect, useState } from "react";

export function ScrollProgress() {
  const [p, setP] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const el = document.documentElement;
      const max = el.scrollHeight - el.clientHeight;
      setP(max > 0 ? (el.scrollTop / max) * 100 : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-[70] h-[3px]" aria-hidden="true">
      <div
        className="h-full bg-gradient-to-r from-[#B80000] via-[#FF0000] to-[#FF0000] shadow-[0_0_12px_rgba(230,0,0,0.9)]"
        style={{ width: `${p}%` }}
      />
    </div>
  );
}
