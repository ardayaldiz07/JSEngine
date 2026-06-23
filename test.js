import JsEngine from "./core/JSEngine.js";
import GameObject from "./core/GameObject.js";

class Player extends GameObject {
    constructor(name, x, y, w, h, c, useGravity, useCollision) {
        super(name, x, y, w, h, c, useGravity, useCollision);
        
        const speedX = 1 + Math.random() * 2;
        const speedY = 1 + Math.random() * 2;
        this.velX = Math.random() > 0.5 ? speedX : -speedX; 
        this.velY = Math.random() > 0.5 ? speedY : -speedY;
    }

    update() {
        super.update();

        if (this.x >= 600 - this.w) {
            this.x = 600 - this.w;
            this.velX = -this.velX;
        } else if (this.x <= 0) {
            this.x = 0;
            this.velX = -this.velX;
        }

        if (this.y >= 400 - this.h) {
            this.y = 400 - this.h;
            this.velY = -this.velY;
        } else if (this.y <= 0) {
            this.y = 0;
            this.velY = -this.velY;
        }
    }

    draw(context) {
        super.draw(context);
    }
};

document.addEventListener('DOMContentLoaded', () => {
    const options = {
        wrapperId: "jsEngineWrapper",
        width: 600,
        height: 400,
        bgColor: "black"
    }
    const Engine = new JsEngine(options);

    const colors = ["#FF3366", "#33CCFF", "#FFFF66", "#33FF66", "#FF9933", "#CC33FF"];

    const totalPlayers = 30;
    
    for (let i = 0; i < totalPlayers; i++) {
        const randomX = Math.random() * (options.width - 32);
        const randomY = Math.random() * (options.height - 32);
        
        const randomColor = colors[Math.floor(Math.random() * colors.length)];

        const p = new Player(`player_${i}`, randomX, randomY, 32, 32, randomColor, false, true);
        Engine.addGameObject(p);
    }
});