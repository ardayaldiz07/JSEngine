class GameObject {
    constructor(name, x, y, w, h, c, useGravity = false,useCollision = false) {
        this.name = name;
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.c = c;
        this.useGravity = useGravity;
        this.velX = 0;
        this.velY = 0;
        this.gravityValue = 0.5; 
        this.useCollision = useCollision;
    }

    update() {
        if (this.useGravity) {
            this.applyGravity();
        }

        this.x += this.velX;
        this.y += this.velY;
    }

    draw(context) {
        context.fillStyle = this.c;
        context.fillRect(this.x, this.y, this.w, this.h);
    }

    applyGravity() {
        this.velY += this.gravityValue;
    }

    // AABB
    isColliding(other) {
        return (
            this.x < other.x + other.w &&
            this.x + this.w > other.x &&
            this.y < other.y + other.h &&
            this.y + this.h > other.y
        );
    }

resolveCollision(other) {
        if (!this.isColliding(other)) return;

        const dx = (this.x + this.w / 2) - (other.x + other.w / 2);
        const dy = (this.y + this.h / 2) - (other.y + other.h / 2);

        const minDistX = (this.w / 2) + (other.w / 2);
        const minDistY = (this.h / 2) + (other.h / 2);

        const overlapX = minDistX - Math.abs(dx);
        const overlapY = minDistY - Math.abs(dy);

        if (overlapX >= overlapY) {
            if (dy > 0) {
                this.y += overlapY / 2; 
                other.y -= overlapY / 2;
            } else {
                this.y -= overlapY / 2;
                other.y += overlapY / 2;
            }
            this.velY = -this.velY;
            other.velY = -other.velY;
        } else {
            if (dx > 0) {
                this.x += overlapX / 2;
                other.x -= overlapX / 2;
            } else {
                this.x -= overlapX / 2;
                other.x += overlapX / 2;
            }
            this.velX = -this.velX;
            other.velX = -other.velX;
        }
    }
}

export default GameObject;