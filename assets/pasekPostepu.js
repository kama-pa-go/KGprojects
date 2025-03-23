console.log("Plik JavaScript został załadowany!");

document.addEventListener('DOMContentLoaded', function() {
    const checkboxes = document.querySelectorAll('.zadania');
    const pasekPostepu = document.getElementById('postep');
    const procentPostepu = document.getElementById('procent');
    console.log("DOMContentLoaded!");

    // Dodaj logi, aby sprawdzić, czy elementy istnieją
    console.log(pasekPostepu); // Powinno pokazać element <progress>
    console.log(procentPostepu); // Powinno pokazać element <span>
    console.log(checkboxes); // Powinno pokazać NodeList z wszystkimi checkboxami

    function aktualizujPostep() {
        const wykonaneZadania = Array.from(checkboxes).filter(checkbox => checkbox.checked).length;
        const postep = (wykonaneZadania / checkboxes.length) * 100;
        pasekPostepu.value = postep;
        procentPostepu.textContent = postep.toFixed(0);
        alert("hej");
    }

    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', aktualizujPostep);
    });

    aktualizujPostep();
});
