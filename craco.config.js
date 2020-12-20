// craco.config.js
module.exports = {
    style: {
        postcss: {
            plugins: [
                require('postcss-import'),
                require('postcss-nesting'),
                require('tailwindcss'),
                require('autoprefixer'),
            ],
        },
    },
}