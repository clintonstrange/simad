const withAuth = (req, res, next) => {
    if (!req.session.user_id) {
      res.redirect("/dashboar");
    } else {
      next();
    }
  };
  
  module.exports = withAuth;