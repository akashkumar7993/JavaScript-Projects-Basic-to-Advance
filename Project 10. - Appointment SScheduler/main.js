document.getElementById('appmntInputForm').addEventListener('submit', saveAppointments);

function saveAppointments(e){
    e.preventDefault();
    
    const appmntSubject = document.getElementById('appmntSubject').value;
    const toMeetWith = document.getElementById('toMeetWith').value;
    const venueOfAppmnt = document.getElementById('venueOfAppmnt').value;
    const dateOfAppmnt = document.getElementById('dateOfAppmnt').value;
    const timeOfAppmnt = document.getElementById('timeOfAppmnt').value;
    const appmntImportance = document.getElementById('appmntImportance').value;
    const appmntID = chance.hash({length: 9});
    const appmntStatus = 'Open'
    
    const appmnt = {
        id: appmntID,
        subject: appmntSubject,
        meetWith: toMeetWith,
        venue: venueOfAppmnt,
        date: dateOfAppmnt,
        time: timeOfAppmnt,
        importance: appmntImportance,
        status: appmntStatus
    }
    
    if(localStorage.getItem('appmnts') == null){
        const appmnts = [];
        appmnts.push(appmnt);
        localStorage.setItem('appmnts', JSON.stringify(appmnts));
    }else{
        const appmnts = JSON.parse(localStorage.getItem('appmnts'));
        appmnts.push(appmnt);
        localStorage.setItem('appmnts', JSON.stringify(appmnts));
    }
    
    document.getElementById('appmntInputForm').reset();
    
    fetchAppointments();
}

function setStatusCancelled(id){
    const appmnts = JSON.parse(localStorage.getItem('appmnts'));
    
    for(var i = 0; i < appmnts.length; i++){
        if(appmnts[i].id == id){
            appmnts[i].status = 'Cancelled';
        }
    }
    localStorage.setItem('appmnts', JSON.stringify(appmnts));
    
    fetchAppointments();
}

function deleteAppmnt(id){
    const appmnts = JSON.parse(localStorage.getItem('appmnts'));
    
    for(var i = 0; i < appmnts.length; i++){
        if(appmnts[i].id == id){
            appmnts.splice(i, 1);
        }
    }
    localStorage.setItem('appmnts', JSON.stringify(appmnts));
    
    fetchAppointments();
}


function fetchAppointments(){
    const appmnts = JSON.parse(localStorage.getItem('appmnts'));
    const appmntsList = document.getElementById('appmntsList');
    
    appmntsList.innerHTML = '';
    
    for(var i = 0; i < appmnts.length; i++){
        var id = appmnts[i].id;
        var subject = appmnts[i].subject;
        var meetWith = appmnts[i].meetWith;
        var venue = appmnts[i].venue;
        var date = appmnts[i].date;
        var time = appmnts[i].time;
        var importance = appmnts[i].importance;
        var status = appmnts[i].status;
        
        appmntsList.innerHTML += '<div class="card card-body bg-light">' +
                                 '<h6>Appointment ID: ' + id + '</h6>' +
                                 '<p><span class="badge badge-primary">' + status+'</span></p>' + 
                                 '<h6>Subject: ' + subject + '</h6>' + 
                                 '<p><span class="fa fa-clock"></span> Time: '+time+'</p>' +
                                 '<p><span class="fa fa-calendar"></span> Date: '+date+'</p>'+
                                 '<p><span class="fa fa-user"></span> With: '+meetWith+'</p>'+ 
                                 '<p><span class="fa fa-home"></span> Venue: '+venue+'</p><div class="btn-group">'+ 
                                 '<button href="#" style="width:100px;" onclick="setStatusCancelled(\''+id+'\')" class="btn btn-warning btn-side">Cancel</button></div><div class="btn-group">'+
                                 '<button style="width:100px;" href="#" onclick="deleteAppmnt(\''+id+'\')" class="btn btn-danger btn-side">Delete</button></div>'+
                                 '</div><br />';
    }
}