"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function ThreeCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Check WebGL support
    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({
        alpha: true,
        antialias: true,
        powerPreference: "high-performance",
      });
    } catch {
      console.warn("WebGL not supported, falling back.");
      return;
    }

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      45,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 24;

    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    container.appendChild(renderer.domElement);

    // Warm Lighting: Golden Sunlight & Amber Mocha
    const ambientLight = new THREE.AmbientLight(0xffeedd, 0.9);
    scene.add(ambientLight);

    const primaryLight = new THREE.PointLight(0xfacc15, 3.5, 50); // Gen Z bright yellow
    primaryLight.position.set(10, 10, 15);
    scene.add(primaryLight);

    const secondaryLight = new THREE.PointLight(0xd97706, 2.5, 50); // Warm amber
    secondaryLight.position.set(-12, -8, 10);
    scene.add(secondaryLight);

    const accentLight = new THREE.PointLight(0x78350f, 3.0, 40); // Deep rich mocha
    accentLight.position.set(0, 15, -5);
    scene.add(accentLight);

    // Main 3D Interactive Centerpiece: Delulogic Geometric Core (Torus Knot)
    const knotGeometry = new THREE.TorusKnotGeometry(5.2, 1.4, 130, 24, 2, 3);
    const knotMaterial = new THREE.MeshStandardMaterial({
      color: 0x22170d,
      roughness: 0.25,
      metalness: 0.85,
      wireframe: true,
      wireframeLinewidth: 1.2,
      emissive: 0x9a481c,
      emissiveIntensity: 0.35,
    });
    const knotMesh = new THREE.Mesh(knotGeometry, knotMaterial);
    scene.add(knotMesh);

    // Inner Glowing Core (Icosahedron)
    const innerGeometry = new THREE.IcosahedronGeometry(3.2, 2);
    const innerMaterial = new THREE.MeshStandardMaterial({
      color: 0xfacc15,
      roughness: 0.1,
      metalness: 0.9,
      wireframe: true,
      emissive: 0xfacc15,
      emissiveIntensity: 0.6,
    });
    const innerMesh = new THREE.Mesh(innerGeometry, innerMaterial);
    scene.add(innerMesh);

    // Floating Stardust Particles (600 particles)
    const particleCount = 650;
    const particlePositions = new Float32Array(particleCount * 3);
    const particleColors = new Float32Array(particleCount * 3);

    const color1 = new THREE.Color(0xfacc15); // Gen Z Yellow
    const color2 = new THREE.Color(0xb45309); // Mocha Gold
    const color3 = new THREE.Color(0xfef08a); // Pale Gold Light

    for (let i = 0; i < particleCount; i++) {
      const i3 = i * 3;
      particlePositions[i3] = (Math.random() - 0.5) * 45;
      particlePositions[i3 + 1] = (Math.random() - 0.5) * 45;
      particlePositions[i3 + 2] = (Math.random() - 0.5) * 35;

      const randomColor = Math.random();
      const chosenColor =
        randomColor > 0.66 ? color1 : randomColor > 0.33 ? color2 : color3;
      particleColors[i3] = chosenColor.r;
      particleColors[i3 + 1] = chosenColor.g;
      particleColors[i3 + 2] = chosenColor.b;
    }

    const particleGeometry = new THREE.BufferGeometry();
    particleGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(particlePositions, 3)
    );
    particleGeometry.setAttribute(
      "color",
      new THREE.BufferAttribute(particleColors, 3)
    );

    const particleMaterial = new THREE.PointsMaterial({
      size: 0.16,
      vertexColors: true,
      transparent: true,
      opacity: 0.85,
      blending: THREE.AdditiveBlending,
    });

    const particles = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particles);

    // Floating Orbiting Ring
    const ringGeometry = new THREE.RingGeometry(8.5, 8.8, 64);
    const ringMaterial = new THREE.MeshBasicMaterial({
      color: 0xfacc15,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.25,
      wireframe: true,
    });
    const ringMesh = new THREE.Mesh(ringGeometry, ringMaterial);
    ringMesh.rotation.x = Math.PI / 2.8;
    scene.add(ringMesh);

    // Mouse Tracking Parallax
    let targetX = 0;
    let targetY = 0;
    let mouseX = 0;
    let mouseY = 0;

    const onMouseMove = (e: MouseEvent) => {
      const windowHalfX = window.innerWidth / 2;
      const windowHalfY = window.innerHeight / 2;
      mouseX = (e.clientX - windowHalfX) * 0.0012;
      mouseY = (e.clientY - windowHalfY) * 0.0012;
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });

    // Handle Resize
    const onResize = () => {
      if (!container) return;
      const width = container.clientWidth;
      const height = container.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener("resize", onResize);

    // Animation Loop
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Smooth mouse lerp
      targetX += (mouseX - targetX) * 0.05;
      targetY += (mouseY - targetY) * 0.05;

      // Rotate Main Geometric Knot
      knotMesh.rotation.x = elapsedTime * 0.22 + targetY * 1.5;
      knotMesh.rotation.y = elapsedTime * 0.28 + targetX * 1.5;
      knotMesh.position.y = Math.sin(elapsedTime * 0.8) * 0.4;

      // Inner Core Counter-Rotation
      innerMesh.rotation.x = -elapsedTime * 0.35 + targetY;
      innerMesh.rotation.y = -elapsedTime * 0.45 + targetX;
      innerMesh.rotation.z = Math.cos(elapsedTime * 0.5) * 0.3;

      // Ring Oscillation
      ringMesh.rotation.z = elapsedTime * 0.12;
      ringMesh.rotation.y = targetX * 0.8;

      // Particles gentle drift
      particles.rotation.y = elapsedTime * 0.04 + targetX * 0.5;
      particles.rotation.x = elapsedTime * 0.02 + targetY * 0.5;

      renderer.render(scene, camera);
    };

    animate();

    // Cleanup
    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("resize", onResize);
      cancelAnimationFrame(animationFrameId);

      knotGeometry.dispose();
      knotMaterial.dispose();
      innerGeometry.dispose();
      innerMaterial.dispose();
      particleGeometry.dispose();
      particleMaterial.dispose();
      ringGeometry.dispose();
      ringMaterial.dispose();
      renderer.dispose();

      if (container && renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-hidden opacity-85"
      aria-hidden="true"
    />
  );
}
