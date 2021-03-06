angular.module('ux').factory('scrollBar', function () {
    return ['inst', function (inst) {


        var result = exports.logWrapper('scrollBar', {}, 'red', inst), unwatch;

        function init() {
            unwatch();
            inst.element.addClass('datagrid-scrollbar');
            if (!exports.css.getSelector('.datagrid-scrollbar')) {
                exports.css.createClass('datagrid-scrollbar', '.datagrid-scrollbar::-webkit-scrollbar',
                    '-webkit-appearance: none;' + // you need to tweak this to make it available..
                    'width: 4px;');
                exports.css.createClass('datagrid-scrollbar', '.datagrid-scrollbar::-webkit-scrollbar-thumb',
                    'border-radius: 4px;' +
                    'background-color: rgba(0,0,0,.5);' +
                    'box-shadow: 0 0 1px rgba(255,255,255,.5);');
            }
        }
        unwatch = inst.scope.$on(exports.datagrid.events.ON_INIT, init);

        inst.scrollBar = result;
    }];
});