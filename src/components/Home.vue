<template>
  <div class="min-h-screen bg-white font-sans text-gray-900">
    <Header />

    <!-- Hero Section -->
    <section class="relative bg-gradient-to-tr from-red-600 to-rose-500 text-white py-24 px-6 text-center">
      <div class="max-w-4xl mx-auto">
        <h1 class="text-5xl font-extrabold leading-tight mb-4 drop-shadow-xl">WebHoga Ads</h1>
        <p class="text-lg mb-8">World-class Advertising Solutions for High-Performance Brands</p>
        <div class="flex justify-center gap-4">
          <a href="#contact" class="bg-white text-red-600 font-bold px-6 py-3 rounded-xl shadow hover:bg-red-100 transition">
            Get Started
          </a>
        </div>
      </div>
    </section>

    <!-- Services Section -->
    <section id="services" class="py-20 bg-gray-50 px-6">
      <div class="max-w-6xl mx-auto">
        <h2 class="text-4xl font-bold text-center mb-12">What We Do</h2>
        <div class="grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          <div
              v-for="(service, i) in services"
              :key="i"
              class="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition border-t-4 border-red-500 flex flex-col justify-between"
          >
            <div>
              <h3 class="text-xl font-semibold text-red-600 mb-3">{{ service.title }}</h3>
              <p class="text-gray-600 leading-relaxed mb-4">{{ service.desc }}</p>
            </div>
            <RouterLink :to="service.link" class="mt-auto">
              <button class="mt-2 text-red-600 border border-red-600 px-4 py-2 rounded-md hover:bg-red-600 hover:text-white transition w-full">
                Learn More
              </button>
            </RouterLink>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Form Section -->
    <section id="contact" class="py-20 px-6 bg-white">
      <div class="max-w-2xl mx-auto">
        <h2 class="text-3xl font-bold text-center mb-6">Request Advertisement Assistance</h2>
        <form @submit.prevent="submitForm" class="grid gap-4">
          <input v-model="form.name" type="text" placeholder="Your Name" required class="border px-4 py-3 rounded-md" />
          <input v-model="form.email" type="email" placeholder="Your Email" required class="border px-4 py-3 rounded-md" />
          <textarea v-model="form.message" rows="5" placeholder="Tell us about your needs" required class="border px-4 py-3 rounded-md"></textarea>
          <button type="submit" class="bg-red-600 text-white py-3 rounded-md font-semibold hover:bg-red-700">Send Message</button>
        </form>
        <p v-if="submitted" class="mt-4 text-green-600 text-center">Thank you! We'll get back to you shortly.</p>
        <p v-if="error" class="mt-4 text-red-600 text-center">Failed to send message. Please try again later.</p>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="bg-red-600 text-white py-20 px-6 text-center">
      <div class="max-w-3xl mx-auto">
        <h2 class="text-3xl font-bold mb-4">Let’s Grow Together</h2>
        <p class="mb-8">Partner with WebHoga to take your campaigns to the next level.</p>
        <a
            href="https://bizassist.webhoga.com/business-consultation-2/"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-block bg-white text-red-600 font-bold px-8 py-3 rounded-xl hover:bg-red-100 transition"
        >
          Book a Strategy Consultation
        </a>
      </div>
    </section>

    <Footer />
  </div>
</template>

<script setup>
import { reactive, ref, onMounted } from 'vue'
import { RouterLink } from 'vue-router'
import Header from './Header.vue'
import Footer from './Footer.vue'

const services = [
  { title: "PPC Services", desc: "Run smart ads that convert — only pay per click on Google, YouTube, and more.", link: "/ppc-services" },
  { title: "Google Ads Management", desc: "ROI-driven ad management by certified professionals.", link: "/google-ads-management" },
  { title: "Email Marketing", desc: "Design automated email flows that engage, convert, and retain.", link: "/email-marketing" },
  { title: "Content Marketing", desc: "Create high-impact content that informs and inspires.", link: "/content-marketing" },
  { title: "Meta Ads (Facebook & Instagram)", desc: "Reach your ideal audience on Facebook & Instagram with eye-catching, targeted ads.", link: "/meta-ads" },
  { title: "LinkedIn Ads", desc: "Run B2B campaigns targeting professionals and decision-makers on LinkedIn.", link: "/linkedin-ads" },
]

const form = reactive({ name: '', email: '', message: '' })
const submitted = ref(false)
const error = ref(false)

async function submitForm() {
  submitted.value = false
  error.value = false

  try {
    const res = await fetch('https://ads.webhoga.com/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form)
    })

    if (res.ok) {
      submitted.value = true
      form.name = ''
      form.email = ''
      form.message = ''
    } else {
      error.value = true
      console.error("Server responded with error:", await res.text())
    }
  } catch (err) {
    error.value = true
    console.error("Form submission failed:", err)
  }
}

onMounted(() => {
  document.title = 'WebHoga Ads - World-class Advertising Solutions'

  const setMeta = (name, content, attr = 'name') => {
    let el = document.head.querySelector(`meta[${attr}="${name}"]`)
    if (!el) {
      el = document.createElement('meta')
      el.setAttribute(attr, name)
      document.head.appendChild(el)
    }
    el.setAttribute('content', content)
  }

  setMeta('description', 'WebHoga provides world-class advertising solutions including PPC, Google Ads, Email Marketing, and more to grow your brand effectively.')
  setMeta('keywords', 'advertising, PPC, google ads, email marketing, meta ads, linkedin ads, content marketing, webhoga')
  setMeta('og:title', 'WebHoga Ads - World-class Advertising Solutions', 'property')
  setMeta('og:description', 'WebHoga provides top advertising solutions that drive ROI and grow your brand.', 'property')
  setMeta('og:type', 'website', 'property')
  setMeta('og:url', 'https://ads.webhoga.com/', 'property')
  setMeta('og:image', 'https://webhoga.com/og-image.jpg', 'property')
  setMeta('twitter:card', 'summary_large_image', 'name')

  if (!document.head.querySelector('link[rel="canonical"]')) {
    const link = document.createElement('link')
    link.setAttribute('rel', 'canonical')
    link.setAttribute('href', 'https://ads.webhoga.com/')
    document.head.appendChild(link)
  }
})
</script>

<style scoped>
body {
  font-family: 'Inter', sans-serif;
}
</style>