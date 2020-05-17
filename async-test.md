# Async Test

```javascript
it("tab clicked", fakeAsync(() => {
	setTimeout(() => {

	});
	flush();

	expect(cardTitles.length).toBeGreaterThan(0, 'Could not find card titles'); 	
}));
```