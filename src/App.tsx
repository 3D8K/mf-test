import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Defaults } from "@react-three/uikit-default";
import { AppContent } from "./components/layout/AppContent";

export const App = () => {
  return (
    <Canvas
      style={{ position: "absolute", inset: "0", touchAction: "none" }}
      gl={{ localClippingEnabled: true }}
    >
      <OrbitControls />
      <Defaults>
        <AppContent />
      </Defaults>
    </Canvas>
  );
};
