<template>
  <div class="min-h-screen bg-white text-gray-900">
    <Header />

    <!-- Hero Section -->
    <section class="bg-gradient-to-tr from-red-600 to-rose-500 text-white py-24 px-6 text-center">
      <div class="max-w-4xl mx-auto">
        <h1 class="text-5xl font-bold mb-4">Content Marketing Services</h1>
        <p class="text-lg">Fuel your brand with strategic content that educates, engages, and converts.</p>
      </div>
    </section>

    <!-- Why Content Marketing -->
    <section class="py-20 px-6 bg-white">
      <div class="max-w-5xl mx-auto space-y-6">
        <h2 class="text-3xl font-bold text-center mb-4">Why Content is King</h2>
        <p>Content marketing builds trust, improves SEO, and positions your brand as an authority. Whether it’s blog posts, videos, or guides, high-value content attracts the right audience and drives action.</p>
        <ul class="list-disc list-inside space-y-2 text-gray-700">
          <li>🧠 Educate your audience with valuable and relevant information</li>
          <li>📈 Boost SEO and improve organic visibility</li>
          <li>🔗 Build long-term brand authority and credibility</li>
          <li>📝 Repurpose content across blogs, emails, social media, and more</li>
        </ul>
      </div>
    </section>

    <!-- Case Studies -->
    <section class="bg-gray-100 py-20 px-6">
      <div class="max-w-6xl mx-auto">
        <h2 class="text-4xl font-bold text-center mb-12">📝 Real Results with Great Content</h2>
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
        <h2 class="text-3xl font-bold text-center mb-6">Let's Craft Powerful Content Together</h2>
        <form @submit.prevent="submitForm" class="grid gap-4">
          <input v-model="form.name" type="text" placeholder="Your Name" required class="border px-4 py-3 rounded-md" />
          <input v-model="form.email" type="email" placeholder="Your Email" required class="border px-4 py-3 rounded-md" />
          <textarea v-model="form.message" rows="5" placeholder="What content do you need help with?" required class="border px-4 py-3 rounded-md"></textarea>
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

const caseStudies = [
  {
    client: 'FitFuel Nutrition',
    industry: 'Health & Wellness',
    result: 'Tripled organic traffic in 4 months with weekly SEO-optimized blogs.',
    location: 'Ahmedabad, India',
  },
  {
    client: 'LegalPro Associates',
    industry: 'Legal Services',
    result: 'Increased inbound consultations by 55% with case study-driven articles.',
    location: 'Noida, India',
  },
  {
    client: 'NeoBankX',
    industry: 'Fintech',
    result: 'Built brand authority and trust with weekly thought-leadership posts.',
    location: 'Mumbai, India',
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
  document.title = 'Content Marketing Services | WebHoga Ads'

  const setMeta = (name, content, attr = 'name') => {
    let el = document.head.querySelector(`meta[${attr}="${name}"]`)
    if (!el) {
      el = document.createElement('meta')
      el.setAttribute(attr, name)
      document.head.appendChild(el)
    }
    el.setAttribute('content', content)
  }

  setMeta('description', 'Boost your brand with expert content marketing services from WebHoga. We create engaging blogs, videos, and guides to grow your audience and improve SEO.')
  setMeta('keywords', 'content marketing, SEO content, blog writing, video marketing, brand authority, WebHoga')
  setMeta('og:title', 'Content Marketing Services | WebHoga Ads', 'property')
  setMeta('og:description', 'Expert content marketing that educates, engages, and converts. Boost your brand authority and SEO with WebHoga.')
  setMeta('og:type', 'website', 'property')
  setMeta('og:url', 'https://ads.webhoga.com/content-marketing', 'property')
  setMeta('og:image', 'https://webhoga.com/og-image.jpg', 'property')
  setMeta('twitter:card', 'summary_large_image', 'name')

  if (!document.head.querySelector('link[rel="canonical"]')) {
    const link = document.createElement('link')
    link.setAttribute('rel', 'canonical')
    link.setAttribute('href', 'https://ads.webhoga.com/content-marketing')
    document.head.appendChild(link)
  }
})
</script>

<style scoped>
body {
  font-family: 'Inter', sans-serif;
}
</style>