#!/bin/bash
if [ -f "app/.env" ]; then

    docker run --rm -d \
        --name redis-stack-server \
        -p 6379:6379 \
        redis/redis-stack-server:latest &

    # celery \
    #     -A app.routes.celery worker \
    #     --loglevel=info -P gevent &
    flask run

else

    # is it is not exist then it will be printed
    echo "Environment file is not set! \n Please set a .env file"
fi
