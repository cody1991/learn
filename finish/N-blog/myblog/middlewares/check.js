module.exports = {
    // checkLogin: 当用户信息（req.session.user）不存在，即认为用户没有登录，则跳转到登录页，同时显示 未登录 的通知，用于需要用户登录才能操作的页面及接口
    // checkNotLogin: 当用户信息（req.session.user）存在，即认为用户已经登录，则跳转到之前的页面，同时显示 已登录 的通知，如登录、注册页面及登录、注册的接口
    checkLogin(req, res, next) {
        if (!req.session.user) {
            req.flash('error', '未登录');
            return res.redirect('/');
        }
        next();
    },
    checkNotLogin(req, res, next) {
        if (req.session.user) {
            req.flash('error', '已登陆');
            return res.redirect('back'); // 返回之前的页面
        }
        next();
    }
}
