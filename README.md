# Leaflet 3D Marker

'leaflet-3d-marker' is an npm package designed to enhance your Leaflet maps within React by adding the capability to effortlessly integrate visually appealing 3D markers.

## Example

| 3D markers 😎                                                                                                                                                            | Old plain markers 😢                                                                                                                                                            |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <img src="https://github.com/ManuelMunozSanz/leaflet-rotated3d-marker/assets/49397733/0a323912-f022-4d8c-a74e-5e9449783bda" alt="3D markers" width="511" height="409" /> | <img src="https://github.com/ManuelMunozSanz/leaflet-rotated3d-marker/assets/49397733/6a14da76-1ee5-483d-8f6a-16d19ed8f9d3" alt="Old plain markers" width="511" height="409" /> |

## Installation

Install with npm

```bash
  npm install leaflet-3d-marker
```

## Usage

```javascript
import "leaflet-3d-marker";
```

Adjust the **_perspective_** of the MapContainer component to add a 3D effect

```javascript
<MapContainer
  center={position}
  zoom={5}
  style={{
    height: 500,
    width: "100%",
    perspective: "250px",
  }}
>
```

Use the **_rotationAngle_** property to set the rotation angle for your Marker component

```javascript
<Marker position={position} icon={exampleIcon} rotationAngle={[1, 0, 0, 320]} />
```

Feel free to adjust the perspective value and rotationAngle as needed to achieve the desired visual effect for your Leaflet map with 3D markers.

## Documentation

**_rotate3d(x, y, z, a)_**

- **_x, y, z_**: Are <number> describing the x-coordinate of the vector denoting the axis of rotation which can be a positive or negative number.

- **_a_**: Is an <angle> representing the angle of the rotation. A positive angle denotes a clockwise rotation, a negative angle a counter-clockwise one.

**_perspective_**

The perspective CSS property determines the distance between the z=0 plane and the user in order to give a 3D-positioned element some perspective.

## Acknowledgements

This project is based on the work and inspiration of the [leaflet-rotatedmarker
](https://github.com/bbecquet/Leaflet.RotatedMarker) by [Benjamin Becquet](https://github.com/bbecquet). We appreciate their contribution and the community backing their project.
