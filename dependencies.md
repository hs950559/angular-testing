# Service Dependency

```
// Get service injected at root level
TestBed.get(MyService)

// Get service injected at component level
fixture.debugElement.injector.get(MyService)
```