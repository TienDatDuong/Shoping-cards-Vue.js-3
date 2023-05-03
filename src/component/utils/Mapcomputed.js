 function mapComputed(prop) {
    return {
        get() {
            return this[prop];
        },

        set(newValue) {
            this.$emit(`update:${prop}`, newValue);
        }

    };
}

export {mapComputed}