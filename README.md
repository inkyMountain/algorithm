# 算法练习项目

这是一个用于练习常见排序和数据结构的项目。

# 怎么使用
举例：在`src/sorts/merge.ts`中填入归并排序的逻辑，然后在`merge.test.ts`中编写测试用例。最后运行:
```sh
npm test
```
项目使用`jest`作为单元测试库。上述命令运行完成后，会在控制台输出单元测试结果。就像这样：
```sh
$ jest
 PASS  src/sorts/merge/merge.test.ts
  ✓ merge sort (2 ms)

Test Suites: 1 passed, 1 total
Tests:       1 passed, 1 total
Snapshots:   0 total
Time:        1.009 s
Ran all test suites.
✨  Done in 1.62s.
```
