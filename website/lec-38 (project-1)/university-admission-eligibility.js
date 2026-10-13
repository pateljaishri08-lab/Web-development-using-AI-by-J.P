// University Admission Eligibility Checker
// This program checks if a student is eligible for Software Engineering program

function checkAdmissionEligibility() {
    // Get user information using prompt() function
    const studentName = prompt("Enter your full name:");
    
    // If user cancels, exit the function
    if (!studentName) {
        return;
    }
    
    const studentAge = parseInt(prompt("Enter your age:"));
    const studentGPA = parseFloat(prompt("Enter your high school GPA (0.0 - 4.0):"));
    const mathScore = parseInt(prompt("Enter your Math score (0-100):"));
    const scienceScore = parseInt(prompt("Enter your Science score (0-100):"));
    const englishScore = parseInt(prompt("Enter your English score (0-100)"));

    // Display collected information
    let resultsHTML = "<h2 style='color: #667eea; margin-bottom: 15px;'>📋 STUDENT INFORMATION</h2>";
    resultsHTML += "<p><strong>Name:</strong> " + studentName + "</p>";
    resultsHTML += "<p><strong>Age:</strong> " + studentAge + " years</p>";
    resultsHTML += "<p><strong>GPA:</strong> " + studentGPA + "</p>";
    resultsHTML += "<p><strong>Math Score:</strong> " + mathScore + "/100</p>";
    resultsHTML += "<p><strong>Science Score:</strong> " + scienceScore + "/100</p>";
    resultsHTML += "<p><strong>English Score:</strong> " + englishScore + "/100</p>";
    resultsHTML += "<hr style='margin: 20px 0; border: none; border-top: 2px solid #ddd;'>";

    // Define eligibility criteria
    const MIN_AGE = 18;
    const MIN_GPA = 3.0;
    const MIN_MATH_SCORE = 70;
    const MIN_SCIENCE_SCORE = 70;
    const MIN_ENGLISH_SCORE = 65;

    // Check eligibility conditions
    let isEligible = true;
    let eligibilityReasons = [];

    if (studentAge < MIN_AGE) {
        isEligible = false;
        eligibilityReasons.push("❌ Age requirement not met. Minimum age is " + MIN_AGE + " years.");
    } else {
        eligibilityReasons.push("✓ Age requirement met (" + studentAge + " years).");
    }

    if (studentGPA < MIN_GPA) {
        isEligible = false;
        eligibilityReasons.push("❌ GPA requirement not met. Minimum GPA is " + MIN_GPA + ".");
    } else {
        eligibilityReasons.push("✓ GPA requirement met (" + studentGPA + ").");
    }

    if (mathScore < MIN_MATH_SCORE) {
        isEligible = false;
        eligibilityReasons.push("❌ Math score requirement not met. Minimum score is " + MIN_MATH_SCORE + ".");
    } else {
        eligibilityReasons.push("✓ Math score requirement met (" + mathScore + "/100).");
    }

    if (scienceScore < MIN_SCIENCE_SCORE) {
        isEligible = false;
        eligibilityReasons.push("❌ Science score requirement not met. Minimum score is " + MIN_SCIENCE_SCORE + ".");
    } else {
        eligibilityReasons.push("✓ Science score requirement met (" + scienceScore + "/100).");
    }

    if (englishScore < MIN_ENGLISH_SCORE) {
        isEligible = false;
        eligibilityReasons.push("❌ English score requirement not met. Minimum score is " + MIN_ENGLISH_SCORE + ".");
    } else {
        eligibilityReasons.push("✓ English score requirement met (" + englishScore + "/100).");
    }

    // Display eligibility status and reasons
    resultsHTML += "<h2 style='color: #667eea; margin: 15px 0;'>✅ ELIGIBILITY CHECK RESULTS</h2>";
    for (let i = 0; i < eligibilityReasons.length; i++) {
        resultsHTML += "<p style='margin: 8px 0;'>" + eligibilityReasons[i] + "</p>";
    }
    resultsHTML += "<hr style='margin: 20px 0; border: none; border-top: 2px solid #ddd;'>";

    // Final result
    if (isEligible) {
        resultsHTML += "<div style='background: #d4edda; border: 2px solid #28a745; padding: 20px; border-radius: 5px; margin-top: 20px;'>";
        resultsHTML += "<h2 style='color: #155724; margin-bottom: 10px;'>🎉 CONGRATULATIONS " + studentName + "!</h2>";
        resultsHTML += "<p style='color: #155724; font-size: 1.1em;'>You are <strong>ELIGIBLE</strong> for admission to our Software Engineering Program!</p>";
        resultsHTML += "<p style='color: #155724;'>Please proceed with the application process.</p>";
        resultsHTML += "</div>";
    } else {
        resultsHTML += "<div style='background: #f8d7da; border: 2px solid #dc3545; padding: 20px; border-radius: 5px; margin-top: 20px;'>";
        resultsHTML += "<h2 style='color: #721c24; margin-bottom: 10px;'>❌ Sorry " + studentName + "!</h2>";
        resultsHTML += "<p style='color: #721c24; font-size: 1.1em;'>You are <strong>NOT ELIGIBLE</strong> for admission at this time.</p>";
        resultsHTML += "<p style='color: #721c24;'>Please review the requirements above and try again after improving your scores.</p>";
        resultsHTML += "</div>";
    }

    // Display results on the page
    const resultsContainer = document.getElementById("resultsContainer");
    const resultsContent = document.getElementById("resultsContent");
    resultsContent.innerHTML = resultsHTML;
    resultsContainer.style.display = "block";
    
    // Scroll to results
    resultsContainer.scrollIntoView({ behavior: "smooth" });
}
