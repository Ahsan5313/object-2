
function Student (name, age, study, hobbies){

          this.name = name;
          this.age = age;
          this.study = study;
          this.hobbies = hobbies;

          this.display = function(){
            document.write("Name =" +this.name);
            document.write("Age =" +this.age);
            document.write("Study =" +this.study);
            document.write("Hobbies =" +this.hobbies);
          }
}
var student_detail1 = new Student("Ahsanul Huq <br/>", "21 <br/>", "BBA running<br/>", "cricket<br/><br/>") ;
var student_detail2 = new Student("hsanul Huq<br/>", "21 <br/>", "BBA running<br/>", "football<br/><br/>") ;
var student_detail3 = new Student("Tasan Huq<br/>", "21 <br/>", "Actor<br/>", "sing song<br/><br/>") ;
var student_detail4 = new Student("Anamul Huq<br/>","21 <br/>", "BBA running<br/>", "tinis<br/><br/>") ;


student_detail1.display();
student_detail2.display();
student_detail3.display();
student_detail4.display();