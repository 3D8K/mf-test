import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Defaults } from "@react-three/uikit-default";
import { AppContent } from "./components/layout/AppContent";
import { APP_CANVAS_STYLES } from "./utils/styles";

export const App = () => {
  return (
    <Canvas
      style={APP_CANVAS_STYLES}
      gl={{ localClippingEnabled: true }}
    >
      <OrbitControls />
      <Defaults>
        <AppContent />
      </Defaults>
    </Canvas>
  );
};
