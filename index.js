document.addEventListener('DOMContentLoaded', () => {
    let selectedBurner = null;
    let selectedHeat = null;

    const burners = document.querySelectorAll('.burner');
    const burnerButtons = document.querySelectorAll('.burner-btn');
    const modeButtons = document.querySelectorAll('.mode-btn');
    const adjustHeightBtn = document.getElementById('adjust-height-btn');
    const stoveLegs = document.querySelectorAll('.leg');
    const adjustHeightSound = document.getElementById('adjust-height-sound');

    const burnerSounds = {
        burner1: document.getElementById('burner1-sound'),
        burner2: document.getElementById('burner2-sound'),
        burner3: document.getElementById('burner3-sound'),
        burner4: document.getElementById('burner4-sound')
    };
    const lowHeatSound = document.getElementById('low-heat-sound');
    const highHeatSound = document.getElementById('high-heat-sound');
    const turnOffSound = document.getElementById('turn-off-sound');
    const selectSound = document.getElementById('select-sound');

    burnerButtons.forEach(button => {
        button.addEventListener('click', () => {
            selectedBurner = document.getElementById(button.getAttribute('data-burner'));
            burners.forEach(burner => burner.classList.remove('selected'));
            selectedBurner.classList.add('selected');
            burnerSounds[button.getAttribute('data-burner')].play();
        });
    });

    modeButtons.forEach(button => {
        button.addEventListener('click', () => {
            selectedHeat = button.getAttribute('data-heat');
            if (selectedBurner) {
                if (selectedHeat === 'low') {
                    selectedBurner.style.backgroundColor = 'yellow';
                    lowHeatSound.play();
                } else if (selectedHeat === 'high') {
                    selectedBurner.style.backgroundColor = 'red';
                    highHeatSound.play();
                } else if (selectedHeat === 'off') {
                    selectedBurner.style.backgroundColor = '#ccc';
                    turnOffSound.play();
                }
                selectedBurner.classList.remove('selected');
                selectedBurner = null;
            } else {
                selectSound.play();
            }
        });
    });

    adjustHeightBtn.addEventListener('click', () => {
        stoveLegs.forEach(leg => {
            // Verifica a altura atual das pernas para alternar entre os dois estados
            if (leg.style.height === '80px') {
                // Quando a altura for 80px, muda para 180px com animação
                leg.style.transition = 'height 0.5s ease-in-out, bottom 0.5s ease-in-out'; // Transição suave
                leg.style.height = '180px';
                leg.style.bottom = '-190px'; // Ajusta a posição da perna
            } else {
                // Caso contrário, volta para a altura inicial
                leg.style.transition = 'height 0.5s ease-in-out, bottom 0.5s ease-in-out'; // Transição suave
                leg.style.height = '80px';
                leg.style.bottom = '-90px'; // Posição original
            }
        });
        adjustHeightSound.play();
    });
    
});