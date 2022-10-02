import { useEffect } from "react";

const ScrollToTop = ({ children }) => {
  useEffect(() => {
    const canControlScrollRestoration = "scrollRestoration" in window.history;
    if (canControlScrollRestoration) {
      window.history.scrollRestoration = "manual";
    }

    window.scrollTo(0, 0);
  }, []);

  return children;
};

export default ScrollToTop;
