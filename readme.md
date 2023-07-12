# tsx-repro

https://github.com/esbuild-kit/tsx/issues/251

When using `tsx` with multiple `tsconfig.json` files and the `paths` compiler option set, an `ERR_MODULE_NOT_FOUND` error is raised:

<details>
<summary>Error message</summary>

```
Error [ERR_MODULE_NOT_FOUND]: Cannot find package '~' imported from tsx-repro/test/test.ts
    at __node_internal_captureLargerStackTrace (node:internal/errors:490:5)
    at new NodeError (node:internal/errors:399:5)
    at packageResolve (node:internal/modules/esm/resolve:889:9)
    at moduleResolve (node:internal/modules/esm/resolve:938:20)
    at defaultResolve (node:internal/modules/esm/resolve:1153:11)
    at nextResolve (node:internal/modules/esm/loader:163:28)
    at u (file://tsx-repro/node_modules/@esbuild-kit/esm-loader/dist/index.js:1:2406)
    at nextResolve (node:internal/modules/esm/loader:163:28)
    at ESMLoader.resolve (node:internal/modules/esm/loader:838:30)
    at ESMLoader.getModuleJob (node:internal/modules/esm/loader:424:18)
    at ModuleWrap.<anonymous> (node:internal/modules/esm/module_job:77:40)
    at link (node:internal/modules/esm/module_job:76:36)
    at process.processTicksAndRejections (node:internal/process/task_queues:95:5) {
		code: 'ERR_MODULE_NOT_FOUND'
	}
```

</details>

The test script can be run via `npm test`.
