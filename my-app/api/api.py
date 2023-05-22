from flask import Flask, jsonify

app = Flask(__name__)

@app.route('/api', methods=['GET'])
def index():
  data = {
     'name': ['orange', 'apple']
  }
  print("" - 12)
  return jsonify(data)

if __name__  == '__main__':
    app.run(debug=True)