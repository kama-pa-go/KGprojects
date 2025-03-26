---
layout: default1
title: Poradnik przygotowania wycieczki górskiej
---
<div class="flex flex-col gap-6">
<h1 class="w-full bg-greyBase text-center py-10 m-4 -mb-8"> Co należy przygotować jadąc w góry?</h1>
<div class="grid max-w-[800px] ps-5">
    To niełatwe zadanie, a więc postanowiliśmy Ci to ułatwić:
    <ol class="list-roman ml-10">
        <li>Skorzystaj z naszej listy zadań do zrobienia, aby upewnić się, że niczego nie przeoczyłeś.</li>
        <li>Jeśli szukasz inspiracji w sprawie celu podróży: sprawdź propozycje tras i mapkę na dole strony.</li>
        <li>Sprawdź nasz <a href="ekwipunek.html">poradnik "jak się  spakować"</a>. Oprócz poradnika pakowania znajdziesz tam wiele wskazówek przydatnych podczas całej podróży.</li>
        <li>Jeśli masz dodatkowe pytania <a href="kontakt.html">skontaktuj się z nami!</a></li>
    </ol>
<br>
</div>
<h3>Zadania do zrobienia:</h3>
<!-- Checklista z zadaniami -->
<div class="grid grid-cols-1 sm:grid-cols-3 items-center gap-3 sm:gap-5 justify-around ml-4">
    <div class="zadania w-full col-span-2">
        <label><input type="checkbox" class="zadanie"> Wybranie celu podróży</label>
        <label><input type="checkbox" class="zadanie"> Sprawdź, czy jest dopasowany do Twoich umiejętnosci i dostępnych środków transportu</label>
        <label><input type="checkbox" class="zadanie"> Zaplanuj trasę</label>
        <label><input type="checkbox" class="zadanie"> Zaplanuj dojazd</label>
        <label><input type="checkbox" class="zadanie"> Zaplanuj jedzenie i picie (ile ze sobą weźmiesz i gdzie uzupwłnisz)</label>
        <label><input type="checkbox" class="zadanie"> Zarezerwuj nocleg lub zaplanuj miejsce biwakowe pod namiotem</label>
        <label><input type="checkbox" class="zadanie"> Przygotuj resztę ekwipunku</label>
    </div>
    <div class="col-span-1 grid h-full bg-allmostWhite items-center justify-around shadow-sm">
        <label for="postep" class="text-center">Postęp:</label>
        <progress id="postep" value="0" max="100">0%</progress>
        <p>Aktualny postęp: <span id="procent">0</span>%</p>
    </div>
</div>
<br>
<br>
<h2 class="text-center"> Nie wiesz w jakie góry jechać? Sprawdź poniżej:</h2>

<div style="display: flex;" class="grid justify-items-center">
    <iframe style="border:none" src="https://en.frame.mapy.cz/s/pugotazeto" width="600" height="333" frameborder="0"></iframe>
</div>
<br>
<div class="overflow-auto rounded-lg shadow">
    <table class="w-full">
    <caption class="caption-top"><h3>Poniżej tabela z propozycjami tras</h3><br></caption>
    <thead class="bg-almostWhite border-b-2 border-grayBrown">
        <tr>
            <th class="w-50 p-3 text-sm tracking-wide text-left whitespace-nowrap">Pasmo górskie </th>
            <th class="min-w-[30px] p-3 text-sm tracking-wide text-left whitespace-nowrap"> GOT</th>
            <th class="min-w-[40px] p-3 text-sm tracking-wide text-left whitespace-nowrap">Nocleg pod dachem </th>
          <th class="min-w-[40px] p-3 text-sm tracking-wide text-left whitespace-nowrap">Dostęp do wody</th>
          <th class="min-w-[40px] p-3 text-sm tracking-wide text-left whitespace-nowrap"> Dojazd pociągiem </th>
          <th class="min-w-[40px] p-3 text-sm tracking-wide text-left whitespace-nowrap"> Trasa </th>
        </tr>
    </thead>
    <tbody>
        <tr class="odd:bg-white even:bg-greyBase">
            <td class="p-3 text-sm tracking-wide text-left whitespace-nowrap whitespace-nowrap"> Pieniny </td>
            <td class="p-3 text-sm tracking-wide text-left whitespace-nowrap">40</td>
            <td class="p-3 text-sm tracking-wide text-left whitespace-nowrap"> nie  </td>
            <td class="p-3 text-sm tracking-wide text-left whitespace-nowrap"> tak</td>
            <td class="p-3 text-sm tracking-wide text-left whitespace-nowrap">tak </td>
            <td class="w-65 p-3 text-sm tracking-wide text-left whitespace-nowrap">tu opis trasy 1 </td>
        </tr>
        <tr class="odd:bg-white even:bg-greyBase">
            <td class="p-3 text-sm tracking-wide text-left whitespace-nowrap">Beskid Mały </td>
            <td class="p-3 text-sm tracking-wide text-left whitespace-nowrap">24 </td>
            <td class="p-3 text-sm tracking-wide text-left whitespace-nowrap">tak  </td>
            <td class="p-3 text-sm tracking-wide text-left whitespace-nowrap"> tak</td>
            <td class="p-3 text-sm tracking-wide text-left whitespace-nowrap"> tak </td>
            <td class="w-65 p-3 text-sm tracking-wide text-left whitespace-nowrap">tu opis trasy 2 </td>
        </tr>
        <tr class="odd:bg-white even:bg-greyBase">
            <td  class="p-3 text-sm tracking-wide text-left whitespace-nowrap" rowspan="2">Beskid Żywiecki</td>
            <td class="p-3 text-sm tracking-wide text-left whitespace-nowrap">53</td>
            <td class="p-3 text-sm tracking-wide text-left whitespace-nowrap">nie</td>
            <td class="p-3 text-sm tracking-wide text-left whitespace-nowrap">tak</td>
            <td class="p-3 text-sm tracking-wide text-left whitespace-nowrap">nie</td>
            <td class="w-65 p-3 text-sm tracking-wide text-left whitespace-nowrap">tu opis trasy 3</td>
        </tr>
        <tr class="odd:bg-white even:bg-greyBase">
            <td class="p-3 text-sm tracking-wide text-left whitespace-nowrap">60</td>
            <td class="p-3 text-sm tracking-wide text-left whitespace-nowrap">nie</td>
            <td class="p-3 text-sm tracking-wide text-left whitespace-nowrap">nie</td>
            <td class="p-3 text-sm tracking-wide text-left whitespace-nowrap">nie</td>
            <td class="p-3 text-sm tracking-wide text-left whitespace-nowrap">opis trasy 4</td>
        </tr>
        <tr class="odd:bg-white even:bg-greyBase">
            <td class="p-3 text-sm tracking-wide text-left whitespace-nowrap">Bieszczady</td>
            <td class="p-3 text-sm tracking-wide text-left whitespace-nowrap"> 56</td>
            <td class="p-3 text-sm tracking-wide text-left whitespace-nowrap">tak</td>
            <td class="p-3 text-sm tracking-wide text-left whitespace-nowrap">tak</td>
            <td class="p-3 text-sm tracking-wide text-left whitespace-nowrap">tak</td>
            <td class="p-3 text-sm tracking-wide text-left whitespace-nowrap">opis trasy 5 </td>
        </tr>
    </tbody>
    <tfoot>
        <tr>
            <td  class="p-3 text-sm tracking-wide text-left whitespace-nowrap" colspan="6">Więcej informacji: link</td>
        </tr>
    </tfoot>
</table>
</div>
<br>
<div class="justify-items-center">
    <h2>Trasy poza Polską:</h2>
    <div class="bg-allmostWhite w-full py-2 px-4">
        <h3>Interaktywna Mapa Europy</h3>
        <p>Kliknij na wybrany kraj, aby dowiedzieć się więcej: (na ten moement działa link tylko do Portugali, Niemiec i Ukrainy)</p>
        <!--mapa-->
        <img class="sepia-80" style="width: 100%; max-width: 600px; height: auto;" src="assets/images/Europe_countries.svg" alt="Mapa Europy" usemap="#europemap">
        <map name="europemap">
        <!-- Obszar 1: Ukraina -->
        <area shape="rect" coords="400,200,450,250" alt="Polska" href="https://uk.wikipedia.org/wiki/%D0%A3%D0%BA%D1%80%D0%B0%D1%97%D0%BD%D0%B0" target="_blank" title="Ukraina">
        <!-- Obszar 2: Niemcy -->
        <area shape="circle" coords="300,250,30" alt="Niemcy" href="https://de.wikipedia.org/wiki/Deutschland" target="_blank" title="Niemcy">
        <!-- Obszar 3: Portugalia -->
        <area shape="poly" coords="150,300,200,350,250,300,200,250" alt="Francja" href="https://pt.wikipedia.org/wiki/Portugal" target="_blank" title="Portugalia">
        </map>
        <p><small>Mapa pochodzi z <a href="https://commons.wikimedia.org/wiki/File:Europe_countries.svg" target="_blank">Wikimedia Commons</a>.</small></p>
    </div>
</div>

<!-- Podłącz zewnętrzny plik JavaScript -->
<script src="assets/pasekPostepu.js"></script>
