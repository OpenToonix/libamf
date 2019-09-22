'use strict';

class ArrayCollection extends Array {
    readExternal(AMF3, traits) {
        this.empty();
        
        const source = {};
        AMF3.readObjectProperties(source, traits);

        for(var i in source) {
            this.push(source[i]);
        }
    }

    writeExternal(AMF3, traits) {
        AMF3.writeObjectProperties(this, traits);
    }

    empty() {
        this.splice(0, this.length);
    }
}

module.exports = ArrayCollection;