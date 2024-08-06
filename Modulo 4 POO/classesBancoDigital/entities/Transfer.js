module.exports = class Tranfer{
    constructor(fromUser, toUser, value){
        this.fromUser = fromUser
        this.toUser = toUser
        this.value = value
        this.createdAt = new Date()
    }
} 