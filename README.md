
## Idea principal ( Esquema )

Formato Test Descriptivo, que me ayuda a Tipificar los Test de forma "logica"
( como una maqueta o un template de como iniciar a escribir los tests )

REF: https://martinfowler.com/bliki/GivenWhenThen.html

```
Feature: User trades stocks
  Scenario: User requests a sell before close of trading
    Given I have 100 shares of MSFT stock
       And I have 150 shares of APPL stock
       And the time is before close of trading

    When I ask to sell 20 shares of MSFT stock
     
     Then I should have 80 shares of MSFT stock
      And I should have 150 shares of APPL stock
      And a sell order for 20 shares of MSFT stock should have been executed
```

## Source Sample

```javascript
// File: modules/DummyBusiness.test.js

const assert = require('chai').assert;

describe('Feature: DummyBusiness.js Testing', () => {
    describe('Scenario: Sending Data', () => {
        it('Given Empty Data, When sending Empty, Then sended OK!');
        it('Given Data, When sending Data, Then sended OK!');
    });
});
```

## Test data 

```
Scenario Outline: All the taxi ranks within a given distance should be shown
  Given Joe is at <station>
  When he looks for the closest taxi rank within <distance> meters
  Then <number-of-taxis> taxi ranks should be found
  And all of the taxi ranks should be no more than <distance> meters away
  Examples:
    | station               | distance | number-of-taxis |
    | London Bridge Station | 500      | 5               |
    | London Bridge Station | 1000     | 18              |
    | Canary Wharf          | 20       | 0               |
```

## Test Microservices Automation

REF: https://www.infoq.com/articles/microservices-bdd-interface-oriented/