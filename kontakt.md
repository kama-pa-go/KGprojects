---
layout: default1
title: Kontakt
---
# Skontaktuj się z nami:
<form action="/submit-form" method="post">
    <!-- Pole tekstowe -->
    <label for="imie">Imię:</label>
    <input class="bg-basicBeage" type="text" id="imie" name="imie" placeholder="Wpisz swoje imię" required>
    <br>
    <label for="mail">Mail:</label>
    <input class="bg-basicBeage" type="text" id="mail" name="mail" placeholder="Wpisz swój adres email" required>
    <br><br>
    <!-- Pole wyboru z optgroup -->
    <label for="temat">W jakiej sprawie chcesz się skontaktować:</label>
    <select class="bg-basicBeage" id="temat" name="temat" required>
            <optgroup label="Pochwały">
                <option value="pytanie">Pytanie do autorów</option>
                <option value="wspolpraca">Współpraca</option>
                <option value="zespol">Dołącz do zespołu</option>
        </optgroup>
        <optgroup label="Skargi">
            <option value="blad">Zgłoś błąd na stronie</option>
            <option value="rodo">Zgłoś naruszenie praw autorskich</option>
        </optgroup>
        <option value="inne">Inne</option>
    </select>
    <br><br>
    <label for="tresc">Treść wiadomości:</label><br>
    <textarea class="bg-basicBeage" id="tresc" name="tresc" rows="5" cols="60" placeholder="Zacznij pisać..." required></textarea>
    <br>
    <!-- Rozwijane zasady przetwarzania danych -->
        <details>
            <summary class="text-basicBeage">Zasady przetwarzania danych osobowych</summary>
            <p class="bg-basicBeage rounded-lg">
                Administratorem Twoich danych osobowych jest firma XYZ. Dane są przetwarzane w celu realizacji zgłoszenia oraz w celach statystycznych. 
                Masz prawo dostępu do swoich danych, ich poprawiania, usunięcia lub ograniczenia przetwarzania. Więcej informacji znajdziesz w naszej 
                <a href="/polityka-prywatnosci">Polityce Prywatności</a>.
            </p>
        </details>
        <br>
    <br>
    <!-- Przycisk -->
    <button type="submit"
        class="text-amber-50 max-w-[150px] max-h-[100px] px-6 red-yellow-button py-1 sm:px-10 md:px-16 sm:py-4 cursor-pointer rounded-full orangeShadow font-medium">
        Wyślij
    </button>
