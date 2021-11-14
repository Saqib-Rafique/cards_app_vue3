<template>
  <div class="submit-form">
    <div v-if="!submitted">
      <div class="form-group">
        <label for="firstName">First Name</label>
        <input
          type="text"
          class="form-control"
          id="firstName"
          required
          v-model="card.firstName"
          name="firstName"
        />
      </div>

      <div class="form-group">
        <label for="lastName">Last Name</label>
        <input
          class="form-control"
          id="lastName"
          required
          v-model="card.lastName"
          name="lastName"
        />
      </div>

      <div class="form-group">
        <label for="membershipTier">Membership Tier</label>
        <select 
            class="form-control"
            id="memberShipTier"
            required
            v-model="card.memberShipTier" 
            name="memberShipTier"
        >
            <option value="Gold">Gold</option>
            <option value="Silver">Silver</option>
            <option value="Platinum">Platinum</option>
        </select>
      </div>

      <div class="form-group">
        <label for="description">Description</label>
        <input
          class="form-control"
          id="description"
          required
          v-model="card.description"
          name="description"
        />
      </div>

      <button @click="savecard" class="btn btn-success">Submit</button>
    </div>

    <div v-else>
      <h4>You submitted successfully!</h4>
      <button class="btn btn-success" @click="newcard">Add</button>
    </div>
  </div>
</template>

<script>

export default {
  name: "add-card",
  data() {
    return {
      card: {
        id: null,
        firstName: "",
        lastName: "",
        memberShipTier: "",
        description: ""
      },
      submitted: false
    };
  },
  methods: {
    savecard() {
      var data = {
        firstName: this.card.firstName,
        lastName: this.card.lastName,
        memberShipTier: this.card.memberShipTier,
        description: this.card.description
      };
      this.submitted = true;
      console.log(data);
      this.$router.push('/cards')
    },
    
    newcard() {
      this.submitted = false;
      this.card = {};
    }
  }
};
</script>

<style>
.submit-form {
  max-width: 300px;
  margin: auto;
}
</style>