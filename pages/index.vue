<template>
  <Hero />
  <section class="region layout layout-grid">
    <div>
      <div
        class="p-card p-component"
        data-pc-name="card"
        data-pc-section="root"
      >
        <div class="p-card-header" data-pc-section="header">
          <img
            alt="user header"
            class="w-full"
            src="https://primefaces.org/cdn/primevue/images/card-vue.jpg"
          />
        </div>
        <div class="p-card-body" data-pc-section="body">
          <div class="p-card-caption" data-pc-section="caption">
            <div class="p-card-title" data-pc-section="title">
              Advanced Card
            </div>
            <div class="p-card-subtitle" data-pc-section="subtitle">
              Card subtitle
            </div>
          </div>
          <div class="p-card-content" data-pc-section="content">
            <p class="m-0">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Inventore sed consequuntur error repudiandae numquam deserunt
              quisquam repellat libero asperiores earum nam nobis, culpa ratione
              quam perferendis esse, cupiditate neque quas!
            </p>
          </div>
          <div class="p-card-footer" data-pc-section="footer">
            <div class="flex gap-3 mt-1">
              <button
                class="p-button p-component p-button-secondary p-button-outlined w-full"
                type="button"
                aria-label="Cancel"
                data-pc-name="button"
                data-pc-section="root"
                data-p-severity="secondary"
                data-pd-ripple="true"
              >
                <!----><span class="p-button-label" data-pc-section="label"
                  >Cancel</span
                ><!----><span
                  role="presentation"
                  aria-hidden="true"
                  data-p-ink="true"
                  data-p-ink-active="false"
                  class="p-ink"
                  data-pc-name="ripple"
                  data-pc-section="root"
                ></span></button
              ><button
                class="p-button p-component w-full"
                type="button"
                aria-label="Save"
                data-pc-name="button"
                data-pc-section="root"
                data-pd-ripple="true"
              >
                <!----><span class="p-button-label" data-pc-section="label"
                  >Save</span
                ><!----><span
                  role="presentation"
                  aria-hidden="true"
                  data-p-ink="true"
                  data-p-ink-active="false"
                  class="p-ink"
                  data-pc-name="ripple"
                  data-pc-section="root"
                ></span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div>
      <div
        class="p-card p-component"
        data-pc-name="card"
        data-pc-section="root"
      >
        <div class="p-card-header" data-pc-section="header">
          <img
            alt="user header"
            class="w-full"
            src="https://primefaces.org/cdn/primevue/images/card-vue.jpg"
          />
        </div>
        <div class="p-card-body" data-pc-section="body">
          <div class="p-card-caption" data-pc-section="caption">
            <div class="p-card-title" data-pc-section="title">
              Advanced Card
            </div>
            <div class="p-card-subtitle" data-pc-section="subtitle">
              Card subtitle
            </div>
          </div>
          <div class="p-card-content" data-pc-section="content">
            <p class="m-0">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Inventore sed consequuntur error repudiandae numquam deserunt
              quisquam repellat libero asperiores earum nam nobis, culpa ratione
              quam perferendis esse, cupiditate neque quas!
            </p>
          </div>
          <div class="p-card-footer" data-pc-section="footer">
            <div class="flex gap-3 mt-1">
              <button
                class="p-button p-component p-button-secondary p-button-outlined w-full"
                type="button"
                aria-label="Cancel"
                data-pc-name="button"
                data-pc-section="root"
                data-p-severity="secondary"
                data-pd-ripple="true"
              >
                <!----><span class="p-button-label" data-pc-section="label"
                  >Cancel</span
                ><!----><span
                  role="presentation"
                  aria-hidden="true"
                  data-p-ink="true"
                  data-p-ink-active="false"
                  class="p-ink"
                  data-pc-name="ripple"
                  data-pc-section="root"
                ></span></button
              ><button
                class="p-button p-component w-full"
                type="button"
                aria-label="Save"
                data-pc-name="button"
                data-pc-section="root"
                data-pd-ripple="true"
              >
                <!----><span class="p-button-label" data-pc-section="label"
                  >Save</span
                ><!----><span
                  role="presentation"
                  aria-hidden="true"
                  data-p-ink="true"
                  data-p-ink-active="false"
                  class="p-ink"
                  data-pc-name="ripple"
                  data-pc-section="root"
                ></span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  </section>

  <section class="region layout layout-grid layout-grid--column-count [--column-count:6] [--layout-grid-min:15ch]">
    <div class="col-span-1 @3xl:col-span-4">
      <div
        class="p-card p-component card--stacked overflow-hidden"
        data-surface-theme="primary-light"
        data-pc-name="card"
        data-pc-section="root"
      >
        <div class="hidden p-card-header order-2 w-1/2 translate-x-card translate-y-card ml-auto mr-0 " data-pc-section="header">
          <img
            alt="user header"
            class="w-full"
            src="https://primefaces.org/cdn/primevue/images/card-vue.jpg"
          />
        </div>
        <div class="p-card-body" data-pc-section="body">
          <div class="p-card-caption" data-pc-section="caption">
            <div class="p-card-title" data-pc-section="title">
              Advanced Card
            </div>
            <div class="p-card-subtitle" data-pc-section="subtitle">
              Card subtitle
            </div>
          </div>
          <div class="p-card-content" data-pc-section="content">
            <p class="m-0 text-lg">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Inventore sed consequuntur error repudiandae numquam deserunt
              quisquam repellat libero asperiores earum nam nobis, culpa ratione
              quam perferendis esse, cupiditate neque quas!
            </p>
          </div>
          <div class="p-card-footer" data-pc-section="footer">
            <div class="flex gap-3 mt-1">
              <a href="#" class="btn btn-link px-0 btn-primary text-lg">Learn about content management</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-span-1 @3xl:col-span-2">
      <div
        class="p-card p-component"
        data-surface-theme="primary"
        data-pc-name="card"
        data-pc-section="root"
      >
        <!-- <div class="p-card-header" data-pc-section="header">
          <img
            alt="user header"
            class="w-full"
            src="https://primefaces.org/cdn/primevue/images/card-vue.jpg"
          />
        </div> -->
        <div class="p-card-body" data-pc-section="body">
          <div class="p-card-caption" data-pc-section="caption">
            <div class="p-card-subtitle" data-pc-section="subtitle">
              Card subtitle
            </div>
            <div class="p-card-title mt-0" data-pc-section="title">
              Advanced Card
            </div>
          </div>
          <div class="p-card-content" data-pc-section="content">
            <p class="m-0">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Inventore sed consequuntur error repudiandae numquam deserunt
              quisquam repellat libero asperiores earum nam nobis, culpa ratione
              quam perferendis esse, cupiditate neque quas!
            </p>
          </div>
          <div class="p-card-footer" data-pc-section="footer">
            <div class="flex gap-3 mt-1">
              <button
                class="p-button p-component w-full btn-outline"
                type="button"
                aria-label="Save"
                data-pc-name="button"
                data-pc-section="root"
                data-pd-ripple="true"
              >
                <!----><span class="p-button-label" data-pc-section="label"
                  >Save</span
                ><!----><span
                  role="presentation"
                  aria-hidden="true"
                  data-p-ink="true"
                  data-p-ink-active="false"
                  class="p-ink"
                  data-pc-name="ripple"
                  data-pc-section="root"
                ></span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="@3xl:col-span-3">
      <div
        class="p-card p-component card--stacked overflow-hidden"
        data-surface-theme="primary-light"
        data-pc-name="card"
        data-pc-section="root"
      >
        <div class="hidden p-card-header order-2 w-1/2 translate-x-card translate-y-card ml-auto mr-0 " data-pc-section="header">
          <img
            alt="user header"
            class="w-full"
            src="https://primefaces.org/cdn/primevue/images/card-vue.jpg"
          />
        </div>
        <div class="p-card-body" data-pc-section="body">
          <div class="p-card-caption" data-pc-section="caption">
            <div class="p-card-title" data-pc-section="title">
              Advanced Card
            </div>
            <div class="p-card-subtitle" data-pc-section="subtitle">
              Card subtitle
            </div>
          </div>
          <div class="p-card-content" data-pc-section="content">
            <p class="m-0 text-lg">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Inventore sed consequuntur error repudiandae numquam deserunt
              quisquam repellat libero asperiores earum nam nobis, culpa ratione
              quam perferendis esse, cupiditate neque quas!
            </p>
          </div>
          <div class="p-card-footer" data-pc-section="footer">
            <div class="flex gap-3 mt-1">
              <a href="#" class="btn btn-link px-0 btn-primary text-lg">Learn about content management</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="@3xl:col-span-3">
      <div
        class="p-card p-component card--stacked overflow-hidden"
        data-surface-theme="primary-light"
        data-pc-name="card"
        data-pc-section="root"
      >
        <div class="hidden p-card-header order-2 w-1/2 translate-x-card translate-y-card ml-auto mr-0 " data-pc-section="header">
          <img
            alt="user header"
            class="w-full"
            src="https://primefaces.org/cdn/primevue/images/card-vue.jpg"
          />
        </div>
        <div class="p-card-body" data-pc-section="body">
          <div class="p-card-caption" data-pc-section="caption">
            <div class="p-card-title" data-pc-section="title">
              Advanced Card
            </div>
            <div class="p-card-subtitle" data-pc-section="subtitle">
              Card subtitle
            </div>
          </div>
          <div class="p-card-content" data-pc-section="content">
            <p class="m-0 text-lg">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Inventore sed consequuntur error repudiandae numquam deserunt
              quisquam repellat libero asperiores earum nam nobis, culpa ratione
              quam perferendis esse, cupiditate neque quas!
            </p>
          </div>
          <div class="p-card-footer" data-pc-section="footer">
            <div class="flex gap-3 mt-1">
              <a href="#" class="btn btn-link px-0 btn-primary text-lg">Learn about content management</a>
            </div>
          </div>
        </div>
      </div>
    </div> 
    <div class="@3xl:col-span-2">
      <div
        class="p-card p-component"
        data-surface-theme="primary"
        data-pc-name="card"
        data-pc-section="root"
      >
        <!-- <div class="p-card-header" data-pc-section="header">
          <img
            alt="user header"
            class="w-full"
            src="https://primefaces.org/cdn/primevue/images/card-vue.jpg"
          />
        </div> -->
        <div class="p-card-body" data-pc-section="body">
          <div class="p-card-caption" data-pc-section="caption">
            <div class="p-card-subtitle" data-pc-section="subtitle">
              Card subtitle
            </div>
            <div class="p-card-title mt-0" data-pc-section="title">
              Advanced Card
            </div>
          </div>
          <div class="p-card-content" data-pc-section="content">
            <p class="m-0">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Inventore sed consequuntur error repudiandae numquam deserunt
              quisquam repellat libero asperiores earum nam nobis, culpa ratione
              quam perferendis esse, cupiditate neque quas!
            </p>
          </div>
          <div class="p-card-footer" data-pc-section="footer">
            <div class="flex gap-3 mt-1">
              <button
                class="p-button p-component w-full btn-outline"
                type="button"
                aria-label="Save"
                data-pc-name="button"
                data-pc-section="root"
                data-pd-ripple="true"
              >
                <!----><span class="p-button-label" data-pc-section="label"
                  >Save</span
                ><!----><span
                  role="presentation"
                  aria-hidden="true"
                  data-p-ink="true"
                  data-p-ink-active="false"
                  class="p-ink"
                  data-pc-name="ripple"
                  data-pc-section="root"
                ></span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>          
  </section>


  <section
    data-surface-theme="accent-dark"
    class="region @container col-span-full"
  >
    <div class="card w-full bg-base-100 shadow-xl p-0">
      <figure class="card-picture">
        <img src="https://picsum.photos/400/200" alt="placeholder" />
      </figure>
      <div class="card-body">
        <h2 class="card-title">Shoes!</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div class="card-actions justify-end">
          <button class="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup></script>
