// animation text
anime({
    targets: ['display-4',
              '.rules-image',
              '.rules',
              '.lead',
              '.row',
              '.counter'
    ],
    keyframes: [
        {translateY: -20},
        {translateY: 0},
    ],
    endDelay: 1000,
    loop: false,
    easing: 'easeInOutExpo'
});

anime({
    targets: ['.link-dn',
              '.link-sd',
    ],
    keyframes: [
        {translateY: -15},
        {translateY: 0},
    ],
    endDelay: 1000,
    loop: false,
    easing: 'easeInOutExpo'
});

// animation footer text
anime({
    targets: ['.foot-text',
    ],
    keyframes: [
        {translateX: -1100},
        {translateX: 0},
    ],
    endDelay: 1000,
    loop: false,
    easing: 'easeInOutExpo'
});

// animation brand text
anime({
    targets: ['.navbar-brand',
    ],
    keyframes: [
        {translateY: -1000},
        {translateY: 0},
    ],
    endDelay: 1000,
    loop: false,
    easing: 'easeInOutExpo'
});

anime({
    targets: ['.text-center',
    ],
    keyframes: [
        {translateY: -10},
        {translateY: 0},
    ],
    endDelay: 1000,
    loop: false,
    easing: 'easeInOutExpo'
});
