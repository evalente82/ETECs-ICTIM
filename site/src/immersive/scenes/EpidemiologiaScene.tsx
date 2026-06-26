import { useMemo, useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { Float, Sparkles } from "@react-three/drei";
import * as THREE from "three";
import { type SceneProps, damp, inv, lerp } from "../core";

const TEAL = "#10b981";
const GLOW = "#2dd4bf";

/* ---------- microscópio estilizado (primitivas) ---------- */
function Microscope() {
  const body = { color: "#e9edf4", metalness: 0.65, roughness: 0.28 };
  const dark = { color: "#1f2630", metalness: 0.7, roughness: 0.35 };
  return (
    <group position={[0, -1.1, 0]} rotation={[0, -0.35, 0]}>
      {/* base */}
      <mesh position={[0, 0, 0.2]}>
        <cylinderGeometry args={[1.15, 1.3, 0.32, 48]} />
        <meshStandardMaterial {...body} />
      </mesh>
      {/* coluna/braço */}
      <mesh position={[0.55, 1.05, 0]} rotation={[0, 0, -0.12]}>
        <boxGeometry args={[0.42, 2.2, 0.5]} />
        <meshStandardMaterial {...body} />
      </mesh>
      {/* platina */}
      <mesh position={[-0.1, 0.95, 0.15]}>
        <boxGeometry args={[1.1, 0.12, 1.0]} />
        <meshStandardMaterial {...dark} />
      </mesh>
      {/* lâmina na platina (acento teal) */}
      <mesh position={[-0.1, 1.02, 0.2]}>
        <boxGeometry args={[0.7, 0.03, 0.28]} />
        <meshStandardMaterial color={GLOW} emissive={TEAL} emissiveIntensity={0.6} />
      </mesh>
      {/* revólver de objetivas */}
      <mesh position={[-0.1, 1.55, 0.1]}>
        <cylinderGeometry args={[0.34, 0.34, 0.22, 24]} />
        <meshStandardMaterial {...dark} />
      </mesh>
      {[-0.16, 0, 0.16].map((x, i) => (
        <mesh key={i} position={[x - 0.1, 1.34, 0.2]}>
          <cylinderGeometry args={[0.07, 0.05, 0.34, 16]} />
          <meshStandardMaterial color="#aeb6c2" roughness={0.3} metalness={0.8} />
        </mesh>
      ))}
      {/* tubo do corpo */}
      <mesh position={[-0.1, 2.05, 0.05]}>
        <cylinderGeometry args={[0.26, 0.26, 0.9, 24]} />
        <meshStandardMaterial {...body} />
      </mesh>
      {/* oculares binoculares inclinadas para o observador */}
      {[-0.18, 0.18].map((x, i) => (
        <mesh key={i} position={[x - 0.1, 2.62, 0.5]} rotation={[0.7, 0, 0]}>
          <cylinderGeometry args={[0.12, 0.14, 0.6, 20]} />
          <meshStandardMaterial color="#2a313d" metalness={0.7} roughness={0.3} />
        </mesh>
      ))}
      {/* lente brilhante nas oculares */}
      {[-0.18, 0.18].map((x, i) => (
        <mesh key={`l${i}`} position={[x - 0.1, 2.82, 0.66]} rotation={[0.7, 0, 0]}>
          <cylinderGeometry args={[0.1, 0.1, 0.03, 20]} />
          <meshStandardMaterial color={GLOW} emissive={TEAL} emissiveIntensity={1.1} />
        </mesh>
      ))}
      {/* botões de foco */}
      {[0.62, -0.62].map((z, i) => (
        <mesh key={i} position={[0.78, 0.5, z]} rotation={[Math.PI / 2, 0, 0]}>
          <cylinderGeometry args={[0.22, 0.22, 0.16, 24]} />
          <meshStandardMaterial color="#9aa3b0" metalness={0.7} roughness={0.35} />
        </mesh>
      ))}
    </group>
  );
}

/* ---------- vírus (coronavírus estilizado) ---------- */
function Virus({ position, scale = 1 }: { position: [number, number, number]; scale?: number }) {
  const ref = useRef<THREE.Group>(null);
  const spikes = useMemo(() => {
    const pts: THREE.Vector3[] = [];
    const n = 14;
    const phi = Math.PI * (3 - Math.sqrt(5));
    for (let i = 0; i < n; i++) {
      const y = 1 - (i / (n - 1)) * 2;
      const r = Math.sqrt(1 - y * y);
      const th = phi * i;
      pts.push(new THREE.Vector3(Math.cos(th) * r, y, Math.sin(th) * r));
    }
    return pts;
  }, []);
  useFrame((_, dt) => {
    if (ref.current) ref.current.rotation.y += dt * 0.25;
  });
  return (
    <group ref={ref} position={position} scale={scale}>
      <mesh>
        <icosahedronGeometry args={[0.5, 1]} />
        <meshStandardMaterial
          color="#0f766e"
          emissive={TEAL}
          emissiveIntensity={0.35}
          roughness={0.5}
          metalness={0.2}
          flatShading
        />
      </mesh>
      {spikes.map((p, i) => (
        <group key={i} position={p.clone().multiplyScalar(0.5)}>
          <mesh position={p.clone().multiplyScalar(0.12)}>
            <sphereGeometry args={[0.09, 10, 10]} />
            <meshStandardMaterial color={GLOW} emissive={TEAL} emissiveIntensity={0.9} />
          </mesh>
        </group>
      ))}
    </group>
  );
}

function VirusField() {
  const viruses = useMemo(
    () =>
      Array.from({ length: 11 }).map((_, i) => {
        const a = i * 2.39996;
        const radius = 2.2 + (i % 3) * 1.1;
        return {
          position: [
            Math.cos(a) * radius,
            Math.sin(a * 1.3) * 2.4,
            -3 - i * 3.6,
          ] as [number, number, number],
          scale: 0.7 + ((i * 37) % 60) / 100,
        };
      }),
    []
  );
  return (
    <group>
      {viruses.map((v, i) => (
        <Float key={i} speed={1.4} rotationIntensity={0.6} floatIntensity={1.1}>
          <Virus position={v.position} scale={v.scale} />
        </Float>
      ))}
    </group>
  );
}

/* ---------- câmera dirigida pelo scroll ---------- */
function Rig({ progress, micro }: { progress: SceneProps["progress"]; micro: React.RefObject<THREE.Group> }) {
  const { camera } = useThree();
  const target = useRef(new THREE.Vector3(0, 0.3, 0));
  useFrame((_, dt) => {
    const p = progress.current;
    // dolly para a ocular -> mergulho -> viagem pelo campo viral
    let z: number;
    if (p < 0.16) z = lerp(6.2, 2.4, p / 0.16);
    else if (p < 0.22) z = lerp(2.4, -2, (p - 0.16) / 0.06);
    else z = lerp(-2, -40, (p - 0.22) / 0.78);

    const ty = lerp(0.6, 0.2, inv(p, 0, 0.16));
    const sway = Math.sin(p * 22) * 0.5 * inv(p, 0.22, 1);

    camera.position.x = damp(camera.position.x, sway, 3, dt);
    camera.position.y = damp(camera.position.y, ty + Math.cos(p * 17) * 0.3 * inv(p, 0.22, 1), 3, dt);
    camera.position.z = damp(camera.position.z, z, 4, dt);

    target.current.set(sway * 0.5, ty, z - 6);
    camera.lookAt(target.current);

    // microscópio: inclina ao "encostar o olho" e some no mergulho
    if (micro.current) {
      const lean = inv(p, 0, 0.16);
      micro.current.rotation.x = lerp(0, 0.45, lean);
      micro.current.rotation.y = -0.35 + Math.sin(performance.now() * 0.0002) * 0.15;
      const fade = 1 - inv(p, 0.16, 0.21);
      micro.current.scale.setScalar(lerp(0.9, 1.05, lean) * fade);
      micro.current.visible = fade > 0.02;
    }
  });
  return null;
}

export function EpidemiologiaScene({ progress }: SceneProps) {
  const micro = useRef<THREE.Group>(null);
  return (
    <>
      <color attach="background" args={["#04100d"]} />
      <fog attach="fog" args={["#04100d", 6, 34]} />
      <ambientLight intensity={0.6} />
      <pointLight position={[4, 6, 6]} intensity={120} color={GLOW} distance={40} />
      <pointLight position={[-6, -2, -6]} intensity={90} color={TEAL} distance={45} />
      <directionalLight position={[2, 4, 5]} intensity={1.1} />

      <group ref={micro}>
        <Microscope />
      </group>

      <VirusField />
      <Sparkles count={120} scale={[26, 16, 40]} position={[0, 0, -18]} size={2.4} speed={0.3} color={GLOW} opacity={0.6} />

      <Rig progress={progress} micro={micro} />
    </>
  );
}
