from flask import Flask
from flask_cors import CORS

app = Flask(__name__)
CORS(app)


@app.route('/hello')
def say_hello_python():
    return {'result': 'Hello Python'}
