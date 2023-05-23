function load(){
    a=fetch("https://www.coursehubiitg.in/api/codingweek/contributions");
    b=a.then(data => data.json());
    c=b.then(_dat => {return _dat;});
    return c;
}

function sort(_data){
    for (i=0;i<_data.length;i++){
        for (j=0;j<_data.length-1;j++){
            if(_data[j]["points"] < _data[j+1]["points"]){
                temp=_data[j];
                _data[j]=_data[j+1];
                _data[j+1]=temp;
            }
        }
    }
    return _data;
}

function write(data){
    ele=document.getElementById("bottom");
    ele.innerHTML=''
    for (i=3;i<data.length;i++){
        ele.innerHTML+='<table class="btable"><tr><td width=10%><p class="sno">'+String(i+1)+'</p></td><td width=10%><div class="circle" style="background-image: url(\''+data[i]["avatar"]+'\');background-position: center;"></div></td><td width=40%><p class="name" style="padding-left: 1%;">'+data[i]['name']+'</p></td><td width=40%><p class="name" style="text-align: right;padding-right: 20%;">'+data[i]['points']+'</p></td></table><div class="empty"></div>';
    }
    no1=document.getElementById("1");
    no1.innerHTML='<div class="dot" id="1">1</div><div style="height: 2px;"></div><div class="bigcircle" style="background-image: url(\''+data[0]["avatar"]+'\');background-position: center;" ></div><div style="height: 8px;"></div><div class="namebox">'  +data[0]['name']+ ' . '+data[0]['points']+'</div>';
    no2=document.getElementById("2");
    no2.innerHTML='<div class="dot">2</div><div style="height: 2px;"></div><div class="smallcircle" style="background-image: url(\''+data[1]["avatar"]+'\');background-position: center;"></div><div style="height: 6px;"></div><div class="namebox">' +data[1]['name']+ ' . '+data[1]['points']+ '</div>'
    no3=document.getElementById("3");
    no3.innerHTML='<div class="dot">3</div><div style="height: 2px;"></div><div class="smallcircle" style="background-image: url(\''+data[2]["avatar"]+'\');background-position: center;"></div><div style="height: 6px;"></div><div class="namebox">' +data[2]['name']+ ' . '+data[2]['points']+ '</div>'
}
load().then(dat => {dar = sort(dat);return dar;}).then(Data=>write(Data));
