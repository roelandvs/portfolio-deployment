// 11ty configuration
module.exports = config => {
    // add images to build/
    config.addPassthroughCopy('src/img');

    // 11ty defaults
    return {
        dir: {
            input: 'src',
            output: 'build'
        }
    };
};