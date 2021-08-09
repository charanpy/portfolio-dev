const visitor = (req,res) => {
  return res.status(200).json({
    ip: req.ip || req.connection.remoteAddress
  })
};

export default visitor;