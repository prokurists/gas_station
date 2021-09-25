function checkCode() {
    const testVar = {
        firstTest: {
            A: [0],
            B: [0]
        },
        secondTest: {
            A: [2, 3, 4, 4, 6],
            B: [4, 5, 6, 1, 3]
        },
        thirdTest: {
            A: [4],
            B: [5]
        },
    }

    Object.values(testVar).forEach(val => 
        console.log(val)
        );


    const para = document.createElement("p");
    const title = document.createElement("h1");
    const titleNode = document.createTextNode("H1 TEXT")
    const node = document.createTextNode("Paragraph text");
    title.appendChild(titleNode);
    para.appendChild(title);
    para.appendChild(node);



    const element = document.getElementById("main");
    element.appendChild(para);
  }


  const task = {
    canCompleteCircuit : function (A, B){
        
        let total = 0;
        let start = 0;
        let tank = 0
    
    for (let i=0; i < A.length; i++){

        total+=A[i]-B[i];
        tank = tank + A[i]-B[i];

        if (tank < 0){
            start = i + 1;
            tank = 0;
        }
    
    }
    
    if (total < 0 ){
        return -1;
    } 
    return start;
        
    }
  }
