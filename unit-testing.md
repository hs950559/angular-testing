# Unit Testing

- Esier to write
- super fast
- Don't give much confidence

```javascript
export class MyComponent {
	votes: number = 0;

	upVote() {
		this.vote++;
	}
}
```

```javascript
componet.upVote();
expect(this.votes).toEqual(1) // 1

componet.upVote();
expect(this.votes).toEqual(2) // 2
```

```html
<p> {{ votes | json }} </p>

<button (click)="upVote()">Up Vote</button>
```

what if this...


```html
<button>Up Vote</button>
```

## Integration Test

Functionality broken, but unit passed so 

```
Component + template = Integtation Test ( Angular )
```

- testing template
- navigation
- directives


## E2E

Test entire application as whole, may be with real http servers

- More confidence
- Very slow
- Very fragile

Don't waste much time on it, focus more on Unit testing






