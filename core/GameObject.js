class GameObject {
    constructor(name, x, y, w, h, c, useGravity = false, useCollision = false, isStatic = false, bounce = 0) {
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
        this.isStatic = isStatic;
        this.bounce = bounce;
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

    isColliding(other) {
        return (
            this.x < other.x + other.w &&
            this.x + this.w > other.x &&
            this.y < other.y + other.h &&
            this.y + this.h > other.y
        );
    }

    resolveCollision(other) {
        if (!this.isColliding(other) || (this.isStatic && other.isStatic)) return;

        const dx = (this.x + this.w / 2) - (other.x + other.w / 2);
        const dy = (this.y + this.h / 2) - (other.y + other.h / 2);

        const minDistX = (this.w / 2) + (other.w / 2);
        const minDistY = (this.h / 2) + (other.h / 2);

        const overlapX = minDistX - Math.abs(dx);
        const overlapY = minDistY - Math.abs(dy);

        const thisPushRatio = this.isStatic ? 0 : (other.isStatic ? 1 : 0.5);
        const otherPushRatio = other.isStatic ? 0 : (this.isStatic ? 1 : 0.5);

        if (overlapX >= overlapY) {
            if (dy > 0) {
                this.y += overlapY * thisPushRatio;
                other.y -= overlapY * otherPushRatio;
            } else {
                this.y -= overlapY * thisPushRatio;
                other.y += overlapY * otherPushRatio;
            }

            if (!this.isStatic) this.velY *= -this.bounce;
            if (!other.isStatic) other.velY *= -other.bounce;

        } else {
            if (dx > 0) {
                this.x += overlapX * thisPushRatio;
                other.x -= overlapX * otherPushRatio;
            } else {
                this.x -= overlapX * thisPushRatio;
                other.x += overlapX * otherPushRatio;
            }

            if (!this.isStatic) this.velX *= -this.bounce;
            if (!other.isStatic) other.velX *= -other.bounce;
        }
    }
}

export default GameObject;