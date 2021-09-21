                        module.exports = { 
                            //param A : array of integers
                            //param B : array of integers
                            //return an integer
                            canCompleteCircuit : function(A, B){

                            let tank = 0;
                            let startTank = 0;
                            let s = 0;
                            let total = 0;

                            do {
                                startTank = s;
                                s++;

                            } while (A[s] - B[s] < 0)
                            for (let i = startTank; i < A.length; i++){
                                tank = tank + A[i] - B[i];

                                if (tank < 0) {
                                    total = tank;
                                } else { 
                                    if (i === A.length) {
                                    for (let g = 0; g < startTank; g++){
                                        tank = tank + A[g] - B[g];

                                        if (tank < 0) {
                                            total = tank;
                                        }
                                        total = tank;
                                    }
                                }
                            }
                            }

                            if (total >= 0){
                                return A[startTank];
                            } else {
                                return -1
                            }
                                


                    }

                        };




                        
