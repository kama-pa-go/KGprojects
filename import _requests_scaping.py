import requests
from bs4 import BeautifulSoup

# URL strony z listą ekwipunku górskiego
url = 'https://www.goromaniacy.pl/2017/07/jak-sie-spakowac-na-wyjazd-w-gory-i.html#'

# Pobranie zawartości strony
response = requests.get(url)
soup = BeautifulSoup(response.content, 'html.parser')

# Znalezienie elementów listy ekwipunku
# Zakładamy, że lista jest w tagu <ul> lub <ol>, a każdy element w <li>
lists = soup.find_all('ul')

# Generowanie pliku markdown
with open('ekwipunek_gorski.md', 'w', encoding='utf-8') as file:
    file.write('# Lista Ekwipunku Górskiego\n\n')
    
    for index, ul in enumerate(lists, start=1):
        if index > 8:
            break
        if index >1:
            file.write(f'## Lista {index}\n')  # Nagłówek dla każdej listy
            for item in ul.find_all('li'):
                file.write(f'- {item.text}\n')
        file.write('\n')  # Dodaj pustą linię między listam

import os
print("Plik markdown został wygenerowany. Znajdziesz go w:", os.getcwd())