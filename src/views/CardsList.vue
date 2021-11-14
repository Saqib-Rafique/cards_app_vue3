<template>
    <table class="table">
        <thead>
            <tr>
                <th scope="col">Card Number</th>
                <th scope="col">Card Holder</th>
                <th scope="col">Action</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(card, index) in cards" :key="index">
                <td>{{card.card_number}}</td>
                <td>{{card.first_name}}</td>
                <td><router-link :to="'/cards/' + card.card_number" class="badge" >More Detail</router-link></td>
            </tr>
        </tbody>
    </table>
</template>

<script>
import CardDataService from '../services/CardsDataService';
export default {
  name: "cards-list",
  data() {
    return {
      cards: [],
      currentCard: null,
      currentIndex: -1,
      firstName: "",
      lastName: ""
    };
  },
  methods: {
    retrieveCards() {
        CardDataService.getAll()
        .then(response => {
          this.cards = response.data;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    }
  },
  mounted() {
    this.retrieveCards();
  }
}
</script>

<style>
.list {
  text-align: center;
  max-width: 750px;
  margin: auto;
}
</style>