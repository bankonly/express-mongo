start.prod:
	pm2 start --name $(n) src/app.js $(p)

start.dev:
	nodemon src/app.js $(port)

push:
	git add .
	git commit -m "$m"
	git push