
# index

  simple indexing of strings for basic fuzzy search

## Example

```js
var index = Index(['apple', 'orange', 'pear']);

index.search('ang') // true
index.search('pp') // true
index.search('ppp') // false
```

## Installation

    $ component install matthewmueller/index

## API

### Index([words])

Initialize an `Index`, with an optional `words`.

### index.add(words)

Add a string or array of `words` to the index.

### index.search(str)

Search for a string within the index. Returns `true` if the string is present, otherwise `false`.

## License

  MIT
