<script setup>
import { ref } from "vue";

const currentClient = ref(1);

const testimonials = [
  {
    name: "Helena Brauer",
    job: "Apple Inc.",
    quote:
      "What looked like a small patch of purple grass, above five feet square, was moving across the sand in their direction. When it came near enough he perceived that it was not grass; there were no blades, but only purple roots. The roots were revolving, for each small plant in the whole patch, like the spokes of a rimless wheel.",
    image: "blackWoman.png",
    backgroundColor: "green",
  },
  {
    name: "Kay Totleben",
    job: "Microsoft",
    quote:
      "What looked like a small patch of purple grass, above five feet square, was moving across the sand in their direction. When it came near enough he perceived that it was not grass; there were no blades, but only purple roots. The roots were revolving, for each small plant in the whole patch, like the spokes of a rimless wheel.",
    image: "blackGuy.png",
    backgroundColor: "purple",
  },
  {
    name: "Helena Brauer",
    job: "Facebook",
    quote:
      "What looked like a small patch of purple grass, above five feet square, was moving across the sand in their direction. When it came near enough he perceived that it was not grass; there were no blades, but only purple roots. The roots were revolving, for each small plant in the whole patch, like the spokes of a rimless wheel.",
    image: "blackWoman.png",
    backgroundColor: "orange",
  },
  {
    name: "Kay Totleben",
    job: "Netflix",
    quote:
      "What looked like a small patch of purple grass, above five feet square, was moving across the sand in their direction. When it came near enough he perceived that it was not grass; there were no blades, but only purple roots. The roots were revolving, for each small plant in the whole patch, like the spokes of a rimless wheel.",
    image: "blackGuy.png",
    backgroundColor: "green",
  },
];

const nextClient = () => {
  if (currentClient.value === testimonials.length) {
    currentClient.value = 1;
  } else {
    currentClient.value++;
  }
};

const prevClient = () => {
  if (currentClient.value === 1) {
    currentClient.value = testimonials.length;
  } else {
    currentClient.value--;
  }
};
</script>

<template>
  <section class="clientSaySection" id="clientSay">
    <div class="clientSayTopSect">
      <div class="container">
        <div class="clientSay_textDiv">
          <h2 class="inknutAntiqua">What our clients say</h2>
          <h4 class="robotoCondensed">testimonials</h4>
        </div>

        <div
          class="clientSay_cardDiv"
          v-touch:swipe.left="nextClient"
          v-touch:swipe.right="prevClient"
        >
          <article
            class="clientSay_card"
            :style="{
              backgroundColor: `var(--${client.backgroundColor})`,
              transform: `translateX(${(index - currentClient + 1) * 108}%)`,
            }"
            v-for="(client, index) in testimonials"
          >
            <figure class="clientSay_figure">
              <img
                :src="`/src/assets/${client.image}`"
                :alt="`${client.name}`"
              />
              <figcaption class="clientSay_figcap">
                <h5 class="robotoCondensed">{{ client.name }}</h5>
                <h6 class="DMsans">{{ client.job }}</h6>
              </figcaption>
            </figure>
            <blockquote class="clientSay_blockquote DMsans">
              <p>
                {{ client.quote }}
              </p>
            </blockquote>
          </article>
        </div>
      </div>
    </div>
    <div class="clientSayBottomSect">
      <div class="container clientSayBtnFlexContainer">
        <button class="roundOrangeBtn clientBtnLeft" @click="prevClient">
          <img src="../../assets/leftBtn.png" alt="Left Button" />
        </button>
        <button class="roundOrangeBtn clientBtnRight" @click="nextClient">
          <img src="../../assets/rightBtn.png" alt="Right Button" />
        </button>
      </div>
      <hr />
    </div>
  </section>
</template>

<style scoped>
/* Desktop */
@media screen {
  .clientSaySection {
    overflow-x: clip;
  }

  .clientSayTopSect {
    background-color: var(--black);
    color: var(--white);
    padding: 9.5rem 0;
    position: relative;
  }

  .clientSay_textDiv {
    width: 29rem;
  }

  .clientSay_textDiv h2 {
    margin-bottom: 2rem;
  }

  /* .clientSay_cardDiv {
  display: flex;
  gap: 1.875rem;
  position: absolute;
  top: 30%;
  left: 50%;
}

.clientSay_card {
  padding: 3rem;
  width: 29.375rem;
  height: 32rem;
} */

  .clientSay_cardDiv {
    position: absolute;
    top: 30%;
    left: 50%;
    overflow-x: clip;
    height: 32rem;
    width: 50%;
    z-index: 5;
  }

  .clientSay_card {
    position: absolute;
    padding: 3rem;
    width: 29.375rem;
    height: 32rem;
    transition: transform 0.3s ease-out;
  }

  .clientSay_figure {
    display: flex;
    align-items: center;
    gap: 1.625rem;
    margin-bottom: 6.75rem;
  }

  .clientSay_figure img {
    width: 5rem;
    height: 5rem;
    border-radius: 100px;
  }

  .clientSay_figure h5 {
    font-weight: 700;
    letter-spacing: 1px;
    font-size: 1.5rem;
    line-height: 2rem;
  }

  .clientSay_blockquote p {
    color: var(--halfwhite);
  }

  .clientSayBtnFlexContainer {
    padding: 8.5rem 0;
    display: flex;
    gap: 0.5rem;
  }

  .clientSayBottomSect {
    position: relative;
  }
}

/* Tablet */
@media screen and (max-width: 1170px) {
  .clientSay_cardDiv {
    top: 65%;
    left: 45%;
    height: 36rem;
  }

  .clientSay_card {
    width: 50vw;
    height: 36rem;
  }

  .clientSayBtnFlexContainer {
    padding: 14rem 0;
  }
}

/* Mobile */
@media screen and (max-width: 480px) {
  .clientSaySection {
    overflow-x: clip;
  }

  .clientSayTopSect {
    background-color: var(--black);
    color: var(--white);
    padding: 6.5rem 0 12.25rem 0;
    position: relative;
  }

  .clientSay_cardDiv {
    width: 100%;
    top: 70%;
    left: 1.5rem;
  }

  .clientSay_card {
    width: 88vw;
    height: 40rem;
  }

  .clientSayBtnFlexContainer {
    margin-top: 32rem;
    padding: 5rem 0;
    display: flex;
    justify-content: center;
    gap: 0.5rem;
  }
}
</style>
