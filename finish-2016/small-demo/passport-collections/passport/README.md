# Strategies

Passport uses the concept of strategies to authenticate requests. Strategies can range from verifying username and password credentials, delegated authentication using OAuth (for example, via Facebook or Twitter), or federated authentication using OpenID.

Before authenticating requests, the strategy (or strategies) used by an application must be configured.

    passport.use(new LocalStrategy(
        function(username,password,done){
            User.findOne({username:username},function(err,user){
                if(err){
                    return done(err);
                }
                if(!user){
                    return done(null,false);
                }
                if(!user.verifyPassword(password)){
                    return done(null,false);
                }
                return done(null,user);
            })
        }
    ));

# Sessions

Passport will maintain persistent login sessions. In order for persistent sessions to work, the authenticated user must be serialized to the session, and deserialized when subsequent requests are made.

Passport does not impose any restrictions on how your user records are stored. Instead, you provide functions to Passport which implements the necessary serialization and deserialization logic. In a typical application, this will be as simple as serializing the user ID, and finding the user by ID when deserializing.

    passport.serializeUser(function(user,done){
        done(null,user.id);
    });

    passport.deserializeUser(function(id,done){
        User.findById(id,function(err,user){
            done(err,user);
        });
    });

# Middleware

To use Passport in an Express or Connect-based application, configure it with the required passport.initialize() middleware. If your application uses persistent login sessions (recommended, but not required), passport.session() middleware must also be used.

    var app = express();
    app.use(require('server-static')(__dirname+'/../../public'));
    app.use(require('cookie-parser')());
    app.use(require('body-parser').urlencoded({extended:true}));
    app.use(require('express-session')({secret:'keyboard cat',resave:true,saveUninitialized:true}));
    app.use(passport.initialize());
    app.use(passport.session());

# Authenticate Requests

Passport provides an authenticate() function, which is used as route middleware to authenticate requests.

    app.post('/login',
        passport.authenticate('local',{
            failureRedirect:'/login'
        }),
        function(req,res){
            res.redirect('/');
        }
    )


























.