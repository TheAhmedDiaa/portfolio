import { lazy, useState } from "react";
import LazyMount from "./LazyMount";
import useMediaQuery from "./useMediaQuery";

const AeroShards = lazy(() => import("../Backgrounds/AeroShards/AeroShards"));

// Section wrapper with an AeroShards (WebGPU) background.
// If WebGPU is unavailable, the background is simply dropped.
export default function BackgroundSection({ id, placement = "full", children }) {
  const [failed, setFailed] = useState(false);
  const isMobile = useMediaQuery("(max-width: 767px)");

  return (
    <section id={id} className="relative isolate w-full overflow-hidden">
      {!failed && (
        <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
          <LazyMount>
          <AeroShards
            placement={isMobile ? "full" : placement}
            count={isMobile ? 350 : 650}
            dpr={1}
            markers="plus"
            holdToGather={false}
            onError={(error) => {
              console.error(`[BackgroundSection:${id}] AeroShards background failed:`, error);
              setFailed(true);
            }}
          />
          </LazyMount>
          <div className="absolute inset-0 bg-black/55 md:bg-black/30" />
        </div>
      )}
      <div className="mx-auto w-full max-w-6xl px-6 py-24">{children}</div>
    </section>
  );
}
