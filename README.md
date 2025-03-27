Kamila Godlewska repository

# Instrukcja kompilowania po wprowadzeniu zmian
npx @tailwindcss/cli -i ./assets/styles.css -o ./assets/output.css --watch

git add .

git commit -m "Your commit message here"

git push origin main

(na koniec, żeby zoptymalizować rozmiar pliku output.css)
npx tailwindcss -o output.css --minify
