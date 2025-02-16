from flask import Flask

app=Flask(__name__)
@app.route('/members')
def members():
    return {'Members': ['Alice', 'Bob', 'Charlie']}

if __name__ == '__main__':
    app.run(debug=True)