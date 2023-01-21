import requests
import time

while True:
    # Obtener la información del clima de Malambo
    city = "Malambo"
    api_key = "fd7838c55065e8c19dc3acb07e125621"
    url = f"http://api.openweathermap.org/data/2.5/weather?q={city}&appid={api_key}"
    weather_data = requests.get(url).json()
    temperature = weather_data["main"]["temp"]
    humidity = weather_data["main"]["humidity"]
    if temperature and humidity:
       print(f"Temperatura: {temperature} C°, Humedad: {humidity}%")
    else:
        print("No se pudo obtener la información del clima")
    # Esperar 30 minutos antes de volver a obtener la información del clima
    time.sleep(1800)