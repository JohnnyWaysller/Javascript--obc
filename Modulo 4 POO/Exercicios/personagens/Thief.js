const Character = require ("./Character")

class Thief extends Character{
    attack(target){
        if(this.atk>target.def){
            target.lifepoint -= ((this.atk - target.def) * 2)
            }
    }
} 

module.exports = Thief