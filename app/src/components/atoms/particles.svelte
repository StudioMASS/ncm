<script>
	import { onMount } from 'svelte';

	let canvas;

	onMount(async () => {
		const THREE = await import('three');

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

		const particles = [];
		const particleGeometry = new THREE.SphereGeometry(0.1, 32, 32);
		const particleMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff });

		// Create particles
		for (let i = 0; i < 5; i++) {
			const particle = new THREE.Mesh(particleGeometry, particleMaterial);
			particle.position.x = Math.random() * 10 - 5;
			particle.position.y = Math.random() * 10 - 5;
			particle.position.z = Math.random() * 10 - 5;
			particle.velocity = new THREE.Vector3(
				Math.random() - 0.5,
				Math.random() - 0.5,
				Math.random() - 0.5
			);
			scene.add(particle);
			particles.push(particle);
		}

		// Animation loop
		const animate = () => {
			requestAnimationFrame(animate);

			// Move and bounce particles
			particles.forEach((particle) => {
				particle.position.add(particle.velocity);

				['x', 'y', 'z'].forEach((axis) => {
					if (particle.position[axis] > 5 || particle.position[axis] < -5) {
						particle.velocity[axis] = -particle.velocity[axis];
					}
				});

				// Adjust brightness based on proximity to other particles
				particle.material.color.setRGB(1, 1, 1); // reset color
				particles.forEach((otherParticle) => {
					if (otherParticle !== particle) {
						const distance = particle.position.distanceTo(otherParticle.position);
						if (distance < 1) {
							const brightness = 1 - distance;
							particle.material.color.multiplyScalar(brightness);
						}
					}
				});
			});

			renderer.render(scene, camera);
		};

		animate();

		// Handle window resize
		window.addEventListener('resize', () => {
			renderer.setSize(window.innerWidth, window.innerHeight);
			camera.aspect = window.innerWidth / window.innerHeight;
			camera.updateProjectionMatrix();
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
