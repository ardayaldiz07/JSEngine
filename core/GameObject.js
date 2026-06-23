class GameObject{
    /**
     * name => name of this game object.
     * x => x position of this game object.
     * y => y position of this game object.
     * w => width
     * h => height
     * c => color
     * texture => coming soon.
     */
    constructor(name,x,y,w,h,c,useGravity) {
        this.name = name;
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.c = c;
        this.useGravity = useGravity;
        this.velX=5;
        this.velY=0;
    }
    /**
     * This function called every frame.
     */
    update(){console.log(this);}
 
    draw(context){
        context.fillStyle = this.c;
        context.fillRect(this.x,this.y,this.w,this.h);
    }

    applyGravity(){

    }
}
export default GameObject;