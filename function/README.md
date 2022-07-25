
# Function

자바스크립트에서의 함수는 객체의 일종이다.

__함수 객체__ 는 서브루틴으로 수행될 수 있는 객체를 말한다. 동작을 실행하는 __실행 코드__ 와 __상태__ 를 포함하고 있으며 객체 지향의 생성자 역할도 할 수 있다. 그리고 기본적으로 자바스크립트의 일반적인 객체와 동일한 동작을 할 수 있다. 

즉, ECMAscript에서의 함수는 일반 객체의 확장이며, 함수로 동작하기 위한 추가적인 기능을 가지고 있다.

함수 객체는 다음과 같은 데이터들을 내부에 추가로 저장한다.

1. 클로저로 묶이는 렉시컬 환경 => ```[[Environment]]```
2. 함수 코드 => ```[[ECMAScriptCode]]```
3. 함수 종류 => ```[[FunctionKind]]``` : "normal", "classConstructor", "generator", "async"
4. 생성자 종류 => ```[[ConstructorKind]]``` : "base", "derived"
5. `this` 참조 형태 => `[[thisMode]]`
6. strict mode 여부 => `[[Strict]]`
7. super 참조 => `[[HomeObject]]`

그리고 실제로 함수를 실행시켜주는 `[[Call]]`, `[[Constructor]]` 내부 메서드가 있다. 단순하게 함수를 호출하면 객체 내부의 `[[Call]]`이 호출되고, `new`또는 `super`연산자와 함께 호출하면 `[[Constructor]]`가 호출된다.

`[[Call]`이 구현된 객체를 callable이라 부르고, `[[Constructor]]`가 구현된 객체를 constructor라고 부르는데, 자바스크립트의 함수는 callable이면서 constructor일 수도 아닐 수도 있다. 대표적으로 화살표 함수는 callable이면서 non-constructor이다.

> 함수 생성

자바스크립트는 함수를 생성할 때 기본적으로 6가지의 정보를 사용한다. __함수 생성 방식__(Normal, Arrow, Method), __함수의 매개변수 리스트__, __함수 코드__, __스코프__, __strict mode__, __객체의 프로토 타입__

``` javascript

function foo() { // bar 함수의 스코프는 foo의 Lexical Environment

  function bar() {
    console.log("bar") // 함수의 몸체
  }

}

```


> 함수 호출

ECMAScript에서 함수 호출을 `Call(F, V, [, argumentsList])`로 표현한다. Call은 함수 객체의 내부 `[[Call]]`메소드를 수행하는 동작으로, F(함수), V(`[[Call]]`의 this 값), argumentsList 함수 호출시 전달한 매개변수

1. argumentsList가 전달되지 않았으면 빈 리스트로 지정한다.
2. F가 Callable이 아니면 에러를 발생시킨다.
3. F.[[Call]](V, argumentsList)의 수행 결과를 반환한다.
4. F.[[FunctionKine]]가 "classConstructor"라면 에러를 발생시킴
5. callerContext는 현재 실행중인 실행 컨텍스트
6. calleeContext에 새로운 [실행컨텍스트](#ec)를 생성하여 지정.
7. this 바인딩
8. 함수 코드를 수행하고 result에 기 결과를 저장함.
9. calleeContext를 실행 컨텍스트 스택에서 제거하고, callerContext를 다시 실행중인 실행컨텍스트로 지정
10. result 반환

> Lexical Environment

Execution Context에는 __LeexicalEnvironment__ 와 __VariableEnvironment__가 있다. 두 컴포넌트는 Lexical Environment에 대한 참조이며 처음에는 같은 Lexical Environment를 참조한다.  

``` javascript

function foo() {
  const a = 1
  const b = 2
  const c = 3
  function bar() {
    const barA = 5
    console.log("bar")
  }
}

foo()

```
위 코드의 lexicalEnvironment를 나태내면
```

foo {
  environmentRecord: {
    a:1,
    b:2,
    c:3,
    bar: <Function>
  }, 
  outer: Global
}

bar {
  environmentRecord: {
    barA:5
  },
  outer: foo
}

```

lexicalEnvironment는 선언된 시점의 환경을 생성한다. 즉, 함수가 실행되었을때의 변수 참조는 선언된 시점에 결정된다. 

<div id="ec" />

> 실행 컨텍스트

Execution Context는 스코프와 기본 객체들을 가지고 있는 Realm등 코드 수행 환경에 대한 여러 정보를 가지고 있는 것. 실행 컨텍스트는 스택에 의해 관리 된다. 스택이 생성될때 global execution Context가 먼저 담기고, 함수가 실행될때마다 해당 함수의 execution context가 쌓인다.

EC에는 LexicalEnvironment와 VariableEnvironment라는 컴포넌트가 존재한다. 간단히 변수의 참조를 기록하는 환경이라고 생각하면 된다. ㅇㅇ
