import { Lightning } from "@lightningjs/sdk";

class Home extends Lightning.Component {
  static _template() {
    return {
        Background: {
      rect: true,
      w: 1920,
      h: 1080,
      color: 0xff237848,
      },
      Header: {
        text: {
          text: "Home Page",
          fontSize: 128,
          color: 0xffffffff,
        },
      },
    };
  }
}

export { Home };
