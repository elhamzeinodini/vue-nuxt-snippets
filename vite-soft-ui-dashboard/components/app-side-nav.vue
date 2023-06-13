<template>
  <aside class="side">
    <div class="side__logo divide-current">
      <img src="/icons/logo.svg" alt="ice cream" class="side__logo__item" />
      <span class="side__logo__text">Nuxt3 Soft UI Dashboard</span>
    </div>
    <ul class="side__list" role="list">
      <div class="side__list__icon">
        <img class="side__list__icon__item" />
      </div>
      <li class="side__list__link"></li>
    </ul>
    <h5 class="side__pages">Pages</h5>
    <ul class="side__list">
      <div class="side__list__icon">
        <img class="side__list__icon__item" />
      </div>
      <li class="side__list__link"></li>
    </ul>
    <app-docs></app-docs>
    <button class="side__btn">UPGRADE TO PRO</button>
  </aside>
</template>
