<script>
  let email = "";
  let success = false;
  let error = false;
  let submitting = false;

  async function handleSubmit() {
    const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

    if (email.search(regex) > -1) {
      submitting = true;
      let result = await fetch("/api/subscribe", {
        method: "POST",
        body: JSON.stringify({
          email_address: email,
        }),
      });
      submitting = false;

      if (result.status === 200) {
        email = "";
        success = true;
      } else {
        let json = await result.json();
        error = json.message;
      }
    } else {
      error = "Please provide a valid email address";
    }
  }

  export let socials;
  // console.log(socials);
</script>

<section id="signup">
  <div class="container">
    <div class="lhs" />
    <div class="rhs">
      <div class="top">
        {#if success}
          <p class="medium">
            Thanks for subscribing to our weekly newsletter. Expect to recieve
            project updates, insights into our collection, and invites to events
            & initiatives.
          </p>
          <p class="tiny feedback success">
            <svg
              aria-hidden="true"
              width="14"
              height="14"
              viewBox="0 0 14 14"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.00016 13.6668C3.31826 13.6668 0.333496 10.682 0.333496 7.00016C0.333496 3.31826 3.31826 0.333496 7.00016 0.333496C10.682 0.333496 13.6668 3.31826 13.6668 7.00016C13.6668 10.682 10.682 13.6668 7.00016 13.6668ZM6.33523 9.66683L11.0493 4.95278L10.1065 4.00998L6.33523 7.78123L4.44964 5.89556L3.50682 6.83843L6.33523 9.66683Z"
              />
            </svg>
            Subscription to newsletter successful
          </p>
        {:else}
          <p class="medium">
            Join our weekly newsletter to get project updates, insights into our
            collection, and invites to events & initiatives.
          </p>
          {#if error}
            <p class="tiny feedback error">
              <svg
                aria-hidden="true"
                width="14"
                height="14"
                viewBox="0 0 14 14"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.99992 13.6668C3.31802 13.6668 0.333252 10.682 0.333252 7.00016C0.333252 3.31826 3.31802 0.333496 6.99992 0.333496C10.6818 0.333496 13.6666 3.31826 13.6666 7.00016C13.6666 10.682 10.6818 13.6668 6.99992 13.6668ZM6.33325 9.00016V10.3335H7.66658V9.00016H6.33325ZM6.33325 3.66683V7.66683H7.66658V3.66683H6.33325Z"
                />
              </svg>
              {error}
            </p>
          {/if}
          <form on:submit|preventDefault={handleSubmit}>
            <label for="email" class="sr-only">Your Email Address</label>
            <input
              placeholder="Your Email Address"
              id="email"
              name="email"
              type="text"
              class="medium"
              bind:value={email}
            />
            <button type="submit" class="tiny" disabled={submitting}>
              Subscribe
            </button>
          </form>
        {/if}
      </div>
      {#if socials}
        <div class="bottom small">
          Follow us on:
          <ul class="social">
            {#each socials as link, i}
              <li>
                <a target="_blank" href={link.link}>
                  {#if i === socials.length - 1}
                    {link.platform}
                  {:else if i === socials.length - 2}
                    {link.platform} {"&"}
                  {:else}
                    {link.platform}{","}
                  {/if}
                </a>
              </li>
            {/each}
          </ul>
        </div>
      {/if}
    </div>
  </div>
</section>

<style>
  section {
    height: 100vh;
    background: var(--black-100);
    color: white;
    display: flex;
    padding-bottom: var(--nav-height);
    box-sizing: border-box;
  }

  .container {
    display: flex;
    gap: var(--padding);
    padding: var(--padding);
    flex-direction: row;
  }

  .container div {
    width: 100%;
  }

  .rhs {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  @media only screen and (max-width: 767px) {
    .lhs {
      display: none;
    }
  }

  input {
    -webkit-appearance: none;
    border: none;
    background: none;
    border-radius: 0;
    border-bottom: 1px solid rgba(255, 255, 255, 0.5);
    padding: 16px 0;
    color: white;
    width: 100%;
    outline-offset: 2px;
    margin-top: var(--padding);
  }

  input::placeholder {
    color: rgba(255, 255, 255, 0.5);
  }
  input:-webkit-autofill {
    -webkit-box-shadow: 0 0 0 50px var(--black-100) inset;
    -webkit-text-fill-color: white;
  }
  input:-webkit-autofill:focus {
    -webkit-box-shadow: 0 0 0 50px var(--black-100) inset;
    -webkit-text-fill-color: white;
  }

  button {
    font-family: inherit;
    font-style: inherit;
    cursor: pointer;
    background: white;
    padding: 12px 20px;
    border: var(--border);
    color: var(--black-100);
    display: flex;
    border-radius: 100px;
    transition: all 0.2s ease;
    margin-top: var(--padding);
  }

  button[disabled] {
    cursor: not-allowed;
    opacity: 0.2;
  }

  .feedback {
    margin-top: 10px;
    display: flex;
    align-items: center;
  }
  .feedback svg {
    fill: currentColor;
    margin-right: 5px;
    margin-top: -1px;
  }
  .error {
    color: var(--error);
  }
  .success {
    color: var(--success);
  }

  .bottom {
    color: rgba(255, 255, 255, 0.5);
  }

  .social {
    color: white;
    display: inline;
    list-style: none;
    margin: 0;
    padding: 0;
  }
  .social li {
    display: inline;
  }
  /* .social li:after {
    content: ", ";
  }
  .social li:last-child:before {
    content: " & ";
  }
  .social li:last-child:after {
    content: none;
  } */
</style>
