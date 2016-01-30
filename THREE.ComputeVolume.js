THREE.ComputeVolume = function (geometry) {

        if (geometry instanceof _THREE.BufferGeometry) {
            geometry = new _THREE.Geometry().fromBufferGeometry(geometry);
        }

        var volume = 0;
        for (var f = 0, fl = geometry.faces.length; f < fl; f++) {
            var face = geometry.faces[f];

            var vA = geometry.vertices[face.a];
            var vB = geometry.vertices[face.b];
            var vC = geometry.vertices[face.c];

            var x1 = vA.x,
                x2 = vB.x,
                x3 = vC.x;
            var y1 = vA.y,
                y2 = vB.y,
                y3 = vC.y;
            var z1 = vA.z,
                z2 = vB.z,
                z3 = vC.z;

            V = (-x3 * y2 * z1 + x2 * y3 * z1 + x3 * y1 * z2 - x1 * y3 * z2 - x2 * y1 * z3 + x1 * y2 * z3) / 6;

            volume += V;
        }

        return volume;

    };
