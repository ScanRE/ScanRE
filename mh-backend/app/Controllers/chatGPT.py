import openai


class CodePrompt:

    def fixedCode(self, tech, code, apiKey):
        if len(code) > 200:
            return "code length exceeded"
        else:
            # create a chat completion
            openai.api_key = apiKey
            chat_completion = openai.ChatCompletion.create(
                model="gpt-4", messages=[{"role": "user", "content": f"The following code is of {tech}. Look for vuln such as code injection, XSS, SQLi, etc. Suggest a fix for the vulnerable piece of code: {code} . The output must be only the fixed code snippet with no explanation or context"}])
            print(chat_completion)
        return chat_completion.choices[0].message.content