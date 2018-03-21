
const Declaration = require('../declaration');

class ColorAdjust extends Declaration {

    static names = ['color-adjust'];

    /**
     * Change property name for -webkit browsers
     */
    prefixed(prop, prefix) {
        return prefix + 'print-color-adjust';
    }

    /**
     * Return property name by spec
     */
    normalize() {
        return 'color-adjust';
    }
}

module.exports = ColorAdjust;