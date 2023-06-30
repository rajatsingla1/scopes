import { onMounted, onUnmounted } from 'vue';
import type { Ref } from 'vue';

const defaultEvents = ['click'];

export const useClickOutside = (
  el: Ref<null | HTMLElement>,
  callback: (e: Event) => void,
  events = defaultEvents
) => {
  const onClickOutside = (e: Event) => {
    if (!el.value?.contains?.(e.target as Node)) callback(e);
  };

  onMounted(() => {
    events.forEach(event =>
      document.addEventListener(event, onClickOutside)
    );
  });

  onUnmounted(() => {
    events.forEach(event =>
      document.removeEventListener(event, onClickOutside)
    );
  });
};