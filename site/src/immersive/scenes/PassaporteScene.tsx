import { useMemo, useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { QuadraticBezierLine, Stars } from "@react-three/drei";
import * as THREE from "three";
import { type SceneProps, damp, lerp } from "../core";

const INDIGO = "#6366f1";
const VIOLET = "#a78bfa";

/** converte lat/long (graus) para vetor na esfera de raio r */
function geo(lat: number, lon: number, r: number) {
  const phi = (90 - lat) * (Math.PI / 180);
  const theta = (lon + 180) * (Math.PI / 180);
  return new THREE.Vector3(
    -r * Math.sin(phi) * Math.cos(theta),
    r * Math.cos(phi),
    r * Math.sin(phi) * Math.sin(theta)
  );
}

const R = 2.3;
const MARKERS = [
  geo(-22.9, -42.8, R), // Maricá
  geo(40, -74, R),
  geo(48, 2, R),
  geo(35, 139, R),
  geo(-33, 151, R),
  geo(1, 103, R),
];

function Globe() {
  const grp = useRef<THREE.Group>(null);
  const arcs = useMemo(() => {
    const base = MARKERS[0];
    return MARKERS.slice(1).map((m) => {
      const mid = base.clone().add(m).multiplyScalar(0.5).setLength(R * 1.55);
      return { start: base, mid, end: m };
    });
  }, []);
  useFrame((_, dt) => {
    if (grp.current) grp.current.rotation.y += dt * 0.06;
  });
  return (
    <group ref={grp}>
      {/* núcleo */}
      <mesh>
        <sphereGeometry args={[R, 48, 48]} />
        <meshStandardMaterial color="#161a3a" roughness={0.6} metalness={0.3} />
      </mesh>
      {/* malha luminosa */}
      <mesh scale={1.004}>
        <icosahedronGeometry args={[R, 6]} />
        <meshBasicMaterial color={INDIGO} wireframe transparent opacity={0.22} />
      </mesh>
      {/* atmosfera */}
      <mesh scale={1.12}>
        <sphereGeometry args={[R, 32, 32]} />
        <meshBasicMaterial color={VIOLET} transparent opacity={0.08} side={THREE.BackSide} />
      </mesh>
      {/* marcadores */}
      {MARKERS.map((m, i) => (
        <group key={i} position={m}>
          <mesh>
            <sphereGeometry args={[i === 0 ? 0.1 : 0.07, 16, 16]} />
            <meshStandardMaterial
              color={i === 0 ? "#fff" : VIOLET}
              emissive={i === 0 ? VIOLET : INDIGO}
              emissiveIntensity={2}
            />
          </mesh>
          <mesh scale={i === 0 ? 1 : 0.7}>
            <ringGeometry args={[0.16, 0.2, 24]} />
            <meshBasicMaterial color={VIOLET} transparent opacity={0.5} side={THREE.DoubleSide} />
          </mesh>
        </group>
      ))}
      {/* arcos de conexão (Maricá -> mundo) */}
      {arcs.map((a, i) => (
        <QuadraticBezierLine
          key={i}
          start={a.start}
          mid={a.mid}
          end={a.end}
          color={VIOLET}
          lineWidth={1.5}
          transparent
          opacity={0.55}
          dashed={false}
        />
      ))}
    </group>
  );
}

function Rig({ progress }: { progress: SceneProps["progress"] }) {
  const { camera } = useThree();
  const look = useRef(new THREE.Vector3(0, 0, 0));
  useFrame((_, dt) => {
    const p = progress.current;
    // órbita ao redor do globo, com aproximações ("aterrissagens") em cada beat
    const theta = lerp(0.4, Math.PI * 2.4, p);
    const radius = 4.4 + Math.sin(p * Math.PI * 6) * 1.3 - p * 0.4;
    const height = Math.sin(p * Math.PI * 3) * 1.8 + 0.4;

    const tx = Math.sin(theta) * radius;
    const tz = Math.cos(theta) * radius;
    camera.position.x = damp(camera.position.x, tx, 2.5, dt);
    camera.position.y = damp(camera.position.y, height, 2.5, dt);
    camera.position.z = damp(camera.position.z, tz, 2.5, dt);
    camera.lookAt(look.current);
  });
  return null;
}

export function PassaporteScene({ progress }: SceneProps) {
  return (
    <>
      <color attach="background" args={["#060617"]} />
      <fog attach="fog" args={["#060617", 9, 26]} />
      <ambientLight intensity={0.55} />
      <pointLight position={[6, 4, 6]} intensity={130} color={VIOLET} distance={40} />
      <pointLight position={[-6, -3, -4]} intensity={90} color={INDIGO} distance={45} />
      <directionalLight position={[3, 5, 4]} intensity={0.9} />

      <Stars radius={60} depth={40} count={2600} factor={4} saturation={0} fade speed={0.6} />
      <Globe />
      <Rig progress={progress} />
    </>
  );
}
