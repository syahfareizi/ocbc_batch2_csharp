from os import name
from flask import Flask
from flask_cors import CORS
from flask import jsonify
import time

app = Flask(__name__)
CORS(app)


@app.route('/hello')
def say_hello_python():
    return {'result': 'Hello Python'}

@app.route('/time')
def get_current_time():
    return jsonify({'time': time.time()})

if __name__=='__main__':
    app.run(debug=True)