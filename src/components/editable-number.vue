<template>
  <div
    ref="ce"
    @click="activate()"
    :class="{ active: edit }"
    :contenteditable="edit"
    @keypress="update"
    @blur="fix"
    @keyup.enter="fix"
  ></div>
</template>

<script>
export default {
  props: {
    num: {
      type: Number,
      default: 120,
    },
    min: {
      type: Number,
      default: 30,
    },
    max: {
      type: Number,
      default: 360,
    },
  },
  emits: ["update"],
  mounted() {
    this.$refs.ce.innerText = this.num;
  },
  data() {
    return {
      edit: false,
    };
  },
  watch: {
    num(cont) {
      this.$refs.ce.innerText = this.num;
    },
  },
  methods: {
    activate() {
      this.edit = true;
      this.$refs.ce.innerText = "";
      this.$nextTick(() => {
        this.$refs.ce.focus();
      });
    },
    update: function (event) {
      var x = event.charCode || event.keyCode;
      if (
        (isNaN(String.fromCharCode(event.which)) && x != 46) ||
        x === 32 ||
        x === 13 ||
        (x === 46 && event.currentTarget.innerText.includes("."))
      ) {
        event.preventDefault();
      }
    },
    fix() {
      let number = event.target.innerText;
      number = number < this.min ? this.min : number;
      number = number > this.max ? this.max : number;
      this.$emit("update", number);
      this.$refs.ce.innerText = number;
      this.edit = false;
    },
  },
};
</script>

<style scoped>
.active {
  border: 4px dotted var(--border-color);
}
</style>