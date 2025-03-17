<template>
    <div id="main-wrap" class="w-screen h-screen">
        <div class="container">
            <div class="absolute top-[10%] left-0 right-0 grid items-center">
                <div class="grid max-w-screen-md gap-4 px-6 mx-auto text-muted text-shadow font-cardo">
                    <h1 class="text-4xl tracking-widest">Lista nozze</h1>
                    <p class="text-lg">
                        Per la nostra luna di miele abbiamo deciso di partire per un viaggio oltreoceano. Se desideri
                        contribuire a
                        rendere la nostra luna di miele indimenticabile, te ne saremo davvero grati!
                    </p>

                    <p class="text-lg font-bold">IBAN: IT15X0347501605CC0010255466</p>
                    <p class="text-lg font-bold">Intestato a: Valerio Cofano</p>
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
    opacity: 0.5;
    background-repeat: no-repeat;
    background-position: 28% 0%;
    background-size: cover;
    background-image: url('/hero.jpg');
}
</style>