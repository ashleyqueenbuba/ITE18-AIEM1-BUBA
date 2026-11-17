<script setup lang="ts">
useSeoMeta({
  title: "About Me | Ashley Queen Buba",
  description: "Personal information, education, skills, interests, and hobbies of Ashley Queen Buba."
});

const personalInfo = [
  ["Full Name", "Ashley Queen Buba"],
  ["Age", "22 years old"],
  ["Course", "Bachelor of Science in Information Technology"],
  ["Personality", "Easy-going, shy, sensitive, and a good listener"],
  ["Interests", "Technology, sports, and business"],
  ["Location", "Butuan City, Philippines"]
];

const education = [
  { level: "Currently studying", school: "Caraga State University – Main Campus", detail: "Third Year · Bachelor of Science in Information Technology" },
  { level: "Associate degree", school: "University of the Philippines Mindanao", detail: "Graduated" },
  { level: "High school", school: "Agusan National High School", detail: "Graduated" },
  { level: "Elementary", school: "Butuan Central Elementary School", detail: "Graduated" }
];

const skills = ["Basic HTML and CSS", "Communication and Listening", "Business Management"];
const interests = ["Sports and Fitness", "Learning New Technologies"];
const hobbies = ["Playing football / soccer", "Exploring technology", "Spending time with family", "Managing my small business", "Watching videos and learning new things"];
</script>

<template>
  <div class="profile-page">
    <section id="about" class="profile-hero relative overflow-hidden">
      <ContourBackground />
      <div class="relative mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
        <p class="eyebrow">BEHIND THE NAME</p>
        <h1 class="profile-heading">A little more <em>about me.</em></h1>
        <p class="profile-intro">My story, my learning journey, and the things that make me who I am.</p>
        <div class="mt-8 flex flex-wrap gap-3">
          <a href="#personal" class="button-primary">Discover my profile <span>↓</span></a>
          <NuxtLink to="/" class="button-secondary">Back to home</NuxtLink>
        </div>
      </div>
    </section>

    <section id="personal" class="profile-section section-padding">
      <div class="mx-auto grid max-w-6xl gap-12 px-5 md:grid-cols-[.7fr_1.3fr] md:px-8">
        <div>
          <p class="eyebrow">01 / THE BASICS</p>
          <h2 class="section-title">Personal <em>information.</em></h2>
          <p class="section-intro">The little details that introduce me beyond the screen.</p>
        </div>
        <div class="info-panel">
          <div v-for="item in personalInfo" :key="item[0]" class="info-row">
            <span>{{ item[0] }}</span><strong>{{ item[1] }}</strong>
          </div>
        </div>
      </div>
    </section>

    <section id="education" class="education-section section-padding">
      <div class="mx-auto max-w-6xl px-5 md:px-8">
        <p class="eyebrow">02 / MY LEARNING JOURNEY</p>
        <h2 class="section-title">Educational <em>background.</em></h2>
        <p class="section-intro max-w-xl">Every school experience has been a step toward learning more and becoming better.</p>
        <div class="timeline mt-12">
          <article v-for="(item, index) in education" :key="item.school" class="timeline-item">
            <span class="timeline-dot">{{ String(index + 1).padStart(2, "0") }}</span>
            <div class="timeline-content">
              <p class="eyebrow">{{ item.level }}</p>
              <h3>{{ item.school }}</h3>
              <p>{{ item.detail }}</p>
            </div>
          </article>
        </div>
      </div>
    </section>

    <section id="skills" class="profile-section section-padding">
      <div class="mx-auto max-w-6xl px-5 md:px-8">
        <p class="eyebrow">03 / WHAT I BRING &amp; WHAT I LOVE</p>
        <h2 class="section-title">Skills &amp; <em>interests.</em></h2>
        <div class="mt-10 grid gap-6 md:grid-cols-2">
          <div class="list-panel">
            <span class="panel-kicker">MY SKILLS</span>
            <ul><li v-for="skill in skills" :key="skill">{{ skill }}</li></ul>
          </div>
          <div class="list-panel lavender-panel">
            <span class="panel-kicker">MY INTERESTS</span>
            <ul><li v-for="interest in interests" :key="interest">{{ interest }}</li></ul>
          </div>
        </div>
      </div>
    </section>

    <section id="hobbies" class="hobbies-section section-padding">
      <div class="mx-auto max-w-6xl px-5 md:px-8">
        <p class="eyebrow">04 / OFF THE CLOCK</p>
        <h2 class="section-title">Things I enjoy <em>doing.</em></h2>
        <div class="hobby-grid mt-10">
          <div v-for="(hobby, index) in hobbies" :key="hobby" class="hobby-item">
            <span>{{ String(index + 1).padStart(2, "0") }}</span><p>{{ hobby }}</p><b>↗</b>
          </div>
        </div>
      </div>
    </section>

    <section id="contact" class="contact-section section-padding">
      <ContourBackground />
      <div class="relative mx-auto max-w-4xl px-5 text-center md:px-8">
        <p class="eyebrow">05 / LET'S CONNECT</p>
        <h2 class="section-title">Thank you for <em>stopping by.</em></h2>
        <p class="welcome-copy">I appreciate you taking the time to learn a little about me. I hope you enjoyed exploring my personal website!</p>
        <NuxtLink to="/" class="button-primary mt-7">Return to homepage <span>↗</span></NuxtLink>
      </div>
    </section>
  </div>
</template>