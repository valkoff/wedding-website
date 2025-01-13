<template>
    <div class="grid items-center w-screen h-screen px-4 mx-auto">
        <div class="grid gap-8 bg-opacity-30 text-muted text-shadow font-cardo ">
            <div class="grid gap-2">
                <h2 class="mb-8 text-3xl">La Location</h2>
                <h1 class="text-4xl tracking-widest text-primary">La Seminatrice</h1>
                <p class="text-lg font-bold">Strada Passo di Roma S. Salvatore, 16 <br />
                    02038 Scandriglia RI </p>
                <div class="text-xl font-bold text-primary">
                    <a href="https://maps.app.goo.gl/j8ezmynL2KT5zeQ99" target="_blank">Indicazioni</a>
                </div>
            </div>

            <p>
                Nel cuore della Sabina, la location è un luogo magico e suggestivo, immerso nel verde e nella
                natura. <br />
                Vogliamo passare con voi una giornata indimenticabile, in un ambiente rilassante e familiare.
            </p>


            <img src="/cattedrale.jpg" alt="cattedrale" class="w-64 mx-auto rounded-md md:w-lg w-64-sm" />


        </div>

    </div>

    <div class="grid max-w-screen-md gap-4 p-6 mx-auto ">
        <h2 class="text-3xl">Dove alloggiare?</h2>
        <p class="mb-3 ">
            Abbiamo invitati da ogni parte d'Italia, ognuno con diverse esigenze di spostamento e permanenza.
            Per questo suggeriamo tre delle soluzioni più comuni che possono aiutarvi a trascorrere al meglio il
            viaggio, in ordine di distanza dalla Location
        </p>
        <div class="grid grid-cols-1 gap-6 md:grid-cols-3">
            <Alloggio title="Roma" subtitle="La Capitale"
                description="Se volete sfruttare l'occasione per visitarla, vi consigliamo di trattenervi qualche giorno in più. Inoltre, con il Giubileo potreste godere di eventi e manifestazioni speciali."
                elapsed_time="> 1 ora in macchina" indication_link="https://maps.app.goo.gl/j8ezmynL2KT5zeQ99" />

            <Alloggio title="Monterotondo" subtitle="Comoda e servita" description="Alle porte di Roma, facilmente raggiungibile in treno. Una cittadina con tutti i servizi a
                    disposizione." elapsed_time="circa 40 min in macchina"
                indication_link="https://maps.app.goo.gl/j8ezmynL2KT5zeQ99" />

            <Alloggio title="Vicino la location" subtitle="Zero sbatti"
                description="Se te pesa er culo, vuoi svegliarti in mezzo alle pecore e vuoi tornare strisciando dopo aver ingerito più alcool di un vichingo, è meglio non allontanarsi troppo."
                elapsed_time="circa 5 min ciondolando" indication_link="https://maps.app.goo.gl/j8ezmynL2KT5zeQ99" />
        </div>

    </div>
</template>