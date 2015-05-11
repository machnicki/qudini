'use strict';

describe('qudini controllers', function() {

    beforeEach(module('qudini.QueueApp'));

    describe('QueueCtrl', function() {

        it('beginning list of customers should be empty', inject(function($controller) {
            var scope = {},
                ctrl = $controller('QueueCtrl', {$scope: scope});

            expect(scope.customers.length + scope.customersServed.length).toBe(0);
        }));
    });

});