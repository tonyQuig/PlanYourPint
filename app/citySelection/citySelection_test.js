'use strict';

describe('City Selection module', function () {

    beforeEach(module('pyp.citySelection', ['ngRoute', 'firebase', 'ngMap']));

    describe('City selection controller', function () {

        it('should be defined', inject(function () {
            //spec body
            var test = "test";
            expect(test).toBeDefined();
        }));

    });
});