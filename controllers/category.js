exports.categoryController = (req, res) => {
  setTimeout(() => {
    res.json({
      successMessage: `${req.body.category} Has Been Created`,
    });
  }, 2000);
};
