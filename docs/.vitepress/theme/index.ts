import DefaultTheme from "vitepress/theme";
import "./custom.css";
import { onMounted } from "vue";
import { observeCodeBlocks } from "./observe-code-blocks";

export default {
  ...DefaultTheme,
  enhanceApp({ router }) {
    if (typeof window !== "undefined") {
      onMounted(() => {
        observeCodeBlocks();
      });

      router.onAfterRouteChanged = () => {
        // Wait for page content to load
        setTimeout(() => {
          observeCodeBlocks();
        }, 100);
      };
    }
  },
};
