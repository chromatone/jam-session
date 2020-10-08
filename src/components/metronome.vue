<template>
  <section>
    <div class="sig">
      <div class="sign">
        <editable-number
          :num="sig.over"
          :min="1"
          :max="32"
          @update="sig.over = Number($event)"
        />
      </div>
      <div class="sign">
        <editable-number
          :num="sig.under"
          :min="1"
          :max="32"
          @update="sig.under = Number($event)"
        />
      </div>
      <div>{{ num }}</div>
    </div>
    <div class="cycle">num</div>
  </section>
</template>

<script>
import { Transport } from "tone";
import { reactive, computed } from "vue";
export default {
  setup() {
    Transport.loop = true;
    Transport.loopEnd = "1m";
    const sig = reactive({
      over: 4,
      under: 4,
    });
    const num = computed(() => {
      let sign = (sig.over / sig.under).toFixed(1);
      Transport.timeSignature = sign;
      return sign;
    });
    return {
      sig,
      num,
    };
  },
};
</script>

<style scoped>
section {
  display: flex;
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