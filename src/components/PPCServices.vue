<template>
  <div class="min-h-screen bg-white text-gray-900">
    <Header />

    <!-- Hero -->
    <section class="bg-gradient-to-tr from-red-600 to-rose-500 text-white py-24 px-6 text-center">
      <div class="max-w-4xl mx-auto">
        <h1 class="text-5xl font-bold mb-4">PPC Advertising Services</h1>
        <p class="text-lg">Pay-Per-Click campaigns that deliver real ROI across Google, YouTube & more.</p>
      </div>
    </section>

    <!-- Importance of PPC -->
    <section class="py-20 px-6 bg-white">
      <div class="max-w-5xl mx-auto space-y-6">
        <h2 class="text-3xl font-bold text-center mb-4">Why PPC Matters for Your Business</h2>
        <p>PPC (Pay-Per-Click) advertising is one of the fastest ways to drive targeted traffic to your website. Whether you're looking to increase sales, capture leads, or grow brand awareness, PPC gives you control over your budget and your audience.</p>
        <ul class="list-disc list-inside space-y-2">
          <li>🔍 Appear on top of Google search instantly</li>
          <li>🎯 Target users by location, intent, and interests</li>
          <li>📊 Track every click, lead, and conversion in real-time</li>
          <li>💸 Only pay when someone clicks—maximizing ad spend efficiency</li>
        </ul>
      </div>
    </section>

    <!-- Case Study Section -->
    <section class="bg-gray-100 py-20 px-6">
      <div class="max-w-6xl mx-auto">
        <h2 class="text-4xl font-bold text-center mb-12">📈 Real Results, Real Clients</h2>
        <div class="grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          <div
              v-for="(caseStudy, i) in caseStudies"
              :key="i"
              class="bg-white p-6 rounded-xl shadow-md hover:shadow-xl border-t-4 border-red-500 transition"
          >
            <h3 class="text-xl font-semibold text-red-600 mb-2">{{ caseStudy.client }}</h3>
            <p class="text-gray-700 text-sm italic mb-3">{{ caseStudy.industry }}</p>
            <p class="text-gray-600">{{ caseStudy.result }}</p>
            <div class="mt-4 text-sm text-gray-500">📍 {{ caseStudy.location }}</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Form -->
    <section class="py-20 px-6 bg-white">
      <div class="max-w-2xl mx-auto">
        <h2 class="text-3xl font-bold text-center mb-6">Need PPC Help? Contact Us</h2>
        <form @submit.prevent="submitForm" class="grid gap-4">
          <input v-model="form.name" type="text" placeholder="Your Name" required class="border px-4 py-3 rounded-md" />
          <input v-model="form.email" type="email" placeholder="Your Email" required class="border px-4 py-3 rounded-md" />
          <textarea v-model="form.message" rows="5" placeholder="Tell us about your PPC goals" required class="border px-4 py-3 rounded-md"></textarea>
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

const caseStudies = [
  {
    client: 'Urban Style Fashion',
    industry: 'E-Commerce - Apparel',
    result: 'Increased ROAS by 370% in 2 months using dynamic Google Shopping campaigns.',
    location: 'Mumbai, India',
  },
  {
    client: 'Smile Dental Care',
    industry: 'Healthcare - Local Clinic',
    result: 'Generated 220+ appointment leads in 30 days with Google Local Ads.',
    location: 'Bangalore, India',
  },
  {
    client: 'Pixel Academy',
    industry: 'EdTech - Online Courses',
    result: 'Reduced CPA by 42% and doubled leads in 6 weeks using PPC and landing page optimization.',
    location: 'Delhi, India',
  }
]

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
  document.title = 'PPC Advertising Services | WebHoga Ads'

  const setMeta = (name, content, attr = 'name') => {
    let el = document.head.querySelector(`meta[${attr}="${name}"]`)
    if (!el) {
      el = document.createElement('meta')
      el.setAttribute(attr, name)
      document.head.appendChild(el)
    }
    el.setAttribute('content', content)
  }

  setMeta('description', 'Get expert PPC advertising services from WebHoga. We deliver real ROI on Google, YouTube & more with precise targeting and real-time tracking.')
  setMeta('keywords', 'ppc advertising, pay per click, google ads, youtube ads, webhoga')
  setMeta('og:title', 'PPC Advertising Services | WebHoga Ads', 'property')
  setMeta('og:description', 'Boost your business with expert PPC campaigns managed by WebHoga’s certified professionals.')
  setMeta('og:type', 'website', 'property')
  setMeta('og:url', 'https://ads.webhoga.com/ppc-services', 'property')
  setMeta('og:image', 'https://webhoga.com/og-image.jpg', 'property')
  setMeta('twitter:card', 'summary_large_image', 'name')

  if (!document.head.querySelector('link[rel="canonical"]')) {
    const link = document.createElement('link')
    link.setAttribute('rel', 'canonical')
    link.setAttribute('href', 'https://ads.webhoga.com/ppc-services')
    document.head.appendChild(link)
  }
})
</script>

<style scoped>
body {
  font-family: 'Inter', sans-serif;
}
</style>