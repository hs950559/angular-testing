# Angular Testing

Testing helps you to catch bugs before you release your software





## Sample Test

- setup / act / assert

```javascript
import { CalculatorService } from './calculator.service';
import { LoggerService } from './logger.service';

describe('CalculatorService', () => {
  it('should add 2 numbers', () => {
    // Step 1 - setup
    const calculator = new CalculatorService(new LoggerService());

    // Step 2 - Act
    const result = calculator.add(2, 4);

    // Step 3 - Assert
    expect(result).toEqual(6);
  });

  it('should subtract 2 numbers', () => {
    // Step 1 - setup
    const calculator = new CalculatorService(new LoggerService());

    // Step 2 - Act
    const result = calculator.subtract(10, 5);

    // Step 3 - Assert
    expect(result).toEqual(5);
  });
});
```

## Basic Idea

Add All dependencies as fake dependency as you want to test only service that's unit test, so service should fail because of it's own test only.

- Logger should be faked
- Calculator service only you want to test


## Spying dependent method calls

Still we are using actual  service dependency 

```javascript
it('should add 2 numbers', () => {
	// Step 1 - setup
	const logger = new LoggerService();
	const calculator = new CalculatorService(logger);

	spyOn(logger, 'log');

	// Step 2 - Act
	const result = calculator.add(2, 4);

	// Step 3 - Assert
	expect(result).toEqual(6);
	expect(logger.log).toHaveBeenCalledTimes(1);
});
```

## Completely faking dependent services

You can see no `LoggerService` in import.

```javascript
import { CalculatorService } from './calculator.service';

describe('CalculatorService', () => {
  it('should add 2 numbers', () => {
    // Step 1 - setup
    const logger = jasmine.createSpyObj('LoggerService', ['log']);
    const calculator = new CalculatorService(logger);

    // Step 2 - Act
    const result = calculator.add(2, 4);

    // Step 3 - Assert
    expect(result).toEqual(6);
    expect(logger.log).toHaveBeenCalledTimes(1);
  });

  it('should subtract 2 numbers', () => {
    pending();
  });
});
```

## Use beforeEach to reuse setup logic

```javascript
describe('CalculatorService', () => {
  let logger: any;
  let calculator: any;

  beforeEach(() => {
    logger = jasmine.createSpyObj('LoggerService', ['log']);
    calculator = new CalculatorService(logger);
  });

  it('should add 2 numbers', () => {
    // Step 2 - Act
    const result = calculator.add(2, 4);

    // Step 3 - Assert
    expect(result).toEqual(6);
    expect(logger.log).toHaveBeenCalledTimes(1);
  });
 });
````

## Testing angular setup

```javascript
import { TestBed } from '@angular/core/testing';
import { CalculatorService } from './calculator.service';
import { LoggerService } from './logger.service';

describe('CalculatorService', () => {
  let logger: any;
  let calculator: any;

  beforeEach(() => {
    logger = jasmine.createSpyObj('LoggerService', ['log']);

    TestBed.configureTestingModule({
      providers: [
        CalculatorService,
        {
          provide: LoggerService,
          useValue: logger
        }
      ]
    });

    calculator = TestBed.get(CalculatorService);
  });

});
````
























