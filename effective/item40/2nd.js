function cacheLast(fn) {
    let lastArgs = null;
    let lastResult;
    return function (...args) {
        if (!lastArgs || !shallowEqual(lastArgs, args)) {
            lastResult = fn(...args);
            lastArgs = args;
        }
        return lastResult;
    };
}
export {};
