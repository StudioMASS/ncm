<script>
    import { onMount } from 'svelte';
  
    let canvas;
  
    onMount(async () => {
      // Dynamically import Three.js and create a WebGLRenderer
      const THREE = await import('three');
      const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
  
      // Set up the scene
      const scene = new THREE.Scene();
  
      // Create a camera
      const camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
      );
      camera.position.z = 5;
  
      // Create a WebGL sphere geometry
      const geometry = new THREE.SphereGeometry(1, 32, 32);
  
      // Create a texture for displacement map (you can replace this with your own texture)
      const textureLoader = new THREE.TextureLoader();
      const displacementTexture = textureLoader.load('path/to/your/displacement-map.jpg');
  
      // Set displacement scale (adjust this value to control the intensity of the lumps)
      displacementTexture.wrapS = displacementTexture.wrapT = THREE.RepeatWrapping;
      displacementTexture.repeat.set(2, 2); // Repeat the displacement map for more details
  
      // Create the material with displacement map
      const material = new THREE.MeshPhongMaterial({
        color: 0xffffff,
        displacementMap: displacementTexture,
        displacementScale: 0.3, // Adjust this value to control the height of the lumps
      });
  
      // Create a mesh with the geometry and material
      const sphere = new THREE.Mesh(geometry, material);
      scene.add(sphere);
  
      // Add a light source (optional, for better visibility)
      const light = new THREE.DirectionalLight(0xffffff, 1);
      light.position.set(1, 1, 1);
      scene.add(light);
  
      // Animation loop
      const animate = (time) => {
        requestAnimationFrame(animate);
  
        // Rotate the sphere
        sphere.rotation.x += 0.005;
        sphere.rotation.y += 0.005;
  
        // Render the scene
        renderer.render(scene, camera);
      };
  
      animate();
  
      // Handle window resize
      window.addEventListener('resize', () => {
        const newWidth = window.innerWidth;
        const newHeight = window.innerHeight;
  
        camera.aspect = newWidth / newHeight;
        camera.updateProjectionMatrix();
  
        renderer.setSize(newWidth, newHeight);
      });
    });
  </script>
  
  <canvas bind:this={canvas}></canvas>
  
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
  