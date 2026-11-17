<script setup lang="ts">
useSeoMeta({
  title: "Home | Ashley Queen Buba",
  description: "Welcome to Ashley Queen Buba's personal website."
});
</script>

<template>
  <div>
    <section class="hero-section relative overflow-hidden">
      <ContourBackground />
      <div class="relative mx-auto grid max-w-6xl items-center gap-12 px-5 py-20 md:grid-cols-[1.1fr_.9fr] md:px-8 md:py-28">
        <div class="hero-copy">
          <p class="eyebrow">A LITTLE INTRODUCTION</p>
          <h1 class="hero-title">Hello, I'm <span>Ashley Queen</span></h1>
          <p class="hero-description">
            A Information Technology student who enjoys learning,
            creating, and discovering new opportunities.
          </p>
          <p class="hero-body">
            I am a simple, easy-going, and hardworking person who enjoys learning new things
            and exploring different opportunities. I am passionate about technology, sports,
            and business. I believe that every experience is an opportunity to grow, improve,
            and become a better version of myself.
          </p>
          <div class="mt-9 flex flex-wrap gap-4">
            <NuxtLink to="/profile" class="button-primary">Get to know me <span>↗</span></NuxtLink>
            <a href="#welcome" class="button-secondary">Read welcome note</a>
          </div>
        </div>

        <div class="portrait-wrap">
          <div class="portrait-frame">
            <img
              src="/profile-picture.jpg"
              alt="Profile portrait placeholder for Ashley Queen Buba"
              class="portrait-image"
            />
          </div>
          <div class="portrait-caption">
            <span class="caption-line"></span>
            <span>STUDENT · DREAMER · ALWAYS LEARNING</span>
          </div>
        </div>
      </div>
      <div class="hero-bottom mx-auto max-w-6xl px-5 pb-8 md:px-8">
        <span>BASED IN BUTUAN CITY, PHILIPPINES</span>
        <span>SCROLL TO EXPLORE ↓</span>
      </div>
    </section>

    <section id="welcome" class="welcome-section section-padding">
      <div class="mx-auto max-w-4xl text-center">
        <p class="eyebrow">YOU'RE VERY WELCOME HERE</p>
        <h2 class="section-title">A space to get to know <em>me.</em></h2>
        <p class="welcome-copy">
          Hi! Welcome to my personal website. This is where you can get to know more about me,
          my educational journey, skills, interests, and hobbies. Feel free to explore and learn
          more about who I am. Thank you for visiting!
        </p>
        <NuxtLink to="/profile" class="text-link">Explore my personal profile <span>↗</span></NuxtLink>
      </div>
    </section>

    <section class="quick-links section-padding">
      <div class="mx-auto max-w-6xl px-5 md:px-8">
        <div class="mb-9 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p class="eyebrow">A FEW THINGS ABOUT ME</p>
            <h2 class="section-title">Take a closer look.</h2>
          </div>
          <NuxtLink to="/profile" class="text-link">View full profile ↗</NuxtLink>
        </div>
        <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <NuxtLink to="/profile#personal" class="feature-card">
            <span class="feature-number">01</span><h3>Personal Information</h3>
            <p>A little more about my background and personality.</p><span class="feature-arrow">↗</span>
          </NuxtLink>
          <NuxtLink to="/profile#education" class="feature-card">
            <span class="feature-number">02</span><h3>Education</h3>
            <p>The schools and experiences that shaped my journey.</p><span class="feature-arrow">↗</span>
          </NuxtLink>
          <NuxtLink to="/profile#skills" class="feature-card">
            <span class="feature-number">03</span><h3>Skills &amp; Interests</h3>
            <p>What I enjoy learning and what I can do.</p><span class="feature-arrow">↗</span>
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>