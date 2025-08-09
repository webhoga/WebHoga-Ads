<template>
  <div class="min-h-screen bg-white text-gray-900">
    <Header />

    <!-- Hero -->
    <section class="bg-gradient-to-tr from-red-600 to-rose-500 text-white py-24 px-6 text-center">
      <div class="max-w-4xl mx-auto">
        <h1 class="text-5xl font-bold mb-4">LinkedIn Ads Management</h1>
        <p class="text-lg">Reach decision-makers with precision B2B advertising on LinkedIn.</p>
      </div>
    </section>

    <!-- Why LinkedIn Ads -->
    <section class="py-20 px-6 bg-white">
      <div class="max-w-5xl mx-auto space-y-6">
        <h2 class="text-3xl font-bold text-center mb-4">Why Choose LinkedIn Ads?</h2>
        <p>LinkedIn is the top platform for B2B targeting. Whether you're promoting SaaS, consulting, hiring, or services for businesses—LinkedIn lets you reach professionals based on job title, industry, and company size.</p>
        <ul class="list-disc list-inside space-y-2">
          <li>🏢 Target CEOs, Managers, and industry leaders</li>
          <li>🔗 Sponsored InMail, carousel, and lead gen forms</li>
          <li>📈 High-quality lead generation & brand positioning</li>
          <li>💼 Best for B2B companies & enterprise-level campaigns</li>
        </ul>
      </div>
    </section>

    <!-- Contact -->
    <section class="py-20 px-6 bg-white">
      <div class="max-w-2xl mx-auto">
        <h2 class="text-3xl font-bold text-center mb-6">Run Effective LinkedIn Campaigns</h2>
        <form @submit.prevent="submitForm" class="grid gap-4">
          <input v-model="form.name" type="text" placeholder="Your Name" required class="border px-4 py-3 rounded-md" />
          <input v-model="form.email" type="email" placeholder="Your Email" required class="border px-4 py-3 rounded-md" />
          <textarea v-model="form.message" rows="5" placeholder="Tell us about your LinkedIn goals" required class="border px-4 py-3 rounded-md"></textarea>
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
  document.title = 'LinkedIn Ads Management | WebHoga Ads'

  const setMeta = (name, content, attr = 'name') => {
    let el = document.head.querySelector(`meta[${attr}="${name}"]`)
    if (!el) {
      el = document.createElement('meta')
      el.setAttribute(attr, name)
      document.head.appendChild(el)
    }
    el.setAttribute('content', content)
  }

  setMeta('description', 'Target decision-makers and grow your B2B business with WebHoga’s LinkedIn Ads Management. Expert targeting, creative ad formats, and measurable results.')
  setMeta('keywords', 'linkedin ads management, b2b advertising, linkedin lead generation, linkedin marketing, webhoga')
  setMeta('og:title', 'LinkedIn Ads Management | WebHoga Ads', 'property')
  setMeta('og:description', 'Reach CEOs, managers, and industry leaders with precision LinkedIn ad campaigns managed by certified experts.')
  setMeta('og:type', 'website', 'property')
  setMeta('og:url', 'https://ads.webhoga.com/linkedin-ads', 'property')
  setMeta('og:image', 'https://webhoga.com/og-image.jpg', 'property')
  setMeta('twitter:card', 'summary_large_image', 'name')

  if (!document.head.querySelector('link[rel="canonical"]')) {
    const link = document.createElement('link')
    link.setAttribute('rel', 'canonical')
    link.setAttribute('href', 'https://ads.webhoga.com/linkedin-ads')
    document.head.appendChild(link)
  }
})
</script>