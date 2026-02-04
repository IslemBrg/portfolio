import React, { useState, useEffect } from "react";

const AnimationLottie = ({ animationPath, width }) => {
  const [Lottie, setLottie] = useState(null);

  useEffect(() => {
    import("lottie-react").then((mod) => setLottie(() => mod.default));
  }, []);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationPath,
    style: {
      width: "95%",
    },
  };

  if (!Lottie) return null;
  return <Lottie {...defaultOptions} />;
};

export default AnimationLottie;
