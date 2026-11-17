
<template>
  <div class="site-shell min-h-screen">
    <header class="site-header">
      <div class="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-5 md:px-8">

        <!-- Website Logo and Name -->
        <NuxtLink to="/" class="brand" aria-label="Ashley Queen Buba home">
          <span class="brand-mark">AQB</span>
          <span class="brand-name">My Personal Website</span>
        </NuxtLink>

        <!-- Main Navigation: Two Pages Only -->
        <nav class="main-navigation" aria-label="Main navigation">
          <NuxtLink
            to="/"
            class="nav-button"
            :class="{ 'nav-button-active': $route.path === '/' }"
          >
            Home
          </NuxtLink>

          <NuxtLink
            to="/profile"
            class="nav-button"
            :class="{ 'nav-button-active': $route.path === '/profile' }"
          >
            My Profile
          </NuxtLink>
        </nav>

      </div>
    </header>

    <!-- Page Content -->
    <main>
      <slot />
    </main>

    <!-- Website Footer -->
    <footer class="site-footer">
      <div class="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-5 py-7 text-center sm:flex-row sm:text-left md:px-8">
        <p>© {{ new Date().getFullYear() }} Ashley Queen Buba</p>
        <p>Made with love <3</p>
      </div>
    </footer>
  </div>
</template>
