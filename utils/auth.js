const withAuth = (req, res, next) => {
    if (!req.session.user_ud) {
        res.redirect('/login');
    } else {
        next();
    }
};

module.exports = withAuth;