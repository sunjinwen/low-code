// 方便取值的时候能够把上层的取到，但是获取的时候不会全部把所有的数据获取到。
export function createObject(
    superProps?: { [propName: string]: any },
    props?: { [propName: string]: any },
    properties?: any
): object {
    if (superProps && Object.isFrozen(superProps)) {
        superProps = cloneObject(superProps);
    }

    const obj = superProps
        ? Object.create(superProps, {
            ...properties,
            __super: {
                value: superProps,
                writable: false,
                enumerable: false
            }
        })
        : Object.create(Object.prototype, properties);

    props && isObject(props) && Object.keys(props).forEach(key => (obj[key] = props[key]));
    return obj;
}

export function cloneObject(target: any, persistOwnProps: boolean = true) {
    const obj =
        target && target.__super
            ? Object.create(target.__super, {
                __super: {
                    value: target.__super,
                    writable: false,
                    enumerable: false
                }
            })
            : Object.create(Object.prototype);
    persistOwnProps &&
        target &&
        Object.keys(target).forEach(key => (obj[key] = target[key]));
    return obj;
}

export function isObject(obj: any) {
    const typename = typeof obj;
    return (
        obj &&
        typename !== 'string' &&
        typename !== 'number' &&
        typename !== 'boolean' &&
        typename !== 'function' &&
        !Array.isArray(obj)
    );
}

/**
 * 生成 8 位随机数字。
 * @return {string} 8位随机数字
 */
export function guid(): string {
    function s4() {
        return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
    }
    return s4() + s4() + s4();
}

export function findIndex(arr: Array<any>, detect: (item?: any, index?: number) => boolean): number {
    for (let i = 0, len = arr.length; i < len; i++) {
        if (detect(arr[i], i)) {
            return i;
        }
    }
    return -1;
}
