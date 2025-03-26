Kamila Godlewska repository

npx @tailwindcss/cli -i ./assets/styles.css -o ./assets/output.css --watch

git add .

git commit -m "Your commit message here"

git push origin main


<!DOCTYPE html>
<html lang="pl">

  <head>
    <meta charset="UTF-8" />
    <link rel="icon" href="assets/images/icon.png" type="image/png">
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Górołazy</title>
    <link rel="stylesheet" href="assets/output.css" />    
    <script defer src="https://cdn.jsdelivr.net/npm/alpinejs@3.x.x/dist/cdn.min.js"></script>
    
    <style>
        .zadanie {
            margin-bottom: 20px;
        }
        .zadania label {
            display: block;
            margin: 5px 0;
        }
    </style>

  </head>
      
<body x-data="{ sidebarOpen: false, isMobile: window.innerWidth < 640 }" 
  x-init="window.addEventListener('resize', () => { isMobile = window.innerWidth < 640 })" 
  class="h-full">
  <button @click="sidebarOpen = !sidebarOpen" 
    class="fixed z-50 sm:hidden top-2 left-2 px-6 py-3 lightShadow cursor-pointer rounded-full bg-white orangeShadow font-medium">
    <i class="fas fa-bars" x-show="!sidebarOpen"></i>
    <i class="fas fa-times" x-show="sidebarOpen"></i>
  </button>

  <div class="grid grid-cols-1 sm:grid-cols-6 lg:grid-cols-5 gap-6 items-stretch min-h-screen">
    <!-- sidebar -->
    <div x-show="!isMobile() || sidebarOpen" 
        @click.away="if(isMobile()) sidebarOpen = false"
        :class="{ 'fixed inset-0 z-40 w-5/6': sidebarOpen && isMobile() }" 
        class="sm:col-span-2 lg:col-span-1 bg-amber-900 transition-all duration-300 h-full"
        :style="sidebarOpen && isMobile() ? 'display: block !important' : ''">
      <h3 class="bg-stone-400">
      Nawigacja: {% include navigation_ekwipunek.html %} żółty= tu jesteś
      </h3>
    </div>

    <!--main-->
    <div class="sm:col-span-4 m-5">
      
      <header>
        <h1 class="bg-stone-400">{{ page.title }}</h1>
      </header>
    
      <article>
        {{ content }}
        <br>
      </article>
    
    </div>
  </div>

<script>
    function checkScreenSize() {
            return window.innerWidth < 640;
    }
</script>

  </body>
</html>
