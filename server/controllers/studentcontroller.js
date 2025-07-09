 
const Student = require('../models/student')
const User = require('../models/user')
const Subject = require('../models/subject')

exports.student_register = (req, res) => {
   
};

exports.student_edit =  (req, res)=> {};

exports.student_view = async (req, res) => {
     const email = req.params.email
    const stu = await Student.findOne({ where: { email: email } })
     res.send(stu);
};

exports.student_viewall = async (req, res) => {
    let student = await Student.findAll();
    
    
    
    res.send(student)
    
};

exports.student_delete =  (req, res)=> {};

exports.pstudent_register = async (req, res) =>
{
    const student = req.body

    const stu = await Student.findOne({ where: { email: student.email } })
    if (stu === null)
    {
        const ct = await Student.count();
        student.eno = 20001 + ct;
       await Student.create(student)
        
        const user = { name: student.name, email: student.email, password: student.password, role: 'student' }
         
        console.log(user)
        User.create(user)
        var subject = {eno:"",s1:"",s2:"",s3:"",s4:"",s5:"",s6:""}
        subject.eno = student.eno
        if (student.course === 'bca')
        {
            subject.s1 = "Data Structures"
            subject.s2 = "Database Management System"
            subject.s3 = "Core Java"
            subject.s4 = "Engineering Mathematics"
            subject.s5 = "Software Engineering"
            subject.s6 = "Computer Networks"

        }
        else if (student.course === 'btech')
        {
            if (student.streme === "elect")
            {
                subject.s1 = "Electrical Machines"
                subject.s2 = "Learning C++"
                subject.s3 = "Circuit Theory"
                subject.s4 = "Engineering Mathematics"
                subject.s5 = "Microprocessors Theory"
                subject.s6 = "Computer Networks"

            } else
            {
                subject.s1 = "Data Structures"
                subject.s2 = "Database Management System"
                subject.s3 = "Network Security"
                subject.s4 = "Discret Mathematics"
                subject.s5 = "Software Engineering"
                subject.s6 = "Computer Networks"

            }

        }
        Subject.create(subject)
        console.log(subject)
        console.log('Student created successfully')
        
    }    
    else
    {
            console.log('user already exists')
    }
    res.send("")
};

    exports.student_eno = async (req, res) => {
        const eno = req.params.eno
        const stu = await Student.findOne({ where: { eno: eno } })
        if (stu === null) {
            res.send(null)
        } else {
            res.send(stu)
        }
}
    
  exports.subject_eno = async (req, res) => {
    const eno = req.params.eno;
    const subj = await Subject.findOne({ where: { eno: eno } });
    if (subj === null) {
      res.send(null);
    } else {
      res.send(subj);
    }
  };
    


    exports.pstudent_edit = async (req, res) => {
        const stu = req.body
    
        console.log(stu)
        await Student.update(stu, { where: { eno: stu.eno } })
        res.end()
    }

    exports.pstudent_view = (req, res) => { };

    exports.pstudent_delete = (req, res) => { };

 
    exports.student_email = async (req, res) => {
        const email = req.params.email;
        const stu = await Student.findOne({ where: { email: email } });
        if (stu === null) {
            res.send(null);
        } else {
            res.send(stu);
        }
    }

exports.pstudent_change_password = async (req, res) => {
         const  stu = req.body;
         
          console.log(stu);
    await Student.update({ password: stu.password }, {
        where: { eno: stu.eno }
    });
     result = await Student.findOne({ where: { eno: stu.eno } })
    const rr= result
    console.log(rr)
          await User.update({password:stu.password},{where:{email:rr.email}})
    res.end();
    }