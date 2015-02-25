var tests = [];
for (var file in window.__karma__.files) {
    if (window.__karma__.files.hasOwnProperty(file)) {
        if (/(test|spec)\.js$/.test(file)) {
            tests.push(file);
        }
    }
}

requirejs.config({
    // Karma serves files under /base, which is the basePath from your config file
    baseUrl: '/base',

    paths: {
        'jquery'        : 'resources/components/jquery/jquery-1.11.1.min',
        'handlebars'    : 'resources/components/handlebars/handlebars-v1.3.0',
        'underscore'    : 'resources/components/underscore/underscore-min',
        'text'          : 'resources/components/requirejs/text',

        'jasmine'       : 'resources/components/jasmine/jasmine',
        'jasmine-jquery': 'resources/components/jasmine/jasmine-jquery',
        'fixture'       : 'test/fixtures',

        'utility'       : "resources/common/utility",
        'helper'        : "resources/common/helper"
    },
    shim: {
        'jquery' : {
            exports: '$'
        },
        'handlebars' : {
            exports : 'Handlebars'
        },
        'underscore' : {
            exports : '_'
        },
        'jasmine': {
            exports: 'jasmine'
        },
        'jasmine-jquery': {
            deps : ['jasmine'],
            exports : 'jasmine'
        }
    },

    // ask Require.js to load these files (all our tests)
    deps: tests,

    // start test run, once Require.js is done
    // we have to kickoff jasmine, as it is asynchronous
    callback: function() {
        jasmine.getFixtures().fixturesPath = '/base/test/fixtures';
        window.__karma__.start.call();
    }
});
