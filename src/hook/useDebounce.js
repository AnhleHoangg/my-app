import { useState, useEffect } from "react";
function useDebounce(value, delay) {
  const [Debounce, setDebounce] = useState(value);
  useEffect(() => {
    const handle = setTimeout(() => setDebounce(value), delay);
    return () => clearTimeout(handle);
    // eslint-disable-next-line
  }, [value]);
  return Debounce;
}

export default useDebounce;
