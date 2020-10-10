<template>
  <header>
    <transport />
  </header>
  <main>
    <bpm />
    <metre />
  </main>
  <article>
    <notes />
  </article>
  <scales />
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