<template>
  <div id="main-wrap" class="w-screen h-screen">
    <div class="container">
      <div class="absolute inset-0 grid items-center">
        <img src="/logo.png" alt="logo" class="object-contain w-full h-64 px-6 mx-auto mt-20" />
        <div class="grid gap-4 p-6 text-muted text-shadow font-cardo">
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
  width: 100%;
}

#main-wrap:before {
  content: '';
  display: inline;
  position: absolute;
  left: 0;
  top: 0;
  padding: 0;
  margin: 0;
  width: 100%;
  height: 100%;
  opacity: 0.25;
  background-repeat: no-repeat;
  background-position: 50% 0;
  background-size: cover;
  background-image: url('/front.jpg');
}
</style>