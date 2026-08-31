

//BMI function
function bmi() {
    const weight = parseFloat(document.getElementById('wt').value) || 0;
    const height = parseFloat(document.getElementById('ht').value) || 0;

    if (weight <= 0 || height <= 0) {
        document.getElementById("bmi").innerHTML = "Please enter valid weight and height values.";
        return;
    }

    const bmiValue = weight / (height * height);
    let category = "";
    let risks = "";
    let recommendations = "";

    if (bmiValue < 16.0) {
        category = "Severe Thinness";
        risks = "Severe malnutrition, weakened immunity, osteoporosis, anemia, increased risk of illness and death";
        recommendations = "Seek medical evaluation immediately, increase nutrient-dense food intake, investigate underlying causes";
    } else if (bmiValue <= 16.9) {
        category = "Moderate Thinness";
        risks = "Malnutrition, fatigue, reduced muscle mass, weakened immune system";
        recommendations = "Increase calorie and protein intake, consult a healthcare professional, monitor weight gain";
    } else if (bmiValue <= 18.4) {
        category = "Mild Thinness";
        risks = "Nutritional deficiencies, lower energy levels, increased susceptibility to infections";
        recommendations = "Maintain balanced diet, regular exercise, adequate sleep, routine health checks";
    } else if (bmiValue <= 24.9) {
        category = "Normal weight";
        risks = "Lowest risk of weight-related diseases";
        recommendations = "Maintain balanced diet, regular exercise, adequate sleep, routine health checks";
    } else if (bmiValue <= 29.9) {
        category = "Overweight";
        risks = "Increased risk of hypertension, cardiovascular disease, Type 2 diabetes, joint problems";
        recommendations = "Increase physical activity, reduce excess calories, improve dietary habits, monitor weight regularly";
    } else if (bmiValue <= 34.9) {
        category = "Obesity Class I";
        risks = "High risk of heart disease, diabetes, stroke, sleep apnea";
        recommendations = "Structured weight-loss program, regular exercise, medical consultation, dietary modification";
    } else if (bmiValue <= 39.9) {
        category = "Obesity Class II";
        risks = "Very high risk of cardiovascular disease, diabetes, mobility problems, some cancers";
        recommendations = "Intensive weight management, professional medical supervision, lifestyle intervention";
    } else {
        category = "Obesity Class III (Severe/Morbid Obesity)";
        risks = "Extremely high risk of serious health complications and premature death";
        recommendations = "Comprehensive medical evaluation, specialist referral, intensive weight-loss treatment, possible bariatric surgery consideration";
    }

    document.getElementById("bmi").innerHTML =
        `Category: ${category}<br>` +
        `Health Risks: ${risks}<br>` +
        `Recommendations: ${recommendations}<br>` +
        `BMI is: ${bmiValue.toFixed(1)} kg/m²`;
}

// Vital Signs Function
function vitalSigns() {
    // Read inputs
    let sbp = parseFloat(document.getElementById("sbp").value);
    let dbp = parseFloat(document.getElementById("dbp").value);
    let hr  = parseFloat(document.getElementById("hrx").value);
    let os  = parseFloat(document.getElementById("os").value);
    let temp = parseFloat(document.getElementById("temp").value);

    // Validation
    if (isNaN(sbp) || isNaN(dbp) || isNaN(hr) || isNaN(os) || isNaN(temp)) {
        alert("⚠️ Please enter all vital sign values.");
        return;
    }

let bpText = "#Category of Blood Pressure: ";

if (sbp >= 180 || dbp >= 120) {
    bpText += "Hypertensive Crisis<br>Recommendation: Emergency care required — risk of stroke, heart attack, organ damage.";
} else if (sbp < 120 && dbp < 80) {
    bpText += "Optimal<br>Recommendation: Maintain healthy lifestyle.";
} else if ((sbp >= 120 && sbp <= 129) && dbp < 80) {
    bpText += "Elevated<br>Recommendation: Regular monitoring, continue healthy habits.";
} else if ((sbp >= 130 && sbp <= 139) || (dbp >= 80 && dbp <= 89)) {
    bpText += "Stage 1 Hypertension<br>Recommendation: Lifestyle modification, monitor BP closely.";
} else if ((sbp >= 140 && sbp <= 159) || (dbp >= 90 && dbp <= 99)) {
    bpText += "Stage 2 Hypertension<br>Next Step: Confirm with repeat readings, consider lifestyle changes ± medication.";
} else if ((sbp >= 160 && sbp <= 179) || (dbp >= 100 && dbp <= 109)) {
    bpText += "Stage 2 Hypertension (Moderate)<br>Next Step: Medical evaluation, likely medication required.";
} else {
    bpText += "Unclassified — check input values.";
}

// ✅ These lines must be OUTSIDE the if/else chain
bpText += `<br>Systolic: ${sbp} mmHg<br>Diastolic: ${dbp} mmHg`;
document.getElementById("bpResults").innerHTML = bpText;

    // ---------------- Heart Rate ----------------
    let hrText = "#Classification of Heart Rate: ";
    if (hr < 40) {
        hrText += "Severe Bradycardia<br>Risks: Dizziness, syncope, heart failure<br>Recommendations: Urgent medical evaluation";
    } else if (hr >= 40 && hr <= 59) {
        hrText += "Bradycardia<br>Risks: Fatigue, dizziness<br>Recommendations: Assess symptoms and causes";
    } else if (hr >= 60 && hr <= 100) {
        hrText += "Normal<br>Risks: Lowest cardiovascular risk<br>Recommendations: Maintain healthy lifestyle";
    } else if (hr >= 101 && hr <= 120) {
        hrText += "Mild Tachycardia<br>Risks: Palpitations, anxiety<br>Recommendations: Evaluate for fever, stress, dehydration";
    } else if (hr >= 121 && hr <= 140) {
        hrText += "Moderate Tachycardia<br>Risks: Reduced efficiency<br>Recommendations: Medical assessment recommended";
    } else {
        hrText += "Severe Tachycardia<br>Risks: Arrhythmias, hypotension<br>Recommendations: Immediate medical attention";
    }
    document.getElementById("hrResults").innerHTML = hrText;

    // ---------------- Oxygen Saturation ----------------
    let osText = "#Category of Oxygen Saturation: ";
    if (os >= 95 && os <= 100) {
        osText += "Normal<br>SpO₂: " + os + "%";
    } else if (os >= 90 && os < 95) {
        osText += "Mild Hypoxemia<br>SpO₂: " + os + "%";
    } else if (os >= 85 && os < 90) {
        osText += "Moderate Hypoxemia<br>SpO₂: " + os + "%";
    } else if (os >= 0 && os < 85) {
        osText += "Severe Hypoxemia<br>SpO₂: " + os + "%";
    } else {
        osText = "Invalid Oxygen Saturation Value";
    }
    document.getElementById("osResults").innerHTML = osText;

    // ---------------- Temperature ----------------
    let tempText = "#Category of Temperature: ";
    if (temp < 35.0) {
        tempText += "Hypothermia<br>Temperature: " + temp + " °C";
    } else if (temp <= 37.4) {
        tempText += "Normal<br>Temperature: " + temp + " °C";
    } else if (temp <= 38.0) {
        tempText += "Low-grade Fever<br>Temperature: " + temp + " °C";
    } else if (temp <= 39.0) {
        tempText += "Moderate Fever<br>Temperature: " + temp + " °C";
    } else if (temp <= 40.0) {
        tempText += "High Fever<br>Temperature: " + temp + " °C";
    } else if (temp > 40.0) {
        tempText += "Hyperpyrexia<br>Temperature: " + temp + " °C";
    } else {
        tempText = "Invalid Temperature Value";
    }
    document.getElementById("tempResults").innerHTML = tempText;

    // ---------------- Shock Index ----------------
    let si = hr / sbp;
    let siText = "#Shock Index: " + si.toFixed(2) + "<br>";
    if (si >= 1.3) {
        siText += "Severe — urgent intervention needed";
    } else if (si >= 1.0) {
        siText += "Abnormal — investigate cause";
    } else if (si >= 0.7) {
        siText += "Borderline — monitor closely";
    } else if (si >= 0.5) {
        siText += "Normal — stable hemodynamics";
    }
    document.getElementById("siResults").innerHTML = siText;

    // ---------------- Pulse Pressure ----------------
    let pp = sbp - dbp;
    let ppText = "#Pulse Pressure: " + pp + " mmHg<br>";
    if (pp > 60) {
        ppText += "Wide — assess vascular stiffness";
    } else if (pp < 30) {
        ppText += "Narrow — urgent evaluation needed";
    } else {
        ppText += "Normal — healthy compliance";
    }
    document.getElementById("ppResults").innerHTML = ppText;

    // ---------------- Rate Pressure Product ----------------
    let rpp = hr * sbp;
    let rppText = "#Rate Pressure Product: " + rpp + "<br>";
    if (rpp >= 30000) {
        rppText += "Very High — urgent cardiology review";
    } else if (rpp >= 25000) {
        rppText += "High-Intermediate — optimize therapy";
    } else if (rpp >= 20000) {
        rppText += "Intermediate — monitor workload";
    } else if (rpp >= 15000) {
        rppText += "Low-Intermediate — safe for light activity";
    } else if (rpp >= 10000) {
        rppText += "Low — normal resting workload";
    } else {
        rppText += "Very Low — may be normal in athletes";
    }
    document.getElementById("rppResults").innerHTML = rppText;
}
//Possium score

// Helper function: safely get numeric values from <select>, <input>, or radio groups
function getValue(id) {
    let el = document.getElementById(id);
    if (!el) {
        // If no element with that ID, try radio group by name
        let checked = document.querySelector(`input[name="${id}"]:checked`);
        return checked ? parseInt(checked.value) : NaN;
    }

    // For select or input fields
    let val = el.value;
    if (val === "") return NaN;   // catches "Select" option
    return parseInt(val);
}

function possumScore() {
    // ---------------- Collect Physiological Parameters ----------------
    let physIds = ["ageRange","cardiacSigns","rSigns","sbpScore","pRate","gcs","hemR","wccx","ur","na","kxy","ecg"];
    let physTotal = 0;

    for (let id of physIds) {
        let val = getValue(id);
        if (isNaN(val)) {
            alert("⚠️ Missing value for: " + id);
            return;
        }
        physTotal += val;
    }

    // ---------------- Collect Operative Parameters ----------------
    let opIds = ["opS","nop","ebl","ps","pom","too"];
    let opTotal = 0;

    for (let id of opIds) {
        let val = getValue(id);
        if (isNaN(val)) {
            alert("⚠️ Missing value for: " + id);
            return;
        }
        opTotal += val;
    }

    // ---------------- Display Totals ----------------
    document.getElementById("physTotal").innerHTML = "Physiological Score (PS): " + physTotal;
    document.getElementById("opTotal").innerHTML = "Operative Score (OS): " + opTotal;

    // ---------------- POSSUM Logistic Regression ----------------
    let morbidity = 1 / (1 + Math.exp(-(-5.91 + (0.16 * physTotal) + (0.19 * opTotal))));
    let mortality = 1 / (1 + Math.exp(-(-7.04 + (0.13 * physTotal) + (0.16 * opTotal))));

    morbidity = (morbidity * 100).toFixed(1);
    mortality = (mortality * 100).toFixed(1);

    // ---------------- Classification: Morbidity ----------------
    let morbxText = "Predicted Morbidity Risk: " + morbidity + "%<br>";
    if (morbidity < 20) {
        morbxText += "<b>Classification:</b> Low Risk<br><b>Meaning:</b> Most patients recover well<br><b>Recommendations:</b> Routine monitoring and standard post‑op care";
    } else if (morbidity < 50) {
        morbxText += "<b>Classification:</b> Moderate Risk<br><b>Meaning:</b> Increased chance of complications<br><b>Recommendations:</b> Enhanced monitoring, optimize comorbidities";
    } else {
        morbxText += "<b>Classification:</b> High Risk<br><b>Meaning:</b> Significant likelihood of complications<br><b>Recommendations:</b> Intensive monitoring, multidisciplinary support";
    }

    // ---------------- Classification: Mortality ----------------
    let mortxText = "Predicted Mortality Risk: " + mortality + "%<br>";
    if (mortality < 5) {
        mortxText += "<b>Classification:</b> Low Risk<br><b>Meaning:</b> Very low chance of death<br><b>Recommendations:</b> Proceed with surgery, routine precautions";
    } else if (mortality < 15) {
        mortxText += "<b>Classification:</b> Moderate Risk<br><b>Meaning:</b> Noticeable mortality risk<br><b>Recommendations:</b> Careful peri‑operative planning, discuss risks with patient";
    } else {
        mortxText += "<b>Classification:</b> High Risk<br><b>Meaning:</b> Substantial mortality risk<br><b>Recommendations:</b> Consider alternatives, intensive peri‑operative care, informed consent essential";
    }

    // ---------------- Display Results ----------------
    document.getElementById("morbx").innerHTML = morbxText;
    document.getElementById("mortx").innerHTML = mortxText;
}


//Curb-65
function curb65() {
    let confusion = parseInt(document.getElementById("cconfusion").value) || 0;
    let urea = parseInt(document.getElementById("curea").value) || 0;
    let respiratoryRate = parseInt(document.getElementById("crr").value) || 0;
    let bloodPressure = parseInt(document.getElementById("cbp").value) || 0;
    let cAge = parseInt(document.getElementById("cage").value) || 0;

    let cTotal = confusion + urea + respiratoryRate + bloodPressure + cAge;

    let result = "";
    switch (cTotal) {
        case 0:
            result = "Low Risk (~0.7% mortality). Outpatient treatment.";
            break;
        case 1:
            result = "Low Risk (~2.1% mortality). Outpatient or observation.";
            break;
        case 2:
            result = "Moderate Risk (~9.2% mortality). Consider hospital admission.";
            break;
        case 3:
            result = "High Risk (~15–22% mortality). Hospital admission required.";
            break;
        case 4:
        case 5:
            result = "Very High Risk (~28–40% mortality). Hospital admission, consider ICU.";
            break;
        default:
            result = "Invalid input.";
    }

    document.getElementById("cTotal").innerHTML = result + " (Score: " + cTotal + ")";
}
//Apgar score
function apgar() {
    let appearance = parseInt(document.getElementById("appear").value) || 0;
    let aPulse = parseInt(document.getElementById("aPR").value) || 0;
    let grimace = parseInt(document.getElementById("grim").value) || 0;
    let aActivityx = parseInt(document.getElementById("aActivity").value) || 0;
    let arespiration = parseInt(document.getElementById("aResp").value) || 0;

    let aTotal = appearance + aPulse + grimace + aActivityx + arespiration;
    let message = "";

    if (aTotal >= 7 && aTotal <= 10) {
        message = "Normal adaptation; generally no immediate intervention required.<br>" +
                  "✅ Suggestion: Continue routine monitoring and provide warmth.<br>" +
                  "The Score is: " + aTotal;
    } else if (aTotal >= 4 && aTotal <= 6) {
        message = "Moderately depressed; may require supportive measures such as airway management and oxygen.<br>" +
                  "⚠️ Suggestion: Ensure airway patency, provide oxygen, and reassess frequently.<br>" +
                  "The Score is: " + aTotal;
    } else {
        message = "Severely depressed; immediate resuscitation often required.<br>" +
                  "🚨 Suggestion: Initiate full neonatal resuscitation (airway, breathing, circulation) and call for help.<br>" +
                  "The Score is: " + aTotal;
    }

    document.getElementById("xTotal").innerHTML = message;
}

//Hb check
function hbClass()
{
    let hbv = parseFloat(document.getElementById("hbResults").value)||0;
    let agex = parseFloat(document.getElementById("age").value)||0;
    let select = document.querySelector('input[name="gender"]:checked');
    
    // Clear previous outputs
    document.getElementById("mNeonateN").innerHTML = "";
    document.getElementById("mNeonateMi").innerHTML = "";
    document.getElementById("mNeonateMo").innerHTML = "";
    document.getElementById("mNeonateS").innerHTML = "";
    document.getElementById("mNeonateH").innerHTML = "";
    
    //Male neonate
    if((agex>0&&agex<=0.0767)&&(select.value==="M")&&(hbv>=14.0&&hbv<=24.0))
    {
        document.getElementById("mNeonateN").innerHTML = "Normal Hb<br>" + hbv.toFixed(3);
    }
    else if((agex>0&&agex<=0.0767)&&(select.value==="M")&&(hbv>=11.0&&hbv<=13.9))
    {
         document.getElementById("mNeonateMi").innerHTML = "Mild Anemia: 11.0–13.9 g/dL <br>Causes: Prematurity, maternal anemia, minor birth blood loss, hemolytic disease, congenital infections, twin-to-twin transfusion, nutritional deficiencies<br>" + hbv.toFixed(3);
    }
    else if((agex>0&&agex<=0.0767)&&(select.value==="M")&&(hbv>=8.0&&hbv<=10.9))
    {
        document.getElementById("mNeonateMo").innerHTML = "Moderate Anemia: 8.0–10.9 g/dL <br>Causes: Significant blood loss, severe prematurity, hemolytic disease, neonatal sepsis, G6PD deficiency, congenital marrow disorders, DIC<br>" + hbv.toFixed(3);
    }
    else if((agex>0&&agex<=0.0767)&&(select.value==="M")&&(hbv<8.0))
    {
        document.getElementById("mNeonateS").innerHTML = "Severe Anemia: <8.0 g/dL <br>Causes: Massive hemorrhage, severe hemolysis, severe sepsis, aplastic anemia, leukemia, congenital disorders, hemoglobinopathies<br>" + hbv.toFixed(3);
    }
    else if((agex>0&&agex<=0.0767)&&(select.value==="M")&&(hbv>24.0))
    {
        document.getElementById("mNeonateH").innerHTML = "High Hemoglobin: >24.0 g/dL <br>Causes: Delayed cord clamping, maternal diabetes, dehydration, polycythemia, intrauterine hypoxia, congenital heart disease, twin-to-twin transfusion recipient<br>" + hbv.toFixed(3);

    }
    //2. Infant Male (1–12 Months)
    function clearInfantResults() 
    {
    document.getElementById("mInfantN").innerHTML = "";
    document.getElementById("mInfantMi").innerHTML = "";
    document.getElementById("mInfantMo").innerHTML = "";
    document.getElementById("mInfantS").innerHTML = "";
    document.getElementById("mInfantH").innerHTML = "";
    }
    if (agex > 0.0767 && agex <= 1 && select.value === "M") 
    {
    clearInfantResults(); // ✅ reset before writing new result
    }
    if((agex>0.0767&&agex<=1)&&(select.value==="M")&&(hbv>=10.5&&hbv<=14.0))
    {
         document.getElementById("mInfantN").innerHTML = "Normal Hb: 10.5–14.0 g/dL<br>" + hbv.toFixed(3);
    }
     else if((agex>0.0767&&agex<=1)&&(select.value==="M")&&(hbv>=10.0&&hbv<=10.4))
     {
         document.getElementById("mInfantMi").innerHTML = "Mild Anemia: 10.0–10.4 g/dL Causes: Iron deficiency, prematurity, poor feeding, recurrent infections, vitamin deficiency, chronic diarrhea, malabsorption<br>" + hbv.toFixed(3);
     }
     else if((agex>0.0767&&agex<=1)&&(select.value==="M")&&(hbv>=7.0&&hbv<=9.90))
     {
         document.getElementById("mInfantMo").innerHTML = "Moderate Anemia: 7.0–9.9 g/dL Causes: Severe iron deficiency, malaria, sickle cell disease, thalassemia, chronic infection, GI bleeding, chronic kidney disease<br>" + hbv.toFixed(3);
     }
       else if((agex>0.0767&&agex<=1)&&(select.value==="M")&&(hbv<7.0))
       {
            document.getElementById("mInfantS").innerHTML = "Severe Anemia: <7.0 g/dL Causes: Severe malaria, sepsis, severe iron deficiency, leukemia, aplastic anemia, sickle cell crisis, major hemorrhage<br>"+ hbv.toFixed(3);
       }
        else if((agex>0.0767&&agex<=1)&&(select.value==="M")&&(hbv>14.0))
    {
        document.getElementById("mInfantH").innerHTML = "High Hemoglobin: >14.0 g/dL Causes: Dehydration, polycythemia, congenital heart disease, high altitude, chronic hypoxia, renal disease, erythropoietin excess<br>" + hbv.toFixed(3);
    }
    //3. Toddler Male (1–3 Years)
    if((agex>1&&agex<=3)&&(select.value==="M")&&(hbv>=11.0&&hbv<=14.0))
    {
        document.getElementById("mToddlerN").innerHTML = "Normal Hb: 11.0–14.0 g/dL<br>" + hbv.toFixed(3);
    }
     else if((agex>1&&agex<=3)&&(select.value==="M")&&(hbv>=10.0&&hbv<=10.9))
     {
        document.getElementById("mToddlerMi").innerHTML = "Mild Anemia: 10.0–10.9 g/dL Causes: Iron deficiency, poor nutrition, hookworm,chronic infections, B12 deficiency, folate deficiency, malabsorption<br>" + hbv.toFixed(3);
     }
      else if((agex>1&&agex<=3)&&(select.value==="M")&&(hbv>=7.0&&hbv<=9.9))
      {
        document.getElementById("mToddlerMo").innerHTML = "·	Moderate Anemia: 7.0–9.9 g/dL Causes: Severe iron deficiency, malaria, sickle cell disease, CKD, tuberculosis, thalassemia, nutritional deficiencies<br>" + hbv.toFixed(3);
      }
       else if((agex>1&&agex<=3)&&(select.value==="M")&&(hbv<7.0))
       {
            document.getElementById("mToddlerS").innerHTML = "Severe Anemia: <7.0 g/dL Causes: Severe malaria, leukemia, aplastic anemia, sepsis, massive blood loss, marrow failure, severe sickle cell disease<br>" + hbv.toFixed(3);
       }
       else if((agex>1&&agex<=3)&&(select.value==="M")&&(hbv>14.0))
       {
             document.getElementById("mToddlerH").innerHTML = "High Hemoglobin: >14.0 g/dL Causes: Dehydration, polycythemia, high altitude, chronic lung disease, congenital heart disease, renal tumors, erythropoietin excess<br>" + hbv.toFixed(3);
       }
       //4. Child Male (4–12 Years)
        if((agex>4&&agex<=12)&&(select.value==="M")&&(hbv>=11.5&&hbv<=15.5))
    {
        document.getElementById("mChildN").innerHTML = "Normal Hb: 11.5–15.5 g/dL<br>" + hbv.toFixed(3);
    }
    else if((agex>4&&agex<=12)&&(select.value==="M")&&(hbv>=11.0&&hbv<=11.4))
    {
        document.getElementById("mChildMi").innerHTML = "Mild Anemia: 11.0–11.4 g/dL Causes: Iron deficiency, poor diet, hookworm, chronic inflammation, vitamin deficiencies, malabsorption, recurrent infections<br>" + hbv.toFixed(3);
    }
     else if((agex>4&&agex<=12)&&(select.value==="M")&&(hbv>=8.0&&hbv<=10.9))
     {
        document.getElementById("mChildMo").innerHTML =  "Moderate Anemia: 8.0–10.9 g/dL Causes: Iron deficiency anemia, malaria, sickle cell disease, thalassemia, CKD, tuberculosis, HIV infection<br>"  + hbv.toFixed(3);
     }
     else if((agex>4&&agex<=12)&&(select.value==="M")&&(hbv<8.0))
     {
        document.getElementById("mChildS").innerHTML =  "Severe Anemia: <8.0 g/dL Causes: Severe malaria, leukemia, aplastic anemia, marrow failure, severe sickle cell disease, hemorrhage, sepsis<br>"  + hbv.toFixed(3);
     }
     else if((agex>4&&agex<=12)&&(select.value==="M")&&(hbv>15.5))
     {
        document.getElementById("mChildH").innerHTML =  "High Hemoglobin: >15.5 g/dL Causes: Dehydration, polycythemia vera, chronic hypoxia, congenital heart disease, high altitude, smoking exposure, renal disease<br>"  + hbv.toFixed(3);
     }
     //5. Adolescent Male (13–17 Years)
     if((agex>13&&agex<=17)&&(select.value==="M")&&(hbv>=13.0&&hbv<=16.0))
     {
         document.getElementById("mAdolescentN").innerHTML =  "Normal Hb: 13.0–16.0 g/dL<br>"  + hbv.toFixed(3);
     }
     else if((agex>13&&agex<=17)&&(select.value==="M")&&(hbv>=11.0&&hbv<=12.9))
     {
        document.getElementById("mAdolescentMi").innerHTML =  "Mild Anemia: 11.0–12.9 g/dL Causes: Rapid growth/puberty, iron deficiency, poor nutrition, malaria, chronic disease, folate deficiency, B12 deficiency<br>"  + hbv.toFixed(3);
     }
      else if((agex>13&&agex<=17)&&(select.value==="M")&&(hbv>=8.0&&hbv<=10.9))
      {
        document.getElementById("mAdolescentMo").innerHTML =  "Moderate Anemia: 8.0–10.9 g/dL Causes: Severe iron deficiency, sickle cell disease, thalassemia, CKD, HIV, tuberculosis, GI bleeding<br>"  + hbv.toFixed(3);
      }
      else if((agex>13&&agex<=17)&&(select.value==="M")&&(hbv<8.0))
      {
        document.getElementById("mAdolescentS").innerHTML =  "Severe Anemia: <8.0 g/dL Causes: Severe malaria, leukemia, aplastic anemia, severe sickle cell disease, hemorrhage, marrow failure, severe infections<br>"  + hbv.toFixed(3);
      }
      else if((agex>13&&agex<=17)&&(select.value==="M")&&(hbv>16.0))
      {
        document.getElementById("mAdolescentH").innerHTML =  "High Hemoglobin: >16.0 g/dL Causes: Dehydration, smoking, polycythemia vera, high altitude, chronic hypoxia, congenital heart disease, erythropoietin tumors<br>"  + hbv.toFixed(3);
      }
      //6. Young Adult Male (18–39 Years)
       if((agex>18&&agex<=39)&&(select.value==="M")&&(hbv>=13.5&&hbv<=17.5))
       {
            document.getElementById("mYoungAdultN").innerHTML =  "Normal Hb: 13.5–17.5 g/dL<br>"  + hbv.toFixed(3);
       }
       else if((agex>18&&agex<=39)&&(select.value==="M")&&(hbv>=12.0&&hbv<=13.4))
       {
            document.getElementById("mYoungAdultMi").innerHTML =  "Mild Anemia: 12.0–13.4 g/dL Causes: Iron deficiency, chronic disease, malaria, GI bleeding, folate deficiency, B12 deficiency, poor nutrition<br>"  + hbv.toFixed(3);
       }
        else if((agex>18&&agex<=39)&&(select.value==="M")&&(hbv>=8.0&&hbv<=11.9))
        {
             document.getElementById("mYoungAdultMo").innerHTML =  "Moderate Anemia: 8.0–11.9 g/dL Causes: Severe iron deficiency, CKD, GI bleeding, HIV, thalassemia, sickle cell disease, chronic infections<br>"  + hbv.toFixed(3);
        }
        else if((agex>18&&agex<=39)&&(select.value==="M")&&(hbv<8.0))
        {
            document.getElementById("mYoungAdultS").innerHTML =  "Severe Anemia: <8.0 g/dL Causes: Massive hemorrhage, severe malaria, leukemia, aplastic anemia, marrow failure, advanced kidney disease, severe GI bleeding<br>"  + hbv.toFixed(3);
        }
        else if((agex>18&&agex<=39)&&(select.value==="M")&&(hbv>17.5))
        {
             document.getElementById("mYoungAdultH").innerHTML =  "High Hemoglobin: >17.5 g/dL Causes: Dehydration, smoking, polycythemia vera, high altitude, chronic lung disease, congenital heart disease, erythropoietin excess<br>"  + hbv.toFixed(3);
        }
       // Middle-aged Male (41–64 Years)
if (agex > 40 && agex <= 64 && select.value === "M") {
    if (hbv >= 13.0 && hbv <= 17.0) {
        document.getElementById("mMiddleAgedN").innerHTML =
            "Normal Hb: 13.0–17.0 g/dL<br>" + hbv.toFixed(3);
    } else if (hbv >= 11.0 && hbv <= 12.9) {
        document.getElementById("mMiddleAgedMi").innerHTML =
            "Mild Anemia: 11.0–12.9 g/dL Causes: Iron deficiency, CKD, chronic inflammation, GI bleeding, cancer, nutritional deficiency, liver disease<br>" + hbv.toFixed(3);
    } else if (hbv >= 8.0 && hbv <= 10.9) {
        document.getElementById("mMiddleAgedMo").innerHTML =
            "Moderate Anemia: 8.0–10.9 g/dL Causes: Severe iron deficiency, CKD, malignancy, GI bleeding, HIV, marrow disorders, chronic inflammatory disease<br>" + hbv.toFixed(3);
    } else if (hbv < 8.0) {
        document.getElementById("mMiddleAgedS").innerHTML =
            "Severe Anemia: <8.0 g/dL Causes: Hemorrhage, leukemia, aplastic anemia, advanced cancer, marrow failure, severe kidney disease, severe GI bleeding<br>" + hbv.toFixed(3);
    } else if (hbv > 17.0) {
        document.getElementById("mMiddleAgedH").innerHTML =
            "High Hemoglobin: >17.0 g/dL Causes: Dehydration, smoking, polycythemia vera, chronic lung disease, high altitude, congenital heart disease, renal tumors<br>" + hbv.toFixed(3);
    }
}
            // Elderly Male (≥65 Years)
if (agex >= 65 && select.value === "M") {
    if (hbv >= 12.5 && hbv <= 16.5) {
        document.getElementById("mElderlyN").innerHTML =
            "Normal Hb: 12.5–16.5 g/dL<br>" + hbv.toFixed(3);
    } else if (hbv >= 10.0 && hbv <= 12.4) {
        document.getElementById("mElderlyMi").innerHTML =
            "Mild Anemia: 10.0–12.4 g/dL Causes: Iron deficiency, B12 deficiency, folate deficiency, CKD, chronic inflammation, GI bleeding, myelodysplastic syndrome<br>" + hbv.toFixed(3);
    } else if (hbv >= 8.0 && hbv <= 9.9) {
        document.getElementById("mElderlyMo").innerHTML =
            "Moderate Anemia: 8.0–9.9 g/dL Causes: CKD, cancer, severe iron deficiency, marrow disorders, chronic GI bleeding, myelodysplastic syndrome, chronic inflammation<br>" + hbv.toFixed(3);
    } else if (hbv < 8.0) {
        document.getElementById("mElderlyS").innerHTML =
            "Severe Anemia: <8.0 g/dL Causes: Advanced cancer, marrow failure, leukemia, severe GI bleeding, end-stage kidney disease, aplastic anemia, severe nutritional deficiency<br>" + hbv.toFixed(3);
    } else if (hbv > 16.5) {
        document.getElementById("mElderlyH").innerHTML =
            "High Hemoglobin: >16.5 g/dL Causes: Dehydration, smoking, COPD, polycythemia vera, high altitude, chronic hypoxia, renal tumors<br>" + hbv.toFixed(3);
    }
}

               //FEMALE HEMOGLOBIN (Hb) 
               //1. Neonate Female (0–28 Days)
            if((agex>0&&agex<=0.0767)&&(select.value==="F")&&(hbv>=14.0&&hbv<=24.0))
            {
                document.getElementById("fNeonateN").innerHTML =  "Normal Hb 14.0–24.0 g/dL<br>"  + hbv.toFixed(3);
            }
            else if((agex>0&&agex<=0.0767)&&(select.value==="F")&&(hbv>=11.0&&hbv<=13.9))
            {
                document.getElementById("fNeonateMi").innerHTML =  "Mild Anemia 11.0–13.9 g/dL: 7 Possible Causes, Prematurity, Maternal anemia, Minor birth blood loss, Hemolytic disease of the newborn, Congenital infections, Twin-to-twin transfusion syndrome, Nutritional deficiencies<br>"  + hbv.toFixed(3);
            }
            else if((agex>0&&agex<=0.0767)&&(select.value==="F")&&(hbv>=8.0&&hbv<=10.9))
            {
                document.getElementById("fNeonateMo").innerHTML =  "Moderate Anemia 8.0–10.9 g/dL: 7 Possible Causes, Significant blood loss, Severe prematurity, Hemolytic disease, Neonatal sepsis, G6PD deficiency, Congenital marrow disorders, Disseminated intravascular coagulation (DIC)<br>"  + hbv.toFixed(3);
            }
            else if((agex>0&&agex<=0.0767)&&(select.value==="F")&&(hbv<8.0))
            {
                document.getElementById("fNeonateS").innerHTML =  "Severe Anemia <8.0 g/dL, 7 Possible Causes, Massive hemorrhage, Severe hemolysis, Severe sepsis, Aplastic anemia, Leukemia, Severe congenital disorders, Hemoglobinopathies<br>"  + hbv.toFixed(3);
            }
            else if((agex>0&&agex<=0.0767)&&(select.value==="F")&&(hbv>24.0))
            {
                document.getElementById("fNeonateH").innerHTML =  "High Hemoglobin >24.0 g/dL: 7 Possible Causes, Delayed cord clamping, Maternal diabetes, Dehydration, Polycythemia, Intrauterine hypoxia, Congenital heart disease, Twin-to-twin transfusion recipient<br>"  + hbv.toFixed(3);
            }
            //2. Infant Female (1–12 Months)
             if ((agex > 0.0767 && agex <= 1 && select.value === "F")&&(hbv>=10.5&&hbv<=14.0)) 
             {
                document.getElementById("fInfantN").innerHTML = "Normal Hb, 10.5–14.0 g/dL<br>"  + hbv.toFixed(3);
             }
             else if ((agex > 0.0767 && agex <= 1 && select.value === "F")&&(hbv>=10.0&&hbv<=10.4))
             {
                document.getElementById("fInfantMi").innerHTML = "Mild Anemia 10.0–10.4 g/dL: 7 Possible Causes, Iron deficiency, Prematurity, Poor feeding, Recurrent infections, Vitamin deficiency, Chronic diarrhea, Malabsorption<br>"  + hbv.toFixed(3);
             }
             else if ((agex > 0.0767 && agex <= 1 && select.value === "F")&&(hbv>=7.0&&hbv<=9.9))
             {
                document.getElementById("fInfantMo").innerHTML = "Moderate Anemia: 7.0–9.9 g/dL: 7 Possible Causes, Severe iron deficiency, Malaria, Sickle cell disease, Thalassemia, Chronic infection, Gastrointestinal bleeding, Chronic kidney disease<br>"  + hbv.toFixed(3);
             }
              else if ((agex > 0.0767 && agex <= 1 && select.value === "F")&&(hbv<7.0))
              {
                document.getElementById("fInfantS").innerHTML = "Severe Anemia <7.0 g/dL: 7 Possible Causes, Severe malaria, Sepsis, Severe iron deficiency, Leukemia, Aplastic anemia, Sickle cell crisis, Major hemorrhage<br>"  + hbv.toFixed(3);
              }
              else if ((agex > 0.0767 && agex <= 1 && select.value === "F")&&(hbv>14.0))
              {
                document.getElementById("fInfantH").innerHTML = "High Hemoglobin >14.0 g/dL: 7 Possible Causes, Dehydration, Polycythemia, Congenital heart disease, High altitude, Chronic hypoxia, Renal disease, Erythropoietin excess<br>"  + hbv.toFixed(3);
              }
              //3. Toddler Female (1–3 Years)
              if ((agex > 1 && agex <= 3 && select.value === "F")&&(hbv>=11.0&&hbv<=14.0)) 
              {
                document.getElementById("fToddlerN").innerHTML = "Normal Hb 11.0–14.0 g/dL<br>"  + hbv.toFixed(3);
              }
               else if ((agex > 1 && agex <= 3 && select.value === "F")&&(hbv>=10.0&&hbv<=10.9)) 
               {
                    document.getElementById("fToddlerMi").innerHTML = "Mild Anemia 10.0–10.9 g/dL: 7 Possible Causes, Iron deficiency, Poor nutrition, Hookworm infestation, Chronic infections, Vitamin B12 deficiency, Folate deficiency, Malabsorption syndromes<br>"  + hbv.toFixed(3);
               }
                else if ((agex > 1 && agex <= 3 && select.value === "F")&&(hbv>=7.0&&hbv<=9.9))
                {
                    document.getElementById("fToddlerMo").innerHTML = "Moderate Anemia 7.0–9.9 g/dL, 7 Possible Causes, Severe iron deficiency, Malaria, Sickle cell disease, Chronic kidney disease, Tuberculosis, Thalassemia, Nutritional deficiencies<br>"  + hbv.toFixed(3);
                }
                 else if ((agex > 1 && agex <= 3 && select.value === "F")&&(hbv<7.0))
                 {
                    document.getElementById("fToddlerS").innerHTML = "Severe Anemia <7.0 g/dL, 7 Possible Causes, Severe malaria, Leukemia, Aplastic anemia, Severe sepsis, Massive blood loss, Bone marrow failure, Severe sickle cell disease<br>"  + hbv.toFixed(3);
                 }
                 else if ((agex > 1 && agex <= 3 && select.value === "F")&&(hbv>14.0))
                 {
                    document.getElementById("fToddlerH").innerHTML = "High Hemoglobin >14.0 g/dL: 7 Possible Causes, Dehydration, Polycythemia, High altitude, Chronic lung disease, Congenital heart disease, Renal tumors, Erythropoietin excess<br>"  + hbv.toFixed(3);
                 }
                 //4. Child Female (4–12 Years)
                 if ((agex >=4 && agex <= 12 && select.value === "F")&&(hbv>=11.5&&hbv<=15.5)) 
                 {
                    document.getElementById("fChildN").innerHTML = "Normal Hb 11.5–15.5 g/dL<br>"  + hbv.toFixed(3);
                 }
                  else if ((agex >=4 && agex <= 12 && select.value === "F")&&(hbv>=11.0&&hbv<=11.4)) 
                  {
                        document.getElementById("fChildMi").innerHTML = "Mild Anemia 11.0–11.4 g/dL: 7 Possible Causes, Iron deficiency, Poor diet, Hookworm infestation, Chronic inflammation, Vitamin deficiencies, Malabsorption, Recurrent infections<br>"  + hbv.toFixed(3);
                  }
                  else if ((agex >=4 && agex <= 12 && select.value === "F")&&(hbv>=8.0&&hbv<=10.9)) 
                  {
                        document.getElementById("fChildMo").innerHTML = "Moderate Anemia 8.0–10.9 g/dL: 7 Possible Causes, Iron deficiency anemia, Malaria, Sickle cell disease, Thalassemia, Chronic kidney disease, Tuberculosis, HIV infection<br>"  + hbv.toFixed(3);
                  }
                   else if ((agex >=4 && agex <= 12 && select.value === "F")&&(hbv<8.0))
                   {
                        document.getElementById("fChildS").innerHTML = "Severe Anemia <8.0 g/dL: 7 Possible Causes, Severe malaria, Leukemia, Aplastic anemia, Bone marrow failure, Severe sickle cell disease, Major hemorrhage, Severe sepsis<br>"  + hbv.toFixed(3);
                   }
                    else if ((agex >=4 && agex <= 12 && select.value === "F")&&(hbv>15.5))
                    {
                        document.getElementById("fChildH").innerHTML = "High Hemoglobin >15.5 g/dL: 7 Possible Causes, Dehydration, Polycythemia vera, Chronic hypoxia, Congenital heart disease, High altitude, Smoking exposure, Renal disease<br>"  + hbv.toFixed(3);
                    }
                    //5. Adolescent Female (13–17 Years)
                     if ((agex >=13&& agex <= 17&& select.value === "F")&&(hbv>=12.0&&hbv<=16.0)) 
                     {
                        document.getElementById("fAdolescentN").innerHTML = "Normal Hb 12.0–16.0 g/dL<br>"  + hbv.toFixed(3);
                     }
                      else if ((agex >=13&& agex <= 17&& select.value === "F")&&(hbv>=11.0&&hbv<=11.9))
                      {
                        document.getElementById("fAdolescentMi").innerHTML = "Mild Anemia 11.0–11.9 g/dL: 7 Possible Causes, Menstrual blood loss, Iron deficiency, Poor nutrition, Malaria, Chronic disease, Folate deficiency, Vitamin B12 deficiency<br>"  + hbv.toFixed(3);
                      }
                      else if ((agex >=13&& agex <= 17&& select.value === "F")&&(hbv>=8.0&&hbv<=10.9))
                      {
                        document.getElementById("fAdolescentMo").innerHTML = "Moderate Anemia 8.0–10.9 g/dL: 7 Possible Causes, Severe iron deficiency, Menorrhagia, Sickle cell disease, Thalassemia, Chronic kidney disease, HIV infection, Tuberculosis<br>"  + hbv.toFixed(3);
                      }
                      else if ((agex >=13&& agex <= 17&& select.value === "F")&&(hbv<8.0))
                      {
                        document.getElementById("fAdolescentS").innerHTML = "Severe Anemia <8.0 g/dL: 7 Possible Causes, Severe menorrhagia, Severe malaria, Leukemia, Aplastic anemia, Severe sickle cell disease, Major hemorrhage, Bone marrow failure<br>"  + hbv.toFixed(3);
                      }
                      else if ((agex >=13&& agex <= 17&& select.value === "F")&&(hbv>16.0))
                      {
                        document.getElementById("fAdolescentH").innerHTML = "High Hemoglobin >16.0 g/dL: 7 Possible Causes: Dehydration, Smoking, Polycythemia vera, High altitude, Chronic hypoxia, Congenital heart disease, Erythropoietin-producing tumors<br>"  + hbv.toFixed(3);
                      }
                      //6. Young Adult Female (18–39 Years)
                       if ((agex >=18&& agex <= 39&& select.value === "F")&&(hbv>=12.0&&hbv<=15.5)) 
                       {
                        document.getElementById("fYoungAdultN").innerHTML = "Normal Hb 12.0–15.5 g/dL<br>"  + hbv.toFixed(3);
                       }
                        else if ((agex >=18&& agex <= 39&& select.value === "F")&&(hbv>=11.0&&hbv<=11.9))
                        {
                            document.getElementById("fYoungAdultMi").innerHTML = "Mild Anemia 11.0–11.9 g/dL: 7 Possible Causes, Menstrual blood loss, Iron deficiency, Pregnancy, Chronic disease, Malaria,Folate deficiency, Vitamin B12 deficiency<br>"  + hbv.toFixed(3);
                        }
                        else if ((agex >=18&& agex <= 39&& select.value === "F")&&(hbv>=8.0&&hbv<=10.9))
                        {
                            document.getElementById("fYoungAdultMo").innerHTML = "Moderate Anemia 8.0–10.9 g/dL: 7 Possible Causes, Severe iron deficiency, Menorrhagia, Chronic kidney disease, Gastrointestinal bleeding, HIV infection, Thalassemia, Sickle cell disease<br>"  + hbv.toFixed(3);
                        }
                        else if ((agex >=18&& agex <= 39&& select.value === "F")&&(hbv<8.0))
                        {
                            document.getElementById("fYoungAdultS").innerHTML = "Severe Anemia <8.0 g/dL: 7 Possible Causes, Massive hemorrhage, Severe malaria, Leukemia, Aplastic anemia, Severe menorrhagia, Bone marrow failure, Advanced kidney disease<br>"  + hbv.toFixed(3);
                        }
                         else if ((agex >=18&& agex <= 39&& select.value === "F")&&(hbv>15.5))
                         {
                            document.getElementById("fYoungAdultH").innerHTML = "High Hemoglobin >15.5 g/dL: 7 Possible Causes, Dehydration, Smoking, Polycythemia vera, High altitude, Chronic lung disease, Congenital heart disease, Erythropoietin excess<br>"  + hbv.toFixed(3);
                         }
                         //7. Middle-Aged Female (40–64 Years)
                         if ((agex >=40&& agex <= 64&& select.value === "F")&&(hbv>=12.0&&hbv<=15.5)) 
                         {
                            document.getElementById("fMiddleAgedN").innerHTML = "Normal Hb 12.0–15.5 g/dL<br>"  + hbv.toFixed(3);
                         }
                          else if ((agex >=40&& agex <= 64&& select.value === "F")&&(hbv>=11.0&&hbv<=11.9))
                          {
                            document.getElementById("fMiddleAgedMi").innerHTML = "Mild Anemia 11.0–11.9 g/dL: 7 Possible Causes, Iron deficiency, Chronic kidney disease, Chronic inflammation, Gastrointestinal bleeding, Cancer, Nutritional deficiency, Liver disease<br>"  + hbv.toFixed(3);
                          }
                           else if ((agex >=40&& agex <= 64&& select.value === "F")&&(hbv>=8.0&&hbv<=10.9))
                           {
                                document.getElementById("fMiddleAgedMo").innerHTML = "Moderate Anemia 8.0–10.9 g/dL: 7 Possible Causes, Severe iron deficiency, Chronic kidney disease, Malignancy, Gastrointestinal bleeding, HIV infection, Bone marrow disorders, Chronic inflammatory disease<br>"  + hbv.toFixed(3);
                           }
                            else if ((agex >=40&& agex <= 64&& select.value === "F")&&(hbv<8.0))
                            {
                                document.getElementById("fMiddleAgedS").innerHTML = "Severe Anemia <8.0 g/dL: 7 Possible Causes, Major hemorrhage, Leukemia, Aplastic anemia, Advanced cancer, Bone marrow failure, Severe kidney disease, Severe gastrointestinal bleeding<br>"  + hbv.toFixed(3);
                            }
                            //8. Elderly Female (≥65 Years)
                            if ((agex >=65)&&(select.value === "F")&&(hbv>=12.0&&hbv<=15.5)) 
                            {
                                document.getElementById("fElderlyN").innerHTML = "Normal Hb 11.5–15.5 g/dL<br>"  + hbv.toFixed(3);
                            }
                             else if ((agex >=65)&&(select.value === "F")&&(hbv>=10.0&&hbv<=11.4))
                             {
                                document.getElementById("fElderlyMi").innerHTML = "Mild Anemia 10.0–11.4 g/dL: 7 Possible Causes, Iron deficiency, Vitamin B12 deficiency, Folate deficiency, Chronic kidney disease, Chronic inflammation, Gastrointestinal bleeding, Myelodysplastic syndrome<br>"  + hbv.toFixed(3);
                             }
                             else if ((agex >=65)&&(select.value === "F")&&(hbv>=8.0&&hbv<=9.9))
                             {
                                 document.getElementById("fElderlyMo").innerHTML = "Moderate Anemia 8.0–9.9 g/dL: 7 Possible Causes, Chronic kidney disease, Cancer, Severe iron deficiency, Bone marrow disorders, Chronic gastrointestinal bleeding, Myelodysplastic syndrome, Chronic inflammatory diseases<br>"  + hbv.toFixed(3);
                             }
                             else if ((agex >=65)&&(select.value === "F")&&(hbv<8.0))
                             {
                                document.getElementById("fElderlyS").innerHTML = "Severe Anemia <8.0 g/dL: 7 Possible Causes, Advanced cancer, Bone marrow failure, Leukemia, Severe gastrointestinal bleeding, End-stage kidney disease, Aplastic anemia, Severe nutritional deficiency<br>"  + hbv.toFixed(3);
                             }
                              else if ((agex >=65)&&(select.value === "F")&&(hbv>15.5))
                              {
                                document.getElementById("fElderlyH").innerHTML = "High Hemoglobin >15.5 g/dL: 7 Possible Causes, Dehydration, Smoking, Chronic obstructive pulmonary disease (COPD), Polycythemia vera, High altitude, Chronic hypoxia, Renal tumors<br>"  + hbv.toFixed(3);
                              }
}
//Bishop score
function bishopScore() {
    let ceDi = parseInt(document.getElementById("cd").value) || 0;
    let ceEf = parseInt(document.getElementById("ce").value) || 0;
    let ceCo = parseInt(document.getElementById("cc").value) || 0;
    let cePo = parseInt(document.getElementById("cp").value) || 0;
    let feSt = parseInt(document.getElementById("fs").value) || 0;

    let bsTotal = ceDi + ceEf + ceCo + cePo + feSt;
    let message = "";

    if (bsTotal >= 8) {
        message = "Cervix favorable, induction likely to succeed.<br>" +
                  "✅ Suggestion: Proceed with induction of labor; monitor maternal and fetal status closely.<br>" +
                  "The Bishop Score is: " + bsTotal;
    } else if (bsTotal <= 5) {
        message = "Cervix unfavorable, induction less likely to succeed.<br>" +
                  "⚠️ Suggestion: Consider cervical ripening agents (e.g., prostaglandins) or mechanical methods before induction.<br>" +
                  "The Bishop Score is: " + bsTotal;
    } else {
        message = "Intermediate, may require cervical ripening before induction.<br>" +
                  "ℹ️ Suggestion: Assess maternal/fetal readiness and consider ripening interventions prior to induction attempt.<br>" +
                  "The Bishop Score is: " + bsTotal;
    }

    document.getElementById("bTotal").innerHTML = message;
}

//Ferriman‑Gallwey Parameters
function fgp() {
    let ul = parseInt(document.getElementById("ulh").value) || 0;
    let chi = parseInt(document.getElementById("ch").value) || 0;
    let che = parseInt(document.getElementById("chbb").value) || 0;
    let uab = parseInt(document.getElementById("uabh").value) || 0;
    let la = parseInt(document.getElementById("lah").value) || 0;
    let ua = parseInt(document.getElementById("uah").value) || 0;
    let t = parseInt(document.getElementById("th").value) || 0;
    let ub = parseInt(document.getElementById("ubh").value) || 0;
    let lb = parseInt(document.getElementById("lbh").value) || 0;

    let fx = ul + chi + che + uab + la + ua + t + ub + lb;
    let message = "";

    if (fx <= 7) {
        message = "Normal.<br>" +
                  "✅ Suggestion: No intervention required; reassure and monitor if patient is concerned.<br>" +
                  "The Score is: " + fx;
    } else if (fx >= 8 && fx <= 15) {
        message = "Moderate hirsutism.<br>" +
                  "⚠️ Suggestion: Consider endocrine evaluation (e.g., PCOS, adrenal causes) and discuss cosmetic or medical management options.<br>" +
                  "The Score is: " + fx;
    } else {
        message = "Severe hirsutism.<br>" +
                  "🚨 Suggestion: Full endocrine workup recommended; initiate treatment options (hormonal therapy, anti-androgens) and address psychosocial impact.<br>" +
                  "The Score is: " + fx;
    }

    document.getElementById("fxx").innerHTML = message;
}

//Biophysical profile
function bpp() {
    let fbrmo = parseInt(document.getElementById("fbrm").value) || 0;
    let fbomo = parseInt(document.getElementById("fbom").value) || 0;
    let fto = parseInt(document.getElementById("ft").value) || 0;
    let afvo = parseInt(document.getElementById("afv").value) || 0;
    let nste = parseInt(document.getElementById("nst").value) || 0;

    let gx = fbrmo + fbomo + fto + afvo + nste;
    let message = "";

    if (gx >= 8 && gx <= 10) {
        message = "Normal, reassuring.<br>" +
                  "✅ Suggestion: Continue routine antenatal care and monitoring.<br>" +
                  "The Biophysical Score is: " + gx;
    } else if (gx === 6) {
        message = "Equivocal, repeat testing or consider delivery depending on gestational age.<br>" +
                  "⚠️ Suggestion: Reassess within 24 hours; weigh risks vs. benefits of delivery if term.<br>" +
                  "The Biophysical Score is: " + gx;
    } else {
        message = "Abnormal, possible fetal compromise, delivery often indicated.<br>" +
                  "🚨 Suggestion: Initiate immediate obstetric evaluation; prepare for delivery and neonatal resuscitation.<br>" +
                  "The Biophysical Score is: " + gx;
    }

    document.getElementById("gxx").innerHTML = message;
}

// PRISM (Pediatric Risk of Mortality) Score
function prism() {
    let gcs = parseInt(document.getElementById("prGcs").value) || 0;
    let pr = parseInt(document.getElementById("prPr").value) || 0;
    let sbp = parseInt(document.getElementById("prsbp").value) || 0;
    let hr = parseInt(document.getElementById("prhr").value) || 0;
    let temp = parseInt(document.getElementById("prT").value) || 0;
    let ph = parseInt(document.getElementById("prph").value) || 0;
    let pco2 = parseInt(document.getElementById("ppoco2").value) || 0;
    let ppoo2 = parseInt(document.getElementById("ppoo").value) || 0;
    let glu = parseInt(document.getElementById("g").value) || 0;
    let potass = parseInt(document.getElementById("k").value) || 0;
    let Cr = parseInt(document.getElementById("cr").value) || 0;
    let Wcc = parseInt(document.getElementById("wcc").value) || 0;
    let Pc = parseInt(document.getElementById("pc").value) || 0;
    let Pt = parseInt(document.getElementById("pt").value) || 0;

    let prt = gcs + pr + sbp + hr + temp + ph + pco2 + ppoo2 + glu + potass + Cr + Wcc + Pc + Pt;
    let message = "";

    if (prt >= 0 && prt <= 5) {
        message = "Low risk (<1% Approximate Mortality).<br>" +
                  "✅ Suggestion: Continue standard PICU monitoring and supportive care.<br>" +
                  "The Score is: " + prt;
    } else if (prt >= 6 && prt <= 10) {
        message = "Moderate risk (5–10% Approximate Mortality).<br>" +
                  "⚠️ Suggestion: Intensify monitoring, optimize supportive measures, and anticipate complications.<br>" +
                  "The Score is: " + prt;
    } else {
        message = "High risk (15–25% Approximate Mortality).<br>" +
                  "🚨 Suggestion: Initiate aggressive management, consider advanced interventions, and involve senior PICU staff early.<br>" +
                  "The Score is: " + prt;
    }

    document.getElementById("prTx").innerHTML = message;
}

//Silverman Score
function silverman() {
    let Ucm = parseInt(document.getElementById("ucm").value) || 0;
    let Lcr = parseInt(document.getElementById("lcr").value) || 0;
    let Xr = parseInt(document.getElementById("xr").value) || 0;
    let Nf = parseInt(document.getElementById("nf").value) || 0;
    let Grunt = parseInt(document.getElementById("grunt").value) || 0;

    let st = Ucm + Lcr + Xr + Nf + Grunt;
    let message = "";

    if (st === 0) {
        message = "No respiratory distress.<br>" +
                  "✅ Suggestion: Continue routine newborn monitoring.<br>" +
                  "The Score is: " + st;
    } else if (st >= 1 && st <= 3) {
        message = "Mild distress.<br>" +
                  "⚠️ Suggestion: Provide supportive care (warmth, oxygen if needed) and observe closely.<br>" +
                  "The Score is: " + st;
    } else if (st >= 4 && st <= 6) {
        message = "Moderate distress.<br>" +
                  "⚠️ Suggestion: Initiate oxygen therapy, consider CPAP, and monitor for progression.<br>" +
                  "The Score is: " + st;
    } else {
        message = "Severe distress.<br>" +
                  "🚨 Suggestion: Immediate intervention required — initiate advanced airway support, mechanical ventilation, and call for neonatal intensive care.<br>" +
                  "The Score is: " + st;
    }

    document.getElementById("sT").innerHTML = message;
}

//WHO-Based Pediatric Pneumonia Score
function pneumScore() {
    let Fb = parseInt(document.getElementById("fb").value) || 0;
    let Cid = parseInt(document.getElementById("cid").value) || 0;
    let Osn = parseInt(document.getElementById("osn").value) || 0;
    let Rd = parseInt(document.getElementById("rd").value) || 0;
    let Iatd = parseInt(document.getElementById("iatd").value) || 0;
    let Leth = parseInt(document.getElementById("leth").value) || 0;

    let tx = Fb + Cid + Osn + Rd + Iatd + Leth;
    let message = "";

    if (tx >= 0 && tx <= 2) {
        message = "Non-severe pneumonia → Outpatient care, oral antibiotics.<br>" +
                  "✅ Suggestion: Treat with oral antibiotics, ensure hydration, and follow up within 48 hours.<br>" +
                  "The Score is: " + tx;
    } else if (tx >= 3 && tx <= 4) {
        message = "Severe pneumonia → Hospital admission, oxygen, IV antibiotics.<br>" +
                  "⚠️ Suggestion: Admit for inpatient care, initiate IV antibiotics, provide oxygen therapy, and monitor closely.<br>" +
                  "The Score is: " + tx;
    } else {
        message = "Very severe pneumonia → Urgent hospital care, full supportive therapy.<br>" +
                  "🚨 Suggestion: Immediate hospital admission, initiate IV antibiotics, oxygen, fluid support, and prepare for intensive care if needed.<br>" +
                  "The Score is: " + tx;
    }

    document.getElementById("xTx").innerHTML = message;
}

//Tal Score
function talScore() {
    let Trr = parseInt(document.getElementById("trr").value) || 0;
    let Tw = parseInt(document.getElementById("tw").value) || 0;
    let Tamu = parseInt(document.getElementById("tamu").value) || 0;
    let Tier = parseInt(document.getElementById("tier").value) || 0;
    let Tos = parseInt(document.getElementById("tos").value) || 0;

    let talt = Trr + Tw + Tamu + Tier + Tos;
    let message = "";

    if (talt >= 0 && talt <= 3) {
        message = "Mild asthma exacerbation → Outpatient management, inhaled bronchodilators.<br>" +
                  "✅ Suggestion: Provide inhaled short-acting bronchodilators, monitor response, and arrange follow-up.<br>" +
                  "The Score is: " + talt;
    } else if (talt >= 4 && talt <= 7) {
        message = "Moderate asthma exacerbation → Close monitoring, oxygen, possible hospitalization.<br>" +
                  "⚠️ Suggestion: Administer oxygen, frequent bronchodilators, consider systemic steroids, and monitor closely.<br>" +
                  "The Score is: " + talt;
    } else {
        message = "Severe asthma exacerbation → Emergency intervention, ICU consideration.<br>" +
                  "🚨 Suggestion: Immediate emergency care, continuous nebulization, IV steroids, prepare for ICU admission.<br>" +
                  "The Score is: " + talt;
    }

    document.getElementById("talT").innerHTML = message;
}

//National Early Warning Score 
function news() {
    let Nrr = parseInt(document.getElementById("nrr").value) || 0;
    let Nos = parseInt(document.getElementById("nos").value) || 0;
    let Ntemp = parseInt(document.getElementById("ntemp").value) || 0;
    let Nsbp = parseInt(document.getElementById("nsbp").value) || 0;
    let Nhr = parseInt(document.getElementById("nhr").value) || 0;
    let Ncons = parseInt(document.getElementById("ncons").value) || 0;

    let nt = Nrr + Nos + Ntemp + Nsbp + Nhr + Ncons;
    let message = "";

    if (nt >= 0 && nt <= 4) {
        message = "Low risk → routine monitoring.<br>" +
                  "✅ Suggestion: Continue standard ward observations and reassess regularly.<br>" +
                  "The Score is: " + nt;
    } else if (nt >= 5 && nt <= 6) {
        message = "Medium risk → urgent clinical review.<br>" +
                  "⚠️ Suggestion: Request prompt review by a senior clinician, increase monitoring frequency, and prepare for escalation if deterioration occurs.<br>" +
                  "The Score is: " + nt;
    } else {
        message = "High risk → emergency response, likely ICU transfer.<br>" +
                  "🚨 Suggestion: Activate rapid response team, initiate immediate interventions, and prepare for ICU transfer.<br>" +
                  "The Score is: " + nt;
    }

    document.getElementById("nT").innerHTML = message;
}

//ACS NSQIP → Structured Score
function acs() {
    let Aage = parseInt(document.getElementById("aage").value) || 0;
    let Aasa = parseInt(document.getElementById("aasa").value) || 0;
    let Afs = parseInt(document.getElementById("afs").value) || 0;
    let Acom = parseInt(document.getElementById("acom").value) || 0;
    let Apr = parseInt(document.getElementById("apr").value) || 0;

    let aaa = Aage + Aasa + Afs + Acom + Apr;
    let message = "";

    if (aaa >= 0 && aaa <= 4) {
        message = "Low risk.<br>" +
                  "✅ Suggestion: Proceed with surgery under routine perioperative monitoring.<br>" +
                  "The Score is: " + aaa;
    } else if (aaa >= 5 && aaa <= 9) {
        message = "Moderate risk.<br>" +
                  "⚠️ Suggestion: Optimize comorbidities preoperatively, ensure anesthetic precautions, and increase monitoring.<br>" +
                  "The Score is: " + aaa;
    } else if (aaa >= 10 && aaa <= 14) {
        message = "High risk.<br>" +
                  "⚠️ Suggestion: Detailed preoperative assessment, consider ICU availability post-op, and involve senior anesthesiologist.<br>" +
                  "The Score is: " + aaa;
    } else {
        message = "Very High risk.<br>" +
                  "🚨 Suggestion: Surgery only if life-saving; initiate full perioperative optimization, ICU planning, and multidisciplinary discussion.<br>" +
                  "The Score is: " + aaa;
    }

    document.getElementById("AAA").innerHTML = message;
}

//Prostate risk assessment
function prostate()
{
    let Pinco = parseInt(document.getElementById("pinco").value)||0;
    let Pfre = parseInt(document.getElementById("pfre").value)||0;
    let Pinter = parseInt(document.getElementById("pinter").value)||0;
    let Purg = parseInt(document.getElementById("purg").value)||0;
    let Pweak = parseInt(document.getElementById("pweak").value)||0;
    let Pstrain = parseInt(document.getElementById("pstrain").value)||0;
    let Pnoc = parseInt(document.getElementById("pinco").value)||0;
    let pros = Pinco + Pfre + Pinter + Purg + Pweak + Pstrain + Pnoc;
    if(pros>=0&&pros<=7)
    {
        document.getElementById("Pros").innerHTML = "Mild-Usually manageable with lifestyle adjustments (fluid timing, reducing caffeine/alcohol).Clinical follow-up may be optional unless symptoms worsen.<br>" + "The Sore is;" + pros;
    }
    else if(pros>=8&&pros<=19)
    {
        document.getElementById("Pros").innerHTML = "Moderate-Indicates bothersome urinary issues.Doctors often consider medications (alpha-blockers, 5-alpha reductase inhibitors).Monitoring progression is important.<br>" + "The Sore is;" + pros;
    }
    else
    {
        document.getElementById("Pros").innerHTML = "Severe-o	Strongly impacts quality of life.May require surgical or minimally invasive procedures (e.g., TURP, laser therapy).Urgent referral to urology is recommended.<br>" + "The Sore is;" + pros;
    }
}
//Wells Criteria
function wells()
{
    let Cancer = parseInt(document.getElementById("cancer").value)||0;
    let Paresis = parseInt(document.getElementById("paresis").value)||0;
    let Bedridden = parseInt(document.getElementById("bedridden").value)||0;
    let Tender = parseInt(document.getElementById("tender").value)||0;
    let Swollen = parseInt(document.getElementById("swollen").value)||0;
    let Calf = parseInt(document.getElementById("calf").value)||0;
    let Edema = parseInt(document.getElementById("edema").value)||0;
    let Veins = parseInt(document.getElementById("veins").value)||0;
    let Dvt = parseInt(document.getElementById("dvt").value)||0;
    let Diagnosis = parseInt(document.getElementById("diagnosis").value)||0;
    let wels = Cancer + Paresis + Bedridden + Tender + Swollen + Calf + Edema + Veins + Dvt + Diagnosis;
    if(wels<0)
    {
        document.getElementById("Wels").innerHTML = "Classification: Very low probability.<br>Meaning: An alternative diagnosis is more likely than DVT.<br>Recommendations: Consider other causes of symptoms; DVT testing usually not indicated unless strong clinical suspicion persists<br>" + "The Score is; " + wels;
    }
    else if(wels>=0&&wels<=2)
    {
        document.getElementById("Wels").innerHTML = "Classification: DVT unlikely.<br>Meaning: Probability of DVT is low, but not zero.<br>Recommendations: §	Perform a D‑dimer test If D‑dimer is negative → DVT can be excluded without imaging.If D‑dimer is positive → proceed to ultrasound imaging<br>" + "The Score is; " + wels;
    }
    else
    {
         document.getElementById("Wels").innerHTML = "Classification: DVT likely.<br>Meaning: High probability of DVT.<br>Recommendations:Skip D‑dimer testing and go straight to compression ultrasound.If imaging confirms → initiate anticoagulation therapy. If imaging is negative but suspicion remains → repeat ultrasound in 5–7 days.<br>" + "The Score is; " + wels;

    }
}

//showmenu 

function showCategory() 
{
      // Hide all sections
      document.getElementById("pedst").style.display = "none";
      document.getElementById("obgyt").style.display = "none";
      document.getElementById("imedt").style.display = "none";
      document.getElementById("surgt").style.display = "none";

      // Get selected value
      var selected = document.getElementById("categorySelect").value;

      // Show only the chosen section
      if (selected) 
      {
        document.getElementById(selected).style.display = "block";
      }
}
//PIPASA SCORE 
function ripasa() {
    let ripage = parseFloat(document.getElementById("ripAge").value) || 0;
    let ripgender = parseFloat(document.getElementById("ripGender").value) || 0;
    let rippain = parseFloat(document.getElementById("ripPain").value) || 0;
    let ripmig = parseFloat(document.getElementById("ripMig").value) || 0;
    let ripanor = parseFloat(document.getElementById("ripAnor").value) || 0;
    let ripnv = parseFloat(document.getElementById("ripNv").value) || 0;
    let ripdura = parseFloat(document.getElementById("ripDura").value) || 0;
    let rip48h = parseFloat(document.getElementById("rip48").value) || 0;
    let riprif = parseFloat(document.getElementById("ripRif").value) || 0;
    let ripgua = parseFloat(document.getElementById("ripGua").value) || 0;
    let riprt = parseFloat(document.getElementById("ripRT").value) || 0;
    let riprs = parseFloat(document.getElementById("ripRS").value) || 0;
    let ripf = parseFloat(document.getElementById("ripF").value) || 0;
    let ripwbc = parseFloat(document.getElementById("ripWBC").value) || 0;
    let ripurin = parseFloat(document.getElementById("ripUrin").value) || 0;

    let ripat = ripage + ripgender + rippain + ripmig + ripanor + ripnv + ripdura + rip48h + riprif + ripgua + riprt + riprs + ripf + ripwbc + ripurin;
    let message = "";

    if (ripat >= 7.5) {
        message = "High probability of appendicitis.<br>" +
                  "🚨 Suggestion: Surgical consultation strongly recommended; prepare for appendectomy.<br>" +
                  "The Score is: " + ripat.toFixed(1);
    } else {
        message = "Lower probability of appendicitis.<br>" +
                  "⚠️ Suggestion: Consider imaging (ultrasound/CT) and close clinical observation; repeat scoring if symptoms persist.<br>" +
                  "The Score is: " + ripat.toFixed(1);
    }

    document.getElementById("ripaT").innerHTML = message;
}

//Alvarado Score
function alvaradoScore() {
    let Mop = parseInt(document.getElementById("mop").value) || 0;
    let Anorexia = parseInt(document.getElementById("anorexia").value) || 0;
    let Nausea = parseInt(document.getElementById("nausea").value) || 0;
    let Rlqp = parseInt(document.getElementById("rlqp").value) || 0;
    let Rto = parseInt(document.getElementById("rto").value) || 0;
    let Fever = parseInt(document.getElementById("fever").value) || 0;
    let Leukocytosis = parseInt(document.getElementById("leukocytosis").value) || 0;
    let Stl = parseInt(document.getElementById("stl").value) || 0;

    let alvat = Mop + Anorexia + Nausea + Rlqp + Rto + Fever + Leukocytosis + Stl;
    let message = "";

    if (alvat >= 0 && alvat <= 4) {
        message = "Unlikely appendicitis.<br>" +
                  "✅ Suggestion: Consider alternative diagnoses; outpatient observation may be appropriate.<br>" +
                  "The Score is: " + alvat + "/10";
    } else if (alvat >= 5 && alvat <= 6) {
        message = "Compatible with appendicitis (observation advised).<br>" +
                  "⚠️ Suggestion: Admit for observation, repeat clinical exam, and consider imaging (ultrasound/CT).<br>" +
                  "The Score is: " + alvat + "/10";
    } else {
        message = "Probable appendicitis (surgical evaluation recommended).<br>" +
                  "🚨 Suggestion: Urgent surgical consultation; prepare for appendectomy if confirmed.<br>" +
                  "The Score is: " + alvat + "/10";
    }

    document.getElementById("alvaT").innerHTML = message;
}

function gcs() {
    let Eoq = parseInt(document.getElementById("eoq").value) || 0;  // Eye opening
    let Vrq = parseInt(document.getElementById("vrq").value) || 0;  // Verbal response
    let Mrq = parseInt(document.getElementById("mrq").value) || 0;  // Motor response

    let gcst = Eoq + Vrq + Mrq;
    let message = "";

    if (gcst >= 13 && gcst <= 15) {
        message = "Mild injury.<br>" +
                  "✅ Suggestion: Continue observation, frequent neuro checks, and consider imaging if symptoms persist.<br>" +
                  "The Score is: " + gcst + "/15";
    } else if (gcst >= 9 && gcst <= 12) {
        message = "Moderate injury.<br>" +
                  "⚠️ Suggestion: Admit for close monitoring, initiate neuroimaging, and prepare for possible intervention.<br>" +
                  "The Score is: " + gcst + "/15";
    } else {
        message = "Severe injury.<br>" +
                  "🚨 Suggestion: Immediate airway protection, urgent neuroimaging, neurosurgical consultation, and ICU admission.<br>" +
                  "The Score is: " + gcst + "/15";
    }

    document.getElementById("gcsT").innerHTML = message;
}

//ASCVD Risk Assessment tool
function ascVD()
{
    let ascAGE = parseInt(document.getElementById("ascAge").value)||0;
    let ascSEX = parseInt(document.getElementById("ascSex").value)||0;
    let ascRACE = parseInt(document.getElementById("ascRace").value)||0;
    let asctc = parseInt(document.getElementById("ascTC").value)||0;
    let aschdl = parseInt(document.getElementById("ascHDL").value)||0;
    let ascsbp = parseInt(document.getElementById("ascSBP").value)||0;
    let ascsbpt = parseInt(document.getElementById("ascSBPt").value)||0;
    let ascdm = parseInt(document.getElementById("ascDM").value)||0;
    let ascsmoking = parseInt(document.getElementById("ascSmoking").value)||0;
    let asct = ascAGE + ascSEX + ascRACE + asctc + aschdl + ascsbp + ascsbpt + ascdm + ascsmoking;
    if(asct>=0&&asct<=4)
    {
        document.getElementById("ascT").innerHTML ="Low risk (<5% 10‑year ASCVD risk)<br>Emphasize lifestyle modification: balanced diet, regular physical activity, smoking cessation. 🔹 Routine monitoring every 4–6 years. 🔹 No pharmacological therapy unless other comorbidities exist.<br>" + "The Score is; " + asct;
    }
    else if(asct>=5&&asct<=8)
    {
        document.getElementById("ascT").innerHTML ="Moderate risk (5–10%)<br>Encourage intensive lifestyle changes: DASH or Mediterranean diet, weight control, exercise ≥150 min/week. 🔹 Consider statin therapy if additional risk enhancers (family history, metabolic syndrome, CKD). 🔹 Monitor lipid profile and blood pressure more frequently (every 1–2 years).<br>" + "The Score is; " + asct;
    }
    else if(asct>=9&&asct<=12)
    {
        document.getElementById("ascT").innerHTML ="High risk (10–20%)<br>Initiate statin therapy (moderate to high intensity). 🔹 Manage blood pressure aggressively (<130/80 mmHg). 🔹 Screen for diabetes and treat if present. 🔹 Lifestyle modification remains essential alongside pharmacological therapy.<br>" + "The Score is; " + asct;
    }
    else
    {
         document.getElementById("ascT").innerHTML ="Very high risk (>20%)<br>High‑intensity statin therapy is strongly recommended. 🔹 Consider adding ezetimibe or PCSK9 inhibitors if LDL goals not achieved. 🔹 Strict control of all modifiable risk factors (BP, glucose, smoking). 🔹 Regular follow‑up every 6–12 months with cardiovascular specialist input.<br>" + "The Score is; " + asct;
    }
}
//Headache Assessment Score
function headaches() {
    let a = parseInt(document.getElementById("hasO").value) || 0;   // Onset
    let b = parseInt(document.getElementById("hasD").value) || 0;   // Duration
    let c = parseInt(document.getElementById("hasL").value) || 0;   // Location
    let d = parseInt(document.getElementById("hasRF").value) || 0;  // Risk factors
    let e = parseInt(document.getElementById("hasC").value) || 0;   // Character
    let f = parseInt(document.getElementById("hasAS").value) || 0;  // Associated symptoms
    let g = parseInt(document.getElementById("hasT").value) || 0;   // Triggers

    let h = a + b + c + d + e + f + g;
    let message = "";

    if (h >= 0 && h <= 4) {
        message = "Likely Tension-type headache.<br>" +
                  "✅ Suggestion: Reassure, advise stress reduction, hydration, and simple analgesics if needed.<br>" +
                  "The Score is: " + h;
    } else if (h >= 5 && h <= 8) {
        message = "Likely Migraine.<br>" +
                  "⚠️ Suggestion: Consider migraine-specific therapy (triptans), avoid triggers, and provide supportive care.<br>" +
                  "The Score is: " + h;
    } else {
        message = "Likely Cluster headache.<br>" +
                  "🚨 Suggestion: Urgent treatment with high-flow oxygen, consider specialist referral, and initiate preventive therapy.<br>" +
                  "The Score is: " + h;
    }

    document.getElementById("hasTotal").innerHTML = message;
}

    //Pediatric Malaria Dose Calculator:
    
     let pedMalariaButton = document.getElementById("pediatricDoseCalculator");
    pedMalariaButton.addEventListener("click", pediatricDoseCalculator);
    
    function pediatricDoseCalculator(){
    let malariaType = document.querySelector('input[name="malaria"]:checked');
    let patientWeightMalaria = Number(document.getElementById("ptMalariaWeight").value)||0;
    
    if(malariaType.id==="severe"&&patientWeightMalaria<20){
    let doseOfPatient = patientWeightMalaria*3;
    document.getElementById("malariaDoseCalculatedDisplay").innerHTML = " Dose to be given of I.V Artesunate is: " + doseOfPatient.toFixed(1) + " mg " + " Given at 0, 12, 24 h, then daily ";
    }
    else if(malariaType.id==="severe"&&patientWeightMalaria>=20){
    doseOfPatient = patientWeightMalaria*2.4;
    document.getElementById("malariaDoseCalculatedDisplay").innerHTML = " Dose to be given of I.V Artesunate is: " + doseOfPatient.toFixed(1) + " mg " + " Given at 0, 12, 24 h, then daily " ;
    }
    else if(malariaType.id==="uncomplicated"&&patientWeightMalaria<15){
    document.getElementById("malariaDoseCalculatedDisplay").innerHTML = "Dose to be given of Oral Artemether + lumefantrine per dose is; 20 mg + 120 mg BD × 3 days"
    }
    else if(malariaType.id==="uncomplicated"&&(patientWeightMalaria>=15&&patientWeightMalaria<25)){
    document.getElementById("malariaDoseCalculatedDisplay").innerHTML = "Dose to be given of Oral Artemether + lumefantrine per dose is; 40 mg + 240 mg BD × 3 days"
    }
      else if(malariaType.id==="uncomplicated"&&(patientWeightMalaria>=25&&patientWeightMalaria<35)){
    document.getElementById("malariaDoseCalculatedDisplay").innerHTML = "Dose to be given of Oral Artemether + lumefantrine per dose is; 60 mg + 360 mg BD × 3 days"
    }
    else if(malariaType.id==="uncomplicated"&&patientWeightMalaria>35){
    document.getElementById("malariaDoseCalculatedDisplay").innerHTML = "Dose to be given of Oral Artemether + lumefantrine per dose is; 80 mg + 480 mg BD × 3 days"
    }
    }
    //Yale Observation Scale:
    document.getElementById("yosButton").addEventListener("click", function() {
    let qoc = parseInt(document.getElementById("qoc").nextElementSibling.value) || 0;
    let rtp = parseInt(document.getElementById("rtp").nextElementSibling.value) || 0;
    let sv = parseInt(document.getElementById("sv").nextElementSibling.value) || 0;
    let color = parseInt(document.getElementById("color").nextElementSibling.value) || 0;
    let hydration = parseInt(document.getElementById("hydration").nextElementSibling.value) || 0;
    let rtso = parseInt(document.getElementById("rtso").value) || 0;

    let total = qoc + rtp + sv + color + hydration + rtso;

    let result = "";
    if (total <= 10) {
        result = "Low risk → Likely benign viral illness.";
    } else if (total <= 15) {
        result = "Intermediate risk → Monitor closely, consider further evaluation.";
    } else {
        result = "High risk → Possible serious bacterial infection, urgent assessment needed.";
    }

    document.getElementById("yosDisplay").innerHTML = 
        "Total Score: " + total + "<br>" + result;
});
//Maintenance fluids:

let mfBtn = document.getElementById("mfButton");
mfBtn.addEventListener("click", mfCalculation);

function mfCalculation(){
let mfW = Number(document.querySelector('input[name="mweight"]').value)||0;
if(mfW<=0){
document.getElementById("rmfD").innerHTML = "Kindly enter a valid weight"
}
else if(mfW<=10){
let totalFluids = mfW*100;
document.getElementById("rmfD").innerHTML = "Total fluid requirement is: " + totalFluids.toFixed(1) + " ml/kg/day";
}
else if(mfW>10&&mfW<20){
let totalFluids = (10*100) + (mfW-10)*50;
document.getElementById("rmfD").innerHTML = "Total fluid requirement is: " + totalFluids.toFixed(1) + " ml/kg/day";
}
else if(mfW===20){
let totalFluids = (10*100) + (10*50);
document.getElementById("rmfD").innerHTML = "Total fluid requirement is: " + totalFluids.toFixed(1) + " ml/kg/day";
}
else if(mfW>20){
let totalFluids = (10*100)+(10*50)+(mfW-20)*20;
document.getElementById("rmfD").innerHTML = "Total fluid requirement is: " + totalFluids.toFixed(1) + " ml/kg/day";
}
}
//CHA₂DS₂‑VASc Score
let chaBTN = document.getElementById("chaBtn");
chaBTN.addEventListener("click", chaScore);

function chaScore() {
    let a = parseInt(document.getElementById("chflv").value) || 0;   // Heart failure / LV dysfunction
    let b = parseInt(document.getElementById("chahtn").value) || 0; // Hypertension
    let c = parseInt(document.getElementById("chaage").value) || 0; // Age ≥75
    let d = parseInt(document.getElementById("chadm").value) || 0;  // Diabetes mellitus
    let e = parseInt(document.getElementById("chatia").value) || 0; // Stroke / TIA / Thromboembolism
    let f = parseInt(document.getElementById("chavd").value) || 0;  // Vascular disease
    let g = parseInt(document.getElementById("chaAge").value) || 0; // Age 65–74
    let h = parseInt(document.getElementById("chascf").value) || 0; // Female sex

    let chaTotal = a + b + c + d + e + f + g + h;

    let recommendation = "";
    if (chaTotal === 0) {
        recommendation = "Low risk (no anticoagulation needed)";
    } else if (chaTotal === 1) {
        recommendation = "Intermediate risk (consider anticoagulation)";
    } else {
        recommendation = "High risk (anticoagulation recommended)";
    }

    document.getElementById("chaT").innerHTML =
        recommendation + "<br>The CHA₂DS₂‑VASc Score is: " + chaTotal;
}
//Pre-Eclampsia Risk Assessment; 
let preeBtn = document.getElementById("peratBtn");
preeBtn.addEventListener("click", peraTool);

function peraTool() {
    // Collect values (checkboxes or radio buttons should return 1 if selected, else 0)
    let htn   = parseInt(document.getElementById("hdipp").value) || 0;
    let ckd   = parseInt(document.getElementById("peckd").value) || 0;
    let aid   = parseInt(document.getElementById("peaid").value) || 0;
    let dm    = parseInt(document.getElementById("pedm").value) || 0;
    let chtn  = parseInt(document.getElementById("chtn").value) || 0;

    let pefp  = parseInt(document.getElementById("pefp").value) || 0;
    let peage = parseInt(document.getElementById("peage").value) || 0;
    let pepi  = parseInt(document.getElementById("pepi").value) || 0;
    let pebmi = parseInt(document.getElementById("pebmi").value) || 0;
    let fhope = parseInt(document.getElementById("fhope").value) || 0;
    let pemp  = parseInt(document.getElementById("pemp").value) || 0;

    // Calculate risk categories
    let highRisk     = htn + ckd + aid + dm + chtn;
    let moderateRisk = pefp + peage + pepi + pebmi + fhope + pemp;
    let overall      = highRisk + moderateRisk;

    let category = "";
    let recommendation = "";
    let lifestyle = "";

    if (highRisk >= 2) {
        category = "High Risk";
        recommendation = "Aspirin prophylaxis (75–150 mg daily) from 12 weeks until birth.";
        lifestyle = "Close antenatal monitoring, blood pressure checks, urine protein testing, fetal growth scans.";
    } else if (moderateRisk >= 2) {
        category = "Moderate Risk";
        recommendation = "Aspirin prophylaxis (75–150 mg daily) from 12 weeks until birth.";
        lifestyle = "Maintain healthy weight, balanced diet, regular antenatal visits, monitor blood pressure.";
    } else {
        category = "Low Risk";
        recommendation = "Routine antenatal care — aspirin not indicated.";
        lifestyle = "General pregnancy wellness: exercise as tolerated, avoid smoking/alcohol, attend scheduled antenatal visits.";
    }

    document.getElementById("peratDisplay").innerHTML =
        "<b>Risk Category:</b> " + category + "<br>" +
        "<b>Recommendation:</b> " + recommendation + "<br>" +
        "<b>Lifestyle Modifications:</b> " + lifestyle + "<br>" +
        "<b>Total Score:</b> " + overall;
}
//Jones Criteria
// Jones Criteria
let jonesBtn = document.getElementById("jonesBtn");
jonesBtn.addEventListener("click", jonesCriteria);

function jonesCriteria() {
    // Major criteria inputs
    let a = parseInt(document.getElementById("ccosoe").value) || 0;   // Carditis
    let b = parseInt(document.getElementById("pamlj").value) || 0;   // Polyarthritis
    let c = parseInt(document.getElementById("csim").value) || 0;    // Chorea
    let d = parseInt(document.getElementById("emrbs").value) || 0;   // Erythema marginatum
    let e = parseInt(document.getElementById("scnfpnobp").value) || 0; // Subcutaneous nodules

    // Minor criteria inputs
    let f = parseInt(document.getElementById("fdorg").value) || 0;   // Fever
    let g = parseInt(document.getElementById("ajpws").value) || 0;   // Arthralgia
    let h = parseInt(document.getElementById("eeoc").value) || 0;    // Elevated ESR/CRP
    let i = parseInt(document.getElementById("ppioe").value) || 0;   // Prolonged PR interval

    // Totals
    let major = a + b + c + d + e;
    let minor = f + g + h + i;

    // Diagnostic logic
    let result = "";
    if (major >= 2) {
        result = "Diagnosis supported: 2 majors criteria present .";
    } else if (major === 1 && minor >= 2) {
        result = "Diagnosis supported: 1 major + 2 minor criteria.";
    } else {
        result = "Criteria not sufficient for diagnosis of acute rheumatic fever.";
    }

    // Display result
    document.getElementById("jonesDisplay").innerHTML =
        "Major: " + major + "<br>" +
        "Minor: " + minor + "<br>" +
        result;
}
//TBSA
let tbsaBtn = document.getElementById("tbsaBtn");
tbsaBtn.addEventListener("click", tbsa);

function tbsa() {
    let tbsaWt = Number(document.getElementById("tbsaWt").value || 0);
    let tbsaHt = Number(document.getElementById("tbsaHt").value || 0);

    // Mosteller formula: BSA = sqrt((Height(cm) * Weight(kg)) / 3600)
    let bsa = Math.sqrt((tbsaHt * tbsaWt) / 3600);

    let category = "";
    let risks = "";
    let recommendations = "";

    if (bsa < 1.5) {
        category = "Low BSA (<1.5 m²)";
        risks = "Risk: Underdosing of medications, limited metabolic reserve.";
        recommendations = "Recommendation: Adjust drug dosing carefully, monitor nutrition.";
    } else if (bsa >= 1.5 && bsa <= 2.0) {
        category = "Normal BSA (1.5–2.0 m²)";
        risks = "Risk: Lowest risk, standard dosing applies.";
        recommendations = "Recommendation: Maintain balanced nutrition and hydration.";
    } else {
        category = "High BSA (>2.0 m²)";
        risks = "Risk: Higher metabolic demand, risk of overdosing if not adjusted.";
        recommendations = "Recommendation: Tailor chemotherapy/critical care dosing, monitor closely.";
    }

    document.getElementById("tbsaDisplay").innerHTML =
        "Total Body Surface Area (BSA): " + bsa.toFixed(2) + " m²<br>" +
        "Category: " + category + "<br>" +
        risks + "<br>" +
        recommendations;
}
let rbsBtn = document.getElementById("rbsBtn");
rbsBtn.addEventListener("click", rbsReading);

function rbsReading() {
  let rbsInput = Number(document.getElementById("rbs").value);
  let output = "";

  if (rbsInput < 3.9) {
    output =
      "🩸 Hypoglycemia\n" +
      "Interpretation: Low blood sugar.\n" +
      "Possible causes: Missed meals, insulin/sulfonylurea overdose, prolonged exercise, alcohol use.\n" +
      "Next step at hospital: Immediate glucose administration (oral or IV), monitor vitals, investigate underlying cause.\n" +
      "Consequences if untreated: Seizures, coma, brain injury, death.";
  } else if (rbsInput >= 3.9 && rbsInput <= 7.7) {
    output =
      "✅ Normal\n" +
      "Interpretation: Acceptable glucose range for most adults regardless of meals.\n" +
      "Possible causes: Balanced diet, normal insulin function.\n" +
      "Next step at hospital: Routine follow‑up only if risk factors present.\n" +
      "Consequences if untreated: None — this is a healthy range.";
  } else if (rbsInput >= 7.8 && rbsInput <= 11.0) {
    output =
      "⚠️ Prediabetes / Impaired Glucose Tolerance\n" +
      "Interpretation: Borderline range; requires confirmatory testing.\n" +
      "Possible causes: Early insulin resistance, obesity, sedentary lifestyle, family history.\n" +
      "Next step at hospital: Order fasting glucose or HbA1c, lifestyle counseling, weight management.\n" +
      "Consequences if untreated: Progression to type 2 diabetes, cardiovascular disease risk.";
  } else if (rbsInput >= 11.1) {
    output =
      "🚨 Diabetes (if symptoms present)\n" +
      "Interpretation: Diagnostic threshold for diabetes when classic symptoms are present.\n" +
      "Possible causes: Type 2 diabetes, type 1 diabetes, steroid use, pancreatic disease.\n" +
      "Next step at hospital: Confirm with repeat test or HbA1c, initiate diabetes management plan (diet, medication, insulin if needed).\n" +
      "Consequences if untreated: Persistent hyperglycemia leading to neuropathy, nephropathy, retinopathy, cardiovascular complications.";
  } else {
    output = "❓ Invalid input. Please enter a valid RBS value in mmol/L.";
  }

  document.getElementById("rbsDisplay").textContent = output;
}


document.getElementById("mgBtn").addEventListener("click", function() {
  const percent = parseFloat(document.getElementById("percent").value);
  const wtv = parseFloat(document.getElementById("wtv").value);
  let output = "";

  if (isNaN(percent) || isNaN(wtv) || percent <= 0 || wtv <= 0) {
    document.getElementById("mgDisplay").innerHTML = "⚠️ Please enter valid values.";
    return;
  }

  // Convert % to mg/mL (1% = 10 mg/mL)
  const sourceConc = percent * 10;

  // --- 4 g IV at 20% ---
  const doseIV = 4000; // mg
  const targetConcIV = 200; // mg/mL (20%)
  const volStockIV = doseIV / sourceConc;
  const finalVolIV = doseIV / targetConcIV;
  const diluentIV = finalVolIV - volStockIV;

  // --- 10 g IM at 50% ---
  const doseIM = 10000; // mg
  const targetConcIM = 500; // mg/mL (50%)
  const volStockIM = doseIM / sourceConc;
  const perButtock = volStockIM / 2;

  output += `<h3>💉 Pre‑eclampsia Regimen Preparation</h3>`;

  output += `<strong>4 g IV (20% solution):</strong><br>
    - Draw <b>${volStockIV.toFixed(2)} mL</b> of ${percent}% stock (${sourceConc} mg/mL)<br>
    - Dilute with <b>${diluentIV.toFixed(2)} mL</b> of NS/D5W<br>
    - Final volume: <b>${finalVolIV.toFixed(2)} mL</b> at 20% concentration<br>
    - Infuse over 20–30 minutes<br><br>`;

  output += `<strong>10 g IM (50% solution):</strong><br>
    - Draw <b>${volStockIM.toFixed(2)} mL</b> of ${percent}% stock (${sourceConc} mg/mL)<br>
    - Divide into two syringes: <b>${perButtock.toFixed(2)} mL</b> per buttock (5 g each)<br>
    - No dilution required if stock is already 50%<br><br>`;

  output += `<h3>⚠️ Safety Monitoring</h3>
    - Check patellar reflexes before each dose<br>
    - Ensure respiratory rate > 16/min<br>
    - Maintain urine output > 25 mL/hr<br>
    - Keep calcium gluconate antidote available<br>`;

  document.getElementById("mgDisplay").innerHTML = output;
});

//Duke's criteria;
let dcBtn = document.getElementById("dcBtn");
dcBtn.addEventListener("click", dukeScore);

function dukeScore() {
    // Major criteria
    let a = parseInt(document.getElementById("hacek").value) || 0;
    let b = parseInt(document.getElementById("bacteremia").value) || 0;
    let c = parseInt(document.getElementById("coxiella").value) || 0;
    let d = parseInt(document.getElementById("eoei").value) || 0;
    let e = parseInt(document.getElementById("Ecfs").value) || 0;
    let f = parseInt(document.getElementById("nvr").value) || 0;
    let g = parseInt(document.getElementById("aipet").value) || 0;

    // Minor criteria
    let h = parseInt(document.getElementById("pdhc").value) || 0;
    let i = parseInt(document.getElementById("iecf").value) || 0;
    let j = parseInt(document.getElementById("ievpS").value) || 0;
    let k = parseInt(document.getElementById("ipgorrf").value) || 0;
    let l = parseInt(document.getElementById("ieme").value) || 0;

    // Count totals
    let majorCount = a + b + c + d + e + f + g;
    let minorCount = h + i + j + k + l;

    // Apply Duke’s diagnostic categories
    let result = "";
    if (majorCount >= 2 || (majorCount === 1 && minorCount >= 3) || minorCount >= 5) {
        result = "Definite Infective Endocarditis";
    } else if ((majorCount === 1 && minorCount >= 1) || minorCount >= 3) {
        result = "Possible Infective Endocarditis";
    } else {
        result = "Rejected (criteria not met)";
    }

    // Display result
    document.getElementById("dcDisplay").innerHTML =
        "Major criteria: " + majorCount + "<br>" +
        "Minor criteria: " + minorCount + "<br>" +
        "→ " + result;
}
//pecarn
let pecarnBtn = document.getElementById("pecarnBtn");
pecarnBtn.addEventListener("click", pecarn);

function pecarn() {
    // Parse inputs as integers (default 0 if empty)
    let gcs = parseInt(document.getElementById("pecGcs").value) || 0;
    let ams = parseInt(document.getElementById("pecAms").value) || 0;
    let psf = parseInt(document.getElementById("pecPsf").value) || 0;   // palpable skull fracture
    let nfsh = parseInt(document.getElementById("pecNfsh").value) || 0; // non-frontal scalp hematoma
    let loc = parseInt(document.getElementById("pecLoc").value) || 0;   // loss of consciousness
    let smoi = parseInt(document.getElementById("pecSmoi").value) || 0; // severe mechanism of injury
    let abpp = parseInt(document.getElementById("pecAbpp").value) || 0; // abnormal behavior per parent
    let nota = parseInt(document.getElementById("pecNota").value) || 0; // optional extra field

    // High-risk predictors
    let highRisk = (gcs || ams || psf);

    // Intermediate-risk predictors
    let intermediateRisk = (nfsh || loc || smoi || abpp);

    // Decision logic
    let result;
    if (highRisk) {
        result = "High Risk – CT recommended";
    } else if (intermediateRisk) {
        result = "Intermediate Risk – CT vs Observation";
    } else {
        result = "Very Low Risk – No CT needed";
    }

    document.getElementById("pecResult").innerHTML = result;
}

let imedChoice = document.getElementById("imedChoice");
imedChoice.addEventListener("change", internalMedicine);

function internalMedicine() {
    // Hide all sections
    document.getElementById("bmix").style.display = "none";
    document.getElementById("vitalsx").style.display = "none";
    document.getElementById("hbx").style.display = "none";
    document.getElementById("curbx").style.display = "none";
    document.getElementById("ascvdx").style.display = "none";
    document.getElementById("headachex").style.display = "none";
    document.getElementById("lungx").style.display = "none";
    document.getElementById("heartx").style.display = "none";
    document.getElementById("chadx").style.display = "none";
    document.getElementById("tbsax").style.display = "none";
    document.getElementById("rbsx").style.display = "none";

    // Show chosen one
    let picked = imedChoice.value;
    if (picked) {
        document.getElementById(picked).style.display = "block";
    }
}


let pedChoice = document.getElementById("pedChoice");
pedChoice.addEventListener("change", pediatrics);

function pediatrics() {
    // Hide all sections
    document.getElementById("prism").style.display = "none";
    document.getElementById("silverman").style.display = "none";
    document.getElementById("pneumonia").style.display = "none";
    document.getElementById("tal").style.display = "none";
    document.getElementById("pmdc").style.display = "none";
    document.getElementById("yos").style.display = "none";
    document.getElementById("mfic").style.display = "none";
    document.getElementById("jones").style.display = "none";
    document.getElementById("duke").style.display = "none";
    document.getElementById("pecarn").style.display = "none";

    // Show chosen one
    let pointed = pedChoice.value;
    if (pointed) {
        document.getElementById(pointed).style.display = "block";
    }
}


let surgPick = document.getElementById("surgPick");
surgPick.addEventListener("change", surgery);

function surgery() {
    // Hide all sections
    document.getElementById("possum").style.display = "none";
    document.getElementById("news").style.display = "none";
    document.getElementById("acs").style.display = "none";
    document.getElementById("pra").style.display = "none";
    document.getElementById("wells").style.display = "none";
    document.getElementById("ripasa").style.display = "none";
    document.getElementById("alvarado").style.display = "none";
    document.getElementById("glasgow").style.display = "none";

    // Show chosen one
    let sun = surgPick.value;
    if (sun) {
        document.getElementById(sun).style.display = "block";
    }
}


let obGy = document.getElementById("obGy");
obGy.addEventListener("change", obgy);

function obgy() {
    // Hide all sections
    document.getElementById("apgar").style.display = "none";
    document.getElementById("bishop").style.display = "none";
    document.getElementById("ferriman").style.display = "none";
    document.getElementById("biophysical").style.display = "none";
    document.getElementById("pera").style.display = "none";
    document.getElementById("mgso").style.display = "none";
   

    // Show chosen one
    let moon = obGy.value;
    if (moon) {
        document.getElementById(moon).style.display = "block";
    }
}
