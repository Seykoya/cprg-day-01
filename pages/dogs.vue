<script setup>

const { data } = await useFetch("api/dog");
const { _value: dataValues } = data;
const { message: breeds } = dataValues;
</script>
<template>
  <main>
    <header>
      <h1>Dog Breeds</h1>
    </header>
    <div>
      <pre>{{ breeds }}</pre>
      <ul>
        <li v-for="breed in breeds" :key="breed.id">
          {{ breed }}
        </li>
      </ul>
    </div>
  </main>
</template>