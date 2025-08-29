import { useEffect, useState } from "react";

export default function useMediaQuery(query, defaultValue = false) {
const [matches, setMatches] = useState(defaultValue);
useEffect(() => {
const mql = window.matchMedia(query);
const onChange = () => setMatches(mql.matches);
setMatches(mql.matches);
mql.addEventListener?.("change", onChange) || mql.addListener(onChange);
return () =>
mql.removeEventListener?.("change", onChange) || mql.removeListener(onChange);
}, [query]);
return matches;
}