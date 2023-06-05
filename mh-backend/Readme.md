# Backend server for the scanner


* step 1: Start a RedisDB instance:

```
docker run -d --name redis-stack-server -p 6379:6379 redis/redis-stack-server:latest
```

* step 2: Start the flask application:

```
flask run
```

* step 3: Start the celery workers:

```
celery -A app.routes.celery worker --loglevel=info -P gevent
```