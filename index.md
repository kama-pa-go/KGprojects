---
layout: main
title: start
---
<html lang="pl">

<head>
  <meta charset="UTF-8" />
  <link rel="icon" type="image/svg+xml" href="/vite.svg" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Górołazy</title>
  <link rel="stylesheet" href="assets/output.css" />
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
    integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA=="
    crossorigin="anonymous" referrerpolicy="no-referrer" />
  <style>
    body {
      background-image: url("assets/images/gory_tlo.jpg");
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center center;
      background-attachment: scroll;
      color: RGB(41, 17, 2);
    }

  * {
      font-family: Mono, sans-serif;
      font-weight: 300;
    }

    h1,
    h2,
    h3 {
      font-family: "Press Start 2P", system-ui;
    }

    .orangeShadow {
      box-shadow: 0px 14px 55px rgb(173, 83, 42);
    }

    .lightShadow {
      position: relative;
      overflow: hidden;
    }

    .lightShadow p {
      position: relative;
      z-index: 2;
    }

    .lightShadow::after {
      position: absolute;
      content: '';
      background: RGB(173, 83, 42);
      opacity: 0.1;
      width: 100%;
      height: 100%;
      top: 0;
      right: 100%;
      transition-duration: 200ms;
      z-index: 0;
    }

    .lightShadow:hover::after {
      transform: translateX(100%);
    }
    
    @keyframes wiggle {
      0%, 100% { transform: rotate(-3deg); }
      50% { transform: rotate(3deg); }
    }
    
    .animate-wiggle {
      animation: wiggle 2s ease-in-out infinite;
    }
    
  </style>
</head>

<body class="relative text-sm sm:text-base text-[#f542b3] min-h-screen flex flex-col">
  <div class="absolute inset-0 z-10 opacity-50"></div>
  <header
    class="bg-none sticky top-0 max-w-[1000px] mx-auto w-full p-4 sm:p-8 gap-4 sm:gap-8 flex items-center justify-between gap-4">
    <h1 class="">Górołazy</h1>
    <button class="px-6 lightShadow py-3 cursor-pointer rounded-full bg-white orangeShadow font-medium"
      onclick="window.location.href='https://kama-pa-go.github.io/KGprojects/kontakt.html'">
      <p>Kontakt</p>
    </button>
  </header>
  
  <main id="app" class="flex flex-col flex-1">
    
  <section class="flex flex-col max-w-[1000px] w-full mx-auto p-8 gap-8 md:gap-14 py-10 sm:py-14 md:py-20">
      <h2 class="font-bold text-2xl sm:text-4xl md:text-5xl lg:text-6xl text-center">Witaj w społeczności Górołazów!</h2>
      <p class="mx-auto max-w-[800px] w-full text-center text-base sm:text-lg md:text-xl">Dołącz do nas: zaplanuj własną wędrówkę górską. Nie ważne jak dużo masz doświadczenia- pokażemy Ci jak od zera zaplanować wycieczkę 🔥 </p>
      
  <div class="grid grid-cols-1 justify-items-center sm:grid-cols-2 gap-4 sm:gap-8 py-5">  
      
  <div style=""><img src="assets/images/kompas.jpg" alt="kompas" class="rounded-full orangeShadow animate-wiggle max-w-[100px] sm: max-w-[200px] md: max-w-[300px]"></div>

  <div class="grid grid-rows-2 gap-4">
        <button class=" px-6 lightShadow py-3 sm:px-10 sm:py-4  cursor-pointer   rounded-full bg-white orangeShadow"
          onclick="window.location.href='https://kama-pa-go.github.io/KGprojects/home.html'">
          <p class=" text-base sm:text-lg md:text-xl">Zaczynamy!</p>      
        </button>
        
  <button class="text-amber-50 px-6 lightShadow py-3 sm:px-10 sm:py-4 cursor-pointer rounded-full bg-amber-900 opacity-90 orangeShadow font-medium"
          onclick="window.location.href='https://kama-pa-go.github.io/KGprojects/galeria.html'">
          <p class="text-base sm:text-lg md:text-xl">Archiwum wycieczek</p>
        </button> 
      </div>
  </div>
</section>
    
  </main>
  
  <footer class= "bg-amber-50/50 flex items-center justify-center py-10 overline">
    <p>🌳 żadna góra nie ucierpiała przy robieniu tej strony 🌳</p>
  </footer>
</body>

</html>
