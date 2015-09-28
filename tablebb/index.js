'use strict';
var util = require('util');
var yeoman = require('yeoman-generator');

var TablebbGenerator = module.exports = function TablebbGenerator(args, options, config) {
    yeoman.generators.NamedBase.apply(this, arguments);
    this.componentName = arguments[0][0];
    //this.tagName = arguments[0][1];
    this.modelName = arguments[0][1];

//this.on('end', function () { });
};

util.inherits(TablebbGenerator, yeoman.generators.NamedBase);

TablebbGenerator.prototype.askFor = function askFor() {
var cb = this.async();

var prompts = [
    {
        name: 'modelName',
        message: 'model name (ie: Book)',
        default: this.modelName
    },
    {
        name: 'fields',
        message: 'fields (for UI) (ie : title, author)?'
    },
    {
        name: 'url',
        message: 'url?',
        default: this.modelName.toLowerCase() + 's'
    }
];


this.routes = [];

this.prompt(prompts, function(props) {
    this.modelName = props.modelName;
    this.url = props.url;
    this.fields = [];
    props.fields.split(',').forEach(function(item) {
        this.fields.push(item.trim());
    }.bind(this));

    this.properties = [];

    this.fields.forEach(function(field) {
        this.properties.push(field + ' : ' + '\'<value>\'');
    }.bind(this));

    this.properties = this.properties.join(',');

    cb();

}.bind(this));
};

TablebbGenerator.prototype.files = function files() {
this.template('table.js', 'public/js/react_components/' + this.componentName + '.js');
};
