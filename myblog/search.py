from googlesearch import search

# Przykładowa lista zescapowanych elementów
elements = ["Odież górska", "Kosmetyczka", "Apteczka", "Dokumenty", "Prowiant", ""]

from googlesearch import search

# Przykładowa lista zescapowanych elementów
elements = ["Odzież górska", "Kosmetyczka", "Apteczka", "Dokumenty", "Prowiant", ""]

# Funkcja do wyszukiwania dodatkowych informacji
def search_additional_info(query):
    results = []
    for j in search(query, num_results=6, lang='pl', start_num=1):  # Wyszukaj 5 wyników z Google
        results.append(j)
    return results

# Przetwarzanie każdego elementu
additional_info = {}
for element in elements:
    if element:  # Pomijanie pustych elementów
        additional_info[element] = search_additional_info(element)

# Wyświetlenie wyników
for key, values in additional_info.items():
    formatted_values = ', '.join(f"[{value}]({value})" for value in values)
    print(f"{key}: [ {formatted_values} ]")

# Zapisanie wyników w formacie Markdown:
with open("additional_info.md", "w") as md_file:
    for key, value in additional_info.items():
        md_file.write(f"## {key}\n")
        for link in value:
            md_file.write(f"- [{link}]({link})\n")
        md_file.write("\n")

