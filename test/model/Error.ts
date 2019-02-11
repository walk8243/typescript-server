import * as assert from 'assert';
import MyError, { NotFoundError } from '../../src/model/Error';

describe('model/Error', () => {
  describe('MyError', () => {
    it('仮引数が空', () => {
      const error = new MyError();
      assert.strictEqual(error.name, 'MyError');
      assert.strictEqual(error.message, '');
      assert.strictEqual(error.status, 500);
    });
    it('第一引数のみ', () => {
      const args_1 = 'テストエラー';
      const error = new MyError(args_1);
      assert.strictEqual(error.name, 'MyError');
      assert.strictEqual(error.message, args_1);
      assert.strictEqual(error.status, 500);
    });
    it('第二引数まで指定', () => {
      const args_1 = 'テストエラー';
      const args_2 = 400;
      const error = new MyError(args_1, args_2);
      assert.strictEqual(error.name, 'MyError');
      assert.strictEqual(error.message, args_1);
      assert.strictEqual(error.status, args_2);
    });
  });
  describe('NotFoundError', () => {
    it('仮引数が空', () => {
      const error = new NotFoundError();
      assert.strictEqual(error.name, 'NotFoundError');
      assert.strictEqual(error.message, 'Not Found');
      assert.strictEqual(error.status, 404);
    });
    it('第一引数のみ', () => {
      const args_1 = 'テストエラー';
      const error = new NotFoundError(args_1);
      assert.strictEqual(error.name, 'NotFoundError');
      assert.strictEqual(error.message, args_1);
      assert.strictEqual(error.status, 404);
    });
    it('第二引数まで指定', () => {
      const args_1 = 'テストエラー';
      const args_2 = 400;
      const error = new NotFoundError(args_1, args_2);
      assert.strictEqual(error.name, 'NotFoundError');
      assert.strictEqual(error.message, args_1);
      assert.strictEqual(error.status, args_2);
    });
  });
});
