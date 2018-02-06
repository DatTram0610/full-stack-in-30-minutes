

(function () {
    angular.module('app', []);
})();

(function () {
    angular.module('app')
        .controller('appController', AppController);

    AppController.$inject = ['$http', '$q'];

    function AppController($http, $q) {
        var vm = this;
        vm.user = "David Tram";

        _init();

        function _init() {
            $http.get(`https://pixabay.com/api/?key=6736890-c368a484891d1c146b10322df&q=yellow+flowers&image_type=photo&pretty=true`)
                .then(response => {
                    console.log(response);
                    return vm.images = response.data.hits;
                })
                .catch(error => {
                    console.log(error);
                })
        };
    };
})();

    
