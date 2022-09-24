
 function check()
 {
     var c = 0;
    var q1 = document.quiz.question1.value;
    var q2 = document.quiz.question2.value;
    var q3 = document.quiz.question3.value;
    var q4 = document.quiz.question4.value;
    var q5 = document.quiz.question5.value;
    

     if(q1 == "int") 
     {
        c++
        
    }
     if(q2 == "all of the mentioned") 
     {
        c++
        
    }
     if(q3 == "Depends on the system/compiler") 
     {
        c++
        
    }
     if(q4 == "char < int < double") 
     {
        c++
        
    }
     if(q5 == "%, *, /, +, –") 
     {
        c++
        
    }

    

     

     let quizTime = time;
     if(c <=3)
     {
      
      Swal.fire({
        title: "OOPs...! ",
        html: `You are Fail. It is not so good score please try again...!<br>Your Score :${c}/5<br>Time Taken :${minutes} min and ${seconds} sec`,
        icon: "error",
        confirmButtonText : "Try Again",
      }).then(function() {
        window.location.href = "technology.html";
      });
     }

     else
     {
        //result.textContent = `Your result is ${c}/5. It is Awesome score...!`
        Swal.fire({
         title: "Congratulations...!",
         html: ` It is Awesome. You cleard this Exam ...!<br>Your Score :${c}/5 <br>Time Taken :${minutes} min and ${seconds} sec`,
         icon: "success",
         confirmButtonText : "Back To Home Page",
       }).then(function() {
        window.location.href = "index.html";
       });
     }

     

 }

 

 let dt = new Date(new Date().setTime(0));
 let ctime = dt.getTime();
 let seconds = Math.floor((ctime % (1000 * 60))/ 1000);
 let minutes = Math.floor((ctime % (1000 * 60 * 60))/( 1000 * 60));
 console.log(seconds, minutes);
 let time = 0;
 let mytime = setInterval(function(){
         time++;
         
         if(seconds < 59) {
             seconds++;
         } else {
             seconds = 0;
             minutes++;
         }
         let formatted_sec = seconds < 10 ? `0${seconds}`: `${seconds}`;
         let formatted_min = minutes < 10 ? `0${minutes}`: `${minutes}`
         document.querySelector("span.time").innerHTML = `${formatted_min} : ${formatted_sec}`;
     }, 1000);
 