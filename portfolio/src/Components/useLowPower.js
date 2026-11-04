import { useEffect, useState } from "react";

// True when animated GPU backgrounds should be replaced by a static gradient:
// reduced-motion, data-saver, very low RAM/CPU, or no WebGL2 at all.
function detect() {
  if (typeof window === "undefined") return false;
  const nav = window.navigator;
  const reduced = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches ?? false;
  const saveData = nav.connection?.saveData === true;
  const lowMemory = typeof nav.deviceMemory === "number" && nav.deviceMemory <= 2;
  const lowCpu = typeof nav.hardwareConcurrency === "number" && nav.hardwareConcurrency <= 2;
  const noWebgl = typeof window.WebGL2RenderingContext === "undefined";
  return reduced || saveData || lowMemory || lowCpu || noWebgl;
}

export default function useLowPower() {
  const [lowPower, setLowPower] = useState(detect);

  useEffect(() => {
    const mq = window.matchMedia?.("(prefers-reduced-motion: reduce)");
    if (!mq) return undefined;
    const onChange = () => setLowPower(detect());
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  return lowPower;
}
