import React from "react";

const useMedia = (media) => {
  const width = window.innerWidth < 1100;
  const [match, setMatch] = React.useState(width);
  React.useEffect(() => {
    function handleResize() {
      setMatch(window.matchMedia(media).matches);
    }
    window.addEventListener("resize", handleResize);
  }, []);
  return match;
};

export default useMedia;
