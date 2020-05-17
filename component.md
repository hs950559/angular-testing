# Component Testing

## Setup

Angular cli does it for you

```javascript
beforeEach(() => {
  fixture = TestBed.createComponent(CoursesCardListComponent);
  component = fixture.componentInstance;
  el = fixture.debugElement;
  fixture.detectChanges();
});
```

# Testing Presentational Component

## Test if component created

```javascript
it("should create the component", () => {
  expect(component).toBeTruthy();
});
```

## Test items displayed on screen

```javascript
it("should display the course list", () => {
  component.courses = setupCourses();
  const cards = el.queryAll(By.css(".course-card"));
  expect(cards).toBeTruthy();
  expect(cards.length).toBe(12);
});
```

## Test 1st card on screen

```javascript
it("should display the first course", () => {
  component.courses = setupCourses();
  fixture.detectChanges();
  const course = component.courses[0];
  const card = el.query(By.css(".course-card:first-child")),
    title = card.query(By.css("mat-card-title")),
    image = card.query(By.css("img"));

  expect(card).toBeTruthy();
  expect(title.nativeElement.textContent).toEqual(course.titles.description);
  expect(image.nativeElement.src).toEqual(course.iconUrl);
});
```

## Test componet making http calls

```javascript
// sample 1
it("should get books from server", () => {
  spyOn(bookService, "getAll").and.returnValue(of(BOOKS));
  component.ngOnInit();
  expect(component.books).toBeTruthy();
  expect(component.books.length).toEqual(18);
});

// spy with argument
it("should remove one book from server", () => {
  component.books = BOOKS;
  const spy = spyOn(bookService, "delete").and.returnValue(of([]));
  component.removeBook(BOOKS[0]);
  expect(spy).toHaveBeenCalledWith(BOOKS[0]._id);
});
```
