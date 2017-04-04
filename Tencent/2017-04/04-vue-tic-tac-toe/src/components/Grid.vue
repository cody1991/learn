<template>
  <table class="grid">
    <tr>
      <cell name="1"></cell>
      <cell name="2"></cell>
      <cell name="3"></cell>
    </tr>
    <tr>
      <cell name="4"></cell>
      <cell name="5"></cell>
      <cell name="6"></cell>
    </tr>
    <tr>
      <cell name="7"></cell>
      <cell name="8"></cell>
      <cell name="9"></cell>
    </tr>
  </table>
</template>
<script>
import Cell from '@/components/Cell'
export default {
  components: {
    Cell
  },
  data() {
    return {
      activePlayer: 'O',
      // turn or win or draw
      gameStatus: 'turn',
      gameStatusMessage: `O's turn`,
      gameStatusColor: 'statusTurn',
      // max 9
      moves: 0,
      cells: {
        1: '',
        2: '',
        3: '',
        4: '',
        5: '',
        6: '',
        7: '',
        8: '',
        9: ''
      },
      winConditions: [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
        [1, 4, 7],
        [2, 5, 8],
        [3, 6, 9],
        [1, 5, 9],
        [3, 5, 7]
      ]
    }
  }
}

</script>
<style>
.grid {
  background-color: #34495e;
  color: #fff;
  width: 100%;
  border-collapse: collapse;
}

.gameStatus {
  margin: 0px;
  padding: 15px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  background-color: #f1c40f;
  color: #fff;
  font-size: 1.4em;
  font-weight: bold;
}

.statusTurn {
  background-color: #f1c40f;
}

.statusWin {
  background-color: #2ecc71;
}

.statusDraw {
  background-color: #9b59b6;
}

</style>

