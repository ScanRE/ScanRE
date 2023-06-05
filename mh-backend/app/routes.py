from app import app
from flask import jsonify
from flask import Flask, request, Response,make_response
#from celery import Celery
from app.Controllers.Scanner import CodeScanner
#from celery.utils.log import get_task_logger
import os
import json
from dotenv import load_dotenv
import asyncio
import validators
from os import listdir
from os.path import isfile, join
load_dotenv()
#logger = get_task_logger(__name__)

#app = Flask(__name__)

#celery = Celery(app.name, broker=app.config["CELERY_BROKER_URL"])
#celery.conf.update(app.config)

#@celery.task()
def scan(repositoryLink,path,repositoryName,finalOutput,multipleDirectories=0):
        loop = asyncio.new_event_loop()
        asyncio.set_event_loop(loop)
        openApiKey = os.getenv('OPENAI')
        scanObj = CodeScanner(repositoryLink,path,repositoryName,finalOutput,openApiKey)
        loop.run_until_complete(scanObj.getCode())
        loop.run_until_complete(scanObj.scanCode())
        loop.run_until_complete(scanObj.cleanUp())
        return "success"

@app.route('/',methods=['GET','POST'])
def add_task():
    repositoryLink = request.args.get("repositoryLink")
    print(repositoryLink)
    if validators.url(repositoryLink):
        path = os.getenv("clonePath")
        values = repositoryLink.split("/")
        repositoryName = values[4].split(".")[0]
        finalOutput = os.getenv("clonePath")
        scan(repositoryLink,path,repositoryName,finalOutput)
        resp = make_response(json.load(open(finalOutput+"/"+repositoryName+".json","r")))
        resp.headers['Content-Type'] = 'application/json'
        resp.headers['Access-Control-Allow-Origin'] = '*'
        return resp
    else:
        resp = Response('{"error":"invalid git repository given"}')
        # print(result)
        # resp.headers['Access-Control-Allow-Origin'] = '*'
        # resp.headers['Location'] = 'https://scanre.loca.lt/engagement/3'
        # return resp
        resp.headers['Content-Type'] = 'application/json'
        resp.headers['Access-Control-Allow-Origin'] = '*'
        return resp

from flask import Flask,session,render_template,request,redirect,url_for

@app.route('/login',methods=['GET','POST'])
def login():
    if request.method=='POST':
        session['username']=request.form.get('username')
        return jsonify({"Success":"Logged in!"})
    return jsonify({"Error":"Already Logged in!"})

@app.route('/logout')
def logout():
    session.pop('username',None)
    return jsonify({"Success":"Logged Out"})

#@celery.task()
def deepScan(repositoryLink,path,repositoryName,finalOutput,ortPath):
    loop = asyncio.new_event_loop()
    asyncio.set_event_loop(loop)
    scanObj = CodeScanner(repositoryLink,path,repositoryName,finalOutput)
    loop.run_until_complete(scanObj.getCode())
    loop.run_until_complete(scanObj.scanWithORTandDeepSemgrep(ortPath))
    loop.run_until_complete(scanObj.cleanUp())
    return "success"

@app.route('/deepScan', methods=['GET','POST'])
def add_ort():
    path = os.getenv("clonePath")
    values = repositoryLink.split("/")
    repositoryName = values[4].split(".")[0]
    finalOutput = os.getenv("clonePath")
    ortPath = os.getenv("ORTPATH") #temp hard code
    deepScan(repositoryLink,path,repositoryName,finalOutput,ortPath)
    return jsonify({'status': 'ok'})

@app.route('/history', methods=['GET','POST'])
def get_history():
    onlyfiles = [f for f in listdir(os.getenv("clonePath")) if isfile(join(os.getenv("clonePath"), f))]
    listOfRepositories = list()
    for file in onlyfiles:
        if ".json" in file:
            filePointer = open(os.getenv('clonePath')+file,"r")
            data = json.load(filePointer)
            filePointer.close()
            if "date" in data:            
                listOfRepositories.append({file:data['date']})
        resp = make_response({"PastScans":listOfRepositories})
        # print(result)
        # resp.headers['Access-Control-Allow-Origin'] = '*'
        # resp.headers['Location'] = 'https://scanre.loca.lt/engagement/3'
        # return resp
        resp.headers['Content-Type'] = 'application/json'
        resp.headers['Access-Control-Allow-Origin'] = '*' 
    return resp


@app.route('/editVulnerabilityStatus', methods=['GET','POST'])
def edit_vulnerability_status():
    repositoryName = request.args.get("repositoryName")
    file = open(os.getenv("clonePath")+self.repositoryName+'.json','r')
    data = json.load(file)
    file.close()
    vulnerability_id = request.args.get("vulnerability_id")
    status = request.args.get("status")
    data['results'][vulnerability_id]['status'] = status
    file = open(self.scanResultPath+self.repoName+'/output.json','w')
    json.dump(data,file)
    file.close()
    return jsonify({'status': 'ok'})

@app.route('/scanResults', methods=['GET','POST'])
def get_scan_results():
    repoName = request.args.get("repoName")
    file = open(os.getenv("clonePath")+"/"+repoName+".json","r")
    resp = make_response(json.load(file))
    file.close()
    resp.headers['Content-Type'] = 'application/json'
    resp.headers['Access-Control-Allow-Origin'] = '*'
    return resp