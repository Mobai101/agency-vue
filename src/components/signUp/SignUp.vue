<script setup></script>

<template>
  <section class="signupSect" id="signup">
    <div class="signupContainer container">
      <!-- Since the "newsletter sign up" in mobile and desktop view are different, I have to duplicate this line, then render them conditionally by media query -->
      <h2 class="inknutAntiqua desktopNewsletter">newsletter sign up</h2>
      <h2 class="inknutAntiqua mobileNewsletter">news letter sign up</h2>

      <form class="signup_form">
        <label for="email" class="robotoCondensed">get in touch</label>
        <input
          class="DMsans"
          type="email"
          id="email"
          name="email"
          placeholder="Your email"
        />
        <button type="submit" class="robotoCondensed">subscibe</button>
      </form>
      <hr />
    </div>
  </section>
</template>

<style scoped>
/* Desktop */
@media screen {
  .signupSect {
    background-color: var(--black);
    color: var(--white);
    padding: 8rem 0;
  }

  .signupContainer {
    position: relative;
  }

  .signupContainer hr {
    background-color: var(--white);
  }

  .signupContainer h2 {
    font-size: 2.5rem;
    line-height: 3rem;
    font-weight: 900;
    width: 23rem;
    padding-bottom: 6.5rem;
  }

  .desktopNewsletter {
    display: block;
  }

  .mobileNewsletter {
    display: none;
  }

  .signup_form {
    background-color: var(--orange);
    gap: 2rem;
    width: 29.375rem;
    display: flex;
    flex-direction: column;
    padding: 3rem;
    position: absolute;
    right: 10%;
    bottom: -38%;
    z-index: 10;
    border-radius: 3px;
  }

  .signup_form input {
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 3px;
  }

  .signup_form button {
    color: var(--white);
    font-weight: 700;
    padding: 0.5rem;
    border: none;
    border-radius: 3px;
    background-color: var(--orangeSubcribe);
  }

  .signup_form button:hover {
    background-color: var(--orangeHover);
  }
}

/* Tablet */
@media screen and (max-width: 1170px) {
  .signupSect {
    padding-bottom: 12rem;
  }

  .signupContainer h2 {
    padding-bottom: 8rem;
  }

  .signup_form {
    width: 50%;
    padding: 2rem;
    right: 0;
    bottom: -60%;
  }
}

/* Mobile */
@media screen and (max-width: 480px) {
  .signupSect {
    padding: 6.5rem 0;
  }

  .signupContainer hr {
    display: none;
  }

  .signupContainer h2 {
    width: 88vw;
    padding-bottom: 5rem;
  }

  .desktopNewsletter {
    display: none;
  }

  .mobileNewsletter {
    display: block;
  }

  .signup_form {
    width: 88vw;
    position: static;
  }
}
</style>
