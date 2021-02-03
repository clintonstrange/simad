const withAuth = (req, res, next) => {
    if (!req.session.user_id) {
      res.redirect("/dashboard");
    } else {
      next();
    }
  };
  
  module.exports = withAuth;