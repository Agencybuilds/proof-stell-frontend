
import React from "react";
import { motion, useAnimation } from "framer-motion";

// Example token data used for the animated UI demo
// Each token has a unique color and ID for rendering circles
const tokens = [
  { id: 1, color: "#FFD600" },
  { id: 2, color: "#FF6F00" },
  { id: 3, color: "#00E676" },
];

const FeatureDemo: React.FC = () => {
  // Framer Motion animation controller
  // Allows programmatic control of multiple animated elements
  const controls = useAnimation();

  React.useEffect(() => {
    // Start a looping animation for each token
    // i = index of each token (used to stagger animation)
    controls.start(i => ({
      x: [0, 80, 0], // move right then back
      y: [0, -40, 0], // move up then back down
      transition: {
        repeat: Infinity, // loop forever
        duration: 2,       // animation speed
        delay: i * 0.3     // stagger effect per token
      }
    }));
  }, [controls]);

  return (
    <div
      style={{
        width: "100%",
        height: 180,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 32,
        background: "#23293a",
        borderRadius: 16,
        margin: "24px 0"
      }}
    >
      {/* Render animated token circles */}
      {tokens.map((token, i) => (
        <motion.div
          key={token.id}
          custom={i} // pass index into animation function
          animate={controls} // shared animation controller
          style={{
            width: 48,
            height: 48,
            borderRadius: "50%",
            background: token.color,
            boxShadow: "0 2px 12px rgba(0,0,0,0.2)",
            border: "3px solid #fff"
          }}
        />
      ))}

      {/* Label describing the animation */}
      <span style={{ color: "#fff", marginLeft: 24, fontWeight: 600 }}>
        Token Mechanics in Action!
      </span>
    </div>
  );
};

export default FeatureDemo;

