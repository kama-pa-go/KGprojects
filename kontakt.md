---
layout: default1
title: Kontakt
---
#Skontaktuj się z nami:
<form action="/submit-form" method="post">
    <!-- Pole tekstowe -->
    <label for="imie">Imię:</label>
    <input type="text" id="imie" name="imie" placeholder="Wpisz swoje imię" required>
    <br>
    <label for="mail">Mail:</label>
    <input type="text" id="mail" name="mail" placeholder="Wpisz swój adres email" required>
    <br>
    <!-- Pole wyboru z optgroup -->
    <label for="temat">W jakiej sprawie chcesz się skontaktować:</label>
    <select id="temat" name="temat" required>
            <optgroup label="Pochwały">
                <option value="wspolpraca">Współpraca</option>
                <option value="zespol">Dołącz do zespołu</option>
                <option value="pytanie">Pytanie do autorów</option>
        </optgroup>
        <optgroup label="Skargi">
            <option value="blad">Zgłoś błąd na stronie</option>
            <option value="rodo">Zgłoś naruszenie praw autorskich</option>
        </optgroup>
    </select>
    <label for="tresc">Treść wiadomości:</label>
    <input type="tresc" id="tresc" name="tresc" placeholder="Zacznij pisać" required>
    <br>
    <!-- Przycisk -->
    <button type="submit">Wyślij</button>
</form>
