# Angular Testing

![Angular Testing](images/ng-testing.png)

```
ng test
```

```javascript
describe('test 1', ()=> {

	it('test 1', ()=> {
		pending();
	});

	it('test 2', ()=> {
		fail();
	});
});
```

## Excluding test suit/case

```javascript
xdescribe
xit
```

## Focus on specific test suit/case

```javascript
fdescribe
fit
```