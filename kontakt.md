---
layout: default1
title: Kontakt
---

<!DOCTYPE html>
<html lang="pl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Formularz Kontaktowy</title>
</head>
<body>
    <form action="/submit-form" method="post">
        <!-- Pole tekstowe -->
        <label for="imie">Imię:</label>
        <input type="text" id="imie" name="imie" placeholder="Wpisz swoje imię" required>
        <br><br>

        <!-- Pole wyboru z optgroup -->
        <label for="kolor">Ulubiony kolor:</label>
        <select id="kolor" name="kolor" required>
            <optgroup label="Kolory podstawowe">
                <option value="czerwony">Czerwony</option>
                <option value="zielony">Zielony</option>
                <option value="niebieski">Niebieski</option>
            </optgroup>
            <optgroup label="Kolory dodatkowe">
                <option value="żółty">Żółty</option>
                <option value="pomarańczowy">Pomarańczowy</option>
                <option value="fioletowy">Fioletowy</option>
            </optgroup>
        </select>
        <br><br>

        <!-- Przycisk -->
        <button type="submit">Wyślij</button>
    </form>
</body>
</html>
