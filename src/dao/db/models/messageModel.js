import mongoose from "mongoose";

const messageSchema = new mongoose.Schema({
    user: {
        type: String,
        require: true
    },
    message: {
        type: String,
        require: true,
    }
})

const Message = mongoose.model('messages', messageSchema)

export default Message