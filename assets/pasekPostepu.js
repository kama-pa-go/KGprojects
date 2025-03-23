document.addEventListener('DOMContentLoaded', function() {
    const checkboxes = document.querySelectorAll('.zadania');
    const pasekPostepu = document.getElementById('postep');
    const procentPostepu = document.getElementById('procent');

    function aktualizujPostep() {
        const wykonaneZadania = Array.from(checkboxes).filter(checkbox => checkbox.checked).length;
        const postep = (wykonaneZadania / checkboxes.length) * 100;
        pasekPostepu.value = postep;
        procentPostepu.textContent = postep.toFixed(0);
        alert("hej");
    }

    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', aktualizujPostep);
        checkbox.addEventListener('click', function() {
            alert("hej");
        });
    });

    aktualizujPostep();
});
