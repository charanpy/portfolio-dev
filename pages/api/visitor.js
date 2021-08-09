const visitor = (req, res) => {
  return res.status(200).json({
    ip:
      req.headers['x-forwarded-for'] ||
      req.socket.remoteAddress ||
      req.ip ||
      req.connection.remoteAddress,
  });
};

export default visitor;
