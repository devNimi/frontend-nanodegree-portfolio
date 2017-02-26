module.exports = function(grunt) {

  grunt.initConfig({
    responsive_images: {

      author_image: {
        options: {
          engine: 'im',
          sizes: [{
            width: 200,
            suffix: '-2x',
            quality: 90
          },
          {
            width: 100,
            suffix: '-1x',
            quality: 90
          }]
        },

        files: [{
          expand: true,
          src: ['**.{gif,jpg,png}'],
          cwd: 'images-src/author-images/',
          dest: 'images/'
        }]
      },

      header_images: {
        options: {
          engine: 'im',
          sizes: [{
            width: 2560,
            suffix: '-retina',
            quality: 60
          },
          {
            width: 1600,
            suffix: '-large-2x',
            quality: 70
          },
          { width: 800,
            suffix: '-large-1x',
            quality: 80
          },
          { width: 1280,
            suffix: '-medium-2x',
            quality: 80
          },
          { width: 640,
            suffix: '-medium-1x',
            quality: 100
          },
          { width: 320,
            suffix: '-small-1x',
            quality: 100
          }]
        },

        files: [{
          expand: true,
          src: ['**.{gif,jpg,png}'],
          cwd: 'images-src/header-images/',
          dest: 'images/'
        }]
      },

      featured_projects_images: {
        options: {
          engine: 'im',
          sizes: [
          {
            width: 1600,
            suffix: '-large-2x',
            quality: 30
          },
          { width: 800,
            suffix: '-large-1x',
            quality: 30
          },
          { width: 1280,
            suffix: '-medium-2x',
            quality: 30
          },
          { width: 640,
            suffix: '-medium-1x',
            quality: 30
          },
          { width: 320,
            suffix: '-small',
            quality: 30
          }]
        },

        files: [{
          expand: true,
          src: ['**.{gif,jpg,png}'],
          cwd: 'images-src/',
          dest: 'images/'
        }]
      }


    }, /* responsive_images plugin */

// WebP configuration - this convert all images in images/ folder to webp
 // Make sure 'grunt-responsive-image' is run before 'grunt-webp' otherwise images in images/ foler will not be converted (as source for webp plugin is images/ folder)
    webp: {
      files: {
        expand: true,
          src: ['*.{gif,jpg,png}'],
          cwd: 'images/',
          dest: 'images/'
      },
      options: {
        binpath: require('webp-bin').path,
        preset: 'photo',
        verbose: true,
        quality: 80,
        alphaQuality: 80,
        compressionMethod: 6,
        segments: 4,
        psnr: 42,
        sns: 50,
        filterStrength: 40,
        filterSharpness: 3,
        simpleFilter: true,
        partitionLimit: 50,
        analysisPass: 6,
        multiThreading: true,
        lowMemory: false,
        alphaMethod: 0,
        alphaFilter: 'best',
        alphaCleanup: true,
        noAlpha: false,
        lossless: false
      }
    },




    /* Clear out the images directory if it exists */
    clean: {
      dev: {
        src: ['images'],
      },
    },

    /* Generate the images directory if it is missing */
    mkdir: {
      dev: {
        options: {
          create: ['images']
        },
      },
    },

    // Generate minified CSS files for custom stylesheet
    cssmin: {
      target: {
        files: [{
          expand: true,
          cwd: 'css/',
          src: ['*.css', '!*.min.css'],
          dest: 'css/',
          ext: '.min.css'
        }]
      }
    }

  });

  grunt.loadNpmTasks('grunt-responsive-images');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-mkdir');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.registerTask('default', ['clean', 'mkdir', 'responsive_images', 'cssmin']);

};
