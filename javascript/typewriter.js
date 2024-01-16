
    function sleep (ms){
        return new Promise((resolve) => setTimeout(resolve, ms));
    }

    const phrases = ["software engineer.", "student."];
    const element = document.getElementById("typewriter");

    let sleepTime = 100;
    let curPhraseIndex = 0;

    const writeLoop = async () => {


        while(true){
            await sleep(500);
            
            let curWord = phrases[curPhraseIndex];
            for(let i = 0; i < curWord.length; i++){
                element.innerText = curWord.substring(0, i + 1);
                await sleep(sleepTime);
            }
            await sleep(sleepTime * 20);

            for(let i = curWord.length; i > 0; i--){
                element.innerText = curWord.substring(0, i - 1);
                await sleep(sleepTime);
            }

            await sleep(sleepTime * 5);

            if(curPhraseIndex === phrases.length -1){
                curPhraseIndex = 0;
            }else{
                curPhraseIndex++;
            }
            
        }   
    };

    writeLoop();

