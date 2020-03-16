var allpars = [],
    alldays = [];
function paratimestart(numberpara)
{
	var para = ["8:30" , "10:15" , "12:10" , "13:55" , "15:35" , "17:15"]
    return para[numberpara - 1];
}
function paratimestop(numberpara)
{
	var para = ["10:00" , "11:45" , "13:40" , "15:25" , "17:05" , "18:45"]
    return para[numberpara - 1];
}
function weekinfo(week)
{
    if (week % 2 == 0) { return 1;}
    else return 0;
}
function dateconverting(getday)
{
	if (getday == 0) return 6; else return getday--;
}
function createpara(names,auditorium,teacher,starttime,stoptime)
{
	let paradiv       = document.createElement('div'),
	    blockdivt     = document.createElement('div'),
	    startdiv      = document.createElement('div'),
	    stopdiv       = document.createElement('div'),
	    blockdivp     = document.createElement('div'),
	    namediv       = document.createElement('div'),
	    teacherdiv    = document.createElement('div'),
	    blockaudidiv  = document.createElement('div'),
	    audidiv       = document.createElement('div');
	    
	    paradiv.className = "para";
	    paradiv.style.opacity = 0;
	    Chat.appendChild(paradiv);

	    blockdivt.className = "blocktime";
		paradiv.appendChild(blockdivt);

		startdiv.className = "starttime";
		startdiv.innerHTML = starttime;
		blockdivt.appendChild(startdiv);

		stopdiv.className = "stoptime";
		stopdiv.innerHTML = stoptime;
		blockdivt.appendChild(stopdiv);

		blockdivp.className = "blocktime";
		paradiv.appendChild(blockdivp);

		namediv.className = "name";
		namediv.innerHTML = names;
		blockdivp.appendChild(namediv);

		teacherdiv.className = "name";
		teacherdiv.innerHTML = teacher;
		blockdivp.appendChild(teacherdiv);

		blockaudidiv.className = "audiblock";
		paradiv.appendChild(blockaudidiv);

		audidiv.className = "audi";
		audidiv.innerHTML = auditorium;
		blockaudidiv.appendChild(audidiv);
        
        //rgb(65,190,56);
        //rgb(190,190,0);
        this.op = 0;
        while (op < 0.8)
        {
          setTimeout(function() {paradiv.style.opacity = op},100)   
          op = op + 0.1;
        }     
		allpars.push(paradiv);
}

function removepara()
{      
	if (allpars.length != 0)
	{
	    allpars[allpars.length - 1].parentNode.removeChild(allpars[allpars.length-1]);
	    allpars.pop();
    }
}
function removeallpara()
{
	while (allpars.length != 0)
	{
	  removepara();
    }
}
function createday(indexday, nameclass, dateconvertz, weekz)
{
	    let day = document.createElement('div');
	    day.className = nameclass;
		day.innerHTML = "<h3>" + indexday +"</h3>";
		day.thisday = dateconvertz;
		day.thisweek = weekinfo(weekz);
		day.onclick = function() {removeallpara(); createdaypara(day.thisweek, day.thisday);ChangeAnim("datepast");day.className = "datenow";};
		Days.appendChild(day);
		alldays.push(day);
}
function ChangeAnim(classnamez)
{
	this.i = 0;
	while(alldays.length > this.i)
	{
		alldays[this.i].className = classnamez;
		this.i++;
	}
}
function createweek(nowweek,week)
{
	const vsbug = week;
	this.i = 0;
	if(nowweek == week)
	{
		let DateSet = new Date(2020,1,17);
		
		this.fuckingbag = (vsbug * 7) + this.i + 10;
	    let timeinms = DateSet.setDate(this.fuckingbag);

	    while (this.i < 7)
	    {
	      let datefix = new Date(timeinms + i*24*60*60*1000);
	      
	      if(this.i == DateConvert) createday(datefix.getDate(),"datenow",i,week); 
	      if(this.i < DateConvert) createday(datefix.getDate(),"datepast",i,week); 
	      if(this.i > DateConvert) createday(datefix.getDate(),"datenext",i,week); 
	      this.i++;
	    }
	}
	else if(nowweek<week)
	{
		let DateSet = new Date(2020,1,17);
		
		this.fuckingbag = (vsbug * 7) + this.i + 10;
	    let timeinms = DateSet.setDate(this.fuckingbag);

	    while (this.i < 7)
	    {
	      let datefix = new Date(timeinms + i*24*60*60*1000);
	      
	      createday(datefix.getDate(),"datenext",i,week); 
	      this.i++;
	    }
	}
	else if(nowweek>week)
	{
		let DateSet = new Date(2020,1,17);
		
		this.fuckingbag = (vsbug * 7) + this.i + 10;
	    let timeinms = DateSet.setDate(this.fuckingbag);

	    while (this.i < 7)
	    {
	      let datefix = new Date(timeinms + i*24*60*60*1000);
	      
	      createday(datefix.getDate(),"datepast",i,week); 
	      this.i++;
	    }
	}
}
function createdaypara(weekconvert,dateconvert)
{
  this.i = 0;
     while (alllessons(weekconvert,dateconvert) > this.i)
     {
	  createpara( para(weekconvert,dateconvert,this.i) , auditorium(weekconvert,dateconvert,this.i) ,"Данные пусты", paratimestart(paratime(weekconvert,dateconvert,this.i)) , paratimestop(paratime(weekconvert,dateconvert,this.i)));
	  this.i++;
	  
    }
}
function gotoraspiz()
{
	window.location.href ='Raspiz.html';
}
//Правки 

function gotobeta()
{
	localStorage.setItem('betamode', 'on');
}
function removeday()
{
	if (alldays.length != 0)
	{
	    alldays[alldays.length - 1].parentNode.removeChild(alldays[alldays.length-1]);
	    alldays.pop();
    }
}
function removeallday()
{
	while (alldays.length != 0)
	{
	    removeday();
    }
}
function changeweek(nowweek,week)
{
	removeallday();
	createweek(nowweek,week);
}
function createmypara(names,auditorium,teacher,starttime,stoptime,clr)
{
	let paradiv       = document.createElement('div'),
	    blockdivt     = document.createElement('div'),
	    startdiv      = document.createElement('div'),
	    stopdiv       = document.createElement('div'),
	    blockdivp     = document.createElement('div'),
	    namediv       = document.createElement('div'),
	    teacherdiv    = document.createElement('div'),
	    blockaudidiv  = document.createElement('div'),
	    audidiv       = document.createElement('div');
	    
	    paradiv.className = "para";
	    //paradiv.style.opacity = 0;
	    paradiv.style.backgroundColor = "rgb("+clr+")"
	    Chat.appendChild(paradiv);

	    blockdivt.className = "blocktime";
		paradiv.appendChild(blockdivt);

		startdiv.className = "starttime";
		startdiv.innerHTML = starttime;
		blockdivt.appendChild(startdiv);

		stopdiv.className = "stoptime";
		stopdiv.innerHTML = stoptime;
		blockdivt.appendChild(stopdiv);

		blockdivp.className = "blocktime";
		paradiv.appendChild(blockdivp);

		namediv.className = "name";
		namediv.innerHTML = names;
		blockdivp.appendChild(namediv);

		teacherdiv.className = "name";
		teacherdiv.innerHTML = teacher;
		blockdivp.appendChild(teacherdiv);

		blockaudidiv.className = "audiblock";
		paradiv.appendChild(blockaudidiv);

		audidiv.className = "audi";
		audidiv.innerHTML = auditorium;
		blockaudidiv.appendChild(audidiv);
        
        //rgb(65,190,56);
        //rgb(190,190,0);
        this.op = 0;
        while (op < 0.8)
        {
          setTimeout(function(){paradiv.style.opacity = op},100)   
          op = op + 0.1;
        }     
		allpars.push(paradiv);
}
let s = '$';
function NewParaLS(weekday,name,auditorium,teacher,starttime,stoptime)
{
	localStorage.setItem(weekday,name+s+auditorium+s+teacher+s+starttime+s+stoptime);
}
function parals(weekday)
{
	let getitem = localStorage.getItem(weekday).split(s); 
	createmypara(getItem[0],getItem[1],getItem[2],getItem[3],getItem[4],"190,190,0");
}