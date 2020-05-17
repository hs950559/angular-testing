# Micro Task

Promise -> setTimeout // Micro Task queue -> Task Queue

```javascript
it('Asynchronous test example - plain Promise', () => {

    let test = false;

    console.log('Creating promise');

    setTimeout(() => {
    	console.log('one');
    });

    setTimeout(() => {
    	console.log('two');
    });

    Promise.resolve().then(() => {

        console.log('Promise first then() evaluated successfully');

        return Promise.resolve();
    })
    .then(() => {

        console.log('Promise second then() evaluated successfully');

        test = true;

    });


    console.log('Running test assertions');

    expect(test).toBeTruthy();

});

// output
Creating promise
Running test assertions
Promise first then() evaluated successfully
Promise second then() evaluated successfully
one
two
```

## Using async over fakeAsync

use `async` when you want to make actual http call, else always stick with `fakseAsync`

```javascript
it("should display advanced courses when tab clicked - async", async(() => {

    coursesService.findAllCourses.and.returnValue(of(setupCourses()));

    fixture.detectChanges();

    const tabs = el.queryAll(By.css(".mat-tab-label"));

    click(tabs[1]);

    fixture.detectChanges();

    fixture.whenStable().then(() => {

        console.log("called whenStable() ");

        const cardTitles = el.queryAll(By.css('.mat-tab-body-active .mat-card-title'));

        expect(cardTitles.length).toBeGreaterThan(0,"Could not find card titles");

        expect(cardTitles[0].nativeElement.textContent).toContain("Angular Security Course");

    });

}));
```
