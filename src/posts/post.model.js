import { Schema, model } from "mongoose";

const postSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
        enum: ["Proyecto", "Infografia", "Documento", "otro"]
    },
    course: {
        type: String,
        required: [ True ],
        enum: ["Tecnología", "Practicas", "Taller" ]
    },
    comments: [{
        user: {
            type: String,
            required: true,
            default: "Anónimo"
        },
        comment: {
            type: String,
            required: true
        },
        date: {
            type: Date,
            default: Date.now
        }
    }],
    status:{
        type: Boolean,
        default: true
    }
}, {
    timestamps: true,
    versionKey: false
});

postSchema.methods.toJSON = function () {
    const { __v, _id, ...post } = this.toObject();
    post.pid = _id;
    return post;
}

export default model('Post', postSchema);   

