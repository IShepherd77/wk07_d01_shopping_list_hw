import Vue from 'vue';


document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: "#app",
    data: {
      items: [],
      newItem: ""
    },
    methods: {
      saveNewItem: function() {
        this.items.push({
          name: this.newItem,
          // purchased: false
        });
        this.newItem = "";
      },
    }
  });
});
