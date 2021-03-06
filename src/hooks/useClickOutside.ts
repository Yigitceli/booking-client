import { useEffect } from "react";

export default function useOnClickOutside(
  ref: React.MutableRefObject<any>,
  handler: () => void,
  openRef: React.MutableRefObject<any>,
  optionalRef: React.MutableRefObject<any> | undefined = undefined
) {
  useEffect(() => {
    const listener = (event: MouseEvent | TouchEvent) => {
      if (
        !ref.current ||
        ref.current?.contains(event.target) ||
        openRef.current?.contains(event.target) ||
        optionalRef?.current?.contains(event.target)
      ) {
        return;
      }
      handler();
    };
    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);
    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, handler]);
}
