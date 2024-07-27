class Character{
    constructor(name,lifepoint,atk,def){
        this.name = name
        this.lifepoint = lifepoint
        this.atk = atk
        this.def = def
    }
    attack(target){
        if(this.atk>target.def){
        target.lifepoint -= (this.atk - target.def)
        }
    }
}

module.exports = Character


