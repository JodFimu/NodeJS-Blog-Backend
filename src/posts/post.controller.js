import Post from './post.model.js';

export const getPosts = async (req, res) => {
    try {
        const posts = await Post.find();
        res.status(200).json({
            success: true,
            posts: posts,
            message: 'Posts retrieved successfully'
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const post = async (req, res) => {
    try {
        let Img = req.img;

        let { title, description, course, category, img } = req.body;

        img = Img 

        const savedPost = await Post.create({
            title,
            description,
            category,
            course,
            img
        });

        res.status(201).json({
            success: true,
            message: 'Post created successfully'
        });
    } catch (error) {
        res.status(500).json({ 
            success: false,
            message: error.message 
        });
    }
}

export const updatePost = async (req, res) => {
    const { id } = req.params;
    const data = req.body;
    try {
        if (!req.img) {
            return res.status(400).json({
                success: false,
                message: "No se recibió ninguna imagen"
            });
        }

        data.img = req.img;

        const updatedPost = await Post.findByIdAndUpdate(id, data, { new: true });
        if (!updatedPost) {
            return res.status(404).json({ message: 'Post not found' });
        }
        res.status(200).json({
            success: true,
            message: 'Post updated successfully',
            post: updatedPost
        });
    }
    catch (error) {
        res.status(500).json({ 
            success: false,
            message: error.message 
        });
    }
}

export const commentpost = async (req, res) => {
    try{
        const { id } = req.params;
        const { user, comment } = req.body;

        const post = await Post.findById(id);

        console.log(post);
        if (!post) {
            return res.status(404).json({ message: 'Post not found' });
        }

        post.comments.push({ user, comment });

        await post.save();
        res.status(200).json({
            success: true,
            message: 'Comment added successfully',
            post
        });
    } catch (error) {
        res.status(500).json({ 
            success: false,
            message: error.message 
        });
    }
}

export const getByCourse = async (req, res) => {
    try {
        const { course } = req.params;
        const posts = await Post.find({ course });
        console.log(posts);
        res.status(200).json({
            success: true,
            posts: posts,
            message: 'Posts retrieved successfully'
        });
    } catch (error) {
        res.status(500).json({ 
            success: false,
            message: error.message 
        });
    }
}