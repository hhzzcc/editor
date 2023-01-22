const camelizeRE = /-(\w)/g;

export const camelize = (str) =>
    str.replace(camelizeRE, (_, c) => c.toUpperCase());

function genBem(name, mods) {
    if (!mods) {
        return "";
    }

    if (typeof mods === "string") {
        return ` ${name}--${mods}`;
    }

    if (Array.isArray(mods)) {
        return mods.reduce((ret, item) => ret + genBem(name, item), "");
    }

    return Object.keys(mods).reduce(
        (ret, key) => ret + (mods[key] ? genBem(name, key) : ""),
        ""
    );
}

/**
 * bem helper
 * b() // 'button'
 * b('text') // 'button__text'
 * b({ disabled }) // 'button button--disabled'
 * b('text', { disabled }) // 'button__text button__text--disabled'
 * b(['disabled', 'primary']) // 'button button--disabled button--primary'
 */
export function createBEM(name) {
    return (el, mods) => {
        if (el && typeof el !== "string") {
            mods = el;
            el = "";
        }

        el = el ? `${name}__${el}` : name;

        return `${el}${genBem(el, mods)}`;
    };
}

export function createNamespace(name) {
    const prefixedName = name;
    return [prefixedName, createBEM(prefixedName)];
}
