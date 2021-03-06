import './style.css'
import { World } from './src/World/World.js';

function main() {
  
  // Get a reference to the container element
  const container = document.querySelector('#scene-container');

  // 1. Create an instance of the World
  const world = new World(container);

  // 2. Start animation loop
  world.start();
}

main()