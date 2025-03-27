---
layout: default1
title: Kontakt
---
<div class="items-center">
<h1 class="m-4 py-10"> Skontaktuj się z nami:</h1>
<form action="/submit-form" method="post" class="-mt-8 bg-white shadow-sm max-w-[900px] sm:w-full p-6">
<div class="p-4">
    <!-- Pole tekstowe -->
    <label for="imie">Imię:</label>
    <input class="bg-greyBase max-h-[50px] shadow-inner shadow-amber-950 w-3/5 p-4 m-2 rounded-lg" type="text" id="imie" name="imie" placeholder="Wpisz swoje imię" required>
    <br>
    <label for="mail">Mail:</label>
    <input class="bg-greyBase max-h-[50px] shadow-inner shadow-amber-950 w-3/5 p-4 m-2 rounded-lg" type="text" id="mail" name="mail" placeholder="Wpisz swój adres email" required>
    <br><br>
    <!-- Pole wyboru z optgroup -->
    <label for="temat">W jakiej sprawie chcesz się skontaktować:</label>
    <select class="bg-greyBase max-h-[50px] shadow-inner shadow-amber-950 w-3/5 p-4 rounded-lg" id="temat" name="temat" required>
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
    <textarea class="bg-greyBase shadow-inner shadow-amber-950 w-full p-4 rounded-lg" id="tresc" name="tresc" rows="5" cols="60" placeholder="Zacznij pisać..." required></textarea>
    <br>
    <!-- Rozwijane zasady przetwarzania danych -->
        <details>
            <summary class="text-greyBaseDark">Zasady przetwarzania danych osobowych</summary>
            <p class="bg-greyBase rounded-lg">
                Administratorem Twoich danych osobowych jest firma XYZ. Dane są przetwarzane w celu realizacji zgłoszenia oraz w celach statystycznych. 
                Masz prawo dostępu do swoich danych, ich poprawiania, usunięcia lub ograniczenia przetwarzania. Więcej informacji znajdziesz w naszej 
                <a href="/polityka-prywatnosci">Polityce Prywatności</a>.
            </p>
        </details>
        <br>
    <br>
    <!-- Przycisk -->
    <button type="submit"
        class="max-w-[200px] max-h-[150px] px-6 red-yellow-button py-1 sm:px-10 md:px-16 sm:py-4 cursor-pointer rounded-full orangeShadow font-medium">
        Wyślij
    </button>
</div>
</form>
</div>
