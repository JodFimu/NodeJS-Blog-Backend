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
        const { title, description, course, category } = req.body;

        const savedPost = await post.save({
            title,
            description,
            category,
            course
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

        if (!post) {
            return res.status(404).json({ message: 'Post not found' });
        }

        post.comments.push({ user, comment });

        await post.save();
    } catch (error) {
        res.status(500).json({ 
            success: false,
            message: error.message 
        });
    }
}