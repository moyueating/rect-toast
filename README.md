# rect-toast
A React Toast Component, [online demo](https://moyueating.github.io/rect-toast/)

# Install

```js
npm install rect-toast
```

# Usage 

```js
import Toast from 'rect-toast'
import 'rect-toast/dist/index.css'

Toast.info('hello world', 1000, () => {})
```

# Notice
In your webpack config, you need to set css rule without `Rule.exclude`. Just like this:  

```js
{
  test: /\.css$/,
  use: ['style-loader', 'css-loader'],  
}
```


# LICENSE
MIT
