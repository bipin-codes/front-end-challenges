import { FC, useEffect } from "react";
const useDisableScroll: FC<{ isOpen: boolean }> = ({ isOpen }): null => {
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset";
  }, [isOpen]);
  return null;
};
export default useDisableScroll;
