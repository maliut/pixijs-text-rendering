import {
  Application,
  Container,
  Text,
  TextStyle,
  Assets,
  Sprite,
  Texture,
  BitmapFont,
  BitmapText,
  HTMLText,
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

  // TextureSource.defaultOptions.scaleMode = "nearest";

  const pixelStyle = new TextStyle({
    fontFamily: '"Press Start 2P"',
    fill: "#ffffff",
    fontSize: 16,
    fontWeight: "lighter",
  });

  createText_blurred();
  createText_nearest();
  createText_dynamicBitmapFont();
  await createText_msdf();
  await createText_htmlText();
  createText_highResolution();

  // =============

  function createText_blurred() {
    const skewText = new Text({
      text: "Pixel art is COOL!!",
      style: pixelStyle,
    });

    skewText.x = 10;
    skewText.y = 10;

    app.stage.addChild(skewText);
  }

  function createText_nearest() {
    const skewText2 = new Text({
      text: "Pixel art is COOL!!",
      style: pixelStyle,
      textureStyle: {
        scaleMode: "nearest",
      },
    });

    skewText2.x = 10;
    skewText2.y = 50;

    app.stage.addChild(skewText2);
  }

  function createText_dynamicBitmapFont() {
    // Create bitmap text
    // Install a bitmap font
    BitmapFont.install({
      name: "Game Font",
      style: {
        fontFamily: "Press Start 2P",
        fontSize: 16,
        fill: "#ffffff",
      },
      textureStyle: {
        scaleMode: "nearest",
      },
    });

    const skewText2 = new BitmapText({
      text: "Pixel art is COOL!!",
      style: {
        fontFamily: "Game Font",
        fontSize: 16,
      },
    });

    skewText2.x = 10;
    skewText2.y = 90;

    app.stage.addChild(skewText2);
  }

  async function createText_msdf() {
    // sdf font
    await Assets.load([
      {
        alias: "PressStart2P",
        src: "/assetsgen/PressStart2P.fnt",
        data: { scaleMode: "nearest" },
      },
    ]);

    const skewText2 = new BitmapText({
      text: "Pixel art is COOL!!",
      style: {
        fontFamily: "PressStart2P",
        fontSize: 16,
      },
    });

    skewText2.x = 10;
    skewText2.y = 130;

    app.stage.addChild(skewText2);
  }

  async function createText_htmlText() {
    // Basic HTML text
    await Assets.load([
      {
        alias: "myFont",
        src: "https://fonts.gstatic.com/s/pressstart2p/v15/e3t4euO8T-267oIAQAu6jDQyK3nVivNm4I81.woff2",
        data: {
          family: "myFont",
        },
      },
    ]);

    const skewText2 = new HTMLText({
      text: "Pixel art is COOL!!",
      style: {
        fontFamily: "myFont",
        fill: "#ffffff",
        fontSize: 16,
        fontWeight: "lighter",
      },
      textureStyle: {
        scaleMode: "nearest",
      },
    });

    skewText2.x = 10;
    skewText2.y = 170;

    app.stage.addChild(skewText2);
  }

  function createText_highResolution() {
    const skewText3 = new Text({
      text: "Pixel art is COOL!!",
      style: pixelStyle,
      textureStyle: {
        scaleMode: "nearest",
      },
      resolution: 2,
    });

    skewText3.x = 10;
    skewText3.y = 210;

    app.stage.addChild(skewText3);
  }

  async function createBunny() {
    // Load the bunny texture
    const texture = await Assets.load<Texture>("/assets/bunny.png");
    // texture.source.scaleMode = "nearest";
    // texture.source.style.update();

    // Create a bunny Sprite
    const bunny = new Sprite({ texture });

    bunny.x = 10;
    bunny.y = 200;

    // Add the bunny to the stage
    app.stage.addChild(bunny);
  }
})();
