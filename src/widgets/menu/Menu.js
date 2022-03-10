import { Lightning } from "@lightningjs/sdk";
import { MenuItem } from "./MenuItem";

class Menu extends Lightning.Component {
  static _template() {
    return {
      rect: true,
      w: 1920,
      h: 200,
      y: -200,
      color: 0xffaaee98,
      Items: {
        x: 400,
        Home: {
          type: MenuItem,
          label: "Home",
        },
        Settings: {
          x: 200,
          type: MenuItem,
          label: "Settings",
        },
        Navigation: {
          x: 400,
          type: MenuItem,
          label: "Navigation",
        },
      },
    };
  }

  _unfocus() {
    this.patch({
      smooth: {
        y: -200,
      },
    });
  }

  _focus() {
    this.patch({
      smooth: {
        y: 0,
      },
      Items: {
        y: 76,
      },
    });
  }
}

export { Menu };
