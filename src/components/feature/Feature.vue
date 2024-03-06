<script setup>
import { ref } from "vue";

const currentFeature = ref(1);
const features = [
  {
    title: "white label",
    desc: "Minuteness of the parts formed a great hindrance to my speed, resolved, contrary to my first intention, to make the being.",
    icon: "triforce",
    backgroundColor: "green",
  },
  {
    title: "code export",
    desc: "Minuteness of the parts formed a great hindrance to my speed, resolved, contrary to my first intention, to make the being.",
    icon: "prism",
    backgroundColor: "purple",
  },
  {
    title: "white export",
    desc: "Minuteness of the parts formed a great hindrance to my speed, resolved, contrary to my first intention, to make the being.",
    icon: "prism",
    backgroundColor: "orange",
  },
  {
    title: "code label",
    desc: "Minuteness of the parts formed a great hindrance to my speed, resolved, contrary to my first intention, to make the being.",
    icon: "triforce",
    backgroundColor: "purple",
  },
];

const changeToFeature = (index) => {
  currentFeature.value = index + 1;
};

const swipeLeft = () => {
  if (currentFeature.value === features.length) return;
  currentFeature.value++;
};

const swipeRight = () => {
  if (currentFeature.value === 1) return;
  currentFeature.value--;
};
</script>

<template>
  <section class="featureSection" id="about">
    <div class="container">
      <div class="featureSection_textDiv">
        <h3 class="inknutAntiqua">our core features</h3>
        <p class="DMsans">
          Minuteness of the parts formed a great hindrance to my speed,
          resolved, contrary to my first intention, to make the being.
          Minuteness of the parts formed a great hindrance to my speed,
          resolved, contrary to my first intention, to make the being.
        </p>
      </div>
      <div
        class="featureSection_featureDiv"
        v-touch:swipe.left="swipeLeft"
        v-touch:swipe.right="swipeRight"
      >
        <div
          class="featureCard"
          v-for="(feature, index) in features"
          :key="feature.title"
          :style="{
            backgroundColor: `var(--${feature.backgroundColor})`,
            transform: `translateX(${(index - currentFeature + 1) * 105}%)`,
          }"
        >
          <img
            :src="`/src/assets/${feature.icon}.png`"
            :alt="`${feature.icon}`"
          />
          <h5 class="robotoCondensed">{{ feature.title }}</h5>
          <p class="DMsans">
            {{ feature.desc }}
          </p>
        </div>
      </div>
      <div class="featureSection_dotsdiv">
        <!-- js will fill in dots here -->
        <span
          :class="{
            dotsdiv_dot: true,
            activeDot: index + 1 === currentFeature,
          }"
          v-for="(dot, index) in features"
          @click="changeToFeature(index)"
        ></span>
      </div>
      <!-- <div class="featureSection_mobileDotsdiv">

        </div> -->
    </div>
  </section>
</template>

<style scoped>
/* Desktop */
@media screen {
  .featureSection {
    background-color: var(--black);
    color: var(--white);
    padding: 9rem 0 5rem 0;
  }

  .featureSection p {
    margin: 0;
    color: var(--halfwhite);
  }

  .featureSection_textDiv {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1.875rem;
    align-items: center;
  }

  .featureSection_textDiv h3 {
    margin: 0;
  }

  .featureSection_featureDiv {
    overflow-x: clip;
    margin-top: 8.25rem;
    height: 18rem;
    /* display: grid; */
    /* grid-template-columns: 1fr 1fr; */
    position: relative;
  }

  .featureCard {
    position: absolute;
    width: 35.625rem;
    height: 18rem;
    padding: 3rem;
    transition: transform 0.5s ease-out;
  }

  .featureCard h5 {
    font-weight: 700;
    font-size: 1.5rem;
    line-height: 2rem;
    letter-spacing: 1px;
    margin: 1rem 0;
  }

  .featureSection_dotsdiv {
    margin-top: 5rem;
    display: flex;
    justify-content: center;
    gap: 1rem;
  }

  .dotsdiv_dot {
    border-radius: 1rem;
    height: 0.625rem;
    width: 0.625rem;
    background-color: var(--halfwhite);
  }

  .activeDot {
    background-color: var(--purple);
  }
}

/* Tablet */
@media screen and (max-width: 1170px) {
  .featureCard {
    width: 70vw;
  }
}

/* Mobile */
@media screen and (max-width: 480px) {
  .featureSection {
    padding: 5rem 0 5rem 0;
  }

  .featureSection_textDiv {
    grid-template-columns: 1fr;
    gap: 3.25rem;
    align-items: center;
  }

  .featureSection_featureDiv {
    margin-top: 5rem;
    height: 24rem;
  }

  .featureCard {
    position: absolute;
    width: 88vw;
    height: 24rem;
    padding: 3rem;
  }
}
</style>
