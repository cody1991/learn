git add .

git commit -m 'Commit'

heroku create

heroku config:set NODE_ENV=production

git push heroku master

heroku ps:scale web=1

heroku open
