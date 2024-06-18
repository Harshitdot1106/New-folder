function Swtch(val){
    var answer="";
    switch(val){
        case 1:
            answer="aplha";
            break;
        case 2:
        answer ="beta";
        break;
        case 3:
        answer ="gamma";
        break;
        case 4:
        answer ="delta";
        break;
        default:
            answer="an"
    }
    return answer;

    }
console.log(Swtch(1));