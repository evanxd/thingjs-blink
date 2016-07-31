# thingjs-blink
A Thing.js extension blinks an LED.

## Run
```sh
path/to/thingjs board.json
```

## Install the extension in board.json
Add `"thingjs-blink"` extension in `"extensions"`, and setup `"modules"` and `"interval"` parameters. The `"modules"` parameter is an LED object listed in `modules`, and the `"interval"` is the blinking interval(ms).
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
