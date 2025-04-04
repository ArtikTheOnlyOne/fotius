from flask import Flask, render_template, request
from waitress import serve
import json

app = Flask(__name__)

@app.route("/")
def index():
    with open("static/data/deanery.json", "r", encoding="utf-8") as file:
        deanery = json.load(file)
    
    with open("static/data/pzas.json", "r", encoding="utf-8") as file:
        pzas = json.load(file)

    return render_template("/index.html", deanery_workers=deanery, pzas_workers=pzas, it_workers=pzas, ispr_workers=pzas)

if __name__ == "__main__":
    # serve(app, host="0.0.0.0", port=1337)
    app.run(debug=True, host="0.0.0.0", port=8008)