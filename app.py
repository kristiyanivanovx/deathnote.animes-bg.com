from flask import Flask, render_template, url_for, flash, request, redirect
import creds

app = Flask(__name__)

app.config['SECRET_KEY'] = creds.secret_key

# handle 404 error

@app.errorhandler(404)
def page_not_found(e):
    return render_template('404.html'), 404

# handle app routes/pages

@app.route("/")
def home():
	return render_template("home.html")

@app.route("/art")
def art():
	return render_template("art.html")
    
@app.route("/links")
def links():
	return render_template("links.html")

@app.route("/review")
def review():
	return render_template("review.html")

#

if __name__=='__main__':
	app.run() # ssl_context='adhoc'