function passmatch(form) {

    pass1=form.psw.value;
    gst=form.orggst.value;
    pass2=form.rpsw.value;
    var gstformat = new RegExp('^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]1}[1-9A-Z]{1}Z[0-9A-Z]{1}$');

    if (pass1 == '') 
        alert ("Please enter Password");  
    else if (pass2 == '') 
        alert ("Please enter confirm password");      
    else if (pass1 != pass2) { 
        alert ("\nPassword did not match: Please try again...")
        document.getElementById("rpsw").value="";
        pass2.focus();
        return false; 
    }
    else if(gst!=null)
    {
        if(!gstformat.test(gst))
        {
            alert("\nEntered GST no. is not valid...")
        /*    It should be 15 characters long.
            The first 2 characters should be a number.
            The next 10 characters should be PAN number of the taxpayer.
            The 13th character (entity code) should be a number from 1-9 or an alphabet.
            The 14th character should be Z.
            The 15th character should be an alphabet or a number.*/

        }
    }   
        alert("Welcome to Our Store!") 
        return true; 
  }

function ssubmit()
{
   // document.getElementById("submit");
    var userPreference;
    if (confirm("Do you want to send it?") == true)
    {
        userPreference = "sent successfully!";
    }
    else
    {
        userPreference = "Cancelled!";
    }
}


links = new Array();
links[1]="<section>";
links[2]="<a href='product.html'><img src='documents/MT093.jpg' alt='MT093' width='200' height='200'></a>";
links[3]="<a href='product.html'><img src='documents/MT372.jpg' alt='MT093' width='200' height='200'></a>";
links[4]="<a href='product.html'><img src='documents/MT385.jpg' alt='MT093' width='200' height='200'></a>";
links[5]="<a href='product.html'><img src='documents/MT459.jpg' alt='MT093' width='200' height='200'></a>";
links[6]="<a href='product.html'><img src='documents/MT497.jpg' alt='MT093' width='200' height='200'></a>";
links[7]="<a href='product.html'><img src='documents/MT552.jpg' alt='MT093' width='200' height='200'></a>";
links[8]="<a href='product.html'><img src='documents/MT566.jpg' alt='MT093' width='200' height='200'></a>";
links[9]="<a href='product.html'><img src='documents/MT626.jpg' alt='MT093' width='200' height='200'></a>";
links[10]="<a href='product.html'><img src='documents/MT1002.jpg' alt='MT093' width='200' height='200'></a>";
links[11]="<a href='product.html'><img src='documents/MT1003.jpg' alt='MT093' width='200' height='200'></a>";
links[12]="<a href='product.html'><img src='documents/MT1259.jpg' alt='MT093' width='200' height='200'></a>";
links[13]="</section>";

function writeLinks() {
 document.getElementById('pd').innerHTML = links[1] + links[2] + links[3] + links[4] + links[5] + links[6] + links[7] + links[8] + links[9] + links[10] + links[11] + links[12] + links[13];
}

setTimeout(writeLinks, 0);

function writeCompanyInfo(){

 document.getElementById('cname').textContent += 'I-Touch Industries';
 document.getElementById('cadd').textContent += 'Gokul-Nagar,80 feet Rd';
 document.getElementById('ccity').textContent += 'Rajkot';
 document.getElementById('cgst').textContent += '24AAEFI0948P1Z2';

}

setTimeout(writeCompanyInfo,0);
