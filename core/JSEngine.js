class JsEngine {
    constructor(options) {
        this.options = options;

        this.gameObjects = [];

        this.loop = this.loop.bind(this);

        this.setupWrapper(this.options.wrapperId);
        this.setupCanvas();
        this.mountCanvas();

        this.start();
    }

    setupWrapper(wrapperId) {
        this.jsEngineWrapper = document.getElementById(wrapperId);
    }

    setupCanvas() {
        this.canvas = document.createElement('canvas');
        this.context = this.canvas.getContext('2d');

        this.canvas.width = this.options.width;
        this.canvas.height = this.options.height;
    }

    mountCanvas() {
        this.jsEngineWrapper.appendChild(this.canvas);
    }




    start() {
        requestAnimationFrame(this.loop);
    }

    loop() {
        this.drawRect(0, 0, this.canvas.width, this.canvas.height, this.options.bgColor);

        for (let i = 0; i < this.gameObjects.length; i++) {
            const element = this.gameObjects[i];
            element.update();
            element.draw(this.context);
        }

        
        requestAnimationFrame(this.loop);
    }

    drawRect(xPos, yPos, w, h, c) {
        this.context.fillStyle = c;
        this.context.fillRect(xPos, yPos, w, h);
    }

    // Game objects
    addGameObject(obj) {
        this.gameObjects.push(obj);
    }
}
export default JsEngine;