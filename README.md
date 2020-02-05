## React UI kit

### Usage
```typescript jsx
import 'ui-kit/lib/ui-kit.css'; //Styles import
import { Badge } from 'ui-kit'; //Component import 

const App = () => (
    <Badge text="Badge"/>
);
```


### Browsers support
`browserslist` in `package.json`.

### Development
#### Doc ([styleguidist](https://github.com/styleguidist/react-styleguidist))
```shell script
npm run styleguidist:server
```
#### Build ([rollup](https://github.com/rollup/rollup))
```shell script
npm run rollup:build
```
#### Run tests ([jest](https://jestjs.io/))
```shell script
npm test
```