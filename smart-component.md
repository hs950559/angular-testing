# Smart Component Testing

## Setup

```javascript
describe('HomeComponent', () => {

  let fixture: ComponentFixture<HomeComponent>;
  let component: HomeComponent;
let el: DebugElement;
  const coursesServiceSpy = jasmine.createSpyObj('CoursesService', ['findAllCourses']);

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        CoursesModule,
        NoopAnimationsModule
      ],
      providers: [
        {
          provide: CoursesService,
          useValue: coursesServiceSpy
        }
      ]
    });
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    el = fixture.debugElement;
  });

  it('should create the component', () => {

    expect(component).toBeTruthy();

  });
});
```