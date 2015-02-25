module.exports = {
  options: {

  },

  /*
   The [background:true] option will tell grunt to run karma in a child process so it doesn't block subsequent grunt tasks.
   The [singleRun:false] option will tell grunt to keep the karma server up after a test run.
   Config your watch task to run the karma task with the [grunt karma:unit:run] flag. For example:
   */

    utility: {
        configFile: 'karma.conf.js'
    }
};