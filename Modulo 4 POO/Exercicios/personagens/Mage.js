const Character = require ("./Character")

class Mage extends Character{
    constructor(name,lifepoint,magicpoint,atk,def){
        super(name,lifepoint,atk,def)
        this.magicpoint = magicpoint
    }
    attack(target){
        if((this.atk+this.magicpoint)>target.def){
            target.lifepoint -= ((this.atk+this.magicpoint) - target.def)
            }
    }
    heal(target){
        target.lifepoint += (this.magicpoint * 2)
    }
}

module.exports = Mage