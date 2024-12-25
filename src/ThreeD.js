import { Canvas, useThree } from "@react-three/fiber";
import {
  Center,
  Text3D,
  Environment,
  OrbitControls,
  Float,
  Stars,
  MeshTransmissionMaterial,
} from "@react-three/drei";
import { color } from "framer-motion";
import { useEffect, useState } from "react";

const ThreeD = () => {
  const { ...config } = {
    backside: true,
    backsideThickness: 0.5,
    transmission: 1,
    thickness: 0.3,
    chromaticAbbereation: 5,
    ior: 1.5,
    color: "#9b81de",
  };

  return (
    <Canvas camera={{ position: [0, 0, 6] }}>
      <Float speed={2} rotationIntensity={1}>
        <Text config={config} position={[0, 1, 0]}>
          Happy
        </Text>
        <Text config={config} position={[0.1, 0.2, 0]}>
          B'day
        </Text>
        <Text config={config} position={[0.7, -0.3, 0]}>
          S A T I S H
        </Text>

        <Stars count={400} speed={5} saturation={0} />
        <Environment preset="warehouse" blur={0.5} />

        <OrbitControls />
      </Float>
    </Canvas>
  );
};

function Text({ children, config, ...props }) {
  const { viewport } = useThree(); // Get the viewport size
  const [scale, setScale] = useState(1);

  const [position, setPosition] = useState([0, 0, 0]);

  useEffect(() => {
    // Adjust scale dynamically based on viewport width
    if (viewport.width < 6) {
      setScale(0.4); // Smaller scale for mobile
      setPosition([1, -1, 1]); // Center text on mobile
    } else if (viewport.width < 12) {
      setScale(1); // Medium scale for tablets
      setPosition([0, 0, 0]); // Center text on tablets
    } else {
      setScale(1.5); // Larger scale for desktops
      setPosition([0, 0, 0]); // Center text on desktops
    }
  }, [viewport]);
  return (
    <>
      <group position={position}>
        <Center scale={[0.8, 1, 1]} front top {...props}>
          <Text3D
            font="/font/Inter_Black_Regular.json"
            scale={scale}
            letterSpacing={0.02}
            height={0.25}
            bevelEnabled
            bevelSize={0.02}
            bevelSegments={10}
            curveSegments={128}
            bevelThickness={0.01}
          >
            {children}
            <MeshTransmissionMaterial {...config} />
          </Text3D>
        </Center>
      </group>
    </>
  );
}

export default ThreeD;
