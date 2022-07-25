
let globalVariable = "global"

function firstInnerFunction() {
  let firstInnerVariable = "first"

  function secondInnerFunction() {
    let secondInnerVariable = "second"
    console.log(globalVariable)
    console.log(firstInnerVariable)
    console.log(secondInnerVariable)
  }

  secondInnerFunction()
}

firstInnerFunction()

// firstInnerFunction이 호출되면 


// Execution context stack                  ------------
//                                         | secondInner|
//                      ------------        ------------ 
//                 =>  | firstInner |  =>  | firstInner |
//  ------------        ------------        ------------
// | global Env |      | global Env |      | global Env |
//  ------------        ------------        ------------

// 위 그림과 같이 실행 컨텍스트 스택이 생기며 각 실행중인 컨텍스트는 함수가 선언될때 생성되었던 lexicalEnvironment를 참고한다.
// 즉 secondInnerFunction
// secondInnerVarable은 secondInnerFunction의 코드 블록 안에 생성되었으므로 secondInnerVariable은 이 실행컨텍스트의 environment에 존재한다.
// firstInnerVariable은 firstInner의 Context에 선언되어있으므로 secondInner의 컨텍스트는 outer Environment인 firstInner의 컨텍스트를 참조한다.
// globalVariable은 global 컨텍스트에 존재하므로 secondInner가 global까지 거슬러 올라가 참조한다. 