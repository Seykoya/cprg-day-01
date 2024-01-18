<script setup>
const { data: hello } = await useFetch("/api/hello");
const { data } = await useFetch("/api/dog");
const characters = data;
const clientSideExample = "Updated Blah";
</script>

<template>
  <main>
    <header>
      <h1>Hello</h1>
    </header>

    <section>
      <h2>Hello Data Endpoint Example</h2>
      <p>{{ hello.hello }}</p>
      {{ clientSideExample }}
    </section>
    <section>
      <h2>Dogs</h2>
      <ul>
        <li v-for="character in characters.data" :key="character.id">
          <h3>{{ character.name }}</h3>
          <img :src="character.imageUrl" />
        </li>
      </ul>
    </section>
  </main>
</template>