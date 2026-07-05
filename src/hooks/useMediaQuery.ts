import { useEffect, useState } from "react";

/**
 * Reactively tracks a CSS media query. Starts `false` on first paint
 * (mobile-first), then upgrades after mount — so heavy desktop-only behaviour
 * (e.g. autoplaying background video) never runs on phones.
 */
export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const mql = window.matchMedia(query);
    const onChange = () => setMatches(mql.matches);
    onChange();
    mql.addEventListener("change", onChange);
    return () => mql.removeEventListener("change", onChange);
  }, [query]);

  return matches;
}
