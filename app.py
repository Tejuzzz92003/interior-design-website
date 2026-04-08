from flask import Flask, render_template, request, jsonify

app = Flask(__name__)

# Home Page
@app.route('/')
def home():
    return render_template('index.html')

# About Page
@app.route('/about')
def about():
    return render_template('about.html')

# Services Page
@app.route('/services')
def services():
    return render_template('services.html')

# Portfolio Page
@app.route('/portfolio')
def portfolio():
    return render_template('portfolio.html')

# Contact Page
@app.route('/contact')
def contact():
    return render_template('contact.html')


# Booking API
@app.route('/book', methods=['POST'])
def book():
    data = request.json
    name = data.get('name')
    phone = data.get('phone')
    city = data.get('city')
    date = data.get('date')

    print("New Booking:", name, phone, city, date)

    return jsonify({"message": "Booking successful!"})


if __name__ == '__main__':
    app.run(debug=True)
    