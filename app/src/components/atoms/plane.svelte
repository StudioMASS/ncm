<script>
	import { onMount } from 'svelte';
	import * as THREE from 'three';
	import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer';
	import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass';
	import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass';

	let canvas;

	onMount(() => {
		const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
		renderer.setSize(window.innerWidth, window.innerHeight);

		const scene = new THREE.Scene();
		const camera = new THREE.PerspectiveCamera(
			75,
			window.innerWidth / window.innerHeight,
			0.1,
			1000
		);
		camera.position.z = 5;

		// Plane geometry
		const geometry = new THREE.PlaneGeometry(5, 5, 100, 100);

		// Modified noise function for ripple effect
		const noise = `
        float noise(vec3 point, float time) {
          return sin(point.x * 10.0 + time) * cos(point.y * 10.0 + time);
        }
      `;

		const vertexShader = `
        varying vec2 vUv;
        varying vec3 vNormal;
        uniform float time;
        ${noise}
  
        void main() {
          vUv = uv;
          vec3 bumpedPosition = position + normal * noise(position, time) * 0.1; // Adjust ripple amplitude
          vNormal = normal;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(bumpedPosition, 1.0);
        }
      `;

		// Fragment shader remains the same
		const fragmentShader = `...`;

		const material = new THREE.ShaderMaterial({
			vertexShader,
			fragmentShader,
			uniforms: {
				time: { value: 0 }
			}
		});

		const plane = new THREE.Mesh(geometry, material);
		scene.add(plane);

		// Lighting setup
		const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
		directionalLight.position.set(5, 5, 5);
		scene.add(directionalLight);

		const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
		scene.add(ambientLight);

		// Post-processing setup
		const composer = new EffectComposer(renderer);
		composer.addPass(new RenderPass(scene, camera));

		// Grain Shader
		const grainShader = {
			uniforms: {
				tDiffuse: { value: null },
				amount: { value: 0.5 }
			},
			vertexShader: `varying vec2 vUv; void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,
			fragmentShader: `
        uniform sampler2D tDiffuse;
        varying vec2 vUv;

        float random(vec2 co){
          return fract(sin(dot(co.xy, vec2(12.9898, 78.233))) * 43758.5453);
        }

        void main() {
          vec4 color = texture2D(tDiffuse, vUv);
          float randomVal = random(gl_FragCoord.xy) * 0.05;
          gl_FragColor = vec4(color.rgb + randomVal, color.a);
        }
      `
		};
		const grainPass = new ShaderPass(grainShader);
		composer.addPass(grainPass);

		const animate = (time) => {
			requestAnimationFrame(animate);

			material.uniforms.time.value = time * 0.001;

			// Update plane rotation or other properties if needed
			plane.rotation.x += 0;
			plane.rotation.y += 0;

			composer.render();
		};

		animate();

		window.addEventListener('resize', () => {
			// Resize handling
			const newWidth = window.innerWidth;
			const newHeight = window.innerHeight;

			camera.aspect = newWidth / newHeight;
			camera.updateProjectionMatrix();

			renderer.setSize(newWidth, newHeight);
			composer.setSize(newWidth, newHeight);
		});
	});
</script>

<canvas bind:this={canvas} />

<style>
	canvas {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: var(--black-100);
	}
</style>
