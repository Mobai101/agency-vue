<script setup></script>

<template>
  <section class="projectSection" id="projects">
    <div class="container">
      <div class="projectsHeader">
        <h2 class="inknutAntiqua">Check our projects</h2>
        <p class="DMsans">
          Minuteness of the parts formed a great hindrance to my speed,
          resolved, contrary to my first intention, to make the being.
          Minuteness of the parts formed a great hindrance to my speed,
          resolved, contrary to my first intention, to make the being.
        </p>
        <hr />
      </div>
      <div class="projectBody">
        <aside class="projectBody_aside">
          <h4 class="robotoCondensed">portfolio</h4>
          <div class="categoryContainer">
            <!-- JS will fill in categories here -->
          </div>
          <select
            name="project_categorySelector"
            id="project_categorySelector"
            class="project_categorySelector"
          >
            <option value="all">All</option>
          </select>
        </aside>
        <div class="projectBody_body">
          <div class="projectBody_contentContainer">
            <div
              class="projectCard"
              style="background-color: var(--yellow); color: var(--black)"
            >
              <div class="projectTextDiv">
                <h4 class="robotoCondensed">design</h4>
                <h3 class="inknutAntiqua">creative template</h3>
              </div>
              <img src="../../assets/cuteDog.png" alt="Cute Dog" />
            </div>
            <div
              class="projectCard"
              style="background-color: var(--orange); color: var(--white)"
            >
              <div class="projectTextDiv">
                <h4 class="robotoCondensed">branding</h4>
                <h3 class="inknutAntiqua">Amazing startup</h3>
              </div>
              <img src="../../assets/tiredWoman.png" alt="Tired Woman" />
            </div>
          </div>
          <!-- Load more button -->
          <button class="robotoCondensed projectBody_btn">load more</button>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Desktop */
@media screen {
  .projectSection {
    overflow-x: clip;
  }

  .projectsHeader {
    padding: 6.25rem 0;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1.875rem;
    align-items: center;
    position: relative;
  }

  .projectsHeader h2 {
    margin: 0;
  }

  .projectsHeader p {
    color: var(--halfBlack);
  }

  .projectBody {
    margin: 4.75rem 0;
    display: flex;
    gap: 8.125rem;
  }

  .categoryContainer {
    display: flex;
    flex-direction: column;
    width: 10.625rem;
    gap: 1rem;
    margin-top: 2.25rem;
  }

  .category_button {
    height: 3rem;
    width: 10.625rem;
    text-align: start;
    padding: 0;
    border: none;
    background: none;
  }

  .category_button:hover {
    text-decoration: underline;
  }

  .activeCategory {
    background-color: var(--black);
    color: var(--white);
    padding: 0 1rem;
    border-radius: 3px;
    animation: growPadding 0.2s ease-out;
  }

  .activeCategory:hover {
    text-decoration: none;
  }

  .project_categorySelector {
    display: none;
  }

  .projectBody_body {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 3rem;
  }

  .projectBody_contentContainer {
    display: flex;
    flex-direction: column;
    gap: 3rem;
  }

  .projectCard {
    border-radius: 3px;
    height: 26rem;
    padding: 3rem;
    display: flex;
    align-items: flex-end;
    position: relative;
  }

  .projectTextDiv h3 {
    font-size: 2.5rem;
    line-height: 3rem;
    margin-top: 0.75rem;
  }

  .projectTextDiv {
    width: 18rem;
    position: relative;
    z-index: 1;
  }

  .projectBody_btn {
    margin-top: 2.25rem;
    align-self: center;
    border: none;
    background-color: var(--orange);
    color: var(--white);
    height: 3rem;
    width: 10.625rem;
    border-radius: 3px;
  }

  .projectBody_btn:hover {
    background-color: var(--orangeHover);
  }

  .projectBody_btn:active {
    transform: translateY(4px);
  }

  .projectCard img {
    position: absolute;
    bottom: 0;
    right: 30%;
    transform: translate(50%, 0);
    max-height: 120%;
  }
}

/* Tablet */
@media screen and (max-width: 1170px) {
  .projectBody {
    gap: 3rem;
  }
}

/* Mobile */
@media screen and (max-width: 480px) {
  .projectsHeader {
    grid-template-columns: 1fr;
  }

  .projectBody {
    margin-top: 3rem;
    gap: 5rem;
    flex-direction: column;
  }

  .project_categorySelector {
    margin-top: 0.75rem;
    display: block;
    width: 100%;
    padding: 0.8rem 1rem;
    border-radius: 3px;
    color: var(--halfBlack);
    border: 1px solid var(--greyProjectSelect);
  }

  .projectBody_aside h4 {
    font-weight: 700;
    letter-spacing: 1px;
  }

  .categoryContainer {
    display: none;
  }

  .projectCard {
    padding: 1.75rem;
    height: 20rem;
  }

  .projectCard img {
    position: absolute;
    bottom: 0;
    left: 0;
    transform: translate(20%, 0);
    max-height: 108%;
  }

  img[alt="Tired Woman"] {
    max-height: 95%;
    transform: translate(0, 0);
  }
}
</style>
