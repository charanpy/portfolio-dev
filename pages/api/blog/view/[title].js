import dbConnect from '../../../../lib/db';
import View from '../../../../models/Views.schema';

const IncrementViewCount = async (req, res) => {
  try {
    await dbConnect();
    const { title } = req.query;

    if (!title) {
      return res.status(400).json({
        success: false,
        message: 'Title is required',
      });
    }

    const isBlog = await View.findOne({ blogTitle: title });

    if (!isBlog) {
      const newBlog = await View.create({
        blogTitle: title,
      });
      return res.status(200).json({
        success: true,
        views: newBlog.views,
      });
    }

    isBlog.views = isBlog.views + 1;
    await isBlog.save();

    return res.status(200).json({
      success: true,
      views: isBlog.views,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'Something went wrong',
    });
  }
};

export default IncrementViewCount;
