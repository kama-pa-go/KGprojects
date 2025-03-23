---
layout: default1
title: Poradnik przygotowania wycieczki górskiej
---

# Co należy przygotować jadąc w góry?
To niełatwe zadanie, a więc postanowiliśmy Ci to ułatwić:
<ol type="I">
  <li>Skorzystaj z naszej listy zadań do zrobienia, aby upewnić się, że niczego nie przeoczyłeś.</li>
  <li>Jeśli szukasz inspiracji w sprawie celu podróży: sprawdź propozycje tras i mapkę na dole strony.</li>
  <li>Sprawdź nasz <a href="/ekwipunek.html">poradnik "jak się  spakować"</a>. Oprócz poradnika pakowania znajdziesz tam wiele wskazówek przydatnych podczas całej podróży.</li>
  <li>Jeśli masz dodatkowe pytania <a href="/kontakt.html">skontaktuj się z nami!</a></li>
</ol>
<br>
### Zadani do zrobienia:
<!-- Checklista z zadaniami -->
<div class="zadania">
        <label><input type="checkbox" class="zadanie"> Wybranie celu podróży</label>
        <label><input type="checkbox" class="zadanie"> Sprawdź, czy jest dopasowany do Twoich umiejętnosci i dostępnych środków transportu</label>
        <label><input type="checkbox" class="zadanie"> Zaplanuj trasę</label>
        <label><input type="checkbox" class="zadanie"> Zaplanuj dojazd</label>
        <label><input type="checkbox" class="zadanie"> Zaplanuj jedzenie i picie (ile ze sobą weźmiesz i gdzie uzupwłnisz)</label>
        <label><input type="checkbox" class="zadanie"> Zarezerwuj nocleg lub zaplanuj miejsce biwakowe pod namiotem</label>
        <label><input type="checkbox" class="zadanie"> Przygotuj resztę ekwipunku</label>
</div>
    <!-- Pasek postępu -->
    <label for="postep">Postęp:</label>
    <progress id="postep" value="0" max="100">0%</progress>
    <p>Aktualny postęp: <span id="procent">0</span>%</p>
    <script>
        // Pobierz wszystkie checkboxy i elementy związane z postępem
        const checkboxes = document.querySelectorAll('.zadanie');
        const pasekPostepu = document.getElementById('postep');
        const procentPostepu = document.getElementById('procent');
        // Funkcja do obliczania i aktualizacji postępu
        function aktualizujPostep() {
            const liczbaZadan = checkboxes.length; // Liczba wszystkich zadań (8)
            let wykonaneZadania = 0;
            // Policz zaznaczone zadania
            checkboxes.forEach(checkbox => {
                if (checkbox.checked) {
                    wykonaneZadania++;
                }
            });
            // Oblicz postęp w procentach
            const postep = (wykonaneZadania / liczbaZadan) * 100;
            // Zaktualizuj pasek postępu i tekst
            pasekPostepu.value = postep;
            procentPostepu.textContent = postep.toFixed(0); // Zaokrąglij do liczby całkowitej
        }
        // Dodaj nasłuchiwanie zdarzeń do każdego checkboxa
        checkboxes.forEach(checkbox => {
            checkbox.addEventListener('change', aktualizujPostep);
        });
        // Inicjalizacja postępu na starcie
        aktualizujPostep();
    </script>
<br>

<br><br>
# Nie wiesz w jakie góry jecchać? Sprawdź poniżej:

<div style="display: flex; justify-content: center;">
    <iframe style="border:none" src="https://en.frame.mapy.cz/s/pugotazeto" width="600" height="333" frameborder="0"></iframe>
</div>
<br><br>
<table border="1">
    <caption><strong>Poniżej tabela z propozycjami tras</strong><br></caption>
    <thead>
        <tr>
            <th>Pasmo górskie </th>
            <th> GOT</th>
            <th>Nocleg pod dachem </th>
          <th>Dostęp do wody</th>
          <th> Dojazd pociągiem </th>
          <th> Trasa </th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td> Pieniny </td><td>40</td><td> nie  </td><td> tak</td><td>tak </td><td>tu opis trasy 1 </td>
        </tr>
        <tr>
            <td>Beskid Mały </td><td>24 </td><td>tak  </td><td> tak</td><td> tak </td><td>tu opis trasy 2 </td>
        </tr>
      <tr>
            <td rowspan="2">Beskid Żywiecki</td><td>53</td><td>nie</td><td>tak</td><td>nie</td><td>tu opis trasy 3</td>
        </tr>
      <tr>
            <td>60</td><td>nie</td><td>nie</td><td>nie</td><td>opis trasy 4</td>
        </tr>
      <tr>
            <td>Bieszczady</td><td> 56</td><td>tak</td><td>tak</td><td>tak</td><td>opis trasy 5 </td>
        </tr>
    </tbody>
    <tfoot>
        <tr>
            <td colspan="6">Więcej informacji: link</td>
        </tr>
    </tfoot>
</table>
<br><br>
