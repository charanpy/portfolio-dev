import dbConnect from '../../lib/db';

const ConnectMongo = async (req, res) => {
  try {
    await dbConnect();
    return res.status(200).json({
      success: true,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
    });
  }
};

export default ConnectMongo;
