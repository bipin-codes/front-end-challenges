import { useEffect } from "react";
interface DisableScroll {
  isOpen: boolean;
}
const useDisableScroll = (props: DisableScroll) => {
  useEffect(() => {
    document.body.style.overflow = props.isOpen ? "hidden" : "unset";
  }, [props.isOpen]);
};
export default useDisableScroll;
