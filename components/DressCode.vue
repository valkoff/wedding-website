<template>
    <div class="grid items-center w-screen h-screen max-w-screen-md px-4 mx-auto">
        <div class="grid gap-4">
            <h1 class="text-4xl tracking-widest text-primary">Dress Code</h1>
            <p class="mb-6 text-lg text-gray-700">
                Per celebrare al meglio il nostro giorno speciale, vi suggeriamo un abbigliamento elegante e adatto a
                una cerimonia diurna. Poiché l’evento si terrà in un ambiente immerso nel verde, vi invitiamo a
                scegliere un look che unisca stile e comodità, per godervi la giornata in pieno relax.
                <br>
                Qui sotto troverete alcune idee per contribuire all’atmosfera del nostro evento.
            </p>
            <div class="flex flex-col gap-6 md:flex-row md:justify-center md:gap-12">
                <!-- Donne -->
                <div class="flex-1 p-6 bg-white rounded-lg shadow-lg">
                    <h3 class="mb-4 text-2xl font-semibold text-accent-dark">Per le Donne</h3>
                    <p class="text-gray-700">
                        I colori pastello come rosa tenue, azzurro, lavanda o altre tonalità delicate sono un’ottima
                        scelta per creare un’atmosfera luminosa e raffinata, perfetta per una cerimonia diurna.
                    </p>
                </div>
                <!-- Uomini -->
                <div class="flex-1 p-6 bg-white rounded-lg shadow-lg">
                    <h3 class="mb-4 text-2xl font-semibold man">Per gli Uomini</h3>
                    <p class="text-gray-700">
                        Completi in tonalità chiare o medie, come blu, grigio o beige, sono ideali per un look elegante
                        e fresco, perfetto per il giorno.
                    </p>
                </div>
            </div>
        </div>
    </div>

</template>

<style scoped>
.man {
    color: #177E89;
}
</style>