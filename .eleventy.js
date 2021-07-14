// 11ty configuration
module.exports = config => {
    // add folders to build/
    config.addPassthroughCopy('src/img');
    config.addWatchTarget('./src/js/');

    // 11ty defaults
    return {
        dir: {
            input: 'src',
            output: 'build'
        }
    };
};