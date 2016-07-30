# thingjs-blink
A Thing.js extension blinks an LED.

## How to Use
```json
{
  "modules": {
    "led" : { "module": "Led", "pins": 44 }
  },
  "extensions": {
    "thingjs-blink": { "led": "led", interval": 500 }
  }
}
```
