import {
  Application,
  Container,
  Text,
  FillGradient,
  Color,
  TextStyle,
  Assets,
  Sprite,
  Texture,
} from "pixi.js";

(async () => {
  const fontLink = document.createElement("link");
  fontLink.rel = "stylesheet";
  fontLink.href =
    "https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap";
  document.head.appendChild(fontLink);

  await document.fonts.load('16px "Press Start 2P"');

  // Create a new application
  const app = new Application();

  // Initialize the application
  await app.init({ background: "#1099bb", resizeTo: window });

  // Append the application canvas to the document body
  document.getElementById("pixi-container")!.appendChild(app.canvas);

  // Create and add a container to the stage
  const container = new Container();

  app.stage.addChild(container);
  app.stage.scale.set(3);

  // const basicText = new Text({ text: "Basic text in pixi" });
  //
  // basicText.x = 50;
  // basicText.y = 50;

  // app.stage.addChild(basicText);

  // Create gradient fill
  // const fill = new FillGradient(0, 0, 0, 10);
  //
  // const colors = [0xffffff, 0x00ff99].map((color) =>
  //   Color.shared.setValue(color).toNumber(),
  // );
  //
  // colors.forEach((number, index) => {
  //   const ratio = index / colors.length;
  //
  //   fill.addColorStop(ratio, number);
  // });

  const pixelStyle = new TextStyle({
    fontFamily: '"Press Start 2P"',
    fill: "#ffffff",
    fontSize: 16,
    fontWeight: "lighter",
  });

  const skewText = new Text({
    text: "Pixel art is COOL!!",
    style: pixelStyle,
    // textureStyle: {
    //   // scaleMode: "nearest",
    // },
    // scale: 1 / 5,
    // anthor: 0.5,
  });

  skewText.x = 10;
  skewText.y = 10;

  app.stage.addChild(skewText);

  const skewText2 = new Text({
    text: "Pixel art is COOL!!",
    style: pixelStyle,
    textureStyle: {
      scaleMode: "nearest",
    },
    // scale: 1 / 5,
    // anthor: 0.5,
  });

  skewText2.x = 10;
  skewText2.y = 50;

  app.stage.addChild(skewText2);

  const skewText3 = new Text({
    text: "Pixel art is COOL!!",
    style: pixelStyle,
    textureStyle: {
      scaleMode: "nearest",
    },
    // scale: 1 / 5,
    // anthor: 0.5,
    resolution: 2,
  });

  skewText3.x = 10;
  skewText3.y = 90;

  app.stage.addChild(skewText3);

  const skewText4 = new Text({
    text: "Pixel art is COOL!!",
    style: pixelStyle,
    textureStyle: {
      scaleMode: "nearest",
    },
    // scale: 1 / 5,
    // anthor: 0.5,
    resolution: 5,
  });

  skewText4.x = 10;
  skewText4.y = 130;

  // app.stage.addChild(skewText4);

  const style5 = pixelStyle.clone();
  // style5.fontSize *= 5;
  const skewText5 = new Text({
    text: "Pixel art is COOL!!",
    style: style5,
    textureStyle: {
      scaleMode: "nearest",
    },
    // scale: 1 / 5,
    // anthor: 0.5,
    resolution: 25,
  });

  skewText5.x = 10;
  skewText5.y = 170;

  // app.stage.addChild(skewText5);

  // =============

  // Load the bunny texture
  const texture = await Assets.load<Texture>("/assets/bunny.png");
  texture.source.scaleMode = "nearest";
  texture.source.style.update();

  // Create a bunny Sprite
  const bunny = new Sprite({ texture });

  // Center the sprite's anchor point
  // bunny.anchor.set(0.5);

  // Move the sprite to the center of the screen
  // bunny.position.set(app.screen.width / 2, app.screen.height / 2);
  bunny.x = 10;
  bunny.y = 200;

  // Add the bunny to the stage
  app.stage.addChild(bunny);
})();
