import L from "leaflet";
import "./styles.css";

(function () {
  // save these original methods before they are overwritten
  let proto_initIcon = L.Marker.prototype._initIcon;
  let proto_setPos = L.Marker.prototype._setPos;

  L.Marker.addInitHook(function () {
    let iconOptions = this.options.icon && this.options.icon.options;
    let iconAnchor = iconOptions && this.options.icon.options.iconAnchor;
    if (iconAnchor) {
      iconAnchor = iconAnchor[0] + "px " + iconAnchor[1] + "px";
    }
    this.options.rotationOrigin =
      this.options.rotationOrigin || iconAnchor || "center bottom";
    this.options.rotation3d = this.options.rotation3d || 0;

    // Ensure marker keeps rotated during dragging
    this.on("drag", function (e) {
      e.target._applyRotation();
    });
  });

  L.Marker.include({
    _initIcon: function () {
      proto_initIcon.call(this);
    },

    _setPos: function (pos) {
      proto_setPos.call(this, pos);
      this._applyRotation();
    },

    _applyRotation: function () {
      if (this.options.rotation3d) {
        this._icon.style[L.DomUtil.TRANSFORM + "Origin"] =
          this.options.rotationOrigin;

        let [x, y, z, angle] = this.options.rotation3d;
        let iconHeight = this._icon.offsetHeight;

        this._icon.style[L.DomUtil.TRANSFORM] += ` translatey(-${
          iconHeight / 2
        }px)`;
        this._icon.style[
          L.DomUtil.TRANSFORM
        ] += `rotate3d(${x}, ${y}, ${z}, ${angle}deg)`;
      }
    },
  });
})();
