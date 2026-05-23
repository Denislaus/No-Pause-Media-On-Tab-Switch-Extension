(() => {
    // Trick the page into thinking it is always visible
    Object.defineProperty(Document.prototype, 'hidden', { get: () => false });
    Object.defineProperty(Document.prototype, 'visibilityState', { get: () => 'visible' });

    // Block the events that tell the website you switched tabs
    const stopEvent = (evt) => {
        evt.stopImmediatePropagation();
        evt.stopPropagation();
    };

    // Intercept the visibility events at the earliest possible stage
    window.addEventListener('visibilitychange', stopEvent, true);
    window.addEventListener('webkitvisibilitychange', stopEvent, true);
})();