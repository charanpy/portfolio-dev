import mongoose from 'mongoose';

const ViewSchema = new mongoose.Schema({
  blogTitle: {
    type: String,
    unique: true,
    required: true,
  },
  views: {
    type: Number,
    default: 0,
  },
});

const View = mongoose.models.View || mongoose.model('View', ViewSchema);

export default View;
