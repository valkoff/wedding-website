<template>
    <div class="grid items-center w-screen h-screen max-w-screen-sm px-4 mx-auto">
        <div class="grid gap-4">
            <h2 class="text-2xl">Conferma la tua presenza</h2>
            <h1 class="text-4xl tracking-widest text-primary">Ci sarai?</h1>
            <p class="font-bold">Ti chiediamo di confermare la tua presenza entro il 30 aprile.
                Non vediamo
                l'ora di
                festeggiare insieme!</p>

            <!-- Form RSVP -->
            <form class="grid gap-4 px-4" @submit.prevent="sendEmail">
                <div class="flex flex-col gap-2 text-left">
                    <label for="name" class="block mb-2">Nome e cognome</label>
                    <input id="name" type="text" v-model="guestName"
                        class="px-4 py-2 border focus:outline-none focus:ring-2 focus:ring-primary" required />
                </div>

                <!-- Sezione Adulti e Bambini -->
                <div v-if="guestName" class="grid gap-3">
                    <p class="text-justify ">Verrai accompagnato o in famiglia? Fateci sapere quanti sarete in totale.
                    </p>
                    <div class="flex flex-row gap-2 sm:flex-row sm:justify-between">
                        <!-- Adulti -->
                        <div class="flex items-center gap-2">
                            <label>Adulti</label>
                            <div class="flex items-center">
                                <CounterButton @click="decrement('adults')" content="-" />
                                <span class="inline-block w-8 h-8 py-1 text-xl bg-white">{{ adults }}</span>
                                <CounterButton @click="increment('adults')" content="+" />
                            </div>
                        </div>

                        <!-- Bambini -->
                        <div class="flex items-center gap-2">
                            <label>Bambini</label>
                            <div class="flex items">
                                <CounterButton @click="decrement('children')" content="-" />
                                <span class="inline-block w-8 h-8 py-1 text-xl bg-white">{{ children }}</span>
                                <CounterButton @click="increment('children')" content="+" />
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Richieste alimentari, allergie o intolleranze -->
                <div class="mt-4">
                    <label for="food-requests" class="block mb-2 text-justify">Se avete richieste
                        alimentari,
                        allergie o intolleranze, oppure se avete bisogno di indicazioni per spostamenti e alloggio, o
                        per
                        qualsiasi altro dettaglio, fatecelo sapere!</label>
                    <textarea id="details" v-model="details" placeholder="Scrivi qui le tue richieste o le tue domande"
                        class="w-full px-3 py-2 border resize-none focus:outline-none focus:ring-2 focus:ring-primary"
                        rows="2"></textarea>
                </div>

                <button type="submit" :disabled="guestName === ''"
                    class="py-2 mt-3 text-white bg-primary hover:bg-opacity-90 disabled:opacity-50 disabled:cursor-not-allowed">
                    Conferma partecipazione
                </button>
            </form>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import emailjs from '@emailjs/browser';

const config = useRuntimeConfig();
const apiKey = config.public.mailjsApiKey;
const serviceId = config.public.mailjsServiceId;

const guestName = ref<string>('');
const adults = ref<number>(1);
const children = ref<number>(0);
const details = ref<string>('');

function increment(type: 'adults' | 'children') {
    if (type === 'adults') adults.value++;
    if (type === 'children') children.value++;
}

function decrement(type: 'adults' | 'children') {
    if (type === 'adults' && adults.value > 1) adults.value--;
    if (type === 'children' && children.value > 0) children.value--;
}

function sendEmail() {
    const templateParams = {
        from_name: guestName.value,
        adults: adults.value,
        children: children.value,
        details: details.value,
    };

    emailjs
        .send(
            serviceId,
            'template_n5ezmeh',
            templateParams,
            apiKey
        )
        .then(
            (response) => {
                alert('Email inviata con successo!');
                console.log('SUCCESS!', response.status, response.text);
            },
            (error) => {
                alert('Errore durante l’invio dell’email. Riprova più tardi.');
                console.log('FAILED...', error);
            }
        );
}
</script>