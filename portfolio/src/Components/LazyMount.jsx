import { Suspense, useEffect, useRef, useState } from "react";

// Mounts children only while the wrapper is near the viewport.
// Far away => children unmount (WebGL/WebGPU context freed). Delay avoids thrash on fast scroll.
export default function LazyMount({
  children,
  rootMargin = "300px 0px",
  unmountDelay = 1200,
  className = "h-full w-full",
}) {
  const ref = useRef(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;
    if (typeof IntersectionObserver === "undefined") {
      setActive(true);
      return undefined;
    }
    let timer = 0;
    const observer = new IntersectionObserver(
      ([entry]) => {
        clearTimeout(timer);
        if (entry.isIntersecting) setActive(true);
        else timer = setTimeout(() => setActive(false), unmountDelay);
      },
      { rootMargin },
    );
    observer.observe(el);
    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, [rootMargin, unmountDelay]);

  return (
    <div ref={ref} className={className}>
      {active ? <Suspense fallback={null}>{children}</Suspense> : null}
    </div>
  );
}
