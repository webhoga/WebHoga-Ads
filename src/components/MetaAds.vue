<template>
  <div class="min-h-screen bg-white text-gray-900">
    <Header />

    <!-- Hero -->
    <section class="bg-gradient-to-tr from-red-600 to-rose-500 text-white py-24 px-6 text-center">
      <div class="max-w-4xl mx-auto">
        <h1 class="text-5xl font-bold mb-4">Meta Ads Management</h1>
        <p class="text-lg">Run high-converting Facebook & Instagram campaigns with precision targeting.</p>
      </div>
    </section>

    <!-- Why Meta Ads -->
    <section class="py-20 px-6 bg-white">
      <div class="max-w-5xl mx-auto space-y-6">
        <h2 class="text-3xl font-bold text-center mb-4">Why Meta Ads Work</h2>
        <p>Meta (Facebook & Instagram) advertising gives businesses unmatched access to audience insights, behavior tracking, and creative ad formats. It’s ideal for B2C, retail, lifestyle, and community-driven brands.</p>
        <ul class="list-disc list-inside space-y-2">
          <li>📌 Advanced targeting based on interests, behavior & demographics</li>
          <li>🎨 Visually rich ad formats that drive engagement</li>
          <li>🧠 Retargeting campaigns to recover lost leads</li>
          <li>📈 Real-time tracking and analytics with Meta Pixel</li>
        </ul>
      </div>
    </section>

    <!-- Contact -->
    <section class="py-20 px-6 bg-white">
      <div class="max-w-2xl mx-auto">
        <h2 class="text-3xl font-bold text-center mb-6">Want to Run Meta Ads? Let's Talk</h2>
        <form @submit.prevent="submitForm" class="grid gap-4">
          <input v-model="form.name" type="text" placeholder="Your Name" required class="border px-4 py-3 rounded-md" />
          <input v-model="form.email" type="email" placeholder="Your Email" required class="border px-4 py-3 rounded-md" />
          <textarea v-model="form.message" rows="5" placeholder="Tell us about your goals" required class="border px-4 py-3 rounded-md"></textarea>
          <button type="submit" class="bg-red-600 text-white py-3 rounded-md font-semibold hover:bg-red-700">Send Message</button>
        </form>
        <p v-if="submitted" class="mt-4 text-green-600 text-center">Thank you! We'll get back to you shortly.</p>
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
  document.title = 'Meta Ads Management | WebHoga Ads'

  const setMeta = (name, content, attr = 'name') => {
    let el = document.head.querySelector(`meta[${attr}="${name}"]`)
    if (!el) {
      el = document.createElement('meta')
      el.setAttribute(attr, name)
      document.head.appendChild(el)
    }
    el.setAttribute('content', content)
  }

  setMeta('description', 'Run high-converting Facebook & Instagram ad campaigns with WebHoga. Expert targeting, creative formats, and real-time optimization.')
  setMeta('keywords', 'meta ads management, facebook ads, instagram ads, social media advertising, webhoga')
  setMeta('og:title', 'Meta Ads Management | WebHoga Ads', 'property')
  setMeta('og:description', 'Boost your business with expert Facebook and Instagram ads managed by WebHoga’s certified professionals.')
  setMeta('og:type', 'website', 'property')
  setMeta('og:url', 'https://ads.webhoga.com/meta-ads', 'property')
  setMeta('og:image', 'https://webhoga.com/og-image.jpg', 'property')
  setMeta('twitter:card', 'summary_large_image', 'name')

  if (!document.head.querySelector('link[rel="canonical"]')) {
    const link = document.createElement('link')
    link.setAttribute('rel', 'canonical')
    link.setAttribute('href', 'https://ads.webhoga.com/meta-ads')
    document.head.appendChild(link)
  }
})
</script>