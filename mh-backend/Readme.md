# Backend server for the scanner

The backend server is written in flask and wraps Semgrep with ORT and OpenAI's APIs. If you want a CLI, checkout <a href="https://github.com/JadenFurtado/ScanRE_CLI">ScanRE CLI</a>. 

## Running the server:

Set the environment variables as shown in the .envexample file

For reference you .env file needs to be in mh-backend/app and have:
```
CELERY_BROKER_URL=redis://127.0.0.1:6379/0/example/url
clonePath = '/some/temp/path/where/the/code/is/cloned'
OPENAI = <YourOpenAIapiKeyGoesHere>
ORTPATH = <PathToORTforDeepScans>
```

Start a virtual environment and install requirements in requirements.txt.

```
pip install -r requirements.txt
```

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

- If you don't want to do these steps, simply run 

```
./start.sh
```
## Wanna play around?

We designed the backend to be modular and so implemented two Classes, i.e.
Scanner.py and chatGPT.py, the names explain their uses. If you want to augment functionality or swap in different code scanners for your use case, feel free to do so.

The routes are:
### Routes
```
'/',methods=['GET','POST','OPTIONS']
'/login',methods=['GET','POST']
'/logout'
'/deepScan', methods=['GET','POST']
'/history', methods=['GET','POST']
'/editVulnerabilityStatus', methods=['GET','POST']
'/scanResults', methods=['GET','POST']
```

We had considerable issues with CORS and so wrote a helper function to get around that. You can configure that function according to your needs.

We used celery during the initial iterations to speed up scan times by executing code in parallel and so if you want to use celery, simply uncomment the decorators and the celery run command in the ./start.sh file and you are good to go. The frontend might need modification to handle the asynchronous execution.

Also, we have limited the number of requests being made to OpenAIs APIs as well as limited the number of characters that can be allowed for an individual request to prevent excessive billing.

If you want to save time, we recommend using a SOAR tool like <a href='https://github.com/DefectDojo/django-DefectDojo'>DefectDOJO</a> :)

We're certain we've missed something!