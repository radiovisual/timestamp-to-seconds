# timestamp-to-seconds [![Build Status](https://travis-ci.org/radiovisual/timestamp-to-seconds.svg?branch=master)](https://travis-ci.org/radiovisual/timestamp-to-seconds)

> Convert an HH:MM:SS timestamp to seconds.


## Install

```
$ npm install --save timestamp-to-seconds
```


## Usage

```js
const timestampToSeconds = require('timestamp-to-seconds');

timestampToSeconds('01:02:03');
//=> 3725
```


## API

### timestampToSeconds(timestamp)

Returns the timestamps total number of seconds.

#### timestamp

Type: `string`

The timestamp in the format of `HH:MM:SS` you want to convert to seconds.


## License

MIT © [Michael Wuergler](http://numetriclabs.com)
