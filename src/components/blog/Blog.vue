<script setup></script>

<template>
  <section class="blogSection" id="blog">
    <div class="container">
      <div class="blog_textDiv">
        <h2 class="inknutAntiqua">Our latest blog posts</h2>
        <p class="DMsans">
          Minuteness of the parts formed a great hindrance to my speed,
          resolved, contrary to my first intention, to make the being.
          Minuteness of the parts formed a great hindrance to my speed,
          resolved, contrary to my first intention, to make the being.
        </p>
      </div>
      <div class="blog_contentDiv">
        <!-- JS will fill here with blogs from JSON file -->
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Desktop */
@media screen {
  .blogSection {
    margin: 6.5rem 0;
  }

  .blog_textDiv {
    display: flex;
    justify-content: space-between;
    padding-bottom: 5.5rem;
  }

  .blog_textDiv p {
    max-width: 35.625rem;
  }

  .blog_contentDiv {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.875rem;
  }

  .blog_card {
    width: 23.125rem;
    cursor: pointer;
  }

  .blog_card:hover {
    opacity: 0.7;
  }

  .blog_card img {
    width: 100%;
    border-radius: 5px;
    margin-bottom: 1rem;
  }

  .blog_card p {
    font-weight: 700;
    font-size: 1.5rem;
    letter-spacing: 1px;
    line-height: 2rem;
    margin: 0.75rem 0;
  }
}

/* Tablet */
@media screen and (max-width: 1170px) {
  .blog_textDiv {
    gap: 2rem;
    align-items: center;
  }

  .blog_textDiv p {
    max-width: 25.625rem;
  }

  .blog_contentDiv {
    grid-template-columns: repeat(2, 1fr);
  }

  .blog_card {
    width: 43vw;
  }

  .blog_card p {
    letter-spacing: 0px;
  }
}

/* Mobile */
@media screen and (max-width: 480px) {
  .blog_textDiv {
    flex-direction: column;
    gap: 3.25rem;
  }

  .blog_contentDiv {
    grid-template-columns: repeat(1, 1fr);
    gap: 4.25rem;
  }

  .blog_card {
    width: 88vw;
  }

  .blog_card img {
    width: 100%;
  }
}
</style>
