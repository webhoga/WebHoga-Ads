<template>
  <footer class="bg-gray-900 text-gray-300 py-10 text-center text-sm space-y-2">
    <div>
      © {{ currentYear }} WebHoga Digital Services. All rights reserved.
    </div>
    <div class="space-x-4">
      <a href="https://www.webhoga.com/privacy-policy" target="_blank" rel="noopener noreferrer" class="hover:underline hover:text-white">Privacy Policy</a>
      <span>|</span>
      <a href="https://www.webhoga.com/terms-and-conditions" target="_blank" rel="noopener noreferrer" class="hover:underline hover:text-white">Terms & Conditions</a>
      <span>|</span>
      <a href="https://www.webhoga.com" target="_blank" rel="noopener noreferrer" class="hover:underline hover:text-white">WebHoga</a>
    </div>
  </footer>
</template>

<script setup>
const currentYear = new Date().getFullYear()
</script>