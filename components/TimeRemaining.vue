<template>
  <div class="grid gap-4 p-4 px-8 text-center bg-white text-muted bg-opacity-60 text-shadow">
    <h2 class="text-4xl tracking-wider">Mancano...</h2>
    <div>
      <div class="grid grid-cols-4 gap-4">
        <div class="text-4xl tracking-wider">
          {{ remainingTime.days }}
          <span class="text-md">giorni</span>
        </div>
        <div class="text-4xl tracking-wider">
          {{ remainingTime.hours }}
          <span class="text-md">ore</span>
        </div>
        <div class="text-4xl tracking-wider">
          {{ remainingTime.minutes }}
          <span class="text-md">minuti</span>
        </div>
        <div class="text-4xl tracking-wider">
          {{ remainingTime.seconds }}
          <span class="text-md">secondi</span>
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