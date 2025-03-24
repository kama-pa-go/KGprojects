---
title: galeria
---

<!doctype html>
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
      background-color: rgb(243, 226, 198);
      background-repeat: no-repeat;
      background-size: cover;
      background-position: top center;
      background-attachment: scroll;
      color: RGB(100, 17, 12);
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
  </style>
</head>

<body class="relative text-sm sm:text-base min-h-screen flex flex-col">
  <div class="absolute inset-0 z-[-1] opacity-50"></div>
  
  <header
    class="bg-none sticky top-0 max-w-[1000px] mx-auto w-full p-4 sm:p-8 gap-4 sm:gap-8 flex items-center justify-between gap-4">
    <h1 class="">Górołazy</h1>
    <button class="px-6 lightShadow py-3 cursor-pointer rounded-full bg-white orangeShadow font-medium"
      onclick="window.location.href='https://kama-pa-go.github.io/KGprojects/'">
      <p>Główna</p>
    </button>
  </header>

  <main>

  {% include galeriaZdjec.html %}
    
  <div class="m-4 grid grid-cols-2 gap-4 sm:grid-cols-3">
    <div class="grid gap-4">
      <div>
        <a href="https://przykladowy-link.com" class="block relative group overflow-hidden">
        <img 
          src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg" 
          alt="Opis" 
          class="w-full h-auto transition-all duration-300 group-hover:brightness-50"/>
          <div 
          class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white text-xl font-bold pointer-events-none">
          Twój tekst podpisu
        </div>
      </a>
      </div>
      <div>
        <img class="h-auto max-w-full rounded-lg shadow-2xs" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg" alt="">
      </div>
      <div>
        <img class="h-auto max-w-full rounded-lg shadow-2xs" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg" alt="">
      </div>
    </div>
    <div class="grid gap-4">
      <div>
        <img class="h-auto max-w-full rounded-lg shadow-2xs" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg" alt="">
      </div>
      <div>
        <img class="h-auto max-w-full rounded-lg shadow-2xs" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg" alt="">
      </div>
      <div>
        <img class="h-auto max-w-full rounded-lg shadow-2xs" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg" alt="">
      </div>
    </div>
    <div class="grid gap-4">
      <div>
        <img class="h-auto max-w-full rounded-lg shadow-2xs" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg" alt="">
      </div>
      <div>
        <img class="h-auto max-w-full rounded-lg shadow-2xs" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg" alt="">
      </div>
      <div>
        <img class="h-auto max-w-full rounded-lg shadow-2xs" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg" alt="">
      </div>
    </div>
  
  </div>
  
  <footer class= "bg-amber-50/50 flex items-center justify-center py-10 overline">
    <p>🌳 żadna góra nie ucierpiała przy robieniu tej strony 🌳</p>
  </footer>
</body>

</html>
