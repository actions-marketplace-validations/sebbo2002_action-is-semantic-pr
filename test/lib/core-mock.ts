'use strict';

import assert from 'assert';
import { core, getBuffer } from '../../src/lib/core-mock';

describe('CoreMock', function () {
    it('should support basic methods to work with', function () {
        const error = new Error('Error');

        core.info('Info');
        core.error(error);
        core.startGroup('Start group');
        core.warning('Warning');
        core.endGroup();
        core.notice('Notice');

        assert.deepStrictEqual(getBuffer(), [
            ['info', 'Info'],
            ['error', error],
            ['group', 'Start group', [
                ['warning', 'Warning']
            ]],
            ['notice', 'Notice']
        ]);
    });
});
