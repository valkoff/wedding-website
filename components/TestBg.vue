<template>
  <div id="main-wrap" class="relative w-screen h-screen">
    <div class="main-container">
      <div class="absolute inset-0 grid items-center">
        <img src="/logo.png" alt="logo" class="h-64 mx-auto my-20" />


        <div class="grid gap-4 p-6 text-center bg-opacity-30 text-muted text-shadow font-cardo bg-secondary">
          <h2 class="text-3xl">Save the date</h2>
          <h1 class="text-5xl tracking-widest text-primary">01.06.2025</h1>

          <p class="text-lg">
            Vi chiediamo di presentarvi ai cancelli della location non prima delle <span
              class="text-xl font-bold">11:00</span>. <br />
            In attesa della cerimonia, che si terrà alle <span class="text-xl font-bold">11:30</span>,
            l'accoglienza vi inviterà a gustare un aperitivo nel giardino.
          </p>
        </div>




      </div>
    </div>

  </div>


</template>

<style scoped>
#main-wrap {
  position: relative;
}

#main-wrap:before {
  content: ' ';
  display: block;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  opacity: 0.25;
  background-repeat: no-repeat;
  background-position: 50% 0;
  background-size: cover;
  background-image: url('/front.jpg');
}

#main-container {
  position: relative;
}
</style>