import JsEngine from "./core/JSEngine.js";
import GameObject from "./core/GameObject.js";
 
class Player extends GameObject{
    constructor(name,x,y,w,h,c,useGravity,useCollision,isStatic) {
        super(name,x,y,w,h,c,useGravity,useCollision,isStatic);
        
    }
 
    update(){
        super.update();
    }
 
    draw(context){
        super.draw(context);
    }
};

class Ground extends GameObject{
    constructor(name,x,y,w,h,c,useGravity,useCollision,isStatic) {
        super(name,x,y,w,h,c,useGravity,useCollision,isStatic);
        
    }
 
    update(){
        super.update();
    }
 
    draw(context){
        super.draw(context);
    }
};
 
document.addEventListener('DOMContentLoaded',()=>{
    const options = {
        wrapperId:"jsEngineWrapper",
        width:600,
        height:400,
        bgColor:"green"
    }
    const Engine = new JsEngine(options);
    const player = new Player("player",0,0,32,32,"blue",true,true,false);
    const ground = new Ground("ground",0,200,1000,1000,"red",false,true,true);
    Engine.addGameObject(player);
    Engine.addGameObject(ground);
});