npm install
gatsby clean
gatsby build
docker build -t drawdown-frontend .
docker stop drawdown-frontend
docker rm drawdown-frontend
docker run --name drawdown-frontend -d -p 80:80 -e ENABLE_GATSBY_REFRESH_ENDPOINT=1 drawdown-frontend
docker system prune