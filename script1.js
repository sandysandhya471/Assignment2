document.addEventListener("DOMContentLoaded", () => {

    const addEducationBtn = document.getElementById("add-education-btn");

    const educationContainer = document.getElementById("education-container");


    const addExperienceBtn = document.getElementById("add-experience-btn");

    const experienceContainer = document.getElementById("experience-container");


    const addInternshipBtn = document.getElementById
("add-internship-btn");
    const internshipContainer = document.getElementById
("internship-container");

    const addProjectBtn = document.getElementById
("add-project-btn");
    const projectContainer = document.getElementById
("project-container");

    const addCertificationBtn = document.getElementById
("add-certification-btn");
    const certificationContainer = document.getElementById
("certification-container");


const languageContainer = document.getElementById("language-container");

const hobbyContainer = document.getElementById("hobbies-container");



    const resumeForm = document.getElementById("resume-form");


    // Add education entry

    addEducationBtn.addEventListener("click", () => {

        const educationEntry = createEducationEntry();

        educationContainer.appendChild(educationEntry);

    });


    // Add experience entry

    addExperienceBtn.addEventListener("click", () => {

        const experienceEntry = createExperienceEntry();

        experienceContainer.appendChild(experienceEntry);

    });



    addInternshipBtn.addEventListener("click", () => {
        const internshipEntry = createInternshipEntry();
        internshipContainer.appendChild(internshipEntry);
    });

    addCertificationBtn.addEventListener("click", () => {
        const certificationEntry = createCertificationEntry();
        certificationContainer.appendChild(certificationEntry);
    });

    addProjectBtn.addEventListener("click", () => {
        const projectEntry = createProjectEntry();
        projectContainer.appendChild(projectEntry);
    });


    // Form submit event

    resumeForm.addEventListener("submit", (e) => {

        e.preventDefault();

        generateResume();

    });


    // Create a new education entry

    function createEducationEntry() {

        const div = document.createElement("div");

        div.className = "education-entry";

        div.innerHTML = `
            <table><tr><td>Qualification<td><b>:</b></td><td><input type="text" placeholder="eg:Btech-CSE/SSC/diploma/Inter-MPC" required></td>
<tr><td>School/College Name</td><td><b>:</b></td>
                        
<td><input type="text" placeholder="Institution name" required></td></tr>

<tr><td>Year</td><td><b>:</b></td>                        
<td><input type="text" placeholder="Passed out Year " required>
</td></tr>
<tr><td>Percentage</td><td><b>:</b></td>
<td><input type="text"  placeholder="percentage" required></td></tr>
</table>            <button type="button" class="remove-btn">Remove</button>
        `;

        div.querySelector(".remove-btn").addEventListener("click", () => {

            div.remove();
        });

        return div;
    }


    // Create a new experience entry

    function createExperienceEntry() {

        const div = document.createElement("div");

        div.className = "experience-entry";

        div.innerHTML = `
                        <table>
                <tr><td>Job Role</td><td><b>:</b></td><td><input type="text" placeholder="Software Developer/Full Stack Developer" required></td></tr>
                <tr><td>Company Name</td><td><b>:</b></td><td><input type="text" placeholder="Company name" required></td></tr>
                <tr><td>Duration</td><td><b>:</b></td><td><input type="text" placeholder="e.g., 2021-2023" required></td></tr>
                <tr><td>About</td><td><b>:</b></td><td><input type="text" placeholder="Write about your work, challenges, experience" required></td></tr>
            </table>

            <button type="button" class="remove-btn">Remove</button>
        `;

        div.querySelector(".remove-btn").addEventListener("click", () => {

            div.remove();
        });

        return div;
    }




    // Create a new internship entry
    function createInternshipEntry() {
        const div = document.createElement("div");
        div.className = "internship-entry";
        div.innerHTML = `
            <table>
                <tr><td>Domain</td><td><b>:</b></td><td><input type="text" placeholder="AI/ML/Full Stack/Web Development" required></td></tr>
                <tr><td>Company Name</td><td><b>:</b></td><td><input type="text" placeholder="Company name" required></td></tr>
                <tr><td>Duration</td><td><b>:</b></td><td><input type="text" placeholder="e.g., Jan 2023 - Jul 2023" required></td></tr>
                <tr><td>About</td><td><b>:</b></td><td><input type="text" placeholder="More details about the internship" required></td></tr>
            </table>
            <button type="button" class="remove-btn">Remove</button>
        `;
        div.querySelector(".remove-btn").addEventListener("click", () => {
            div.remove();
        });
        return div;
    }

    // Create a new project entry
    function createProjectEntry() {
        const div = document.createElement("div");
        div.className = "project-entry";
        div.innerHTML = `
            <table>
                <tr><td>Title of Project</td><td><b>:</b></td><td><input type="text" placeholder="Project title" required></td></tr>
                <tr><td>About</td><td><b>:</b></td><td><input type="text" placeholder="More details about the project" required></td></tr>
            </table>
            <button type="button" class="remove-btn">Remove</button>
        `;
        div.querySelector(".remove-btn").addEventListener("click", () => {
            div.remove();
        });
        return div;
    }

    // Create a new certification entry
    function createCertificationEntry() {
        const div = document.createElement("div");
        div.className = "certification-entry";
        div.innerHTML = `
            <table>
                <tr><td>Title</td><td><b>:</b></td><td><input type="text" placeholder="Certification title" required></td></tr>
                <tr><td>Company Name</td><td><b>:</b></td><td><input type="text" placeholder="Certified by" required></td></tr>
                <tr><td>Date</td><td><b>:</b></td><td><input type="text" placeholder="Issued on [dd-mm-yyyy]" required></td></tr>
                <tr><td>About</td><td><b>:</b></td><td><input type="text" placeholder="Your experience on it" required></td></tr>
            </table>
            <button type="button" class="remove-btn">Remove</button>
        `;
        div.querySelector(".remove-btn").addEventListener("click", () => {
            div.remove();
        });
        return div;
    }


    // Generate the resume and open it in a new window with a download button

    function generateResume() {

        const name = document.getElementById("name").value;

        const email = document.getElementById("email").value;

        const phone = document.getElementById("phone").value;

        const objective = document.getElementById("objective").value;     


        let educationHTML = " <table><thead><th>Year</th><th>Qualification</th><th>School/College Name</th><th>Percentage</th></thead><tbody> ";

        const tech = document.getElementById("tech").value;

        const nontech = document.getElementById("nontech").value;

     

   let internshipHTML = "";
        let projectHTML = "";
        let experienceHTML = "";

        let certificationHTML = "";
       let langHTML = "";
       let hobbyHTML = "";
       
 
       

        // Get all education entries

        const educationEntries = educationContainer.querySelectorAll(".education-entry");

        educationEntries.forEach(entry => {

            const inputs = entry.querySelectorAll("input");

            const degree = inputs[0].value;

            const institution = inputs[1].value;

            const year = inputs[2].value;
            const percentage = inputs[3].value;
        
            if (degree && institution && year&&percentage) {

                educationHTML += `
                   <tr><td> <strong>${degree}</strong></td><td> ${year} </td><td>${institution}.</td><td> ${percentage} </td></tr>               `;
            }
        });

           educationHTML += "</tbody></table> ";

        // Get all internship entries
        const internshipEntries = internshipContainer.querySelectorAll(".internship-entry");
        let valid=0;
        internshipEntries.forEach(entry => {
            const inputs = entry.querySelectorAll("input");
            const domain = inputs[0].value;
            const company = inputs[1].value;
            const duration = inputs[2].value;
            const about = inputs[3].value;

            if (domain && company && duration && about) {
                valid=valid + 1;
                 if(valid == 1){
                  internshipHTML += "<h2>Internship</h2>";}
                internshipHTML += `             
                    <p><strong>${domain}</strong> (${duration}) - ${company}</p>
                    <p>${about}</p>
                `;
            }
        });

        // Get all project entries
        const projectEntries = projectContainer.querySelectorAll(".project-entry");
        let valid1=0;
        projectEntries.forEach(entry => {
            const inputs = entry.querySelectorAll("input");
            const title = inputs[0].value;
            const about = inputs[1].value;

            if (title && about) {
                valid1=valid1 + 1;
                 if(valid1 == 1){
                  projectHTML += "<h2>Project</h2>";}

                projectHTML += `
                    <p><strong>${title}</strong></p>
                    <p>${about}</p>
                `;
            }
        });


        // Get all experience entries

        const experienceEntries = experienceContainer.querySelectorAll(".experience-entry");
        let valid2=0;

        experienceEntries.forEach(entry => {

            const inputs = entry.querySelectorAll("input");

            const jobTitle = inputs[0].value;

            const company = inputs[1].value;

            const year = inputs[2].value;
            const about = inputs[3].value;


            if (jobTitle && company && year&&about) {


                valid2=valid2 + 1;
                 if(valid2 == 1){
                  experienceHTML += "<h2>Experience</h2>";}
                experienceHTML += `
                              <p><strong>${jobTitle}</strong> (${year}) -  ${company}.</p>
<p>${about}</p>                `;
            }
        });


        // Get all certification entries
        const certificationEntries = certificationContainer.querySelectorAll(".certification-entry");
        let valid3=0;
        certificationEntries.forEach(entry => {
            const inputs = entry.querySelectorAll("input");
            const title = inputs[0].value;
            const company = inputs[1].value;
            const date = inputs[2].value;
            const about = inputs[3].value;

            if (title && company && date && about) {
                valid3=valid3 + 1;
                 if(valid3 == 1){
                  certificationHTML += "<h2>Certificates</h2>";}

                certificationHTML += `
                    <p><strong>${title}</strong> (${date}) - ${company}</p>
                    <p>${about}</p>
                `;
            }
        });
        
        const languageEntries = languageContainer.querySelectorAll(".language-entry");
        languageEntries.forEach(entry => {
            const inputs = entry.querySelectorAll("input");
            const lang = inputs[0].value;
            if (lang) {
                langHTML += `            <h2>Languages</h2> 
                    <p>${lang}</p>
                `;
            }
        });

        
        const hobbyEntries = hobbyContainer.querySelectorAll(".hobbies-entry");
        hobbyEntries.forEach(entry => {
            const inputs = entry.querySelectorAll("input");
            const hobby = inputs[0].value;
            if (hobby) {
                hobbyHTML += `            <h2>Hobbies</h2> 
                    <p>${hobby}</p>
                `;
            }
        });


        // Check if personal details are filled

        if (!name || !email || !phone) {

            alert("Please fill in your personal information.");

            return;
        }


        // Create the formatted resume in APA-like style

        const newWindow = window.open();

        newWindow.document.write(`
            <html>

                <head>

                    <title>${name}'s Resume</title>

                    <style>

                        body {

                            font-family: 'Roboto', sans-serif;

                            margin: 30px;

                            background-color: #f4f4f4;

                            color: #333;

                            padding: 20px;

                            border-radius: 8px;

                            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

                        }

                        h1 {

                            font-size: 32px;

                            color: #007bff;

                            text-align: center;

                            margin-bottom: 10px;

                        }

                        h2 {

                            font-size: 24px;

                            color: #333;

                            border-bottom: 2px solid #007bff;

                            margin-bottom: 15px;

                            padding-bottom: 5px;

                        }

                        p {

                            font-size: 16px;

                            margin: 10px 0;

                            line-height: 1.8;
                        }

                        .section-title {

                            font-size: 20px;

                            text-transform: uppercase;

                            color: #007bff;

                            margin-top: 20px;
                        }


                        .info {

                            background-color: #f8f9fa;

                            padding: 15px;

                            border-radius: 6px;

                            margin-bottom: 20px;
                        }

                        #download-btn {

                            margin-top: 30px;

                            padding: 12px 20px;

                            background-color: #28a745;

                            color: white;

                            border: none;

                            border-radius: 4px;

                            cursor: pointer;

                            font-size: 16px;

                            transition: background-color 0.3s;
                        }

                        #download-btn:hover {

                            background-color: #218838;
                        }

                      table{ 
                            
                                width:100%;
                               	margin: 5px 0;
    
  		} 
                      th{   
		font-size:20px;
		padding:10px;                 
		background:#007bff;}

                      tr{
                            border:5px;
	            height:35px;
                            text-align:center;
                            background:white;}
                    </style>

                </head>

                <body>

                    <div class="info">

                        <h1>${name}</h1>

                        <p style="text-align:center"><strong>Email:</strong> ${email}<br><strong>Phone:</strong> ${phone}</p>

                    </div>
                   

                    <h2>Summary</h2>

                    <p>${objective}</p>
                    <h2>Education</h2>

                    ${educationHTML || "<p>No education entries added.</p>"}

                    
${experienceHTML ||""}


                    ${projectHTML || ""}
                    ${internshipHTML || ""}
                    ${certificationHTML || "" }
                        <h2>Skills</h2>

                        <p><strong>Technical:</strong> ${tech}</p>

                        <p><strong>Non-Technical:</strong> ${nontech}</p>


                    ${langHTML||" "}
                   ${hobbyHTML||" "}
                   
                    <button id="download-btn">Download as PDF</button>


                    <script src="https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.9.2/html2pdf.bundle.min.js"></script>

                    <script>
                        // Download resume as PDF without the button

                        document.getElementById("download-btn").addEventListener("click", function() {

                            const downloadButton = document.getElementById("download-btn");


                            // Hide the download button

                            downloadButton.style.display = "none";


                            // Generate PDF

                            const resumeContent = document.body;

                            html2pdf()

                                .from(resumeContent)

                                .save()

                                .then(() => {

                                    // Show the download button again after the PDF is generated

                                    downloadButton.style.display = "block";

                                });
                        });

                    </script>

                </body>

            </html>
        `);

        newWindow.document.close(); // Close the document to render the content properly
    }
});
