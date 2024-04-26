<template>
  <Hero />

  <section class="region">
    <PartnerCompanies />
  </section>

  <section class="region layout layout-grid max-w-6xl mx-auto w-full">
    <div>
      <Card
        title="Advanced Card"
        subtitle="Card subtitle"
        :css="{
          caption: 'flex',
        }"
      >
        <template #caption="{ css }">
          <h3 :class="css.title" class="inline-flex items-center gap-rel-0.5">
            <Icon
              name="uil:github"
              color="var(--color-primary)"
              class="text-[1.5em]"
            />
            <span>Text</span>
          </h3>
        </template>
        <template #default>
          <p class="text-lg leading-snug">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore
            sed consequuntur error repudiandae numquam deserunt quisquam.
          </p>
        </template>
      </Card>
    </div>
    <div>
      <Card
        title="Advanced Card"
        subtitle="Card subtitle"
        :css="{
          caption: 'flex',
        }"
      >
        <template #caption="{ css }">
          <h3 :class="css.title" class="inline-flex items-center gap-rel-0.5">
            <Icon
              name="uil:github"
              color="var(--color-primary)"
              class="text-[1.5em]"
            />
            <span>Text</span>
          </h3>
        </template>
        <template #default>
          <p class="text-lg leading-snug">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore
            sed consequuntur error repudiandae numquam deserunt quisquam.
          </p>
        </template>
      </Card>
    </div>
    <div>
      <Card
        title="Advanced Card"
        subtitle="Card subtitle"
        :css="{
          caption: 'flex',
        }"
      >
        <template #caption="{ css }">
          <h3 :class="css.title" class="inline-flex items-center gap-rel-0.5">
            <Icon
              name="uil:github"
              color="var(--color-primary)"
              class="text-[1.5em]"
            />
            <span>Text</span>
          </h3>
        </template>
        <template #default>
          <p class="text-lg leading-snug">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore
            sed consequuntur error repudiandae numquam deserunt quisquam.
          </p>
        </template>
      </Card>
    </div>
  </section>

  <section class="region flow">
    <div class="flex justify-center mb-xl">
      <h2 class="heading-md">This is a section heading</h2>
    </div>
    <div
      class="layout layout-grid layout-grid--column-count [--column-count:6] [--layout-grid-min:15ch]"
    >
      <div class="@[980px]:col-span-4">
        <Card
          data-surface-theme="primary-light"
          :interact="true"
          title="Advanced Card"
          subtitle="Card subtitle"
        >
          <template #default>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Inventore sed consequuntur error repudiandae numquam deserunt
              quisquam repellat libero asperiores earum nam nobis, culpa ratione
              quam perferendis esse, cupiditate neque quas!
            </p>
          </template>
          <template #footer>
            <button class="btn-link btn-primary px-0">See more</button>
          </template>
        </Card>
      </div>
      <div class="@[980px]:col-span-2">
        <Card
          data-surface-theme="primary"
          :interact="true"
          title="Advanced Card"
          subtitle="Card subtitle"
        >
          <template #default>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Inventore sed consequuntur error repudiandae numquam deserunt
              quisquam repellat libero asperiores earum nam nobis, culpa ratione
              quam perferendis esse, cupiditate neque quas!
            </p>
          </template>
          <template #footer>
            <button class="btn-outline">See more</button>
          </template>
        </Card>
      </div>
      <div class="@[980px]:col-span-3">
        <Card
          data-surface-theme="primary-light"
          :interact="true"
          title="Advanced Card"
          subtitle="Card subtitle"
        >
          <template #default>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Inventore sed consequuntur error repudiandae numquam deserunt
              quisquam repellat libero asperiores earum nam nobis, culpa ratione
              quam perferendis esse, cupiditate neque quas!
            </p>
          </template>
          <template #footer>
            <button class="btn-link btn-primary px-0">See more</button>
          </template>
        </Card>
      </div>
      <div class="@[980px]:col-span-3">
        <Card
          data-surface-theme="primary-light"
          :interact="true"
          title="Advanced Card"
          subtitle="Card subtitle"
        >
          <template #default>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Inventore sed consequuntur error repudiandae numquam deserunt
              quisquam repellat libero asperiores earum nam nobis, culpa ratione
              quam perferendis esse, cupiditate neque quas!
            </p>
          </template>
          <template #footer>
            <button class="btn-link btn-primary px-0">See more</button>
          </template>
        </Card>
      </div>
      <div class="@[980px]:col-span-2">
        <Card
          data-surface-theme="primary"
          :interact="true"
          title="Advanced Card"
          subtitle="Card subtitle"
        >
          <template #default>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Inventore sed consequuntur error repudiandae numquam deserunt
              quisquam repellat libero asperiores earum nam nobis, culpa ratione
              quam perferendis esse, cupiditate neque quas!
            </p>
          </template>
          <template #footer>
            <button class="btn-outline">See more</button>
          </template>
        </Card>
      </div>
      <div class="@[980px]:col-span-4">
        <Card
          data-surface-theme="dark"
          :interact="true"
          title="Advanced Card"
          subtitle="Card subtitle"
        >
          <template #default>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Inventore sed consequuntur error repudiandae numquam deserunt
              quisquam repellat libero asperiores earum nam nobis, culpa ratione
              quam perferendis esse, cupiditate neque quas!
            </p>
          </template>
          <template #footer>
            <button class="btn-outline">See more</button>
          </template>
        </Card>
      </div>
    </div>
  </section>

  <section class="region">
    <div class="@container">
      <Card
        :reverse-order="true"
        :css="{
          card: '[--card-left-col:1fr] [--card-right-col:auto]',
          title: 'heading-lg leading-none',
          picture: 'flex items-center',
        }"
        title="Add function to your flair with built-in business tools"
      >
        <template #picture>
          <div class="flex flex-col w-min min-w-[40ch] flow">
            <p>
              Explore our industry-leading collection of website templates and
              customize them to reflect your brand's unique identity.
            </p>
            <button class="self-start">Button</button>
          </div>
        </template>
      </Card>
    </div>
  </section>

  <section class="region">
    <div class="@container">
      <Card
        :reverse-order="true"
        data-surface-theme="primary-light"
        :css="{
          card: '[--card-left-col:0.6fr] [--card-right-col:0.4fr] [--card-gutter-stacked:var(--spacing-gutter-xl)]',
          picture:
            'quote justify-center order-2 @[80ch]:order-0 pb-card-component @[80ch]:py-md',
        }"
      >
        <template #default>
          <blockquote class="m-0 heading heading-xs">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore
            sed consequuntur error repudiandae numquam deserunt quisquam
            repellat libero asperiores earum nam nobis, culpa ratione quam
            perferendis esse, cupiditate neque quas!
          </blockquote>
        </template>
        <template #picture>
          <div class="@[80ch]:max-w-72 w-full">
            <figure
              class="flex justify-center @[80ch]:flex-col w-full gap-x-md gap-y-sm"
            >
              <div class="@[80ch]:w-full flex justify-center">
                <img
                  src="https://assets.codepen.io/174183/avatar-2.jpg"
                  alt=""
                  class="self-center h-auto w-16 @[80ch]:w-[clamp(4rem,15cqi,14rem)]"
                />
              </div>
              <figcaption
                class="flex items-start @[80ch]:items-center flex-col"
              >
                <p class="font-semibold">Justin Small</p>
                <p>Front End Developer @ Self</p>
              </figcaption>
            </figure>
          </div>
        </template>
      </Card>
    </div>
  </section>

  <section
    data-surface-theme="accent-dark"
    class="region @container col-span-full"
  >
    <div class="wrapper-grid @[80ch]:[--start-col:0]">
      <Card
        title="Test card"
        :reverse-order="false"
        :css="{
          card: 'col-start-2 col-end-2 w-full bg-base-100 p-0',
          title: 'heading-md',
        }"
      >
        <template #picture>
          <img
            alt="user header"
            class="w-full"
            src="https://picsum.photos/400/200"
          />
        </template>
        <template #default>
          <p class="text-xl leading-tight">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore
            sed consequuntur error repudiandae numquam deserunt quisquam
            repellat libero asperiores earum nam nobis, culpa ratione quam
            perferendis esse, cupiditate neque quas!
          </p>
        </template>
        <template #footer>
          <button class="btn btn-primary">Buy Now</button>
        </template>
      </Card>
    </div>
  </section>

  <section
    data-surface-theme="secondary-dark"
    class="region @container col-span-full"
  >
    <div class="wrapper-grid @[80ch]:[--end-col:0]">
      <Card
        title="Test card"
        :reverse-order="true"
        :css="{
          card: 'col-start-2 col-end-2 w-full p-0',
          title: 'heading-md',
        }"
      >
        <template #picture>
          <img
            alt="user header"
            class="w-full"
            src="https://picsum.photos/400/200"
          />
        </template>
        <template #default>
          <p class="text-xl leading-tight">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore
            sed consequuntur error repudiandae numquam deserunt quisquam
            repellat libero asperiores earum nam nobis, culpa ratione quam
            perferendis esse, cupiditate neque quas!
          </p>
        </template>
        <template #footer>
          <button class="btn btn-primary">Buy Now</button>
        </template>
      </Card>
    </div>
  </section>

  <section class="region @container">
    <div class="wrapper-grid">
      <Card
        title="Test card"
        :reverse-order="false"
        :css="{
          card: 'col-span-full w-full bg-base-100 p-0',
          title: 'heading-md',
        }"
      >
        <template #picture>
          <img
            alt="user header"
            class="w-full"
            src="https://picsum.photos/400/200"
          />
        </template>
        <template #default>
          <p class="text-xl leading-tight">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore
            sed consequuntur error repudiandae numquam deserunt quisquam
            repellat libero asperiores earum nam nobis, culpa ratione quam
            perferendis esse, cupiditate neque quas!
          </p>
        </template>
        <template #footer>
          <button class="btn btn-primary">Buy Now</button>
        </template>
      </Card>
    </div>
  </section>

  <section class="region @container">
    <div class="wrapper-grid">
      <Card
        title="Test card"
        :reverse-order="true"
        :css="{
          card: 'col-span-full w-full bg-base-100 p-0',
          title: 'heading-md',
        }"
      >
        <template #picture>
          <img
            alt="user header"
            class="w-full"
            src="https://picsum.photos/400/200"
          />
        </template>
        <template #default>
          <p class="text-xl leading-tight">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore
            sed consequuntur error repudiandae numquam deserunt quisquam
            repellat libero asperiores earum nam nobis, culpa ratione quam
            perferendis esse, cupiditate neque quas!
          </p>
        </template>
        <template #footer>
          <button class="btn btn-primary">Buy Now</button>
        </template>
      </Card>
    </div>
  </section>

  <section class="region @container">
    <div class="wrapper-grid">
      <Card
        title="Test card"
        :reverse-order="true"
        :is-stacked="true"
        :css="{
          card: 'col-span-full w-full bg-base-100 p-0',
          title: 'heading-md',
          body: 'justify-center flex flex-wrap flex-col',
          caption: 'flex-auto text-center',
          content: 'text-center max-w-prose mx-auto',
          picture: 'max-w-6xl mx-auto w-full',
          footer: 'text-center',
        }"
      >
        <template #picture>
          <img
            alt="user header"
            class="w-full"
            src="https://picsum.photos/400/200"
          />
        </template>
        <template #default>
          <p class="text-xl leading-tight">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore
            sed consequuntur error repudiandae numquam deserunt quisquam
            repellat libero asperiores earum nam nobis, culpa ratione quam
            perferendis esse, cupiditate neque quas!
          </p>
        </template>
        <template #footer>
          <button class="btn btn-primary">Buy Now</button>
        </template>
      </Card>
    </div>
  </section>

  <section
    class="region [--color-surface-bg:var(--color-eggshell)] col-span-full flow"
  >
    <div class="flex justify-between items-center wrapper mt-gutter">
      <h2 class="heading-sm">This is a section heading</h2>
      <a href="#" class="btn btn-link">
        View all
        <Icon name="uil:github" color="black" />
      </a>
    </div>
    <div
      class="wrapper layout layout-grid [--color-surface-bg:var(--color-light)]"
    >
      <div>
        <Card data-surface-theme="light" title="Test card">
          <template #picture>
            <img
              alt="user header"
              class="w-full"
              src="https://primefaces.org/cdn/primevue/images/card-vue.jpg"
            />
          </template>
          <template #default>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Inventore sed consequuntur error repudiandae numquam deserunt
              quisquam repellat libero asperiores earum nam nobis, culpa ratione
              quam perferendis esse, cupiditate neque quas!
            </p>
          </template>
          <template #footer>
            <button>Button</button>
          </template>
        </Card>
      </div>
      <div>
        <Card data-surface-theme="light" title="Test card">
          <template #picture>
            <img
              alt="user header"
              class="w-full"
              src="https://primefaces.org/cdn/primevue/images/card-vue.jpg"
            />
          </template>
          <template #default>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Inventore sed consequuntur error repudiandae numquam deserunt
              quisquam repellat libero asperiores earum nam nobis, culpa ratione
              quam perferendis esse, cupiditate neque quas!
            </p>
          </template>
          <template #footer>
            <button>Button</button>
          </template>
        </Card>
      </div>
      <div>
        <Card data-surface-theme="light" title="Test card">
          <template #picture>
            <img
              alt="user header"
              class="w-full"
              src="https://primefaces.org/cdn/primevue/images/card-vue.jpg"
            />
          </template>
          <template #default>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Inventore sed consequuntur error repudiandae numquam deserunt
              quisquam repellat libero asperiores earum nam nobis, culpa ratione
              quam perferendis esse, cupiditate neque quas! numquam deserunt
              quisquam repellat libero asperiores earum nam nobis, culpa ratione
              quam perferendis esse, cupiditate neque quas!
            </p>
          </template>
          <template #footer>
            <button>Button</button>
          </template>
        </Card>
      </div>
    </div>
  </section>

  <section
    class="region [--color-surface-bg:var(--color-eggshell)] col-span-full flow"
  >
    <div class="wrapper layout layout-grid">
      <template v-for="card in Array.from({ length: 4 })">
        <div>
          <!-- Add image-full as a prop -->
          <Card
            data-surface-theme="light"
            :css="{
              card: 'image-full',
              picture: '[--card-aspect:9/16]',
            }"
          >
            <template #picture>
              <img
                alt="user header"
                class="w-full"
                src="https://primefaces.org/cdn/primevue/images/card-vue.jpg"
              />
            </template>
          </Card>
        </div>
      </template>
    </div>
  </section>

  <section class="region @container col-span-full" data-surface-theme="primary">
    <div class="wrapper-grid">
      <Card
        :css="{
          card: 'py-gutter-xl col-start-2 col-end-2 w-full p-0 [--card-left-col:0.5fr] [--card-right-col:0.5fr]',
          title: 'heading-lg leading-none',
        }"
        :reverse-order="true"
        :interact="false"
        title="Explore resources for inspiration, instruction, and innovation."
      >
        <template #picture>
          <div class="layout layout-grid [--layout-grid-min:20ch]">
            <template v-for="card in Array.from({ length: 4 })">
              <div>
                <Card
                  data-surface-theme="light"
                  :is-stacked="true"
                  title="Test"
                  :picture="{
                    src: 'https://picsum.photos/400/200',
                    alt: 'Image',
                  }"
                  :css="{
                    title: 'text-md',
                  }"
                />
              </div>
            </template>
          </div>
        </template>
        <template #footer>
          <button class="btn btn-outline">Button</button>
        </template>
      </Card>
    </div>
  </section>

  <section class="region @container">
    <div class="wrapper-grid flow">
      <template v-for="card in Array.from({ length: 4 })">
        <Card
          title="Test card"
          :reverse-order="false"
          :css="{
            card: 'col-span-full w-full bg-base-100 p-0 [--card-left-col:fit-content(clamp(150px,30vw,300px))] [--card-right-col:1fr]',
          }"
        >
          <template #picture>
            <img
              alt="user header"
              class="w-full"
              src="https://picsum.photos/400/200"
            />
          </template>
          <template #default>
            <p class="leading-tight">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Inventore sed consequuntur error repudiandae numquam deserunt
              quisquam repellat libero asperiores earum nam nobis, culpa ratione
              quam perferendis esse, cupiditate neque quas!
            </p>
          </template>
          <template #footer>
            <button class="btn btn-primary">Buy Now</button>
          </template>
        </Card>
      </template>
    </div>
  </section>

  <section class="region">
    <div class="layout layout-grid [--layout-column-min:8ch]">
      <div>
        <div class="card border aspect-square">
          <div class="card-body">
            <p>Card</p>
          </div>
        </div>
      </div>
      <div>
        <div class="card border aspect-square">
          <div class="card-body">
            <p>Card</p>
          </div>
        </div>
      </div>
      <div>
        <div class="card border aspect-square">
          <div class="card-body">
            <p>Card</p>
          </div>
        </div>
      </div>
      <div>
        <div class="card border aspect-square">
          <div class="card-body">
            <p>Card</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <div
    class="flex flex-col md:flex-row text-center md:text-left gap-5 items-center justify-between p-[10vmin] md:p-5 bg-white rounded-lg shadow-sm"
  >
    <div class="text-lg leading-snug max-w-xs md:max-w-none">
      <strong>Ready to give it a try?</strong> Start a trial completely free for
      14 days <span class="hidden lg:inline">and build your publication</span>
    </div>
    <div class="flex-shrink-0 flex gap-5">
      <a
        class="plausible-event-name=Signup-CTA-clicked inline-flex items-center justify-center text-md font-medium bg-base text-white px-5 py-4 rounded-md leading-none"
        href="https://account.ghost.org/signup/"
        >Test it out now</a
      >
      <a
        class="inline-flex items-center justify-center text-md font-medium bg-white text-black border border-base px-5 py-4 rounded-md leading-none"
        href="https://account.ghost.org/signin/"
        >Sign in</a
      >
    </div>
  </div>
</template>

<script lang="ts" setup></script>
