<template>
  <td class="cell">
    {{mark}}
  </td>
</template>
<script>
export default {
  props: ['name'],
  data() {
    return {
      frozen: false,
      mark: ''
    }
  }
}

</script>
<style>
.cell {
  width: 33.333%;
  height: 90px;
  border: 6px solid #2c3e50;
  font-size: 3.5em;
  font-family: 'Gochi Hand', sans-serif;
}

.cell:hover {
  background-color: #7f8c8d;
}

.cell::after {
  content: '';
  display: block;
}

.cell:first-of-type {
  border-left-color: transparent;
  border-top-color: transparent;
}

.cell:nth-of-type(2) {
  border-top-color: transparent;
}

.cell:nth-of-type(3) {
  border-right-color: transparent;
  border-top-color: transparent;
}

tr:nth-of-type(3) .cell {
  border-bottom-color: transparent;
}

</style>

