<template>
  <header>
    <div class="header flex border border-b shadow-xs w-full z-20 top-0">
        <ul class="flex flex-wrap w-full items-center justify-between p-2 px-2 md:px-14">
          <router-link to="/">
            <li class="w-auto">
              <img src="@/assets/scopes-logo.png" width="214" alt="scopes123" />
            </li>
          </router-link>

          <li class="flex flex-row mr-3 md:mr-4">
            <ul class="flex">
              <router-link to="/about">
                <li class="flex items-center text-md font-light text-gray-600 hover:text-blue-800">
                  <span class="material-symbols-rounded text-sm md:text-xl brand-color mr-1 -mt-0.5">
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
  background: white;
}
</style>
