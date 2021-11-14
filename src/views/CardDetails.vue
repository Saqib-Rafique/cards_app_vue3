<template>
    <div class="card">
        <div class="card-body">
            <h5 class="card-title">First name: Saqib</h5>
            <h5 class="card-title">Last name: Rafique</h5>
            <p class="card-text">Membership Tier: Gold</p>
            <p class="card-text">Card Number: {{card_number}}</p>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                card_number: 0
            };
        },
        mounted() {
            this.card_number = this.$route.params.card_number;
        }
    }
</script>
<style></style>