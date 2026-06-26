import { useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { Float, Sparkles } from "@react-three/drei";
import * as THREE from "three";
import { type SceneProps, damp, inv, lerp } from "../core";

const AMBER = "#f59e0b";
const RED = "#e23a2e";

/* ----- viga vermelha diagonal (assinatura do prédio) ----- */
function Beam({
  position,
  rotation,
  length = 8,
}: {
  position: [number, number, number];
  rotation: [number, number, number];
  length?: number;
}) {
  return (
    <mesh position={position} rotation={rotation}>
      <boxGeometry args={[0.28, length, 0.28]} />
      <meshStandardMaterial color={RED} emissive={RED} emissiveIntensity={0.35} roughness={0.4} metalness={0.3} />
    </mesh>
  );
}

/* ----- prédio multinível inspirado no Parque Tec. de Maricá ----- */
function Building() {
  const levels = [2.0, 3.5, 5.0, 6.5];
  const slab = { color: "#cfd4dc", metalness: 0.4, roughness: 0.45 };
  return (
    <group position={[0, 0, -6]}>
      {/* pilotis / base elevada */}
      {[-4.2, -1.4, 1.4, 4.2].map((x, i) => (
        <mesh key={i} position={[x, 1, 1.6]}>
          <boxGeometry args={[0.5, 2, 0.5]} />
          <meshStandardMaterial color="#aeb4bf" metalness={0.5} roughness={0.4} />
        </mesh>
      ))}
      {/* lajes empilhadas e levemente deslocadas (efeito orgânico das fotos) */}
      {levels.map((y, i) => (
        <group key={i} position={[(i % 2 === 0 ? -0.3 : 0.3), y, 0]}>
          <mesh>
            <boxGeometry args={[11 - i * 0.4, 0.5, 7]} />
            <meshStandardMaterial {...slab} />
          </mesh>
          {/* friso âmbar luminoso na borda frontal */}
          <mesh position={[0, 0.15, 3.55]}>
            <boxGeometry args={[11 - i * 0.4, 0.16, 0.12]} />
            <meshStandardMaterial color={AMBER} emissive={AMBER} emissiveIntensity={1.1} />
          </mesh>
          {/* fachada de vidro escura entre as lajes */}
          <mesh position={[0, -0.45, 3.45]}>
            <boxGeometry args={[10.4 - i * 0.4, 0.9, 0.06]} />
            <meshStandardMaterial
              color="#0e1726"
              metalness={0.9}
              roughness={0.12}
              transparent
              opacity={0.55}
            />
          </mesh>
        </group>
      ))}
      {/* vigas vermelhas em X — esquerda e direita */}
      {[-3.6, 3.6].map((x, i) => (
        <group key={i} position={[x, 3.4, 3.7]}>
          <Beam position={[0, 0, 0]} rotation={[0, 0, Math.PI / 4]} length={8.4} />
          <Beam position={[0, 0, 0]} rotation={[0, 0, -Math.PI / 4]} length={8.4} />
        </group>
      ))}
      {/* entrada (vão central no térreo) */}
      <mesh position={[0, 1, 3.5]}>
        <boxGeometry args={[2.4, 2, 0.1]} />
        <meshStandardMaterial color="#0a0f1a" metalness={0.8} roughness={0.2} emissive={AMBER} emissiveIntensity={0.15} />
      </mesh>
    </group>
  );
}

/* ----- painel holográfico flutuante (dashboards internos) ----- */
function Holo({ position, w = 2.4, h = 1.5 }: { position: [number, number, number]; w?: number; h?: number }) {
  return (
    <Float speed={2} rotationIntensity={0.25} floatIntensity={0.8}>
      <group position={position}>
        <mesh>
          <planeGeometry args={[w, h]} />
          <meshBasicMaterial color={AMBER} transparent opacity={0.08} side={THREE.DoubleSide} />
        </mesh>
        {/* moldura */}
        <lineSegments>
          <edgesGeometry args={[new THREE.PlaneGeometry(w, h)]} />
          <lineBasicMaterial color={AMBER} transparent opacity={0.9} />
        </lineSegments>
        {/* "linhas de dado" */}
        {[0.35, 0.1, -0.15, -0.4].map((y, i) => (
          <mesh key={i} position={[(-w / 2) + 0.3 + (i % 2) * 0.2, y, 0.01]}>
            <planeGeometry args={[w * (0.35 + (i % 3) * 0.18), 0.07]} />
            <meshBasicMaterial color={i === 0 ? "#fff" : AMBER} transparent opacity={i === 0 ? 0.9 : 0.55} />
          </mesh>
        ))}
      </group>
    </Float>
  );
}

function Trees() {
  const spots: [number, number][] = [
    [-9, 6], [9, 5], [-11, -2], [11, 0], [-7, 9], [7, 9],
  ];
  return (
    <group>
      {spots.map(([x, z], i) => (
        <group key={i} position={[x, 0, z]}>
          <mesh position={[0, 0.5, 0]}>
            <cylinderGeometry args={[0.12, 0.16, 1, 8]} />
            <meshStandardMaterial color="#3b2a1a" />
          </mesh>
          <mesh position={[0, 1.4, 0]}>
            <coneGeometry args={[0.7, 1.6, 10]} />
            <meshStandardMaterial color="#1f5135" />
          </mesh>
        </group>
      ))}
    </group>
  );
}

function Rig({ progress }: { progress: SceneProps["progress"] }) {
  const { camera } = useThree();
  const target = useRef(new THREE.Vector3(0, 3, -6));
  useFrame((_, dt) => {
    const p = progress.current;
    // aproxima pelo caminho -> entra -> percorre o interior
    let z: number, y: number, x: number, ty: number;
    if (p < 0.5) {
      const k = p / 0.5;
      z = lerp(20, 4.5, k);
      y = lerp(2.6, 2.0, k) + Math.sin(k * Math.PI) * 1.6; // leve grua para mostrar os níveis
      x = Math.sin(k * Math.PI) * 1.2;
      ty = lerp(3, 3.5, k);
    } else if (p < 0.6) {
      const k = (p - 0.5) / 0.1;
      z = lerp(4.5, -3, k);
      y = lerp(2.0, 3.2, k);
      x = 0;
      ty = 3.5;
    } else {
      const k = (p - 0.6) / 0.4;
      z = lerp(-3, -17, k);
      y = 3.3 + Math.sin(k * Math.PI * 2) * 0.3;
      x = Math.sin(k * Math.PI * 3) * 1.6; // "caminha" entre as salas
      ty = 3.3;
    }
    camera.position.x = damp(camera.position.x, x, 3, dt);
    camera.position.y = damp(camera.position.y, y, 3, dt);
    camera.position.z = damp(camera.position.z, z, 3.2, dt);

    target.current.set(x * 0.4, ty, z - 8);
    camera.lookAt(target.current);
  });
  // dashboards aparecem só no interior
  return null;
}

export function ParqueScene({ progress }: SceneProps) {
  const interior = useRef<THREE.Group>(null);
  useFrame(() => {
    if (interior.current) interior.current.visible = progress.current > 0.55;
  });
  return (
    <>
      <color attach="background" args={["#0a0c12"]} />
      <fog attach="fog" args={["#0a0c12", 12, 48]} />
      <ambientLight intensity={0.7} />
      <hemisphereLight args={["#dfe7ff", "#1a2a16", 0.6]} />
      <directionalLight position={[8, 12, 6]} intensity={1.6} castShadow={false} />
      <pointLight position={[0, 5, 10]} intensity={120} color={AMBER} distance={40} />

      {/* gramado */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]}>
        <planeGeometry args={[120, 120]} />
        <meshStandardMaterial color="#13301f" roughness={1} />
      </mesh>
      {/* caminho pavimentado até a entrada */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.02, 8]}>
        <planeGeometry args={[3.2, 28]} />
        <meshStandardMaterial color="#7d8794" roughness={0.8} emissive={AMBER} emissiveIntensity={0.04} />
      </mesh>

      <Building />
      <Trees />

      {/* dashboards internos */}
      <group ref={interior}>
        <Holo position={[-2.6, 3.4, -7]} />
        <Holo position={[2.8, 3.6, -10]} w={2.8} h={1.7} />
        <Holo position={[-3, 3.2, -13]} w={2.2} h={1.4} />
        <Holo position={[2.2, 3.8, -16]} />
        <Sparkles count={60} scale={[10, 6, 14]} position={[0, 3.4, -11]} size={2.5} speed={0.3} color={AMBER} opacity={0.6} />
      </group>

      <Rig progress={progress} />
    </>
  );
}
