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
    let profitMonth= (_end_month-_start_month)+extraMonth;
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
        profitMonth=p_diffMonth;
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