# Thing.js Blink
A Thing.js extension blinks an LED.

## Install Extension
Add `"thingjs-blink"` extension in `"extensions"`, and setup `"modules"` and `"interval"` parameters in the [`board.json`][board-json] file. The `"modules"` parameter is an LED object listed in `modules`, and the `"interval"` parameter is the blinking interval(ms).
```json
{
  "modules": {
    "led" : { "module": "Led", "pins": 44 }
  },
  "extensions": {
    "thingjs-blink": { "modules": "led", "interval": 500 }
  }
}
```

## Run
Go to the directory stored the [`board.json`][board-json] file, and run the below command.
```sh
path/to/thingjs
```

[board-json]: https://github.com/evanxd/thingjs-blink/blob/master/board.json
