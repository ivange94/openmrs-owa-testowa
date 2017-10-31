import template from './helloWorld.html';
import controller from './helloWorld.controller';

let helloWorldComponent = {
    restrict: 'E',
    bindings: {},
    controller: controller,
    template: template,
    controllerAs: 'vm',
};

export default helloWorldComponent;