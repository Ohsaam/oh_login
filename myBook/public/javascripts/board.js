class Board{
    constructor(indexNum, subjectStr, writerStr, contentStr)
    {
        this.index = indexNum;
        this.subject =subjectStr;
        this.writer = writerStr;
        this.content = contentStr;
        this.date = recordDate();
        this.views = 0;
    }

    // 객체를 생성할 떄, 총 4개의 매개변수를 받아온다.

    set subject(value){
        if(value.length === 0){
            throw new Error("제목을 입력해주세요.")
        }
        this.subject = value;
    }

    set writer(value)
    {
        if(value.length === 0){
            throw new Error("작성자를 입력해주세요.")
        }

        this.writer = value;
    }


    set content(value)
    {
        if(value.length === 0){
            throw new Error("내용을 입력해주세요.")
        }
        this.content = value;
    }

 recordDate = () => {
    const date = new Date();
    const yyyy = date.getFullYear();
    let mm = date.getMonth() + 1;
    let dd = date.getDate();

    mm = (mm > 9 ? "" : 0) + mm;
    dd = (dd > 9 ? "" : 0) + dd;

    const arr = [yyyy, mm, dd];
    return arr.join("-");
    }


}


