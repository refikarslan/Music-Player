class Music{
    constructor(title, singer, img, file){
        this.title = title;
        this.singer = singer;
        this.img = img;
        this.file = file;  
    }

    getName(){
        return this.title + "-" + this.singer;
    }

}

const musicList = [
    new Music("Boşver", "Nilüfer", "1.jpg", "1.mp3"),
    new Music("Bu da Geçer mi Sevgilim", "Yalın", "2.jpeg", "2.mp3"),
    new Music("Ayrılmam", "Serdar Ortaç", "3.jpeg", "3.mp3"),

];