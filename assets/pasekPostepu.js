document.addEventListener('DOMContentLoaded', function() {
    const checkboxes = document.querySelectorAll('.zadanie');
    const pasekPostepu = document.getElementById('postep');
    const procentPostepu = document.getElementById('procent');


    function aktualizujPostep() {
        const wykonaneZadania = Array.from(checkboxes).filter(checkbox => checkbox.checked).length;
        const postep = (wykonaneZadania / checkboxes.length) * 100;
        console.log(`Wykonane zadania: ${wykonaneZadania}, Postęp: ${postep}%`);

        console.log(checkboxes);
        
        if (pasekPostepu) {
    
            pasekPostepu.value = postep; // Ustaw wartość paska postępu

        }

        if (procentPostepu) {
    
            procentPostepu.textContent = postep.toFixed(0); // Ustaw tekst procentowy

        }
    }

    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', aktualizujPostep);
    });

    aktualizujPostep();
});
