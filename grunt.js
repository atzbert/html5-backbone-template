module.exports = function (grunt) {
    grunt.initConfig({

		coffee:{
			sources:{
				files:{
					'js/*.js':'coffee/**/*.coffee'
				}
			}
		},

        server:{
            port:1337,
            base:'.'
        },

        watch:{
            files:'coffee/**/*.coffee',
            tasks:'coffee'
        },

        requirejs: {
            compile: {

                // !! You can drop your app.build.js config wholesale into 'options'
                options: {
                    modules:[
                        {
                            name:'page'
                        }
                    ],
                    baseUrl: "js/",
                    dir: "scripts/",
                    optimize: 'none',
                    shim: {
                        "backbone": {
                            "deps":["underscore", "jquery"],
                            "exports":"Backbone"
                        },
                        "underscore": {
                            "exports":"_"
                        }

                    },
                    paths:{
                        "jquery":"../lib/jquery-1.9.0.min",
                        "underscore":"../lib/underscore",
                        "backbone":"../lib/backbone",
                        "text":"../lib/text",
                        "localstorage":"../lib/backbone.localStorage",
                        "Todos":"../js/collections/Todos",
                        "TodoView":"../js/views/TodoView",
                        "TodoItemView":"../js/views/TodoItemView",
                        "TodoModel":"../js/models/TodoModel"

                    }
                }
            }
        }




    });

    grunt.loadNpmTasks('grunt-contrib-coffee');
    grunt.loadNpmTasks('grunt-contrib-requirejs');
    grunt.registerTask('default', 'coffee requirejs');
//    grunt.registerTask('default', 'cleanup less dusthtml copy');
};