let important=false;
let formVisible=false;
function toggleForm(){
    console.log("Show/Hide Form")
    // hide #section-form
    if(formVisible){
        $("#section-form").hide();
        formVisible=true;
    }
    else{
        $("#section-form").show();
        formVisible=false;
    }
}

function saveTask(){
    console.log("Task Saved!");
    // read values from the form
    let title = $("#txtTitle").val();
    let description = $("#txtDescription").val();
    let dueDate=$("#txtDate").val();
    let location=$("#txtLocation").val();
    let invitee=$("#txtInvitee").val();

    // create a Task object
    let task=new Task(important,title,description,dueDate,location,invitee);
    //console log the object
    console.log(task);
    displayTask(task);
    console.log(title, description, dueDate, location, invitee);
    clearForm();
   
}

function displayTask(task){
    console.log(task.title);
    let syntax= `
    <div class="task">
        <i id="iImportant" class="far fa-star"></i>
        <div class="description">
            <h5>${task.title}</h5>
            <p>${task.description}</p>
        </div>

        <div class="extra-info">
            <label class="hint">at</label>
            <label>${task.location}</label>
        </div>
        <div class="extra-info">
            <label class="hint">by</label>
            <label>${task.dueDate}</label>
        </div>

        <div class="extra-info">
            <label class="hint">with</label>
            <label>${task.invitee}</label>
        </div>

        <button class="btn btn-sm btn-dark bg-dark bg-gradient">Done</button>
    </div>`;
    $("#pendingList").append(syntax)
}



function toggleImportant(){
    if(!important){
        $("#iImportant").removeClass("far").addClass("fas");
        important=true;
    }
    else{
        $("#iImportant").removeClass("fas").addClass("far");
        important=false;
    }
    
}
function clearForm(){
    $("#txtTitle").val("");
    $("#txtDescription").val("");
    $("#txtDate").val("");
    $("#txtLocation").val("");
    $("#txtInvitee").val("");
}
function init(){
    console.log("Task Manager");

    // load data
    // hook events
    $("#iImportant").click( toggleImportant);
    $("#btnSave").click(saveTask);
    $("#btnToggleForm").click(toggleForm);
    $("#section-form").hide();
}


window.onload=init;



