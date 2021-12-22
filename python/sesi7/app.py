from flask import Flask
from markupsafe import escape
from flask import request
from flask import render_template

app = Flask(__name__)


@app.route('/')
def hello_world():
    return 'Hello, World!'


@app.route('/user/<username>')
def show_user_profile(username):
    # show the user profile for that user
    return f'User {escape(username)}'


@app.route('/post/<int:post_id>')
def show_post(post_id):
    # show the post with the given id, the id is an integer
    return f'Post {escape(post_id)}'


@app.route('/path/<path:subpath>')
def show_subpath(subpath):
    # show the subpath after /path/
    return f'Subpath {escape(subpath)}'


@app.route("/<name>")
def hello(name):
    return f"Hello, {escape(name)}!"


@app.route('/home')
def home():
    return 'This is Home!'


@app.route('/login', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        return do_the_login()
    else:
        return show_the_login_form()


def do_the_login():
    return "Login Performed"


def show_the_login_form():
    return "This is Login Form"


@app.route('/hello/')
@app.route('/hello/<name>')
def hellorender(name=None):
    age = 90
    siblings = ['aldy', 'hanif']
    return render_template('hello.html',
                           name=name,
                           age=age,
                           siblings=siblings)


if __name__ == '__main__':
    app.run(debug=True)
