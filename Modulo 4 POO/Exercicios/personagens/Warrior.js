const Character = require ("./Character")

class Warrior extends Character{
    constructor(name,lifepoint,shieldpoint,atk,def,position){
        super(name,lifepoint,atk,def)
        this.shieldpoint = shieldpoint
        this.position = position
    }
    attack(target){
        if(this.atk>target.def && this.position === "attack"){
            target.lifepoint -= (this.atk - target.def)
            }
    }
    positonMode(){
        this.position = this.position === "attack" ? "defense" : "attack"
        if(this.position === "defense"){
            this.def += this.shieldpoint
        }else{
            this.def -= this.shieldpoint
        }
    }
}

module.exports = Warrior