<template>
  <div class="p-4 px-6 mt-20 text-center bg-white text-muted bg-opacity-60 text-shadow">
    <div class="grid max-w-screen-md gap-4 mx-auto">
      <h2 class="text-2xl tracking-wider md:text-4xl">Mancano...</h2>
      <div>
        <div class="grid grid-cols-4 gap-4">
          <!-- Giorni -->
          <div>
            <span class="text-xl md:text-3xl">{{ remainingTime.days }}</span>
            <br />
            <span class="text-sm md:text-lg">giorni</span>
          </div>
          <!-- Ore -->
          <div>
            <span class="text-xl md:text-3xl">{{ remainingTime.hours }}</span>
            <br />
            <span class="text-sm md:text-lg">ore</span>
          </div>
          <!-- Minuti -->
          <div>
            <span class="text-xl md:text-3xl">{{ remainingTime.minutes }}</span>
            <br />
            <span class="text-sm md:text-lg">minuti</span>
          </div>
          <!-- Secondi -->
          <div>
            <span class="text-xl md:text-3xl">{{ remainingTime.seconds }}</span>
            <br />
            <span class="text-sm md:text-lg">secondi</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';

const weddingDate = '2025-06-01 11:00:00';

function calculateRemainingTime() {
  const today = new Date();
  const wedding = new Date(weddingDate);
  const diff = wedding.getTime() - today.getTime();

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);

  return { days, hours, minutes, seconds };
}

const remainingTime = ref(calculateRemainingTime());

onMounted(() => {
  const interval = setInterval(() => {
    remainingTime.value = calculateRemainingTime();
  }, 1000);

  onUnmounted(() => {
    clearInterval(interval);
  });
});
</script>