<template>
  <v-footer height="40" app>
    <a
      v-for="item in items"
      :key="item.title"
      :href="item.href"
      :title="item.title"
      class="d-inline-block mx-2 social-link"
      rel="noopener noreferrer"
      target="_blank"
    >
      <v-icon
        :icon="item.icon"
        :size="item.icon = 24"
      />
    </a>

    <div
      class="text-caption text-disabled"
      style="position: absolute; right: 16px;"
    >
      &copy; {{ (new Date()).getFullYear() }} <span class="d-none d-sm-inline-block">Informaticki Projekt 2</span>
      —
      <a
        class="text-decoration-none on-surface"
        target="_blank"
      >
        Ante Šimić i Marin Mlikota
      </a>
    </div>
  </v-footer>
</template>

<script setup>
  const items = [
    {
      title: 'Vuetify Documentation',
      icon: `$vuetify`,
      href: 'https://vuetifyjs.com/',
    },
    {
      title: 'Vuetify Support',
      icon: 'mdi-shield-star-outline',
      href: 'https://support.vuetifyjs.com/',
    },
    {
      title: 'Vuetify GitHub',
      icon: `mdi-github`,
      href: 'https://github.com/Asimic535/',
    },
  ]
</script>

<style scoped lang="sass">
  .social-link :deep(.v-icon)
    color: rgba(var(--v-theme-on-background), var(--v-disabled-opacity))
    text-decoration: none
    transition: .4s ease-in-out

    &:hover
      color: rgb(210, 25, 25)
</style>
