// useIntersectionObserver.js
export const observeIntersection = (elementRefs, options = { threshold: 0.0000001 }) => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            }
        });
    }, options);

    elementRefs.forEach(ref => {
        if (ref.current) observer.observe(ref.current);
    });

    return () => {
        elementRefs.forEach(ref => {
            if (ref.current) observer.unobserve(ref.current);
        });
    };
};
