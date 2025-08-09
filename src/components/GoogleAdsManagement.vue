<template>
  <div class="min-h-screen bg-white text-gray-900">
    <Header />

    <!-- Hero Section -->
    <section class="bg-gradient-to-tr from-red-600 to-rose-500 text-white py-24 px-6 text-center">
      <div class="max-w-4xl mx-auto">
        <h1 class="text-5xl font-bold mb-4">Google Ads Management</h1>
        <p class="text-lg">Certified experts optimizing your ad spend for real business growth.</p>
      </div>
    </section>

    <!-- Importance Section -->
    <section class="py-20 px-6 bg-white">
      <div class="max-w-5xl mx-auto space-y-6">
        <h2 class="text-3xl font-bold text-center mb-4">Why Choose WebHoga for Google Ads?</h2>
        <ul class="list-disc list-inside space-y-2 text-gray-700">
          <li>🚀 Certified Google Ads professionals managing your campaigns</li>
          <li>📈 Daily optimization for better ROI, CTR, and conversions</li>
          <li>📊 Transparent performance reporting</li>
          <li>🔍 Expert keyword research & bidding strategies</li>
          <li>📱 Ads on Google Search, Display, YouTube, Gmail & more</li>
        </ul>
      </div>
    </section>

    <!-- Testimonials -->
    <section class="bg-gray-100 py-20 px-6">
      <div class="max-w-6xl mx-auto">
        <h2 class="text-4xl font-bold text-center mb-12">💬 What Our Clients Say</h2>
        <div class="grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          <div class="bg-white p-6 rounded-xl shadow-md border-t-4 border-red-500">
            <p class="text-gray-700 mb-4">“WebHoga helped us scale our Google Ads by 5x while reducing our cost per lead by 50%.”</p>
            <div class="font-bold">— Riya, Digital Store</div>
          </div>
          <div class="bg-white p-6 rounded-xl shadow-md border-t-4 border-red-500">
            <p class="text-gray-700 mb-4">“Their keyword research and ad copywriting made an immediate impact!”</p>
            <div class="font-bold">— Akash, Travel Startup</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Form -->
    <section class="py-20 px-6 bg-white">
      <div class="max-w-2xl mx-auto">
        <h2 class="text-3xl font-bold text-center mb-6">Get a Free Audit</h2>
        <form @submit.prevent="submitForm" class="grid gap-4">
          <input v-model="form.name" type="text" placeholder="Your Name" required class="border px-4 py-3 rounded-md" />
          <input v-model="form.email" type="email" placeholder="Your Email" required class="border px-4 py-3 rounded-md" />
          <textarea v-model="form.message" rows="5" placeholder="Tell us about your Google Ads goals" required class="border px-4 py-3 rounded-md"></textarea>
          <button type="submit" class="bg-red-600 text-white py-3 rounded-md font-semibold hover:bg-red-700">Send Message</button>
        </form>
        <p v-if="submitted" class="mt-4 text-green-600 text-center">✅ Thank you! We'll get back to you shortly.</p>
      </div>
    </section>

    <Footer />
  </div>
</template>

<script setup>
import { reactive, ref, onMounted } from 'vue'
import Header from './Header.vue'
import Footer from './Footer.vue'

const form = reactive({ name: '', email: '', message: '' })
const submitted = ref(false)

async function submitForm() {
  try {
    const res = await fetch('https://ads.webhoga.com/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    })

    if (res.ok) {
      submitted.value = true
      form.name = ''
      form.email = ''
      form.message = ''
    } else {
      console.error('Form submission failed:', await res.text())
    }
  } catch (err) {
    console.error('Network error:', err)
  }
}

onMounted(() => {
  document.title = 'Google Ads Management | WebHoga Ads'

  const setMeta = (name, content, attr = 'name') => {
    let el = document.head.querySelector(`meta[${attr}="${name}"]`)
    if (!el) {
      el = document.createElement('meta')
      el.setAttribute(attr, name)
      document.head.appendChild(el)
    }
    el.setAttribute('content', content)
  }

  setMeta('description', 'Maximize your ROI with WebHoga’s certified Google Ads management. Expert campaign optimization, keyword research, and transparent reporting.')
  setMeta('keywords', 'google ads management, ppc advertising, google ads expert, campaign optimization, webhoga')
  setMeta('og:title', 'Google Ads Management | WebHoga Ads', 'property')
  setMeta('og:description', 'Certified Google Ads experts delivering real business growth through smart ad spend management and optimization.')
  setMeta('og:type', 'website', 'property')
  setMeta('og:url', 'https://ads.webhoga.com/google-ads-management', 'property')
  setMeta('og:image', 'https://webhoga.com/og-image.jpg', 'property')
  setMeta('twitter:card', 'summary_large_image', 'name')

  if (!document.head.querySelector('link[rel="canonical"]')) {
    const link = document.createElement('link')
    link.setAttribute('rel', 'canonical')
    link.setAttribute('href', 'https://ads.webhoga.com/google-ads-management')
    document.head.appendChild(link)
  }
})
</script>

<style scoped>
body {
  font-family: 'Inter', sans-serif;
}
</style>