const assert = require('assert')


assert.equal(-1, [1, 2, 3].indexOf(5),"成功了")

describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      assert.equal(-1, [1, 2, 3].indexOf(5),"成功了")
    })
  })
})


describe('assert', function () {
  it('a和b应当深度相等', function () {
    var a = {
      c: {
        e: 1
      }
    }
    var b = {
      c: {
        e: 1
      }
    }
    // 修改下面代码使得满足测试描述
    assert.deepEqual(a, b)
    
  })
 
  it('可以捕获并验证函数fn的错误', function () {
    function fn(data) {
    }
  
    // 修改下面代码使得满足测试描述
      const { message } = new assert.AssertionError({
        actual: 1,
        expected: 2,
        operator: 'test'
      });
      try {
        fn()
      } catch (err) {
        assert(err instanceof assert.AssertionError)
        assert.strictEqual(err.message, message)
      }
  })
})