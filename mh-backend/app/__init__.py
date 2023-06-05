from flask import Flask
import os
from dotenv import load_dotenv

app = Flask(__name__)

app.config["CELERY_BROKER_URL"] = os.getenv("CELERY_BROKER_URL")

from app import routes
#from app import save_view
