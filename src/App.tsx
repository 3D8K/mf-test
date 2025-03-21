import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Defaults } from "@react-three/uikit-default";
import { AppContent } from "./components/layout/AppContent";
import { APP_CANVAS_STYLES } from "./styles";

export const App = () => {
  return (
    <Canvas
      style={APP_CANVAS_STYLES}
      gl={{ localClippingEnabled: true }}
    >
      <OrbitControls 
        enableZoom={false}
        enablePan={false}
        enableDamping={true}
        dampingFactor={0.05}
        rotateSpeed={0.5}
      />
      <Defaults>
        <AppContent />
      </Defaults>
    </Canvas>
  );
};
