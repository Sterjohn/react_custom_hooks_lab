import { useEffect, useState } from "react";

export function useLocalStorage(key, initialValue = null) {
  // Initialize state from localStorage if available, otherwise use initialValue
  const [state, setState] = useState(() => {
    const stored = localStorage.getItem(key);
    return stored !== null ? stored : initialValue;
  });

  // Update localStorage whenever key or state changes
  useEffect(() => {
    localStorage.setItem(key, state);
  }, [key, state]);

  return [state, setState];
}