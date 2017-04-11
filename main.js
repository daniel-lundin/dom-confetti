
const ELEMENT_COUNT = 100;
const START_VELOCITY = 50;

function createElements(root) {
  return Array
    .from({ length: ELEMENT_COUNT })
    .map(() => {
      const element = document.createElement('div');
      element.classList = ['fetti'];
      const [r, g, b] = [
        Math.round(Math.random() * 100),
        Math.round(Math.random() * 100),
        Math.round(Math.random() * 100)
      ];
      const color = `rgb(${r}, ${g}, ${b})`;
      element.style['background-color']= color;
      root.appendChild(element);
      return element;
    });
}

function randomPhysics({ angle, spread, startVelocity }) {
  const radAngle = angle * Math.PI / 180;
  const radSpread = spread * Math.PI / 180;
  return {
    x: 0,
    y: 0,
    wobble: Math.random() * 10,
    velocity: startVelocity * 0.5 + Math.random() * startVelocity,
    angle2D: -radAngle + (0.5 * radSpread  - Math.random() * radSpread),
    angle3D: -Math.PI/4 + Math.random() * Math.PI/2,
    tiltAngle: Math.random() * Math.PI
  };
}

function updateFetti(fetti, progress, decay) {
  fetti.physics.x += Math.cos(fetti.physics.angle2D) * fetti.physics.velocity;
  fetti.physics.y += Math.sin(fetti.physics.angle2D) * fetti.physics.velocity;
  fetti.physics.z += Math.sin(fetti.physics.angle3D) * fetti.physics.velocity;
  fetti.physics.wobble += 0.1;
  fetti.physics.velocity *= decay;
  fetti.physics.y += 3;
  fetti.physics.tiltAngle += 0.1;

  const { x, y, tiltAngle, wobble } = fetti.physics;
  const wobbleX = x + 10 * Math.cos(wobble);
  const wobbleY = y + 10 * Math.sin(wobble);
  const transform = `translate3d(${wobbleX}px, ${wobbleY}px, 0) rotate3d(1, 1, 1, ${tiltAngle}rad)`;

  fetti.element.style.transform = transform;
  fetti.element.style.opacity = 1 - progress;
}

function animate(root, fettis, decay) {
  const totalTicks = 200;
  let tick = 0;

  function update() {
    fettis.forEach((fetti) => updateFetti(fetti, tick/totalTicks, decay));

    tick++;
    if (tick < totalTicks) {
      requestAnimationFrame(update);
    } else {
      fettis.forEach((fetti) => root.removeChild(fetti.element))
    }
  }

  requestAnimationFrame(update);
}

function confet(values) {
  const root = document.getElementById('container');
  const elements = createElements(root);
  const fettis = elements.map((element) => ({
    element,
    physics: randomPhysics(values)
  }));

  const { decay } = values;

  animate(root, fettis, decay);
}

function readFormValues() {
  const angle = document.getElementById('angle').value;
  const spread = document.getElementById('spread').value;
  const startVelocity = document.getElementById('velocity').value;
  const decay = parseFloat(document.getElementById('decay').value);

  return { angle, spread, startVelocity, decay };
}

function init() {
  const initialValues = readFormValues();
  const knapp = document.getElementById('knapp');
  knapp.addEventListener('click', (e) => {
    const values = readFormValues();
    confet(values);
    e.preventDefault();
  });
  confet(initialValues);
}


init();
