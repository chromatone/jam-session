<template>
  <section>
    <div class="sig">
      <div class="sign">
        <editable-number
          :num="over"
          :min="1"
          :max="32"
          @update="over = Number($event)"
        />
      </div>
      <div class="sign">
        <editable-number
          :num="under"
          :min="1"
          :max="32"
          @update="under = Number($event)"
        />
      </div>
      <div>{{ num }}</div>
    </div>
    <div class="cycle">
      <div :class="{ active: b == current }" v-for="b in over" :key="b">
        {{ b }}
      </div>
    </div>
  </section>
</template>

<script>
import { Transport, Loop, Draw } from "tone";
import { computed, ref } from "vue";
export default {
  setup() {
    const over = ref(4);
    const under = ref(4);
    const current = ref(0);
    const num = computed(() => {
      Transport.timeSignature = [over.value, under.value];
      return (over.value / (under.value / 4)).toFixed(2);
    });
    const loop = new Loop((time) => {
      Draw.schedule(() => {
        current.value++;
        if (current.value > over.value) {
          current.value = 1;
        }
      }, time);
    }, "4n").start(0);

    return {
      over,
      under,
      num,
      current,
    };
  },
};
</script>

<style scoped>
section {
  display: flex;
}
.cycle {
  display: flex;
  flex-flow: row wrap;
  font-size: 1.2em;
  justify-content: space-evenly;
  align-items: stretch;
  width: 100%;
}
.cycle > div {
  flex: 1 1 40px;
  transition: all 100ms ease-out;
  display: flex;
  flex: row wrap;
  align-items: center;
  justify-content: center;
}
.active {
  background-color: var(--accent);
  transition: all 500ms ease-in;
}
.sig {
  min-width: 60px;
  display: flex;
  flex-direction: column;
  justify-content: stretch;
  align-items: stretch;
}
.sign {
  font-weight: 700;
  font-size: 2em;
  flex: 1 1;
}
.sig > div {
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid var(--border-color);
}
</style>