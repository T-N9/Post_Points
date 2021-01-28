// Rankကို စစ်ဆေးပြီး URLကို replaceလုပ်ပေးသွားမည့် Function 
function rankActivate(){
    let rankValue= document.getElementById('currentRank');
    let currentRank=rankValue.value;
    let chForm= document.getElementById('chForm');

    if(currentRank== 't'){
        window.location.replace("https://t-n9.github.io/Post_Points/rank/tutor.html")
    }
    else if(currentRank=='al'){
        window.location.replace("https://t-n9.github.io/Post_Points/rank/a_lecturer.html")
    }
    else if(currentRank=='l'){
        window.location.replace("https://t-n9.github.io/Post_Points/rank/lecturer.html")
    }
    else if(currentRank=='ap'){
        window.location.replace("https://t-n9.github.io/Post_Points/rank/a_professor.html")
    }
    else if(currentRank==''){
        chForm.classList.remove('d-none');
        chForm.classList.add('d-block');
    }
    else{
        window.location.replace("https://t-n9.github.io/Post_Points/rank/professor.html")
    }
}


// Reuseable Header Component
let _header=document.getElementById('myHeader');
_header.innerHTML=`<div class="d-flex justify-content-between align-items-center">
<a href="https://t-n9.github.io/Post_Points/"><img class="app-logo" src="../img/icons8-curly-arrow-64.png" alt="my-logo"></a>
<div class="app-info"><i class="fas fa-info-circle"></i></div>
</div>`;

// Declarations
var tStartDate,tEndDate,alStartDate,alEndDate,lStartDate,lEndDate,apStartDate,apEndDate,pStartDate,pEndDate;
var mark=6;
let extraMonth=0;
var fillForm= document.getElementById('fillForm');
var examineForm=document.getElementById('exForm');

var t_invalidForm= document.getElementById('t_invalidForm');
var al_invalidForm= document.getElementById('al_invalidForm');
var l_invalidForm= document.getElementById('l_invalidForm');
var ap_invalidForm= document.getElementById('ap_invalidForm');
var p_invalidForm= document.getElementById('p_invalidForm');

let inputFields=document.getElementById('dateCal');

inputFields.onclick=function(){
    document.getElementById('tableWrapper').classList.remove('approved-result');
}


//Value maintainer functions
function t_valueMaintain(){
    let All_total_Mark=document.getElementById('totalMark');
    let value_t_Answer=document.getElementById('tutorAnswer');
    let value_t_Mark=document.getElementById('tutorMark');
    let has_t_invalidForm=t_invalidForm.classList.contains('d-block');

    if(has_t_invalidForm){
        console.log("Deleting");
        value_t_Answer.innerHTML=value_t_Mark.innerHTML=All_total_Mark.innerHTML="";
    }
}

function al_valueMaintain(){
    let has_fillForm=fillForm.classList.contains('d-block');
    let has_t_invalidForm=t_invalidForm.classList.contains('d-block');
    let has_al_invalidForm=al_invalidForm.classList.contains('d-block');
    let has_exForm=examineForm.classList.contains('d-block');

    let All_total_Mark=document.getElementById('totalMark');
    let value_t_Answer=document.getElementById('tutorAnswer');
    let value_t_Mark=document.getElementById('tutorMark');

    let value_al_Answer=document.getElementById('a_lecturerAnswer');
    let value_al_Mark=document.getElementById('a_lecturerMark');
    if(has_fillForm || has_t_invalidForm || has_al_invalidForm || has_exForm){
        console.log("Deleting");
        value_t_Answer.innerHTML=value_t_Mark.innerHTML=value_al_Answer.innerHTML=value_al_Mark.innerHTML=All_total_Mark.innerHTML="";
    }
}

function l_valueMaintain(){
    let has_fillForm=fillForm.classList.contains('d-block');
    let has_t_invalidForm=t_invalidForm.classList.contains('d-block');
    let has_al_invalidForm=al_invalidForm.classList.contains('d-block');
    let has_l_invalidForm=l_invalidForm.classList.contains('d-block');
    let has_exForm=examineForm.classList.contains('d-block');

    let All_total_Mark=document.getElementById('totalMark');
    let value_t_Answer=document.getElementById('tutorAnswer');
    let value_t_Mark=document.getElementById('tutorMark');

    let value_al_Answer=document.getElementById('a_lecturerAnswer');
    let value_al_Mark=document.getElementById('a_lecturerMark');

    let value_l_Answer=document.getElementById('lecturerAnswer');
    let value_l_Mark=document.getElementById('lecturerMark');

    if(has_fillForm || has_t_invalidForm || has_al_invalidForm|| has_l_invalidForm || has_exForm){
        console.log("Deleting");
        value_t_Answer.innerHTML=value_t_Mark.innerHTML=value_al_Answer.innerHTML=
        value_al_Mark.innerHTML=value_l_Answer.innerHTML=value_l_Mark.innerHTML=All_total_Mark.innerHTML="";
    }
}

function ap_valueMaintain(){
    let has_fillForm=fillForm.classList.contains('d-block');
    let has_t_invalidForm=t_invalidForm.classList.contains('d-block');
    let has_al_invalidForm=al_invalidForm.classList.contains('d-block');
    let has_l_invalidForm=l_invalidForm.classList.contains('d-block');
    let has_ap_invalidForm=ap_invalidForm.classList.contains('d-block');
    let has_exForm=examineForm.classList.contains('d-block');

    let All_total_Mark=document.getElementById('totalMark');
    let value_t_Answer=document.getElementById('tutorAnswer');
    let value_t_Mark=document.getElementById('tutorMark');

    let value_al_Answer=document.getElementById('a_lecturerAnswer');
    let value_al_Mark=document.getElementById('a_lecturerMark');

    let value_l_Answer=document.getElementById('lecturerAnswer');
    let value_l_Mark=document.getElementById('lecturerMark');

    let value_ap_Answer=document.getElementById('a_professorAnswer');
    let value_ap_Mark=document.getElementById('a_professorMark');
    if(has_fillForm || has_t_invalidForm || has_al_invalidForm|| has_l_invalidForm|| has_ap_invalidForm || has_exForm){
        console.log("Deleting");
        value_t_Answer.innerHTML=value_t_Mark.innerHTML=value_al_Answer.innerHTML=
        value_al_Mark.innerHTML=value_l_Answer.innerHTML=value_l_Mark.innerHTML=value_ap_Answer.innerHTML=value_ap_Mark.innerHTML=All_total_Mark.innerHTML="";
    }
}

function p_valueMaintain(){
    let has_fillForm=fillForm.classList.contains('d-block');
    let has_t_invalidForm=t_invalidForm.classList.contains('d-block');
    let has_al_invalidForm=al_invalidForm.classList.contains('d-block');
    let has_l_invalidForm=l_invalidForm.classList.contains('d-block');
    let has_ap_invalidForm=ap_invalidForm.classList.contains('d-block');
    let has_p_invalidForm=p_invalidForm.classList.contains('d-block');
    let has_exForm=examineForm.classList.contains('d-block');

    let All_total_Mark=document.getElementById('totalMark');
    let value_t_Answer=document.getElementById('tutorAnswer');
    let value_t_Mark=document.getElementById('tutorMark');

    let value_al_Answer=document.getElementById('a_lecturerAnswer');
    let value_al_Mark=document.getElementById('a_lecturerMark');

    let value_l_Answer=document.getElementById('lecturerAnswer');
    let value_l_Mark=document.getElementById('lecturerMark');

    let value_ap_Answer=document.getElementById('a_professorAnswer');
    let value_ap_Mark=document.getElementById('a_professorMark');

    let value_p_Answer=document.getElementById('professorAnswer');
    let value_p_Mark=document.getElementById('professorMark');
    if(has_fillForm || has_t_invalidForm || has_al_invalidForm|| has_l_invalidForm|| has_ap_invalidForm|| has_p_invalidForm || has_exForm){
        console.log("Deleting");
        value_t_Answer.innerHTML=value_t_Mark.innerHTML=value_al_Answer.innerHTML=
        value_al_Mark.innerHTML=value_l_Answer.innerHTML=value_l_Mark.innerHTML=value_ap_Answer.innerHTML=value_p_Answer.innerHTML=value_p_Mark.innerHTML=value_ap_Mark.innerHTML=All_total_Mark.innerHTML="";
    }
}

// For Fill Form
function ff_display_n_b(){
    fillForm.classList.remove('d-none');
    fillForm.classList.add('d-block');
}
function ff_display_b_n(){
    fillForm.classList.remove('d-block');
    fillForm.classList.add('d-none');
}

//For Examine Form
function exf_display_n_b(){
    examineForm.classList.remove('d-none');
    examineForm.classList.add('d-block');
}
function exf_display_b_n(){
    examineForm.classList.remove('d-block');
    examineForm.classList.add('d-none');
}
//
//For Tutor
//
// invalidForm Display none to block
function T_if_display_n_b(){
    t_invalidForm.classList.remove('d-none');
    t_invalidForm.classList.add('d-block');
}
// invalidForm Display block to none
function T_if_display_b_n(){
    t_invalidForm.classList.remove('d-block');
    t_invalidForm.classList.add('d-none');
}

//
//For Assistant Lecturer
//
// invalidForm Display none to block
function AL_if_display_n_b(){
    al_invalidForm.classList.remove('d-none');
    al_invalidForm.classList.add('d-block');
}
// invalidForm Display block to none
function AL_if_display_b_n(){
    al_invalidForm.classList.remove('d-block');
    al_invalidForm.classList.add('d-none');
}

//
//For Lecturer
//
// invalidForm Display none to block
function L_if_display_n_b(){
    l_invalidForm.classList.remove('d-none');
    l_invalidForm.classList.add('d-block');
}
// invalidForm Display block to none
function L_if_display_b_n(){
    l_invalidForm.classList.remove('d-block');
    l_invalidForm.classList.add('d-none');
}

//
//For Associated Professor
//
// invalidForm Display none to block
function AP_if_display_n_b(){
    ap_invalidForm.classList.remove('d-none');
    ap_invalidForm.classList.add('d-block');
}
// invalidForm Display block to none
function AP_if_display_b_n(){
    ap_invalidForm.classList.remove('d-block');
    ap_invalidForm.classList.add('d-none');
}

//
//For Professor
//
// invalidForm Display none to block
function P_if_display_n_b(){
    p_invalidForm.classList.remove('d-none');
    p_invalidForm.classList.add('d-block');
}
// invalidForm Display block to none
function P_if_display_b_n(){
    p_invalidForm.classList.remove('d-block');
    p_invalidForm.classList.add('d-none');
}

////////////////////////////




function _professor(){
    // Professor formက start date နှင့် end dateကို ဒီမှာယူ
    let start_date= document.getElementById('professorStartDate');
    let end_date= document.getElementById('professorEndDate');
    // နှစ်ခုစလုံးကို Time format ပြောင်း
    pStartDate=new Date(start_date.value).getTime();
    pEndDate=new Date(end_date.value).getTime();
    // ကွာဟတဲ့အချိန်ကို Date သို့ပြောင်း / Floatတန်ဖိုးရနိုင်
    let diff_Time= pEndDate- pStartDate;
    let total_days= diff_Time/(1000*3600*24);
    // Float တန်ဖိုး Dateကို Year သို့ပြောင်း
    let profitDate= total_days/365;
    let profitYear=parseInt(profitDate);
    // Float တန်ဖိုး Yearကို Month သို့ပြောင်း
    let and_month= (profitDate- profitYear).toFixed(2);
    let p_diffMonth= parseInt(and_month*12);
    // Cross Browser User Inputကို ထိန်းနိုင်ရန် 
    // last_date သည် အနည်းဆုံး ရေွးနိုင်သော သက္ကရာဇ်
    // last_dateထက် ရေှးကျသော input လက်မခံ
    // current_date သည် လက်ရှိ dateကို နောက်ဆုံးထား တွက်နိုင်ရန် 
    // current_dateထက်ကေျာ်လွန်သော input လက်မခံ 
    let current_date=new Date().getTime();
    let last_date=new Date('2000-01-01').getTime();
    // Current condition
    let professor_condition= pStartDate>=last_date && pEndDate<=current_date;
    // other conditions
    let a_professor_condition= apStartDate<last_date || apEndDate>current_date;
    let lecturer_condition= lStartDate<last_date || lEndDate>current_date;
    let a_lecturer_condition= alStartDate<last_date || alEndDate>current_date;
    let tutor_condition=tStartDate<last_date || tEndDate>current_date;
    console.log(apStartDate,apEndDate,pStartDate,pEndDate);
    // ရက်ပိုင်းသာ ကြာမြင့်သော ရာထူးများအတွက်
    let _start_date=new Date(start_date.value).getDate();
    let _end_date=new Date(end_date.value).getDate();
    let _diffDate= _end_date-_start_date;
    // လပိုင်းသာ ကြာမြင့်သောရာထူးများအတွက်
    let _start_month=new Date(start_date.value).getMonth();
    let _end_month=new Date(end_date.value).getMonth();
    let profitMonth;

    if(_end_month-_start_month<0){
       profitMonth= (_end_month-_start_month);
    }else{
        profitMonth= (_end_month-_start_month)+extraMonth;
    }
    // Conditionတစ်ခု၏ ခြွင်းချက်တစ်ခုအတွက် နှစ်ကို တိုက်ရိုက်တွက်ရ
    let _start_year=new Date(start_date.value).getFullYear();
    let _end_year=new Date(end_date.value).getFullYear();
    let _diffYear=_end_year-_start_year;
    console.log("P-->Start Year:"+_start_year+",End Year:"+_end_year,_diffYear,profitYear);
    // Year ခြွင်းချက် condition
    if((profitYear==0 && profitMonth>=0 && _diffDate<=-1) || (profitYear==0 && profitMonth>=1 && _diffDate>=0)){
        profitYear=_diffYear;
    }
    // အနုတ်တန်ဖိုးဖြင့်ထွက်လာသော Month တန်ဖိုး condition
    if (profitMonth<0){
        profitMonth=p_diffMonth+extraMonth;
    }
    // ပုံသေနည်း condition
    if (profitMonth>=6){
        profitYear=profitYear+1;
        profitMonth=0;
    }
    else{
        console.log('Month is not Exceed.');
        extraMonth=profitMonth;
        console.log("exMonth at ap"+extraMonth);
    }
    // Main Equation
    let p_profitMark= profitYear*mark/2;
    // တန်ဖိုးမထည့်/မထည့် စစ်မည့် condition
    if(Number.isNaN(profitYear) || Number.isNaN(profitMonth) ||Number.isNaN(p_profitMark)){
        ff_display_n_b();
    }else{
        // သက္ကရာ်ဇ် ကန့်သတ်ချက်ကို တွက်မည့် condition
        if(professor_condition){
            console.log('lecturer app.')
            // beta_condition = Userထည့်နိုင်သော မှန်ကန်သည့် conditionများ
            let beta_condition=((_diffDate>=0 && profitMonth>=0 && profitYear>=1) || (_diffDate>=0 && profitMonth>=1 && profitYear>=0) || (_diffDate>=1 && profitMonth>=0 && profitYear>=0) || (_diffDate<=-1 && profitMonth>=1 && profitYear>=0) || (_diffDate<=-1 && profitMonth<=-1 && profitYear>=1) || (_diffDate<=-1 && profitMonth>=1 && profitYear>=1) || (_diffDate<=-1 && profitMonth>=0 && profitYear>=1) || (_diffDate>=1 && profitMonth<=-1 && profitYear>=1) || (_diffDate>=0 && profitMonth<=-1 && profitYear>=1));
                console.log("P-->Year"+profitYear+",Month"+profitMonth+",date"+_diffDate);
            // beta_condition စစ်ခြင်း
            if(beta_condition){
                P_if_display_b_n();
                ff_display_b_n();
                document.getElementById('professorAnswer').innerHTML=
                profitYear+'y - '+profitMonth+'m ';
                document.getElementById('professorMark').innerHTML=p_profitMark; 
                if(p_profitMark<0){
                    P_if_display_n_b();
                    p_valueMaintain();
                } 
            }
            else{
                P_if_display_n_b();
            }
        }else{
            if(tutor_condition){
                T_if_display_n_b();
            }
            else if(a_lecturer_condition){
                AL_if_display_n_b();
            }
            else if(lecturer_condition){
                L_if_display_n_b();
            }
            else if(a_professor_condition){
                AP_if_display_n_b();
            }
            else{
                P_if_display_n_b();
            }
            p_valueMaintain();
        }
    } 
    // အခြားသော function များမှ ထပ်ဆင့်အသုံးပြုနိုင်ရန် returnပြန်ပေးခြင်း 
    return extraMonth,pStartDate,pEndDate;
}
// Associated Professor ရာထူးအတွက်
function _a_professor(){
    // Associated Professor formက start date နှင့် end dateကို ဒီမှာယူ
    let start_date= document.getElementById('a_professorStartDate');
    let end_date= document.getElementById('a_professorEndDate');
    // နှစ်ခုစလုံးကို Time format ပြောင်း
    apStartDate=new Date(start_date.value).getTime();
    apEndDate=new Date(end_date.value).getTime();
    // ကွာဟတဲ့အချိန်ကို Date သို့ပြောင်း / Floatတန်ဖိုးရနိုင်
    let diff_Time= apEndDate- apStartDate;
    let total_days= diff_Time/(1000*3600*24);
    // Float တန်ဖိုး Dateကို Year သို့ပြောင်း
    let profitDate= total_days/365;
    let profitYear=parseInt(profitDate);
    // Float တန်ဖိုး Yearကို Month သို့ပြောင်း
    let and_month= (profitDate- profitYear).toFixed(2);
    let ap_diffMonth= parseInt(and_month*12);
    // Cross Browser User Inputကို ထိန်းနိုင်ရန် 
    // last_date သည် အနည်းဆုံး ရေွးနိုင်သော သက္ကရာဇ်
    // last_dateထက် ရေှးကျသော input လက်မခံ
    // current_date သည် လက်ရှိ dateကို နောက်ဆုံးထား တွက်နိုင်ရန် 
    // current_dateထက်ကေျာ်လွန်သော input လက်မခံ 
    let current_date=new Date().getTime();
    let last_date=new Date('2000-01-01').getTime();
    // Current condition
    let a_professor_condition= apStartDate>=last_date && apEndDate<=current_date;
    // other conditions
    let lecturer_condition= lStartDate<last_date || lEndDate>current_date;
    let a_lecturer_condition= alStartDate<last_date || alEndDate>current_date;
    let tutor_condition=tStartDate<last_date || tEndDate>current_date;
    console.log(lStartDate,lEndDate,apStartDate,apEndDate);
    // ရက်ပိုင်းသာ ကြာမြင့်သော ရာထူးများအတွက်
    let _start_date=new Date(start_date.value).getDate();
    let _end_date=new Date(end_date.value).getDate();
    let _diffDate= _end_date-_start_date;
    // လပိုင်းသာ ကြာမြင့်သောရာထူးများအတွက်
    let _start_month=new Date(start_date.value).getMonth();
    let _end_month=new Date(end_date.value).getMonth();
    let profitMonth;

    if(_end_month-_start_month<0){
       profitMonth= (_end_month-_start_month);
    }else{
        profitMonth= (_end_month-_start_month)+extraMonth;
    }
    // Conditionတစ်ခု၏ ခြွင်းချက်တစ်ခုအတွက် နှစ်ကို တိုက်ရိုက်တွက်ရ
    let _start_year=new Date(start_date.value).getFullYear();
    let _end_year=new Date(end_date.value).getFullYear();
    let _diffYear=_end_year-_start_year;
    console.log("AP-->Start Year:"+_start_year+",End Year:"+_end_year,_diffYear,profitYear);
    // Year ခြွင်းချက် condition
    if((profitYear==0 && profitMonth>=0 && _diffDate<=-1) || (profitYear==0 && profitMonth>=1 && _diffDate>=0)){
        profitYear=_diffYear;
    }
    // အနုတ်တန်ဖိုးဖြင့်ထွက်လာသော Month တန်ဖိုး condition
    if (profitMonth<0){
        profitMonth=ap_diffMonth+extraMonth;
    }
    // ပုံသေနည်း condition
    if (profitMonth>=6){
        profitYear=profitYear+1;
        profitMonth=0;
    }
    else{
        console.log('Month is not Exceed.');
        extraMonth=profitMonth;
        console.log("exMonth at ap"+extraMonth);
    }
    // Main Equation
    let ap_profitMark= profitYear*mark/2;
    // တန်ဖိုးမထည့်/မထည့် စစ်မည့် condition
    if(Number.isNaN(profitYear) || Number.isNaN(profitMonth) ||Number.isNaN(ap_profitMark)){
        ff_display_n_b();
    }else{
        // သက္ကရာ်ဇ် ကန့်သတ်ချက်ကို တွက်မည့် condition
        if(a_professor_condition){
            console.log('lecturer app.')
            // beta_condition = Userထည့်နိုင်သော မှန်ကန်သည့် conditionများ
            let beta_condition=((_diffDate>=0 && profitMonth>=0 && profitYear>=1) || (_diffDate>=0 && profitMonth>=1 && profitYear>=0) || (_diffDate>=1 && profitMonth>=0 && profitYear>=0) || (_diffDate<=-1 && profitMonth>=1 && profitYear>=0) || (_diffDate<=-1 && profitMonth<=-1 && profitYear>=1) || (_diffDate<=-1 && profitMonth>=1 && profitYear>=1) || (_diffDate<=-1 && profitMonth>=0 && profitYear>=1) || (_diffDate>=1 && profitMonth<=-1 && profitYear>=1) || (_diffDate>=0 && profitMonth<=-1 && profitYear>=1));
                console.log("AP-->Year"+profitYear+",Month"+profitMonth+",date"+_diffDate);
            // beta_condition စစ်ခြင်း
            if(beta_condition){
                AP_if_display_b_n();
                ff_display_b_n();
                document.getElementById('a_professorAnswer').innerHTML=
                profitYear+'y - '+profitMonth+'m ';
                document.getElementById('a_professorMark').innerHTML=ap_profitMark; 
                if(ap_profitMark<0){
                    AP_if_display_n_b();
                    ap_valueMaintain();
                } 
            }
            else{
                AP_if_display_n_b();
            }
        }else{
            if(tutor_condition){
                T_if_display_n_b();
            }
            else if(a_lecturer_condition){
                AL_if_display_n_b();
            }
            else if(lecturer_condition){
                L_if_display_n_b();
            }
            else{
                AP_if_display_n_b();
            }
            ap_valueMaintain();
        }
    } 
    // အခြားသော function များမှ ထပ်ဆင့်အသုံးပြုနိုင်ရန် returnပြန်ပေးခြင်း 
    return extraMonth,apStartDate,apEndDate;
}
// Lecturer ရာထူးအတွက်
function _lecturer(){
    // Lecturer formက start date နှင့် end dateကို ဒီမှာယူ
    let start_date= document.getElementById('lecturerStartDate');
    let end_date= document.getElementById('lecturerEndDate');
    // နှစ်ခုစလုံးကို Time format ပြောင်း
    lStartDate=new Date(start_date.value).getTime();
    lEndDate=new Date(end_date.value).getTime();
    // ကွာဟတဲ့အချိန်ကို Date သို့ပြောင်း / Floatတန်ဖိုးရနိုင်
    let diff_Time= lEndDate- lStartDate;
    let total_days= diff_Time/(1000*3600*24);
    // Float တန်ဖိုး Dateကို Year သို့ပြောင်း
    let profitDate= total_days/365;
    let profitYear=parseInt(profitDate);
    // Float တန်ဖိုး Yearကို Month သို့ပြောင်း
    let and_month= (profitDate- profitYear).toFixed(2);
    let l_diffMonth= parseInt(and_month*12);
    // Cross Browser User Inputကို ထိန်းနိုင်ရန် 
    // last_date သည် အနည်းဆုံး ရေွးနိုင်သော သက္ကရာဇ်
    // last_dateထက် ရေှးကျသော input လက်မခံ
    // current_date သည် လက်ရှိ dateကို နောက်ဆုံးထား တွက်နိုင်ရန် 
    // current_dateထက်ကေျာ်လွန်သော input လက်မခံ 
    let current_date=new Date().getTime();
    let last_date=new Date('2000-01-01').getTime();
    // Current condition
    let lecturer_condition= lStartDate>=last_date && lEndDate<=current_date;
    // other conditions
    let a_lecturer_condition= alStartDate<last_date || alEndDate>current_date;
    let tutor_condition=tStartDate<last_date || tEndDate>current_date;
    console.log(alStartDate,alEndDate,lStartDate,lEndDate);
    // ရက်ပိုင်းသာ ကြာမြင့်သော ရာထူးများအတွက်
    let _start_date=new Date(start_date.value).getDate();
    let _end_date=new Date(end_date.value).getDate();
    let _diffDate= _end_date-_start_date;
    // လပိုင်းသာ ကြာမြင့်သောရာထူးများအတွက်
    let _start_month=new Date(start_date.value).getMonth();
    let _end_month=new Date(end_date.value).getMonth();
    let profitMonth;

    if(_end_month-_start_month<0){
       profitMonth= (_end_month-_start_month);
    }else{
        profitMonth= (_end_month-_start_month)+extraMonth;
    }
    // Conditionတစ်ခု၏ ခြွင်းချက်တစ်ခုအတွက် နှစ်ကို တိုက်ရိုက်တွက်ရ
    let _start_year=new Date(start_date.value).getFullYear();
    let _end_year=new Date(end_date.value).getFullYear();
    let _diffYear=_end_year-_start_year;
    console.log("L-->Start Year:"+_start_year+",End Year:"+_end_year,_diffYear,profitYear);
    // Year ခြွင်းချက် condition
    if((profitYear==0 && profitMonth>=0 && _diffDate<=-1) || (profitYear==0 && profitMonth>=1 && _diffDate>=0)){
        profitYear=_diffYear;
    }
    // အနုတ်တန်ဖိုးဖြင့်ထွက်လာသော Month တန်ဖိုး condition
    if (profitMonth<0){
        profitMonth=l_diffMonth+extraMonth;
    }
    // ပုံသေနည်း condition
    if (profitMonth>=6){
        profitYear=profitYear+1;
        profitMonth=0;
    }
    else{
        console.log('Month is not Exceed.');
        extraMonth=profitMonth;
        console.log("exMonth at l"+extraMonth);
    }
    // Main Equation
    let l_profitMark= profitYear*mark/2;
    // တန်ဖိုးမထည့်/မထည့် စစ်မည့် condition
    if(Number.isNaN(profitYear) || Number.isNaN(profitMonth) ||Number.isNaN(l_profitMark)){
        ff_display_n_b();
    }else{
        // သက္ကရာ်ဇ် ကန့်သတ်ချက်ကို တွက်မည့် condition
        if(lecturer_condition){
            console.log('lecturer app.')
            // beta_condition = Userထည့်နိုင်သော မှန်ကန်သည့် conditionများ
            let beta_condition=((_diffDate>=0 && profitMonth>=0 && profitYear>=1) || (_diffDate>=0 && profitMonth>=1 && profitYear>=0) || (_diffDate>=1 && profitMonth>=0 && profitYear>=0) || (_diffDate<=-1 && profitMonth>=1 && profitYear>=0) || (_diffDate<=-1 && profitMonth<=-1 && profitYear>=1) || (_diffDate<=-1 && profitMonth>=1 && profitYear>=1) || (_diffDate<=-1 && profitMonth>=0 && profitYear>=1) || (_diffDate>=1 && profitMonth<=-1 && profitYear>=1) || (_diffDate>=0 && profitMonth<=-1 && profitYear>=1));
                console.log("L-->Year"+profitYear+",Month"+profitMonth+",date"+_diffDate);
            // beta_condition စစ်ခြင်း
            if(beta_condition){
                L_if_display_b_n();
                ff_display_b_n();
                document.getElementById('lecturerAnswer').innerHTML=
                profitYear+'y - '+profitMonth+'m ';
                document.getElementById('lecturerMark').innerHTML=l_profitMark; 
                if(l_profitMark<0){
                    L_if_display_n_b();
                    l_valueMaintain();
                } 
            }
            else{
                L_if_display_n_b();
            }
        }else{
            if(tutor_condition){
                T_if_display_n_b();
            }
            else if(a_lecturer_condition){
                AL_if_display_n_b();
            }
            else{
                L_if_display_n_b();
            }
            l_valueMaintain();
        }
    } 
    // အခြားသော function များမှ ထပ်ဆင့်အသုံးပြုနိုင်ရန် returnပြန်ပေးခြင်း 
    return extraMonth,lStartDate,lEndDate;
}
// Assistant Lecturer ရာထူးအတွက်
function _a_lecturer(){
    // Assistant Lecturer formက start date နှင့် end dateကို ဒီမှာယူ
    let start_date= document.getElementById('a_lecturerStartDate');
    let end_date= document.getElementById('a_lecturerEndDate');
    // နှစ်ခုစလုံးကို Time format ပြောင်း
    alStartDate=new Date(start_date.value).getTime();
    alEndDate=new Date(end_date.value).getTime();
    // ကွာဟတဲ့အချိန်ကို Date သို့ပြောင်း / Floatတန်ဖိုးရနိုင်
    let diff_Time= alEndDate- alStartDate;
    let total_days= diff_Time/(1000*3600*24);
    // Float တန်ဖိုး Dateကို Year သို့ပြောင်း
    let profitDate= total_days/365;
    let profitYear=parseInt(profitDate);
    // Float တန်ဖိုး Yearကို Month သို့ပြောင်း
    let and_month= (profitDate- profitYear).toFixed(2);
    let al_diffMonth= parseInt(and_month*12);
    // Cross Browser User Inputကို ထိန်းနိုင်ရန် 
    // last_date သည် အနည်းဆုံး ရေွးနိုင်သော သက္ကရာဇ်
    // last_dateထက် ရေှးကျသော input လက်မခံ
    // current_date သည် လက်ရှိ dateကို နောက်ဆုံးထား တွက်နိုင်ရန် 
    // current_dateထက်ကေျာ်လွန်သော input လက်မခံ 
    let current_date=new Date().getTime();
    let last_date=new Date('2000-01-01').getTime();
    let a_lecturer_condition= alStartDate>=last_date && alEndDate<=current_date;
    let tutor_condition=tStartDate<last_date || tEndDate>current_date;
    console.log(tStartDate,tEndDate,alStartDate,alEndDate);
    // ရက်ပိုင်းသာ ကြာမြင့်သော ရာထူးများအတွက်
    let _start_date=new Date(start_date.value).getDate();
    let _end_date=new Date(end_date.value).getDate();
    let _diffDate= _end_date-_start_date;
    // လပိုင်းသာ ကြာမြင့်သောရာထူးများအတွက်
    let _start_month=new Date(start_date.value).getMonth();
    let _end_month=new Date(end_date.value).getMonth();
    let profitMonth;

    if(_end_month-_start_month<0){
       profitMonth= (_end_month-_start_month);
    }else{
        profitMonth= (_end_month-_start_month)+extraMonth;
    }
    // Conditionတစ်ခု၏ ခြွင်းချက်တစ်ခုအတွက် နှစ်ကို တိုက်ရိုက်တွက်ရ
    let _start_year=new Date(start_date.value).getFullYear();
    let _end_year=new Date(end_date.value).getFullYear();
    let _diffYear=_end_year-_start_year;
    console.log("AL-->Start Year:"+_start_year+",End Year:"+_end_year,_diffYear,profitYear);
    // Year ခြွင်းချက် condition
    if((profitYear==0 && profitMonth>=0 && _diffDate<=-1) || (profitYear==0 && profitMonth>=1 && _diffDate>=0)){
        profitYear=_diffYear;
    }
    // အနုတ်တန်ဖိုးဖြင့်ထွက်လာသော Month တန်ဖိုး condition
    if (profitMonth<0){
        profitMonth=al_diffMonth+extraMonth;
    }
    // ပုံသေနည်း condition
    if (profitMonth>=6){
        profitYear=profitYear+1;
        profitMonth=0;
    }
    else{
        console.log('Month is not Exceed.');
        extraMonth=profitMonth;
        console.log("exMonth at al"+extraMonth);
    }
    // Main Equation
    let al_profitMark= profitYear*mark/2;
    // တန်ဖိုးမထည့်/မထည့် စစ်မည့် condition
    if(Number.isNaN(profitYear) || Number.isNaN(profitMonth) ||Number.isNaN(al_profitMark)){
        ff_display_n_b();
    }else{
        // သက္ကရာ်ဇ် ကန့်သတ်ချက်ကို တွက်မည့် condition
        if(a_lecturer_condition){
            // beta_condition = Userထည့်နိုင်သော မှန်ကန်သည့် conditionများ
            let beta_condition=((_diffDate>=0 && profitMonth>=0 && profitYear>=1) || (_diffDate>=0 && profitMonth>=1 && profitYear>=0) || (_diffDate>=1 && profitMonth>=0 && profitYear>=0) || (_diffDate<=-1 && profitMonth>=1 && profitYear>=0) || (_diffDate<=-1 && profitMonth<=-1 && profitYear>=1) || (_diffDate<=-1 && profitMonth>=1 && profitYear>=1) || (_diffDate<=-1 && profitMonth>=0 && profitYear>=1) || (_diffDate>=1 && profitMonth<=-1 && profitYear>=1) || (_diffDate>=0 && profitMonth<=-1 && profitYear>=1));
                console.log("AL-->Year"+profitYear+",Month"+profitMonth+",date"+_diffDate);
            // beta_condition စစ်ခြင်း
            if(beta_condition){
                AL_if_display_b_n();
                ff_display_b_n();
                document.getElementById('a_lecturerAnswer').innerHTML=
                profitYear+'y - '+profitMonth+'m ';
                document.getElementById('a_lecturerMark').innerHTML=al_profitMark; 
                if(al_profitMark<0){
                    AL_if_display_n_b();
                    al_valueMaintain();
                } 
            }
            else{
                AL_if_display_n_b();
            }
        }else{
            if(tutor_condition){
                T_if_display_n_b();
            }else{
                AL_if_display_n_b();
            }
            al_valueMaintain();
        }
    } 
    // အခြားသော function များမှ ထပ်ဆင့်အသုံးပြုနိုင်ရန် returnပြန်ပေးခြင်း 
    return extraMonth,alStartDate,alEndDate;
}
// Tutor ရာထူးအတွက်
function _tutor(){
    // Tutor formက start date နှင့် end dateကို ဒီမှာယူ
    let start_date= document.getElementById('tutorStartDate');
    let end_date= document.getElementById('tutorEndDate');
    // နှစ်ခုစလုံးကို Time format ပြောင်း
    tStartDate=new Date(start_date.value).getTime();
    tEndDate=new Date(end_date.value).getTime();
    // ကွာဟတဲ့အချိန်ကို Date သို့ပြောင်း / Floatတန်ဖိုးရနိုင်
    let diff_Time= tEndDate- tStartDate;
    let total_days= diff_Time/(1000*3600*24);
    // Float တန်ဖိုး Dateကို Year သို့ပြောင်း
    let profitDate= total_days/365;
    let profitYear=parseInt(profitDate);
    // Float တန်ဖိုး Yearကို Month သို့ပြောင်း
    let and_month= (profitDate- profitYear).toFixed(2);
    let t_diffMonth= parseInt(and_month*12);
    // Cross Browser User Inputကို ထိန်းနိုင်ရန် 
    // last_date သည် အနည်းဆုံး ရေွးနိုင်သော သက္ကရာဇ်
    // last_dateထက် ရေှးကျသော input လက်မခံ
    // current_date သည် လက်ရှိ dateကို နောက်ဆုံးထား တွက်နိုင်ရန် 
    // current_dateထက်ကေျာ်လွန်သော input လက်မခံ 
    let current_date=new Date().getTime();
    let last_date=new Date('2000-01-01').getTime();
    // ရက်ပိုင်းသာ ကြာမြင့်သော ရာထူးများအတွက်
    let _start_date=new Date(start_date.value).getDate();
    let _end_date=new Date(end_date.value).getDate();
    let _diffDate= _end_date-_start_date;
    // လပိုင်းသာ ကြာမြင့်သောရာထူးများအတွက်
    let _start_month=new Date(start_date.value).getMonth();
    let _end_month=new Date(end_date.value).getMonth();
    let profitMonth;

    if(_end_month-_start_month<0){
       profitMonth= (_end_month-_start_month);
    }else{
        profitMonth= (_end_month-_start_month)+extraMonth;
    }
    // Conditionတစ်ခု၏ ခြွင်းချက်တစ်ခုအတွက် နှစ်ကို တိုက်ရိုက်တွက်ရ
    let t_start_year=new Date(start_date.value).getFullYear();
    let t_end_year=new Date(end_date.value).getFullYear();
    let _diffYear=t_end_year-t_start_year;
    console.log("T-->Start Year:"+t_start_year+",End Year:"+t_end_year,_diffYear,profitYear);
    // Year ခြွင်းချက် condition
    if((profitYear==0 && profitMonth>=0 && _diffDate<=-1) || (profitYear==0 && profitMonth>=1 && _diffDate>=0)){
        profitYear=_diffYear;
    }
    // အနုတ်တန်ဖိုးဖြင့်ထွက်လာသော Month တန်ဖိုး condition
    if (profitMonth<0){
        profitMonth=t_diffMonth+extraMonth;
    }
    // ပုံသေနည်း condition
    if (profitMonth>=6){
        profitYear=profitYear+1;
        profitMonth=0;
    }
    else{
        console.log('Month is not Exceed.');
        extraMonth=profitMonth;
        // extraMonth=profitMonth+extraMonth;
        // profitMonth=extraMonth;
        // console.log("exMonth at tutor"+extraMonth);
    }
    // Main Equation
    let t_profitMark= profitYear*mark/2;
    // တန်ဖိုးမထည့်/မထည့် စစ်မည့် condition
    if(Number.isNaN(profitYear) || Number.isNaN(profitMonth) ||Number.isNaN(t_profitMark)){
        ff_display_n_b();
    }else{
        // သက္ကရာ်ဇ် ကန့်သတ်ချက်ကို တွက်မည့် condition
        if(tStartDate>=last_date && tEndDate<=current_date){
            // beta_condition = Userထည့်နိုင်သော မှန်ကန်သည့် conditionများ
            let beta_condition=((_diffDate>=0 && profitMonth>=0 && profitYear>=1) || (_diffDate>=0 && profitMonth>=1 && profitYear>=0) || (_diffDate>=1 && profitMonth>=0 && profitYear>=0) || (_diffDate<=-1 && profitMonth>=1 && profitYear>=0) || (_diffDate<=-1 && profitMonth<=-1 && profitYear>=1) || (_diffDate<=-1 && profitMonth>=1 && profitYear>=1) || (_diffDate<=-1 && profitMonth>=0 && profitYear>=1) || (_diffDate>=1 && profitMonth<=-1 && profitYear>=1) || (_diffDate>=0 && profitMonth<=-1 && profitYear>=1));
                console.log("T-->Year"+profitYear+",Month"+profitMonth+",date"+_diffDate);
            // beta_condition စစ်ခြင်း
            if(beta_condition){
                T_if_display_b_n();
                ff_display_b_n();
                document.getElementById('tutorAnswer').innerHTML=
                profitYear+'y - '+profitMonth+'m ';
                document.getElementById('tutorMark').innerHTML=t_profitMark; 
                if(t_profitMark<0){
                    T_if_display_n_b();
                    t_valueMaintain();
                } 
            }
            else{
                T_if_display_n_b();
            }
        }else{
            T_if_display_n_b();
            t_valueMaintain();
        }
        
    } 
    // အခြားသော function များမှ ထပ်ဆင့်အသုံးပြုနိုင်ရန် returnပြန်ပေးခြင်း 
    return tStartDate,tEndDate;
    
}
// Tutor Main Function
function tutorFunction(){
    extraMonth=0;
    _tutor();
    let t_mark=document.getElementById('tutorMark').textContent;
    let totalMark=parseInt(t_mark);
    
    if(Number.isNaN(totalMark)){
        console.log('Form is incomplete.');
        ff_display_n_b();
    }else{
        document.getElementById('totalMark').innerHTML= totalMark;
        document.getElementById('tableWrapper').classList.add('approved-result');
    }
    let has_t_invalidForm=t_invalidForm.classList.contains('d-block');
    t_valueMaintain();
    if(has_t_invalidForm){
        ff_display_b_n();
    }else{
        console.log('Not Found');
    }
}
// Assistant Lecturer Main Function
function a_lecturerFunction(){
    extraMonth=0;
    mark=6;
    _a_lecturer();
    mark=4;
    _tutor();

 
    let gap_time=alStartDate-tEndDate;
    console.log(alStartDate-tEndDate);
    if(gap_time<0){
        exf_display_n_b();
        al_valueMaintain();
    }else{
        exf_display_b_n();
        let t_mark=document.getElementById('tutorMark').textContent;
        let al_mark=document.getElementById('a_lecturerMark').textContent;
        let totalMark=(parseInt(t_mark))+(parseInt(al_mark));
        if(Number.isNaN(al_mark)){
            console.log('Form is incomplete.');
            ff_display_n_b();
        }
        if(!(Number.isNaN(totalMark))){
            document.getElementById('totalMark').innerHTML= totalMark;
            document.getElementById('tableWrapper').classList.add('approved-result');
        }
        
        let has_t_invalidForm=t_invalidForm.classList.contains('d-block');
        let has_al_invalidForm=al_invalidForm.classList.contains('d-block');
        al_valueMaintain();
        if(has_t_invalidForm && has_al_invalidForm){
            ff_display_b_n();
        }else{
            console.log('Not Found');
        }
    }

    
}
// Lecturer Main Function
function lecturerFunction(){
    extraMonth=0;
    mark=6;
    _lecturer();
    mark=4;
    _a_lecturer();
    mark=2;
    _tutor();

    let gap_time=lStartDate-alEndDate;
    let gap_time1=alStartDate-tEndDate;
    if(gap_time<0 || gap_time1<0 || (gap_time<0 && gap_time1<0)){
        exf_display_n_b();
        l_valueMaintain();
    }else{
        exf_display_b_n();
        let t_mark=document.getElementById('tutorMark').textContent;
        let al_mark=document.getElementById('a_lecturerMark').textContent;
        let l_mark=document.getElementById('lecturerMark').textContent;
        let totalMark=(parseInt(t_mark))+(parseInt(al_mark))+(parseInt(l_mark));
        if(Number.isNaN(l_mark)){
            console.log('Form is incomplete.');
            ff_display_n_b();
        }
        if(!(Number.isNaN(totalMark))){
            document.getElementById('totalMark').innerHTML= totalMark;
            document.getElementById('tableWrapper').classList.add('approved-result');
        }
        let has_t_invalidForm=t_invalidForm.classList.contains('d-block');
        let has_al_invalidForm=al_invalidForm.classList.contains('d-block');
        let has_l_invalidForm=l_invalidForm.classList.contains('d-block');
        l_valueMaintain();
        if(has_t_invalidForm && has_al_invalidForm && has_l_invalidForm){
            ff_display_b_n();
        }else{
            console.log('Not Found');
        }
    }
}
// Associated Professor Main Function
function a_professorFunction(){
    extraMonth=0;
    mark=6;
    _a_professor();
    mark=4;
    _lecturer();
    mark=2;
    _a_lecturer();
    mark=1;
    _tutor();

    let gap_time=apStartDate-lEndDate;
    let gap_time1=lStartDate-alEndDate;
    let gap_time2=alStartDate-tEndDate;
    if(gap_time<0 || gap_time1<0 ||gap_time2<0 || (gap_time<0 && gap_time1<0 && gap_time2<0)){
        exf_display_n_b();
        ap_valueMaintain();
    }else{
        exf_display_b_n();
        let t_mark=document.getElementById('tutorMark').textContent;
        let al_mark=document.getElementById('a_lecturerMark').textContent;
        let l_mark=document.getElementById('lecturerMark').textContent;
        let ap_mark= document.getElementById('a_professorMark').textContent;
        let totalMark=(parseFloat(t_mark))+(parseInt(al_mark))+(parseInt(l_mark))+(parseFloat(ap_mark));
        if(Number.isNaN(ap_mark)){
            console.log('Form is incomplete.');
            ff_display_n_b();
        }
        if(!(Number.isNaN(totalMark))){
            document.getElementById('totalMark').innerHTML= totalMark;
            document.getElementById('tableWrapper').classList.add('approved-result');
        }
        let has_t_invalidForm=t_invalidForm.classList.contains('d-block');
        let has_al_invalidForm=al_invalidForm.classList.contains('d-block');
        let has_l_invalidForm=l_invalidForm.classList.contains('d-block');
        let has_ap_invalidForm=ap_invalidForm.classList.contains('d-block');
        ap_valueMaintain();
        if(has_t_invalidForm && has_al_invalidForm && has_l_invalidForm && has_ap_invalidForm){
            ff_display_b_n();
        }else{
            console.log('Not Found');
        }
    }
}

function professorFunction(){
    extraMonth=0;
    mark=6;
    _professor();
    mark=4;
    _a_professor();
    mark=2;
    _lecturer();
    mark=1;
    _a_lecturer();
    mark=1;
    _tutor();
    
    let gap_time=pStartDate-apEndDate;
    let gap_time1=apStartDate-lEndDate;
    let gap_time2=lStartDate-alEndDate;
    let gap_time3=alStartDate-tEndDate;
    if(gap_time<0 || gap_time1<0 ||gap_time2<0|| gap_time3<0 || (gap_time<0 && gap_time1<0 && gap_time2<0 && gap_time3<0)){
        exf_display_n_b();
        p_valueMaintain();
    }else{
        exf_display_b_n();
        let t_mark=document.getElementById('tutorMark').textContent;
        let al_mark=document.getElementById('a_lecturerMark').textContent;
        let l_mark=document.getElementById('lecturerMark').textContent;
        let ap_mark=document.getElementById('a_professorMark').textContent;
        let p_mark= document.getElementById('professorMark').textContent;
        let totalMark=(parseFloat(t_mark))+(parseFloat(al_mark))+(parseInt(l_mark))+(parseInt(ap_mark))+(parseInt(p_mark));
        if(Number.isNaN(p_mark)){
            console.log('Form is incomplete.');
            ff_display_n_b();
        }
        if(!(Number.isNaN(totalMark))){
            document.getElementById('totalMark').innerHTML= totalMark;
            document.getElementById('tableWrapper').classList.add('approved-result');
        }
        let has_t_invalidForm=t_invalidForm.classList.contains('d-block');
        let has_al_invalidForm=al_invalidForm.classList.contains('d-block');
        let has_l_invalidForm=l_invalidForm.classList.contains('d-block');
        let has_ap_invalidForm=ap_invalidForm.classList.contains('d-block');
        let has_p_invalidForm=p_invalidForm.classList.contains('d-block');
        p_valueMaintain();
        if(has_t_invalidForm && has_al_invalidForm && has_l_invalidForm && has_ap_invalidForm && has_p_invalidForm){
            ff_display_b_n();
        }else{
            console.log('Not Found');
        }
    }
}