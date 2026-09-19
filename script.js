const eventDate = new Date("2026-09-24T10:45:00+05:30").getTime();
function updateCountdown(){
  const diff = eventDate - Date.now();
  const ids = ["days","hours","minutes","seconds"];
  if(diff<=0){ids.forEach(id=>document.getElementById(id).textContent="0");document.getElementById("countdown-title").textContent="The celebration has begun!";return;}
  const values=[Math.floor(diff/86400000),Math.floor(diff/3600000)%24,Math.floor(diff/60000)%60,Math.floor(diff/1000)%60];
  ids.forEach((id,i)=>document.getElementById(id).textContent=String(values[i]).padStart(2,"0"));
}
updateCountdown();setInterval(updateCountdown,1000);

document.getElementById("calendarBtn").addEventListener("click",()=>{
  const ics=["BEGIN:VCALENDAR","VERSION:2.0","PRODID:-//Harish Thanekuzhali//Baby Shower//EN","BEGIN:VEVENT",
  "UID:baby-shower-20260924@harishramur.github.io","DTSTAMP:20260919T100000Z","DTSTART;TZID=Asia/Kolkata:20260924T104500",
  "DTEND;TZID=Asia/Kolkata:20260924T114500","SUMMARY:Baby Shower — Harish & Thanekuzhali",
  "LOCATION:Vanniyakula Kshatriya Thirumana Mandabam, Mandi Street, Cheyyar 604407",
  "DESCRIPTION:A little one is on the way! Join Harish & Thanekuzhali for their baby shower.",
  "END:VEVENT","END:VCALENDAR"].join("\r\n");
  const url=URL.createObjectURL(new Blob([ics],{type:"text/calendar;charset=utf-8"}));
  const a=document.createElement("a");a.href=url;a.download="Harish-Thanekuzhali-Baby-Shower.ics";a.click();URL.revokeObjectURL(url);
});