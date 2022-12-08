<template>
  <div class="edoc-home-links">
    <div class="edoc-home-links__intro">
      <slot></slot>
    </div>
    <Hero :top-from-viewport="'-25rem'">
      <template #foreground>
        <div class="edoc-home-links__links-wrapper">
          <router-link
            v-for="(link, index) in links"
            :to="link.path"
            class="edoc-home-links__link"
            @mouseenter.native="hover = index"
            @focus.native="hover = index"
            @mouseleave.native="hover = -1"
            @blur.native="hover = -1"
          >
            <img class="edoc-home-links__icon" :src="link.image" :alt="link.title" />
            <span class="edoc-home-links__button">{{ link.button }}</span>
          </router-link>
        </div>
      </template>
      <template #background>
        <div
          :class="[
            'edoc-home-links__decoration-wrapper',
            `edoc-home-links__decoration-wrapper--${hover}`
          ]"
        >
          <div class="edoc-home-links__decoration edoc-home-links__decoration--green" />
          <div class="edoc-home-links__decoration edoc-home-links__decoration--yellow" />
          <div class="edoc-home-links__decoration edoc-home-links__decoration--blue" />
        </div>
      </template>
    </Hero>
  </div>
</template>

<script setup lang="ts">
  import Hero from '../Hero.vue';
  const props = defineProps({
    links: String
  });

  const links = [
    {
      title: 'Explore Empathy Platform',
      path: '/explore-empathy-platform/',
      image: '/assets/media/home-explore.svg',
      button: 'Explore'
    },
    {
      title: 'Develop Empathy Platform',
      path: '/develop-empathy-platform/',
      image: '/assets/media/home-develop.svg',
      button: 'Develop'
    }
  ];
  let hover = -1;
</script>

<style lang="scss" scoped>
  @mixin size($size) {
    width: #{rem($size)};
    height: #{rem($size)};
  }
  .edoc-home-links {
    $component-class: &;
    &__intro {
      text-align: center;
      .edoc-header-anchor {
        display: none;
      }
    }
    &__links-wrapper {
      display: flex;
    }
    &__link {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 50%;
    }
    &__icon {
      margin-bottom: 0;
    }
    &__button {
      padding: rem(12px) rem(20px);
      border-radius: $border-radius--round;
      margin: rem(-20px) auto rem(20px);
      color: $white;
      background-color: $black;
      text-align: center;
      text-transform: uppercase;
    }
    &__decoration-wrapper {
      height: rem(1500px);
    }
    &__decoration {
      position: absolute;
      &--green {
        top: 35%;
        left: 20%;
        content: url('../../assets/icons/circleDarkGreen.svg');
        @include size(200px);
      }
      &--yellow {
        top: 40%;
        left: 48%;
        content: url('../../assets/icons/circleYellow.svg');
        @include size(350px);
        opacity: 0.5;
      }
      &--blue {
        top: 35%;
        right: -40%;
        content: url('../../assets/icons/circleBlue.svg');
        @include size(750px);
      }
    }

    @media screen and (min-width: $breakpoint__small-desktop--min) {
      // Zooming icon on hover and reducing opacity in adjacent links
      &__links-wrapper {
        &:hover {
          #{$component-class}__link {
            opacity: 0.6;
            &:hover {
              opacity: 1;
            }
          }
        }
      }
      &__link {
        transition: opacity $transitions-duration ease;
        &:hover {
          #{$component-class}__icon {
            transform: scale3d(1.1, 1.1, 1);
          }
        }
      }
      &__icon {
        transition: transform $transitions-duration ease;
      }
      // Applying circles animations on hover (just desktop)
      &__decoration-wrapper {
        &--0 {
          #{$component-class}__decoration {
            &--green {
              top: 55%;
              @include size(300px);
            }
            &--yellow {
              top: 35%;
              left: 20%;
              @include size(180px);
            }
            &--blue {
              top: 35%;
              right: 30%;
              @include size(300px);
            }
          }
        }

        &--1 {
          #{$component-class}__decoration {
            &--green {
              top: 40%;
              left: 58%;
            }

            &--yellow {
              top: 55%;
              left: 70%;
              @include size(400px);
            }

            &--blue {
              right: -2%;
              @include size(250px);
            }
          }
        }
      }
      &__decoration {
        transition-property: top, right, bottom, left, width, height;
        transition-duration: $transitions-duration--long;
        transition-timing-function: ease;
      }
    }

    @media screen and (max-width: $breakpoint__small-desktop--max) {
      &__decoration {
        &--blue {
          right: -30%;
          @include size(500px);
        }
      }
    }

    @media screen and (max-width: $breakpoint__tablet--max) {
      &__links-wrapper {
        flex-direction: column;
      }
      &__link {
        width: 100%;
      }
      &__decoration {
        &--green {
          top: 38%;
        }
        &--yellow {
          top: unset;
          bottom: 8%;
          left: 10%;
        }
        &--blue {
          top: unset;
          bottom: 30%;
        }
      }
    }

    @media screen and (max-width: $breakpoint__small-tablet--max) {
      &__decoration {
        &--green {
          left: -10%;
        }
        &--yellow {
          left: -20%;
          bottom: 20%;
          @include size(220px);
        }
        &--blue {
          right: -20%;
          bottom: 40%;
          @include size(200px);
        }
      }
    }
  }
</style>
