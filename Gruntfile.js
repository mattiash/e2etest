module.exports = function (grunt) {
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-protractor-runner');

    grunt.initConfig({
        connect: {
            dev: {
                options: {
                    port: 9000,
                    middleware: function (connect) {
                        return [
                            connect.static(__dirname)
                        ];
                    }
                }
            }
        },

        protractor: {
            options: {
                keepAlive: true,
                noColor: false,
                configFile: 'protractor.conf.js',
                args: {
                    chromeDriver: './node_modules/protractor/selenium/chromedriver'
                }
            },
            dev: {
                options: {
                    args: {
                        chromeOnly: true,
                        chromeDriver: './node_modules/protractor/selenium/chromedriver'
                    }
                }
            }
        }
    });

    grunt.registerTask('default', [
        'connect',
        'protractor'
    ]);
};