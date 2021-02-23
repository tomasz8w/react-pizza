import { useEffect, useRef } from "react";

export default function useOnMountedEffect(func, deps) {
  const isMounted = useRef(false);

  useEffect(() => {
    if (isMounted.current) func();
    else isMounted.current = true;
  }, deps);
}
