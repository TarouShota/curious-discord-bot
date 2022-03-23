const Canvas = require("canvas")
const av = {
    size: 256
}

const generateImage = async (member) => {
    let username = member.user.username
    let discrim = member.uder.discriminator
    let avatarURL = memeber.user.displayAvatarURL({ format: "png", dynamic: false, size: av.size })
}

