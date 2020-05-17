# Shallow pipe test

Test pipe with component template

## Component Setup

```javascript
@Component({
  template: `Name: {{ name | capitalize }}`,
})
class TestComponent {
  name = 'hemant Kumar singh';
}
```

## Sample

```javascript
  describe('Shallow Capitalize test', () => {
    @Component({
      template: `Name: {{ name | capitalize }}`,
    })
    class TestComponent {
      name = 'hemant Kumar singh';
    }

    let component: TestComponent;
    let fixture: ComponentFixture<TestComponent>;
    let el: HTMLElement;

    beforeEach(() => {
      TestBed.configureTestingModule({
        declarations: [CapitalizePipe, TestComponent],
      });
      fixture = TestBed.createComponent(TestComponent);
      component = fixture.componentInstance;
      el = fixture.nativeElement;
      fixture.detectChanges();
    });

    it('component template should have capitalized 1st char of each word', () => {
      expect(el.textContent).toContain('Name: Hemant Kumar Singh');

      component.name = 'mr. bean';
      fixture.detectChanges();
      expect(el.textContent).toContain('Name: Mr. Bean');
    });

    // it('should use the default argument when not supplied', () => {
    //   expect(el.textContent).toContain('Size: 117.74MB');
    // });

    // it('should override the default argument when supplied', () => {
    //   component.arg1 = 'soammcase';
    //   fixture.detectChanges();
    //   expect(el.textContent).toContain('Size: 117.74myExt');
    // });
  });
```