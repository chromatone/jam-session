<template>
  <header>
    <transport />
  </header>
  <main>
    <bpm />
    <metronome />
  </main>
  <article>
    <notes />
  </article>
</template>

<script>
export default {
  name: "App",
};
</script>

<style scoped>
main,
header,
article {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
}
</style>