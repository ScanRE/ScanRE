import subprocess
import os
import asyncio
import json
import requests
# common scanner class for scanning repositories
import datetime
from . import chatGPT

class CodeScanner:
    def __init__(self, repoLink, path, repoName, scanResultPath,openApiKey):
        self.repoLink = repoLink
        self.path = path
        self.repoName = repoName
        self.scanResultPath = scanResultPath
        self.openApiKey = openApiKey
    # clone code from source repository
    async def getCode(self):
        try:
            print("cloning code"+self.repoLink)
            os.system('GIT_TERMINAL_PROMPT=0 git clone '+self.repoLink+" "+self.path+self.repoName+"/ --depth 1")
            return "success"
        except:
            print("error")
            return "failed"

    # scan code using semgrep
    async def scanCode(self):
        #try:
        os.system('docker run --rm -v "'+self.path+'/'+self.repoName +
                    ':/src" returntocorp/semgrep semgrep --config=auto --output=output.json --json --verbose')
        os.system('mv -i '+self.path+'/'+self.repoName+'/output.json ' +
                    self.scanResultPath+'/'+self.repoName+'.json')
        file = open(self.scanResultPath+self.repoName+'.json','r')
        data = json.load(file)
        cgpt = chatGPT.CodePrompt()
        data['repositoryLink'] = self.repoLink
        data['date'] = str(datetime.datetime.now())
        for i in range(0,len(data['results'])):
            data['results'][i]['checked'] = 'false'
            data['results'][i]['potential'] = 'false'
            code = data['results'][i]['extra']['lines']
            apiKey = self.openApiKey
            # limit the mitigation generation to just 1
            if i<=0:
                print("[*] Fetching the suggestion!")
                data['results'][i]['extra']['metadata']
                data['results'][i]['suggestion']=cgpt.fixedCode(data['results'][i]['extra']['metadata'] ,code, apiKey)
        file = open(self.scanResultPath+self.repoName+'.json','w')
        json.dump(data,file)
        file.close()
        return "success"
        # except:
        #     print("error")
        #     return "failed"
            
    async def scanWithORTandDeepSemgrep(self,ortPath):
        try:
            repoNamed = self.repoName
            clonePath = self.path
            print(ORTpath + 'ort --debug --stacktrace -P ort.analyzer.allowDynamicVersions=true analyze -i '+ clonePath + repoNamed +' -o '+clonePath + repoNamed +'/ORTAnalyzerOutput -f JSON')
            print(clonePath + repoNamed +'/ORTAnalyzerOutput')
            return "success"
        except:
            print("error with ORT")
            return "failed"
    # delete the code to conserve memory
    async def cleanUp(self):
        try:
            os.system('rm -rf '+self.path+'/'+self.repoName+'/')
            print("success")
            return "success"
        except:
            return "failed"
