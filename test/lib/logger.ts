import * as assert from 'assert';
import { logger } from '../../src/lib/logger';

describe('lib/logger', () => {
  it('正常系', () => {
    assert.ok(logger);
    assert.ok(logger.debug);
    assert.ok(logger.info);
    assert.ok(logger.warn);
    assert.ok(logger.error);
  });
});
