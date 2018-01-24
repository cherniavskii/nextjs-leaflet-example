let map;

export default function getMap() {
    if (!map) {
        map = require('./createMap').default();
    }

    return map;
}