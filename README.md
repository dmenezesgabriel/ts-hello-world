# Hello World Typescript

## Install

- **Install compiler**:

```sh
npm i -g typescript
```

Check installation:

```sh
tsc -v
```

## Development

- **Init TS**:
  At the root of project type `tsc --init`, a tsconfig.json will be generated.

Uncomment configurations:

- strict: true
- noEmitOnError: true
- noImplicitAny: true (if strict false)
- noUnusedLocals: true, to warn about unused declarations
- noUnusedParameters: true, to warn about unused function parameters
- noImplicitReturns: true, won't let expressions without return

## Serving files

- **http-server**:

```sh
npm i -g http-server
```

```sh
npx http-server
```
