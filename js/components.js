AFRAME.registerComponent("blink", {
  schema: {
    interval: { type: "number", default: 500 }
  },

  init: function () {
    this.visible = true;

    setInterval(() => {
      this.visible = !this.visible;
      this.el.setAttribute("visible", this.visible);
    }, this.data.interval);
  }
});

AFRAME.registerComponent("look-at-camera", {
  init: function () {
    this.camera = document.querySelector("a-camera");
  },

  tick: function () {
    if (!this.camera) return;
    this.el.object3D.lookAt(this.camera.object3D.position);
  }
});