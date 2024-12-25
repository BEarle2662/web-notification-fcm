import { Canvas } from "@react-three/fiber";
import {
  Center,
  Text3D,
  Environment,
  OrbitControls,
  Float,
  Stars,
  MeshTransmissionMaterial,
} from "@react-three/drei";

const ThreeD = () => {
  const { ...config } = {
    backside: true,
    backsideThickness: 0.3,
    transmission: 1,
    thickness: 0.3,
    chromaticAbbereation: 5,
    ior: 1.5,
  };

  return (
    <Canvas camera={{ position: [0, 0, 6] }}>
      <Float speed={2} rotationIntensity={1}>
        <Text config={config} position={[0, -1.5, 0]}>
          SimhaChalam
        </Text>

        <Stars count={400} speed={5} saturation={0} />
        <Environment preset="warehouse" blur={0.5} />
      </Float>
    </Canvas>
  );
};

function Text({ children, config, ...props }) {
  return (
    <>
      <group>
        <Center scale={[0.8, 1, 1]} front top {...props}>
          <Text3D
            font="/font/Inter_Black_Regular.json"
            scale={3}
            letterSpacing={-0.03}
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
