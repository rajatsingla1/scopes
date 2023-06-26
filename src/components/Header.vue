<template>
  <header>
    <div class="header flex border border-b shadow-xs fixed w-full z-20 top-0">
      <ul
        class="flex flex-wrap w-full items-center justify-between p-2 px-2 md:px-14"
      >
        <li class="w-full md:w-auto">
          <img src="@/assets/scopes-logo.png" width="214" alt="scopes123" />
        </li>

        <li class="flex flex-row mx-auto md:mx-0 pt-2 md:pt-0">
          <ul class="flex">
            <router-link to="/">
              <li
                class="mr-8 flex items-center font-light text-gray-600 text-md hover:text-blue-800"
              >
                <span
                  class="material-symbols-rounded text-sm md:text-xl brand-color mr-1 -mt-0.5"
                >
                  dashboard
                </span>
                Dashboard
              </li>
            </router-link>
            <router-link to="/">
              <li
                class="flex items-center text-md font-light text-gray-600 hover:text-blue-800"
              >
                <span
                  class="material-symbols-rounded text-sm md:text-xl brand-color mr-1 -mt-0.5"
                >
                  public
                </span>
                About
              </li>
            </router-link>
          </ul>
        </li>
      </ul>
    </div>
  </header>
</template>

<style scoped>
.header {
  backdrop-filter: blur(12px);
  background-color: rgba(255, 255, 255, 0.8);
  -webkit-backdrop-filter: blur(12px);
}
</style>
