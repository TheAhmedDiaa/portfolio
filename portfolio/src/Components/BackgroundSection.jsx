import { useState } from "react";
import AeroShards from "../Backgrounds/AeroShards/AeroShards";

// Section wrapper with an AeroShards (WebGPU) background.
// If WebGPU is unavailable, the background is simply dropped.
export default function BackgroundSection({ id, placement = "full", children }) {
  const [failed, setFailed] = useState(false);

  return (
    <section id={id} className="relative isolate w-full overflow-hidden">
      {!failed && (
        <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
          <AeroShards
            placement={placement}
            count={900}
            dpr={1.5}
            markers="plus"
            holdToGather={false}
            onError={(error) => {
              console.error(`[BackgroundSection:${id}] AeroShards background failed:`, error);
              setFailed(true);
            }}
          />
          <div className="absolute inset-0 bg-black/30" />
        </div>
      )}
      <div className="mx-auto w-full max-w-6xl px-6 py-24">{children}</div>
    </section>
  );
}
